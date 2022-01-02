import { Component, OnInit } from '@angular/core';
import { ApiNewsService } from './services/api-news.service';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  data1 :any[];
  data2 :any;
  data3: any[];
  p: number = 1


  constructor(
    private apiservice: ApiNewsService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.apiservice.getglobalNews().subscribe(
      {
        next: data1 => {
          this.data1 = data1
          this.data2 = Object.values(this.data1)
          for (let datasss of this.data2) {
            this.data3 = datasss
           }
           this.spinner.hide()
      }
    }
    )
  }

}
