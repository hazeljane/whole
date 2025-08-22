import { Routes } from '@angular/router';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { AboutComponent } from './about/about.component';
import { PentagonComponent } from './pentagon/pentagon.component';
import { HeptagonComponent } from './heptagon/heptagon.component';
import { HexagonComponent } from './hexagon/hexagon.component';
import { ParallelogramComponent } from './parallelogram/parallelogram.component';

export const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },  // redirect default to /about
  { path: 'myprofile', component: MyprofileComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heptagon', component: HeptagonComponent },
  { path: 'pentagon', component: PentagonComponent },
  { path: 'hexagon', component: HexagonComponent },
  { path: 'parallelogram', component: ParallelogramComponent }
];
