import { ConfigService } from '../../../config/config.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  constructor( private fb:FormBuilder , private configService: ConfigService) { }

  ngOnInit(): void {
  }
  profiletForm=this.fb.group({
    name:['',Validators.required] ,
    email:['',Validators.required ,Validators.email] ,
    password:['',Validators.required]


  })
  submit(){
    console.log(this.profiletForm.value)
    this.configService.updateUser(this.profiletForm).subscribe(
      (data: any) => {
        Swal.fire({
          title: "success",
          text: "Send successfuly",
          icon: "success",
          confirmButtonText: "Ok",
        });
      },
      (err) => {
        console.log(err);

        Swal.fire({
          title: "Error",
          text: "Something went wrong ",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    );
  }
}
