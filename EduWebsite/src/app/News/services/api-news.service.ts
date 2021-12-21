import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiNewsService {



  constructor(
    private http: HttpClient,
  ) { }

  getauth() {
    return new HttpHeaders({
      "content-type": "application/json",
      'x-rapidapi-key' : 'e8198e329amshf6be6de3c0ada87p188563jsnf9b47291d4c7'
    })
  }

  getglobalNews(){
    const url: string = 'https://coronavirus-smartable.p.rapidapi.com/news/v1/global/'
    return this.http.get<any[]>(url,{headers: this.getauth()})

  }





}
