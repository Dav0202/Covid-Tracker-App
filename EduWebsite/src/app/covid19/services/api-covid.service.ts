import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { Province } from '../models/covidprovince';
import { CovidbyProvince } from '../models/covidbyprovince';



@Injectable({
  providedIn: 'root'
})
export class ApiCovidService {


  constructor(
    private http: HttpClient,
  ) { }


  getCovid19(): Observable<Province[]>{
    const url: string = 'https://covid-19-statistics.p.rapidapi.com/provinces?iso=CHN'
    return this.http.get<Province[]>(url,{headers: this.getauth()});
  }

  getcovidbyProvince(): Observable<any[]>{
    const url: string = 'https://covid-19-statistics.p.rapidapi.com/reports'
    return this.http.get<any[]>(`${url}`,{headers: this.getauth()
    });
  }

  getauth() {
    return new HttpHeaders({
      "content-type": "application/json",
      'x-rapidapi-key' : 'e8198e329amshf6be6de3c0ada87p188563jsnf9b47291d4c7'
    })
  }

  getparams(){
    //returnconst data = {region_name : 'US'}
  }


}

