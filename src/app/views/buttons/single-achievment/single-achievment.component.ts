import { FormBuilder, Validators } from "@angular/forms";
import { Component, HostListener, OnInit } from "@angular/core";

import { AngularEditorConfig } from "@kolkov/angular-editor";
import Swal from "sweetalert2";
import { Tobase4Service } from "../../../common/tobase4.service";
import { ConfigService } from "../../../config/config.service";

@Component({
  selector: "app-single-achievment",
  templateUrl: "./single-achievment.component.html",
  styleUrls: ["./single-achievment.component.scss"],
})
export class SingleAchievmentComponent implements OnInit {
  imageFilename1: string = null;
  imageFilename2: string = null;
  image: any = "";
  cover:any=""
  filepdf: any = "";
  ext;
  cov_ext

  dragAreaClass: string;
  
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
  if(flag === 1) {
    (this.imageFilename1 = files[0].name)
    this.cover = await this.tobase4Service.getBase64(files[0])
    this.cov_ext = files[0].name.split(".").pop()
  } 
  if(flag === 2) {  
    (this.imageFilename2 = files[0].name) 
    this.image = await this.tobase4Service.getBase64(files[0])
    this.ext = files[0].name.split(".").pop()

  }
    

    this.ext = files[0].name.split(".").pop();
  }
  // submotion form
  achForm = this.fb.group({
    title: ["", Validators.required],
    intro: ["", Validators.required],
    body: ["", Validators.required],
  });
  submit(e) {
    let doc = { ...this.achForm.value , image:this.image , cover:this.cover ,ext:this.ext ,cov_ext:this.cov_ext};
    console.log(doc);
    this.configService
      .sendAchievement(JSON.stringify(doc))

      .subscribe(
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
