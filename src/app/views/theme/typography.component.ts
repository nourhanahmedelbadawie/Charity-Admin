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
    const file = (event.target as HTMLInputElement).files[0];
    this.homeForm.patchValue({
      avatar: file,
    });
    this.homeForm.get("cover").updateValueAndValidity();
    console.log(this.homeForm.value);
    var formData: any = new FormData();
    formData.append("title", this.homeForm.get("title").value);
    formData.append("cover", this.homeForm.get("cover").value);
    console.log(formData);

    let files: FileList = event.target.files;
    this.saveFiles(files);
  }
  ngOnInit() {
    this.dragAreaClass = "dragarea";
  }

  saveFiles(files: FileList) {
    if (files.length == 1) {
      this.fileName = files[0].name;
      this.cover = [this.tobase4Service.getBase64(files[0])];
    } else {
      this.aboutFilename = [files[0].name, files[1].name, files[2].name];
      this.images = [this.tobase4Service.getBase64(files[0]), this.tobase4Service.getBase64(files[1]), this.tobase4Service.getBase64(files[2])];
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
