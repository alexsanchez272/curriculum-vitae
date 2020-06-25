import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const experienceUrl = 'assets/experiences.json';

@Injectable({
	providedIn: 'root',
})
export class ExperienceService {
	private resource: string;

	constructor(private httpClient: HttpClient, @Inject('baseUrl') baseUrl: string) {
		this.resource = baseUrl + experienceUrl;
	}

	public getExperiences(): Observable<object> {
		return this.httpClient.get(this.resource);
	}
}
