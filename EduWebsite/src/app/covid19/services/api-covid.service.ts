import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class ApiCovidService {


  constructor(
    private http: HttpClient,
  ) { }


  getcovidbyProvince(): Observable<any[]>{
    const url: string = 'https://covid-19-statistics.p.rapidapi.com/reports'
    return this.http.get<any[]>(`${url}`,{headers: this.getauth()
    }).pipe(
      catchError(this.handleError)
    )
  }

  handleError(error:any){
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
        // client-side error
        errorMessage = `There was an error: ${error.error.message}`;
    } else {
        // server-side error
        errorMessage = `Error Code is: ${error.status}\nMessage: There is an error`;
    }
    return throwError(() => new Error(errorMessage))

  }

  getauth() {
    return new HttpHeaders({
      "content-type": "application/json",
      'x-rapidapi-key' : 'e8198e329amshf6be6de3c0ada87p188563jsnf9b47291d4c7'
    })
  }



}

