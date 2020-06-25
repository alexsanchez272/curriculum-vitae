import { Component } from '@angular/core';
import { ExperienceService } from 'src/services/Experience.service';
import Experience from './Experience';

@Component({
	selector: 'experience-root',
	templateUrl: './experience.component.html',
	styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
	public experiences: Experience[];

	constructor(private experienceServ: ExperienceService) {}

	ngOnInit(): void {
		this.experienceServ.getExperiences().subscribe((data: Experience[]) => {
			this.experiences = data;
		});
	}
}
