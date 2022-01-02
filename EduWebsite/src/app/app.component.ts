import { Component } from '@angular/core';
import { ApiService1Service } from './users/services/api-service1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {

  constructor(
    private apiservice: ApiService1Service,
  ){}

  title = 'EduWebsite';

}
