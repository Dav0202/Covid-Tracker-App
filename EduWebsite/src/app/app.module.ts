import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule } from '@angular/forms';
import { CacheInterceptor } from './covid19/services/cache-interceptor';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './covid19/courses.component';
import { AssignmentsComponent } from './News/assignments.component';
import { ExamsComponent } from './vaccintion/exams.component';
import { CreateUsersComponent } from './users/create-users/create-users.component';
import { LoginComponent } from './users/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PathnotfoundComponent } from './pathnotfound/pathnotfound.component';
import { CookieService } from 'ngx-cookie-service';
import { NgxPaginationModule } from 'ngx-pagination'
import { ChartModule } from 'angular2-chartjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { HttpErrorInterceptor } from './homepage/services/http-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AssignmentsComponent,
    ExamsComponent,
    CreateUsersComponent,
    LoginComponent,
    NavbarComponent,
    HomepageComponent,
    PathnotfoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    ChartModule,
    FontAwesomeModule,
    Ng2SearchPipeModule,
    ToastrModule.forRoot(
      {
        timeOut: 3000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,
        closeButton: true
      }
    ),

  ],
  providers: [
    CookieService,
    {provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    ToastrService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
