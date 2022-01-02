import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentsComponent } from './News/assignments.component';
import { CoursesComponent } from './covid19/courses.component';
import { ExamsComponent } from './vaccintion/exams.component';
import { CreateUsersComponent } from './users/create-users/create-users.component';
import { LoginComponent } from './users/login/login.component';
import { PathnotfoundComponent } from './pathnotfound/pathnotfound.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserGuard } from './users/guards/user.guard';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/homepage' },
  { path:'homepage',component: HomepageComponent},
  { path:'covid19', component: CoursesComponent, canActivate: [UserGuard]},
  { path:'vaccination', component:ExamsComponent,canActivate: [UserGuard]},
  { path:'news', component:AssignmentsComponent,canActivate: [UserGuard]},
  { path:'login', component:LoginComponent },
  { path:'createuser', component:CreateUsersComponent,},
  { path: '**', component: PathnotfoundComponent, canActivate: [UserGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
