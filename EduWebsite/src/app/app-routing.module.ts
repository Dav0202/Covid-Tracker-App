import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate, CanDeactivate } from '@angular/router';
import { AssignmentsComponent } from './News/assignments.component';
import { CoursesComponent } from './covid19/courses.component';
import { ExamsComponent } from './vaccintion/exams.component';
import { CreateUsersComponent } from './users/create-users/create-users.component';
import { LoginComponent } from './users/login/login.component';
import { PathnotfoundComponent } from './pathnotfound/pathnotfound.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserGuard } from './users/guards/user.guard';
import { CreateUserGuard } from './users/guards/create-user.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/homepage' },
  { path:'homepage',component: HomepageComponent,canActivate: [UserGuard] },
  { path:'covid19', component: CoursesComponent,canActivate: [UserGuard]  },
  { path:'vaccination', component:ExamsComponent,canActivate: [UserGuard]},
  { path:'news', component:AssignmentsComponent,canActivate: [UserGuard] },
  { path:'login', component:LoginComponent },
  { path:'createuser', component:CreateUsersComponent, canDeactivate: [CreateUserGuard]},
  { path: '**', component: PathnotfoundComponent, canActivate: [UserGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
