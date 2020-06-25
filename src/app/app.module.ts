import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from 'src/top/top.component';
import { ContentComponent } from 'src/content/content.component';
import { AsideInfoComponent } from 'src/aside-info/aside-info.component';
import { MenuComponent } from 'src/menu/menu.component';
import { ExperienceComponent } from 'src/experience/experience.component';
import { GithubComponent } from 'src/github/github.component';
import { SideProjectComponent } from 'src/side-project/side-project.component';
import { EducationComponent } from 'src/education/education.component';
import { SocialComponent } from 'src/social/social.component';
import { environment } from 'src/environments/environment';

@NgModule({
	declarations: [
		AppComponent,
		TopComponent,
		ContentComponent,
		AsideInfoComponent,
		MenuComponent,
		ExperienceComponent,
		GithubComponent,
		SideProjectComponent,
		EducationComponent,
		SocialComponent,
	],
	imports: [BrowserModule, HttpClientModule, AppRoutingModule],
	providers: [{ provide: 'baseUrl', useValue: environment.baseUrl }],
	bootstrap: [AppComponent],
})
export class AppModule {}
