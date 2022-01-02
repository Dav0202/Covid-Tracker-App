import { Router } from '@angular/router';
import { Register } from './../models/register';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ApiService1Service } from '../services/api-service1.service';
import { FormGroup,FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {

  signUpForm: FormGroup;
  register:Register = {
    username:'',
    password:'',
    name: '',
    classs: '',
    address: '',
  }

  constructor(
    private fb: FormBuilder,
    private apiservice: ApiService1Service,
    private router: Router,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required,
        Validators.email,
        Validators.pattern('^[A-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', [Validators.required, Validators.minLength(4), ]],
      address:['', [Validators.required]],
    })
  }

  get isDirty():boolean{
    if (this.signUpForm.dirty) {
    }
    return true
  }

   saveSignUp(){
   const p = {...this.signUpForm.value}
   if (this.signUpForm.valid) {
       if (this.signUpForm.dirty) {
         this.apiservice.addusers(p)
         .subscribe(register =>{
           this.register = register
            this.toast.success('New User Created')
           this.router.navigate(['/login'])
         } )
       }
   }else{
     console.log('Please correct validation errors')
   }

  }
}
