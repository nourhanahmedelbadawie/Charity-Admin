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
  fileName = [];
  loadingSubmitBtn: boolean = false;
  dragAreaClass: string;
  cover = [];
  images;
  aboutFilename = [];
  dropArea = document.getElementById("drop-area");

  onFileChange(event: any, type: number) {
    let files: FileList = event.target.files;
    this.saveFiles(files, type);
  }
  ngOnInit() {
    this.dragAreaClass = "dragarea";
  }

  async saveFiles(files: FileList, type: number) {
    if (type == 1) {
      this.fileName = [files[0].name, files[1].name, files[2].name];
      this.cover = [
        await this.tobase4Service.getBase64(files[0]),
        await this.tobase4Service.getBase64(files[1]),
        await this.tobase4Service.getBase64(files[2]),
      ];
    } else {
      this.aboutFilename = [files[0].name, files[1].name, files[2].name];
      this.images = [
        await this.tobase4Service.getBase64(files[0]),
        await this.tobase4Service.getBase64(files[1]),
        await this.tobase4Service.getBase64(files[2]),
      ];
    }
  }

  // submotion form
  homeForm = this.fb.group({
    cover: [null],
    title: [null],
    subtitle: [null],
    about_section_title: [null],
    about_section_subtitle: [null],
    image: [null],
  });
  submit() {
    this.loadingSubmitBtn = true;
    let homeobj = {
      title: this.homeForm.value.title,
      subtitle: this.homeForm.value.subtitle,
      cover: this.cover ? [...this.cover] : null,

      title2: this.homeForm.value.about_section_title,
      body: this.homeForm.value.about_section_subtitle,
      image: this.images ? [...this.images] : null,
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
          this.homeForm.reset();
          this.loadingSubmitBtn = false;
          this.images = null;
          this.cover = null;
        },
        (err) => {
          console.log(err);

          Swal.fire({
            title: "Error",
            text: "Something went wrong ",
            icon: "error",
            confirmButtonText: "Ok",
          });
          this.homeForm.reset();
          this.loadingSubmitBtn = false;
          this.images = null;
          this.cover = null;
        }
      );
  }
}
