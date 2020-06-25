import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Inject,
} from '@angular/core';
import { GithubService } from 'src/services/Github.service';
import ShortGithubInfo from 'src/types/ShortGithubInfo';
import { Unsubscribable } from 'rxjs';

@Component({
	selector: 'github-root',
	templateUrl: './github.component.html',
	styleUrls: ['./github.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GithubComponent implements OnInit {
	private githubSubscription: Unsubscribable;
	public shortGithubInfo: ShortGithubInfo[] = [];

	public constructor(
		private githubService: GithubService,
		private cd: ChangeDetectorRef,
		@Inject('baseUrl') public baseUrl: string,
	) {}

	ngOnInit(): void {
		this.githubSubscription = this.githubService
			.getShortRepositoryInfo()
			.subscribe((data: ShortGithubInfo[]) => {
				this.shortGithubInfo = data;
				this.cd.markForCheck();
			});
	}

	ngOnDestroy(): void {
		this.githubSubscription.unsubscribe();
	}
}
