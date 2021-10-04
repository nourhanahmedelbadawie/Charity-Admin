import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

import { FormBuilder, Validators, FormGroup } from "@angular/forms";

import { AngularEditorConfig } from "@kolkov/angular-editor";
import Swal from "sweetalert2";
import { Tobase4Service } from "../../../common/tobase4.service";
import { ConfigService } from "../../../config/config.service";

@Component({
  selector: "app-edit-achievment",
  templateUrl: "./edit-achievment.component.html",
  styleUrls: ["./edit-achievment.component.scss"],
})
export class EditAchievmentComponent implements OnInit {
  imageFilename1: string = null;
  imageFilename2: string = null;
  imageFilename3: string = null;
  achForm: FormGroup;
  image: any = "";
  filepdf: any = "";
  ext;
  cov_ext
  singleAch: any = {
    title: "",
    intro: "",
    body: "",
  };
  dragAreaClass: string;
  CountSection = [1];
  cover: unknown;
  addCountSection() {
    this.CountSection.push(this.CountSection.length);
  }
  onFileChange(event: any, flag) {
    let files: FileList = event.target.files;
    this.saveFiles(files, flag);
  }
  constructor(
    private tobase4Service: Tobase4Service,
    private fb: FormBuilder,
    private configService: ConfigService,
    private route: ActivatedRoute
  ) {
    this.configService
      .getOneAchivement(this.route.snapshot.paramMap.get("id"))
      .subscribe((data) => {
        this.singleAch = Object.assign({}, data);
        console.log(this.singleAch);
        this.achForm = this.fb.group({
          title: [this.singleAch.title, Validators.required],
          intro: [this.singleAch.intro, Validators.required],
          body: [this.singleAch.body, Validators.required],
        });
      });
  }
  ngOnInit() {
    this.dragAreaClass = "dragarea";
  }


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
