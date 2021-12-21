import { Component, OnInit } from '@angular/core';
import { ApiCovidService } from './services/api-covid.service';
import { Router } from '@angular/router';
import { Province } from './models/covidprovince';
import { CovidbyProvince } from './models/covidbyprovince';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  p: number = 1
  config: any;

  data :Province[];
  datas :any;
  datass: any[];

  data1 :any[];
  data2 :any;
  data3: any[];


  constructor(
    private apiservice: ApiCovidService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.apiservice.getcovidbyProvince().subscribe({
      next: data1 => {
        this.data1 = data1
        this.data2 = Object.values(this.data1)
        for (let datasss of this.data2) {
          this.data3 = datasss
         }
         this.spinner.hide()
        //console.log(this.data3)

      }
    }
    )
    this.apiservice.getCovid19().subscribe({
      next: data => {
        this.data = data
        this.datas = Object.values(this.data)
        for (let datasss of this.datas) {
          this.datass = datasss
         }
        //console.log(this.datass)

      }
    }
    )


  }






}
