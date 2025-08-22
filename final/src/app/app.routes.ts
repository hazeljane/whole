import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MyinfoComponent } from './myinfo/myinfo.component';
import { GradesComponent } from './grades/grades.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
export const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'dashboard'},
	{ path: 'dashboard', component: DashboardComponent},
	{ path: 'header', component: HeaderComponent},
	{ path: 'login', component: LoginComponent },
	{ path: 'myinfo', component: MyinfoComponent },
	{ path: 'grades', component: GradesComponent },
	{ path: 'myprofile', component: MyprofileComponent },
	{ path: 'personalinfo', component: PersonalinfoComponent }
];
