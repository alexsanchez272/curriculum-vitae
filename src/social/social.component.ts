import { Component, Inject } from '@angular/core';

@Component({
	selector: 'social',
	templateUrl: './social.component.html',
	styleUrls: ['./social.component.scss'],
})
export class SocialComponent {
	public constructor(@Inject('baseUrl') public baseUrl: string) {}
}
