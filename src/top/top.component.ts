import { Component, Inject } from '@angular/core';

@Component({
	selector: 'top-root',
	templateUrl: './top.component.html',
	styleUrls: ['./top.component.scss'],
})
export class TopComponent {
	constructor(@Inject('baseUrl') public baseUrl: string) {}
}
