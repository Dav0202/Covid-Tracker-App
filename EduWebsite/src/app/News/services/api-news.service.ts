import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';

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
    return this.http.get<any[]>(url,{headers: this.getauth()}).pipe(
      retry(1),
      catchError(this.handleError)
    );

  }
  handleError(error:any){
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
        // client-side error
        errorMessage = `There was an error`; //: ${error.error.message}
    } else {
        // server-side error
        errorMessage = `Error Code is: ${error.status}\n`;//Message: ${error.message}
    }
    return throwError(() => new Error('error'))

  }

  //private handleHttpError(error: HttpErrorResponse): Observable<errorDisplay>{
  //  let dataError = new errorDisplay();
  //  dataError.error = 404,
  //  dataError.message = error.statusText;
  //  dataError.friendlymessage = 'An error occured Retrieving data'
  //  return throwError(() => new Error(dataError))
  //}





}
