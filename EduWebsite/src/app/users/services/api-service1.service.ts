import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { Register } from '../models/register';
import { tap, map, catchError } from 'rxjs/operators';
import { UserTrackingError } from '../models/usertrackingerror';
import { Auth } from '../models/auth';
import { CookieService } from 'ngx-cookie-service';

const httpoptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    //'Authorization' : 'token 67ef625360f718056e78135be1c97dbd2abe1b61'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiService1Service {

  constructor(
    private http: HttpClient,
    private cookieservice: CookieService
   ) { }

   //private handleHttpError(error:HttpErrorResponse): Observable<UserTrackingError>{
   //  let dataError = new UserTrackingError();
   //  dataError.errorNumber = 100;
   //  dataError.message = error.statusText;
   //  dataError.friendlyMesage = "An error occured creating a new user"
   //  return throwError(() => dataError);
//
   //}

  addusers(register: Register): Observable<Register> {
    const url: string = 'http://127.0.0.1:8000/api/users/create/';
    return this.http.post<Register>(url, register, httpoptions).pipe(
     tap(data => console.log(JSON.stringify(data))),
    );
  }

  getlogin(auth:Auth){
    const url: string = 'http://127.0.0.1:8000/api/users/token/';
    return this.http.post(url, auth,{ headers: this.getauth() });
  }

    getauth() {
    const token = this.cookieservice.get('my-Token')
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    })




  }


}
