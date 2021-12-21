import { CoursesComponent } from './../../covid19/courses.component';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  constructor(private courses : CoursesComponent) { }

 
}
