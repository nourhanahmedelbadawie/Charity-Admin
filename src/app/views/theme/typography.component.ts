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
  dragAreaClass: string;
  cover;
  images;
  aboutFilename = [];
  dropArea = document.getElementById("drop-area");

  onFileChange(event: any) {
    let files: FileList = event.target.files;
    this.saveFiles(files);
  }
  ngOnInit() {
    this.dragAreaClass = "dragarea";
  }

  getFileFormate(photo) {
    var formData = new FormData();
    formData.append("fileToUpload", photo);
    console.log(formData);
  }

  saveFiles(files: FileList) {
    if (files.length == 1) {
      this.fileName = files[0].name;
      this.cover = [files[0]];
    } else {
      this.aboutFilename = [files[0].name, files[1].name, files[2].name];
      this.images = [files[0], files[1], files[2]];
    }
  }

  // submotion form
  homeForm = this.fb.group({
    title: ["", Validators.required],
    subtitle: ["", Validators.required],
    about_section_title: ["", Validators.required],
    about_section_subtitle: ["", Validators.required],
  });
  submit() {
    let homeobj = {
      title: this.homeForm.value.title,
      subtitle: this.homeForm.value.subtitle,
      cover: [...this.cover],

      title2: this.homeForm.value.about_section_title,
      body: this.homeForm.value.about_section_subtitle,
      image: [...this.images],
    };
    console.log(homeobj);
    this.configService
      .sendHomeScreen(JSON.stringify(homeobj))

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
