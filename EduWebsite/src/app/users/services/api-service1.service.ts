import { LoginComponent } from '../login/login.component';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { Register } from '../models/register';
import { tap, catchError } from 'rxjs/operators';
import { Auth } from '../models/auth';
import { CookieService } from 'ngx-cookie-service';
import { of } from 'rxjs';

const httpoptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
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

  addusers(register: Register): Observable<Register> {
    const url: string = 'http://127.0.0.1:8000/api/users/create/';
    return this.http.post<Register>(url, register, httpoptions)
  }

  getlogin(auth:Auth){
    const url: string = 'http://127.0.0.1:8000/api/users/token/';
    return this.http.post(url, auth).pipe(
      catchError(err =>{
        console.log(err.message)
        return of(false)

      })
    )
  }

}
