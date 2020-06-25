import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperienceComponent } from 'src/experience/experience.component';
import { GithubComponent } from 'src/github/github.component';
import { SideProjectComponent } from 'src/side-project/side-project.component';
import { EducationComponent } from 'src/education/education.component';

const routes: Routes = [
	{ path: 'experience', component: ExperienceComponent },
	{ path: 'github', component: GithubComponent },
	{ path: 'side-projects', component: SideProjectComponent },
	{ path: 'education', component: EducationComponent },
	{ path: '', redirectTo: '/experience', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
