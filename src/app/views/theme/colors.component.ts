import { Component, HostListener, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { getStyle, rgbToHex } from "@coreui/coreui/dist/js/coreui-utilities";
import Swal from "sweetalert2";
import { FormBuilder, Validators } from "@angular/forms";
import { Tobase4Service } from "../../common/tobase4.service";
import { ConfigService } from "../../config/config.service";

@Component({
  templateUrl: "colors.component.html",
})
export class ColorsComponent implements OnInit {
  imageFilename1: string = null;
  imageFilename2: string = null;
  imageFilename3: string = null;
  image: any = "";
  filepdf: any = "";
  ext;

  dragAreaClass: string;
  CountSection = [1];
  addCountSection() {
    this.CountSection.push(this.CountSection.length);
  }
  onFileChange(event: any, flag) {
    let files: FileList = event.target.files;
    this.saveFiles(files, flag);
  }
  async onpdfChange(event: any) {
    let files: FileList = event.target.files;
    this.filepdf = await this.tobase4Service.getBase64(files[0]);
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
    flag === 3 ? (this.imageFilename3 = files[0].name) : false;
    this.image = await this.tobase4Service.getBase64(files[0]);
    this.ext = files[0].name.split(".").pop();
    console.log("this.imageFilename1");
  }
  // submotion form
  docForm = this.fb.group({
    title: ["", Validators.required],
    intro: ["", Validators.required],
  });
  submit() {
    let doc = {
      ...this.docForm.value,
      image: this.image,
      file: this.filepdf,
      ext: this.ext,
    };
    console.log(doc);
    this.configService
      .sendDocScreen(JSON.stringify(doc))

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
