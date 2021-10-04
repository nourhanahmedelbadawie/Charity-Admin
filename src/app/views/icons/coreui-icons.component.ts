import { Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Component, HostListener, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Platform } from "@angular/cdk/platform";

import { IconSetService } from "@coreui/icons-angular";
import { Tobase4Service } from "../../common/tobase4.service";
import { ConfigService } from "../../config/config.service";
import Swal from "sweetalert2";

@Component({
  templateUrl: "coreui-icons.component.html",
  styleUrls: ["coreui-icons.component.scss"],
})
export class CoreUIIconsComponent implements OnInit {
  imageFilename1: string = null;
  imageFilename2: string = null;
  image: any = "";
  cover: any = "";
  ext;
  cov_ext;

  dragAreaClass: string;
  CountSection = [1];
  ngOnInit() {
    this.dragAreaClass = "dragarea";
  }
  constructor(
    private tobase4Service: Tobase4Service,
    private fb: FormBuilder,
    private configService: ConfigService
  ) {}
  addCountSection() {
    this.CountSection.push(this.CountSection.length);
  }

  onFileChange(event: any, flag) {
    console.log(flag);

    let files: FileList = event.target.files;
    this.saveFiles(files, flag);
  }

  async onpdfChange(event: any) {
    let files: FileList = event.target.files;
    let imgFormate=await this.tobase4Service.getBase64(files[0])
    this.configService.sendPartnerLogo({icon_image:imgFormate})
    
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
  

 

  async saveFiles(files: FileList, flag) {
    if (flag === 1) {
      this.imageFilename1 = files[0].name;
      this.cover = await this.tobase4Service.getBase64(files[0]);
      this.cov_ext = files[0].name.split(".").pop();
    }
    if (flag === 2) {
      this.imageFilename2 = files[0].name;
      this.image = await this.tobase4Service.getBase64(files[0]);

      this.ext = files[0].name.split(".").pop();
    }

    this.ext = files[0].name.split(".").pop();
  }
  // submotion form
  partForm = this.fb.group({
    title: ["", Validators.required],
    intro: ["", Validators.required],
    our_partners: ["", Validators.required],
  });
  submit(e) {
    let doc = {
      ...this.partForm.value,
      image: this.image,
      cover: this.cover,
      ext: this.ext,
      cov_ext: this.cov_ext,

    };
    console.log(doc);
    this.configService
      .sendPartner(JSON.stringify(doc))

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
 


