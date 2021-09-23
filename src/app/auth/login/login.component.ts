import { routes } from './../../app.routing';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {  ConfigService } from "../../config/config.service";
import Swal from 'sweetalert2'
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder ,private configService:ConfigService ,  private route: Router,)  { 
    
  }
  loginForm = this.fb.group({
    email: ['' , Validators.required , Validators.email],
    password: ['' , Validators.required ],
 
  })
  ngOnInit(): void {
  }


  
  submit(e){
    e.preventDefault()
  console.log(this.loginForm.value)  
  this.configService.login( JSON.stringify(this.loginForm.value))

  .subscribe((data: any) =>{
    console.log(data)

  localStorage.setItem("token", data.token);


    Swal.fire({
      title: 'success',
      text: 'Send successfuly',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
    this.route.navigate(['/admin/home']);


  }  ,(err)=>{
    console.log(err)

    Swal.fire({
      title: 'Error',
      text: 'Something went wrong ',
      icon: 'error',
      confirmButtonText: 'Ok'
    })
    
  })
}
}


