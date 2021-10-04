import { FormBuilder, Validators } from "@angular/forms";
import { Component, HostListener, OnInit } from "@angular/core";
import { Tobase4Service } from "../../../common/tobase4.service";
import { ConfigService } from "../../../config/config.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  imageFilename1: string;
  imageFilename3: string;
  imageFilename2: string;
  constructor(
    private fb: FormBuilder,
    private tobase4Service: Tobase4Service ,
  private  configService:ConfigService
  ) {}

  fileName: string = null;
  dragAreaClass: string;
  cover_about_us_main;
  cover_about_us_main_base64;
  cover_about_us_main_ext;

  image_about_us_main;
  image_about_us_main_base64;
  image_about_us_main_ext;

  image_about_us_section_two;
  image_about_us_section_two_base64;
  image_about_us_section_two_ext;

  image_about_us_why_choose_us_01;
  image_about_us_why_choose_us_02;
  image_about_us_why_choose_us_03;
  image_about_us_why_choose_us_04;

  onFileChange(event: any, flag) {
    let files: FileList = event.target.files;
    this.saveFiles(files, flag);
  }
  async onpdfChange(event: any , flag) {
    let files: FileList = event.target.files;
 flag===1?   this.image_about_us_why_choose_us_01= await this.tobase4Service.getBase64(files[0]):false
 flag===2?   this.image_about_us_why_choose_us_02= await this.tobase4Service.getBase64(files[0]):false
 flag===3?   this.image_about_us_why_choose_us_03= await this.tobase4Service.getBase64(files[0]):false
 
 flag===4?   this.image_about_us_why_choose_us_04= await this.tobase4Service.getBase64(files[0]):false
 
  }
  ngOnInit() {
    this.dragAreaClass = "dragarea";
  }

  async saveFiles(files: FileList, flag) {
    if (flag === 1) {
      this.cover_about_us_main = files[0].name;
      this.cover_about_us_main_base64 = await this.tobase4Service.getBase64(
        files[0]
      );
      this.cover_about_us_main_ext = files[0].name.split(".").pop();
    }
    if (flag === 2) {
      this.image_about_us_main = files[0].name;
      this.image_about_us_main_base64 = await this.tobase4Service.getBase64(
        files[0]
      );
      this.image_about_us_main_ext = files[0].name.split(".").pop();
    }
    if (flag === 3) {
      this.image_about_us_section_two = files[0].name;
      this.image_about_us_section_two_base64 =
        await this.tobase4Service.getBase64(files[0]);
      this.image_about_us_section_two_ext = files[0].name.split(".").pop();
    }

    console.log("this.imageFilename1");
  }

  about_us_main = this.fb.group({
    title: ["", Validators.required],
    intro: ["", Validators.required],
  });
  about_us_section_two = this.fb.group({
    title: ["", Validators.required],
    intro: ["", Validators.required],
  });
  about_us_why_choose_us_01 = this.fb.group({
    title: ["", Validators.required],
    intro: ["", Validators.required],
  });
  about_us_why_choose_us_02 = this.fb.group({
    title: ["", Validators.required],
    intro: ["", Validators.required],
  });
  about_us_why_choose_us_03 = this.fb.group({
    title: ["", Validators.required],
    intro: ["", Validators.required],
  });
  about_us_why_choose_us_04 = this.fb.group({
    title: ["", Validators.required],
    intro: ["", Validators.required],
  });
  submit_about_us_main() {
    this.configService
    .send_about_us_main(JSON.stringify({...this.about_us_main , cover:this.cover_about_us_main 
      ,image:this.image_about_us_main , ext:this.image_about_us_section_two_ext
    ,cover_ext:this.cover_about_us_main_ext } ))

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

submit_about_us_section_two() {
  this.configService
  .send_about_us_section_two(JSON.stringify({...this.about_us_section_two , 
    image:this.image_about_us_section_two , ext:this.image_about_us_section_two_ext
   } ))

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
submit_about_us_why_choose_us_01() {
  this.configService
  .send_about_us_why_choose_us_01(JSON.stringify({...this.about_us_why_choose_us_01 
    ,image:this.image_about_us_why_choose_us_01  } ))

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
submit_about_us_why_choose_us_02() {
  this.configService
  .send_about_us_why_choose_us_02(JSON.stringify({...this.about_us_why_choose_us_02
    ,image:this.image_about_us_why_choose_us_02
 } ))

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
submit_about_us_why_choose_us_03() {
  this.configService
  .send_about_us_why_choose_us_03(JSON.stringify({...this.about_us_why_choose_us_03 
    ,image:this.image_about_us_why_choose_us_03
 } ))

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
submit_about_us_why_choose_us_04() {
  this.configService
  .send_about_us_why_choose_us_04(JSON.stringify({...this.about_us_why_choose_us_04 
    ,image:this.image_about_us_why_choose_us_04
 } ))

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

