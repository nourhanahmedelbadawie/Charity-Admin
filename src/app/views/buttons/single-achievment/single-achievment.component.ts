import { FormBuilder, Validators } from '@angular/forms';
import { Component, HostListener, OnInit } from "@angular/core";

import { AngularEditorConfig } from "@kolkov/angular-editor";
import Swal from 'sweetalert2';
import { Tobase4Service } from '../../../common/tobase4.service';
import { ConfigService } from '../../../config/config.service';

@Component({
  selector: "app-single-achievment",
  templateUrl: "./single-achievment.component.html",
  styleUrls: ["./single-achievment.component.scss"],
})
export class SingleAchievmentComponent implements OnInit {
  imageFilename1: string = null;
  imageFilename2: string = null;
  imageFilename3: string = null;
  image:any=""
  filepdf:any=""
  ext

  dragAreaClass: string;
  CountSection=[1]
  addCountSection(){
    this.CountSection.push(this.CountSection.length);
  }
  onFileChange(event: any, flag) {
    let files: FileList = event.target.files;
    this.saveFiles(files, flag);
  }

  ngOnInit() {
    this.dragAreaClass = "dragarea";
  }
  constructor(
    private tobase4Service: Tobase4Service,
    private fb: FormBuilder,
    private configService: ConfigService
  ) {}

 async saveFiles(files: FileList, flag) {



    flag === 1 ? (this.imageFilename1 = files[0].name) : false;
    flag === 2 ? (this.imageFilename2 = files[0].name) : false;
    this.image=await this.tobase4Service.getBase64(files[0])
    this.ext=files[0].name.split('.').pop()
    console.log("this.imageFilename1")

    
  }
  // submotion form
  achForm = this.fb.group({
    title: ["", Validators.required],
    intro: ["", Validators.required],
    body: ["", Validators.required],

    
 
  });
  submit() {
    let doc={ ...this.achForm.value }
    console.log(doc)
    this.configService
      .sendAchievement(JSON.stringify(doc
        ))

      .subscribe(
        (data: any) => {
          // this.loginForm.reset()

          Swal.fire({
            title: "success",
            text: "Send successfuly",
            icon: "success",
            confirmButtonText: "Ok",
          });
        },
        (err) => {
          // this.loginForm.reset()
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
