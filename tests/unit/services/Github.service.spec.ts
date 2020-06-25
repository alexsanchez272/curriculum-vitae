/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
import { GithubService } from 'src/services/Github.service';
import { asyncData } from 'tests/utils';
import GithubInfoBuilder from 'tests/builders/GithubInfoBuilder';
import GithubRepoData from 'src/types/GithubRepoData';
import ShortGithubInfo from 'src/types/ShortGithubInfo';

function addMinutes(date, minutes): Date {
	return new Date(date.getTime() + minutes * 60000);
}

describe('Tests/unit/Github.service.specs.ts.', function() {
	let githubService: GithubService;
	let httpClient: { get: jasmine.Spy };

	beforeEach(() => {
		httpClient = jasmine.createSpyObj('HttpClient', ['get']);
		githubService = new GithubService(httpClient as any);
	});

	const assertRepoInfoIsCorrect = (
		dataTransformed: ShortGithubInfo,
		repoInfo: GithubRepoData,
	): void => {
		expect(dataTransformed.createdAt.getTime()).toEqual(repoInfo.created_at.getTime());
		expect(dataTransformed.updatedAt.getTime()).toEqual(repoInfo.updated_at.getTime());
		expect(dataTransformed.language).toEqual(repoInfo.language);
		expect(dataTransformed.url).toEqual(repoInfo.html_url);
	};

	it('when a list of repositories are retrieved, then a list of Github objects should be returned', done => {
		const updateAt = new Date();
		const repoInfoOne = GithubInfoBuilder.of()
			.withUpdateAt(updateAt)
			.build();
		const repoInfoTwo = GithubInfoBuilder.of()
			.withUpdateAt(addMinutes(updateAt, 30))
			.build();
		const repoInfoThree = GithubInfoBuilder.of()
			.withUpdateAt(addMinutes(updateAt, 10))
			.build();
		httpClient.get.and.returnValue(asyncData([repoInfoOne, repoInfoTwo, repoInfoThree]));

		githubService.getShortRepositoryInfo().subscribe(shortGithubData => {
			expect(shortGithubData.length).toEqual(3);
			assertRepoInfoIsCorrect(shortGithubData.pop(), repoInfoOne);
			assertRepoInfoIsCorrect(shortGithubData.pop(), repoInfoThree);
			assertRepoInfoIsCorrect(shortGithubData.pop(), repoInfoTwo);
			done();
		});
	});
});
