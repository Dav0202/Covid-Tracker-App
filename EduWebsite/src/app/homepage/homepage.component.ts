import { Component, OnInit } from '@angular/core';
import { ApiNewsService } from '../News/services/api-news.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  data1 :any[];
  data2 :any;
  data3: any[];

  constructor(
    private apiservice: ApiNewsService,
  ) {}



  ngOnInit(): void {
    this.apiservice.getglobalNews().subscribe(
      {
        next: data1 => {
          this.data1 = data1
          this.data2 = Object.values(this.data1)
          for (let datasss of this.data2) {
            this.data3 = datasss
           }
      }
    }
    )
  }

}
