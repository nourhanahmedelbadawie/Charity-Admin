import { Component, OnInit, HostListener } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AngularEditorConfig } from "@kolkov/angular-editor";
import Swal from "sweetalert2";
import { Tobase4Service } from "../../common/tobase4.service";
import { ConfigService } from "../../config/config.service";

@Component({
  templateUrl: "typography.component.html",
})
export class TypographyComponent {
  constructor(
    private tobase4Service: Tobase4Service,
    private fb: FormBuilder,
    private configService: ConfigService
  ) {}
  fileName: string = null;
  loadingSubmitBtn:boolean=false
  dragAreaClass: string;
  cover;
  images;
  aboutFilename = [];
  dropArea = document.getElementById("drop-area");

  onFileChange(event: any) {
    const file = (event.target as HTMLInputElement).files[0];
    this.homeForm.patchValue({
      avatar: file,
    });
    this.homeForm.get("cover").updateValueAndValidity();
    

    let files: FileList = event.target.files;
    this.saveFiles(files);
  }
  ngOnInit() {
    this.dragAreaClass = "dragarea";
  }

 async saveFiles(files: FileList) {
    if (files.length == 1) {
      this.fileName = files[0].name;
      this.cover = [await this.tobase4Service.getBase64(files[0])];
    } else {
      this.aboutFilename = [files[0].name, files[1].name, files[2].name];
      this.images = [await this.tobase4Service.getBase64(files[0]),
       await this.tobase4Service.getBase64(files[1]), 
       await this.tobase4Service.getBase64(files[2])];
    }
  }

  // submotion form
  homeForm = this.fb.group({
    cover: [null],
    title: ["", Validators.required],
    subtitle: ["", Validators.required],
    about_section_title: ["", Validators.required],
    about_section_subtitle: ["", Validators.required],
    image: [null],
  });
  submit() {
    this.loadingSubmitBtn=true
    let homeobj = {
      title: this.homeForm.value.title,
      subtitle: this.homeForm.value.subtitle,
      cover: [...this.cover],

      title2: this.homeForm.value.about_section_title,
      body: this.homeForm.value.about_section_subtitle,
      image: [...this.images],
    };
    this.configService
      .sendHomeScreen(JSON.stringify(homeobj))

      .subscribe(
        (data: any) => {
          Swal.fire({
            title: "success",
            text: "Send successfuly",
            icon: "success",
            confirmButtonText: "Ok",
          });
          this.homeForm.reset()
          this.loadingSubmitBtn=false
          this.images=null
          this.cover=null
        },
        (err) => {
          console.log(err);

          Swal.fire({
            title: "Error",
            text: "Something went wrong ",
            icon: "error",
            confirmButtonText: "Ok",
          });
          this.homeForm.reset()
          this.loadingSubmitBtn=false
          this.images=null
          this.cover=null
        }
      );
  }
}
