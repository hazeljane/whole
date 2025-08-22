import { Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { GradesComponent  } from './grades/grades.component';
import { LoginComponent } from './login/login.component';
export const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'header', component: HeaderComponent},
	{ path: 'about', component: AboutComponent},
	{ path: 'home', component: HomeComponent},
	{ path: 'profile', component: ProfileComponent},
	{ path: 'grades', component: GradesComponent },
	{ path: 'login', component: LoginComponent }
];
