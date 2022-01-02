import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ApiService1Service } from '../services/api-service1.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginValid = false;
  res: any;
  token: any;
  constructor(
    private fb: FormBuilder,
    private apiservice: ApiService1Service,
    private router: Router,
    private cookieservice: CookieService,
    private toast: ToastrService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group(
      {
        email: ['', [Validators.required,
          Validators.email,
          Validators.pattern('^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        password: ['', [Validators.required, Validators.minLength(3)]]
      }
    )

  }
  saveLogin(){
    const p = {...this.loginForm.value}
    if (this.loginForm.valid) {
        if (this.loginForm.dirty) {
          this.apiservice.getlogin(p).subscribe(
            (
              (token: any) =>{
                if (token.token !== undefined) {
                  this.cookieservice.set('my-token',token.token)
                  this.token =token

                }
                if (!token) {
                    this.loginValid = true
                }
                else{
                  this.onRefresh()
                  }
                 }
            )
            )
        }
    }else{
      console.log('Please correct validation errors')
    }
  }

  onRefresh() {
    this.router.routeReuseStrategy.shouldReuseRoute = function () { return false }
    const currentUrl = '/homepage'
    return this.router.navigateByUrl(currentUrl).then(() => {
      this.router.navigated = false
      this.router.navigate([this.router.url])
      this.refreshPage()
      this.toast.success('Login successful')

    })
  }
  refreshPage() {
    window.location.reload();
  }

}
