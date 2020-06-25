/* eslint-env mocha */
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { GithubComponent } from 'src/github/github.component';
import { GithubService } from 'src/services/Github.service';
import sinon from 'sinon';
import { cold, getTestScheduler } from 'jasmine-marbles';

describe('tests/unit/components/github/github.component.spec.ts', function() {
	let githubService: sinon.SinonStubbedInstance<GithubService>;
	let fixture: ComponentFixture<GithubComponent>;

	beforeEach(() => {
		githubService = sinon.createStubInstance(GithubService);
		TestBed.configureTestingModule({
			declarations: [GithubComponent],
			providers: [
				{
					provide: GithubService,
					useValue: githubService,
				},
			],
		}).compileComponents();
		fixture = TestBed.createComponent(GithubComponent);
	});

	afterEach(() => {
		fixture.destroy();
	});

	it('when there is a github repo data, then a repo should be shown', () => {
		const githubElement: HTMLElement = fixture.debugElement.nativeElement;
		const name = 'test';
		githubService.getShortRepositoryInfo.callsFake(() =>
			cold('--x|', {
				x: [
					{
						name,
						language: 'Typescript',
						description: 'description',
						url: 'url',
					},
				],
			}),
		);

		fixture.detectChanges();
		getTestScheduler().flush();
		fixture.detectChanges();

		const repoName = githubElement.querySelector('.repoName');
		expect(repoName.textContent).toEqual(name);
	});
});
