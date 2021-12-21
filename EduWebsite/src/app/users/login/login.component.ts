import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { ApiService1Service } from '../services/api-service1.service';
import { Auth } from '../models/auth';
import { Router } from '@angular/router';
import { Tokenobj } from '../models/token';
import { CookieService } from 'ngx-cookie-service';
import { faEye } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faEye = faEye
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiservice: ApiService1Service,
    private router: Router,
    private cookieservice: CookieService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group(
      {
        email: ['', [Validators.required,
          Validators.email,
          Validators.pattern('^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        password: ['', [Validators.required, Validators.minLength(3)]]
      }
    )
   // this.loginForm = new FormGroup({
   //   email: new FormControl(),
   //   password: new FormControl(),
   // });
  }
  saveLogin(){
    const p = {...this.loginForm.value}
    if (this.loginForm.valid) {
        if (this.loginForm.dirty) {
          this.apiservice.getlogin(p)
          .subscribe((token: any) =>{
              this.cookieservice.set('my-token',token.token);
              this.router.navigate(['/']);
              console.log(token);
                        } )
        }
    }else{
      console.log('Please correct validation errors')
    }


  }



}
