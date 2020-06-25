import { Component } from '@angular/core';
import { AsideInfo } from './AsideInfo';
import { AsideInfoService } from 'src/services/AsideInfo.service';

@Component({
	selector: 'aside-info-root',
	templateUrl: './aside-info.component.html',
	styleUrls: ['./aside-info.component.scss'],
})
export class AsideInfoComponent {
	allAsideInfo = [];

	constructor(private asideInfoService: AsideInfoService) {}

	ngOnInit(): void {
		this.asideInfoService.getInfo().subscribe((data: AsideInfo[]) => {
			this.allAsideInfo = data;
		});
	}
}
