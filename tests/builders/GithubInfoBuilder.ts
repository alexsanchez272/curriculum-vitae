/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */
import GithubRepoData from 'src/types/GithubRepoData';

const random = (): string => Math.random().toString();

export default class GithubInfoBuilder {
	private name: string;
	private description: string;
	private html_url: string;
	private created_at: Date;
	private updated_at: Date;
	private language: string;

	private constructor() {
		this.name = random();
		this.description = random();
		this.html_url = random();
		this.created_at = new Date();
		this.updated_at = new Date();
		this.language = random();
	}

	public static of(): GithubInfoBuilder {
		return new GithubInfoBuilder();
	}

	public withUpdateAt(value: Date): this {
		this.updated_at = value;
		return this;
	}

	public build(): GithubRepoData {
		return {
			name: this.name,
			description: this.description,
			html_url: this.html_url,
			created_at: this.created_at,
			updated_at: this.updated_at,
			language: this.language,
		};
	}
}
