import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiVaccinationService {

  constructor(
    private http: HttpClient,
  ) { }

  getauth() {
    return new HttpHeaders({
      "content-type": "application/json",
      'x-rapidapi-key' : 'e8198e329amshf6be6de3c0ada87p188563jsnf9b47291d4c7'
    })
  }

  getglobalVaccination(): Observable<any[]>{
    const url: string = 'https://covid-19-world-vaccination-data.p.rapidapi.com/?iso=USA'
    return this.http.get<any[]>(url,{headers: this.getauth()})
  }
}
