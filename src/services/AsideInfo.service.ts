import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const asideInfoUrl = 'assets/asideInfo.json';

@Injectable({
	providedIn: 'root',
})
export class AsideInfoService {
	private resource: string;

	constructor(private httpClient: HttpClient, @Inject('baseUrl') baseUrl: string) {
		this.resource = baseUrl + asideInfoUrl;
	}

	public getInfo(): Observable<object> {
		return this.httpClient.get(this.resource);
	}
}
