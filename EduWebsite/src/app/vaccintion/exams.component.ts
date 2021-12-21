import { map } from 'rxjs/operators';
import { ApiVaccinationService } from './services/api-vaccination.service';
import  Chart  from 'chart.js/auto';
import { Charts } from './models/chart';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})

export class ExamsComponent implements OnInit {
  @ViewChild('lineChart', {static: true}) private chartRef :any;
  @ViewChild('lineChart2', {static: true}) private chartRef2 :any;
  @ViewChild('lineChart3', {static: true}) private chartRef3 :any;
  result :any[];
  data3: any[];
  obj1 : any = [];
  obj2 : any = [];
  obj3 : any =[];
  obj4 : any =[];
  chart :any;
  chart2 :any;
  chart3 :any;
  obj : any = {};
  constructor(
    private apiservice: ApiVaccinationService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.apiservice.getglobalVaccination().subscribe(
        result => {
        this.result = result
          for (let i = 0; i < this.result.length; ++i){
              this.obj[i] = this.result[i];
          }
          console.log(this.obj);
          for(let index in this.obj)
            {
              this.obj1.push(parseInt(this.obj[index]["daily_vaccinations"]))
            }
          for(let index in this.obj)
            {
              this.obj2.push(this.obj[index]["date"])
            }
          for(let index in this.obj)
           {
             this.obj3.push(parseInt(this.obj[index]["total_vaccinations"]))
           }
           for(let index in this.obj)
           {
             this.obj4.push(parseInt(this.obj[index]["people_fully_vaccinated"]))
           }
          console.log(this.obj3)
          this.chart = new Chart(this.chartRef.nativeElement,{
            type: 'bar',
            data: {
                labels: this.obj2,
                datasets: [{
                    label: 'Daily Vacccinated',
                    data: this.obj1,
                    borderColor:'#ffbb99',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
          }
          )


          this.chart2 = new Chart(this.chartRef2.nativeElement,{
            type: 'bar',
            data: {
                labels: this.obj2,
                datasets: [{
                    label: 'Total Vacccinated',
                    data: this.obj3,
                    borderColor:'#ffbb99',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
          }
          )

          this.chart3 = new Chart(this.chartRef3.nativeElement,{
            type: 'bar',
            data: {
                labels: this.obj2,
                datasets: [{
                    label: 'People fully vaccinated',
                    data: this.obj4,
                    borderColor:'#ffbb99',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
          }
          )
          this.spinner.hide()

        }

    )


  }

}
