import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ApiCovidService } from './services/api-covid.service';
import { ActivatedRoute } from '@angular/router';
import { Province } from './models/covidprovince';
import { CovidbyProvince } from './models/covidbyprovince';
import { NgxSpinnerService } from 'ngx-spinner';
import { SearchServiceService } from '../services/search-service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  maxSize=9
  directionLinks=true
  autoHide=true
  responsive=true
  p: number = 1
  config: any;
  data :Province[];
  datas :any;
  datass: any[];
  searchTerm:any;
  searchTerm3:any;



  data1 :any[];
  data2 :any;
  data3: any[];


  constructor(
    private apiservice: ApiCovidService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private saerchservice: SearchServiceService,
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
      }
    }
    )

   this.saerchservice.currentMessage.subscribe(searchTerm => this.searchTerm = searchTerm)

  }





}
