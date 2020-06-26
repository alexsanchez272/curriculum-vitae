import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import ShortGithubInfo from 'src/types/ShortGithubInfo';
import GithubRepoData from 'src/types/GithubRepoData';
import GithubProfileData from 'src/types/GithubProfileData';
import ShortGithubProfile from 'src/types/ShortGithubProfile';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const githubApi = 'https://api.github.com/';
const user = 'alexsanchez272';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json',
		Accept: 'application/vnd.github.v3.full+json',
	}),
};

@Injectable({
	providedIn: 'root',
})
export class GithubService {
	constructor(private httpClient: HttpClient) {}

	public getShortRepositoryInfo(): Observable<ShortGithubInfo[]> {
		return this.httpClient
			.get(this.composeUrl(`users/${user}/repos`), httpOptions)
			.pipe(map(this.convertToShortGithub.bind(this)), map(this.sortByUpdate.bind(this)));
	}

	public getShortProfileInfo(): Observable<ShortGithubProfile> {
		return this.httpClient
			.get(this.composeUrl(`users/${user}`), httpOptions)
			.pipe(map(this.toShortGithubProfile.bind(this)));
	}

	private composeUrl(endpoint: string): string {
		return `${githubApi}${endpoint}`;
	}

	private convertToShortGithub(data: GithubRepoData[]): ShortGithubInfo[] {
		return data.map(this.toShortGithub.bind(this));
	}

	private sortByUpdate(data: ShortGithubInfo[]): ShortGithubInfo[] {
		return data.sort((a: ShortGithubInfo, b: ShortGithubInfo): number => {
			if (a.updatedAt < b.updatedAt) {
				return 1;
			} else if (a.updatedAt > b.updatedAt) {
				return -1;
			}
			return 0;
		});
	}

	private toShortGithub(data: GithubRepoData): ShortGithubInfo {
		return {
			name: data.name,
			description: data.description,
			createdAt: data.created_at,
			updatedAt: data.updated_at,
			language: data.language,
			url: data.html_url,
		};
	}

	private toShortGithubProfile(data: GithubProfileData): ShortGithubProfile{
		return{
			avatarUrl: data.avatar_url,
			name: data.name,
		};
	}
}
