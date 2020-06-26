import {
	Component,
	Inject,
	OnInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
} from '@angular/core';
import { GithubService } from 'src/services/Github.service';
import  ShortGithubProfile  from 'src/types/ShortGithubProfile';
import { Unsubscribable } from 'rxjs';



@Component({
	selector: 'top-root',
	templateUrl: './top.component.html',
	styleUrls: ['./top.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopComponent implements OnInit{
	private githubSubscription: Unsubscribable;
	public shortGithubProfile: ShortGithubProfile;

	constructor(
		private githubService: GithubService,
		private changeDetct: ChangeDetectorRef,
		@Inject('baseUrl') public baseUrl: string
	) {}

	ngOnInit(): void{
		this.githubSubscription = this.githubService
		.getShortProfileInfo()
		.subscribe((data: ShortGithubProfile) => {
			this.shortGithubProfile = data;
			this.changeDetct.markForCheck();
		});
	}

	ngOnDestroy(): void {
		this.githubSubscription.unsubscribe();
	}
}
