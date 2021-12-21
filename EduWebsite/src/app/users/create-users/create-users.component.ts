import { Router } from '@angular/router';
import { Register } from './../models/register';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService1Service } from '../services/api-service1.service';
import { FormGroup,FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms'
import { UserTrackingError } from '../models/usertrackingerror';


function passwordMatcher(c: AbstractControl): { [key: string]: boolean } | null {
    const passwordControl = c.get('password');
    const confirmpasswordControl = c.get('confirmPassword');

    if (passwordControl?.pristine || confirmpasswordControl?.pristine){
      return null;
    }

    if (passwordControl?.value === confirmpasswordControl?.value){
      return null;
    }

    return {'match': true};
  }




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
  //userError:UserTrackingError ={
  //  errorNumber: 0,
  //  message: '',
  //  friendlyMesage:'',
  //}


  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private apiservice: ApiService1Service,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required,
        Validators.email,
        Validators.pattern('^[A-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      //passwordGroup: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
    //    confirmPassword:['', Validators.required]},
      //  {validator:passwordMatcher}
     //   ),
      name: ['', [Validators.required, Validators.minLength(4), ]],
      //classs: ['',[Validators.required]],
      address:['', [Validators.required]],
      //student:[true]

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
           this.router.navigate(['/login'])
           console.log(p)
         } )
       }
   }else{
     console.log('Please correct validation errors')

   }
    //saveSignUp(){
    //  const p = {...this.signUpForm.value}
    //  if (this.signUpForm.valid) {
    //      if (this.signUpForm.dirty) {
    //        this.apiservice.addusers(p)
    //        .subscribe(
    //          (data : Register | UserTrackingError ) =>{
    //          this.register = <Register>data,
    //          (err : UserTrackingError) => console.log(err.friendlyMesage)
    //          console.log(p)
    //        } )
    //      }
    //  }else{
    //    console.log('Please correct validation errors')
    //  }
//
   }


}
