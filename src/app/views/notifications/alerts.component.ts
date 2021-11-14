import {
  Component,
  HostListener,
  SecurityContext,
  ViewEncapsulation,
} from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";
import { AlertConfig } from "ngx-bootstrap/alert";
import Swal from "sweetalert2";
import { Tobase4Service } from "../../common/tobase4.service";
import { ConfigService } from "../../config/config.service";

// such override allows to keep some initial values

export function getAlertConfig(): AlertConfig {
  return Object.assign(new AlertConfig(), { type: "success" });
}

@Component({
  templateUrl: "alerts.component.html",
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .alert-md-local {
        background-color: #009688;
        border-color: #00695c;
        color: #fff;
      }
    `,
  ],
  providers: [{ provide: AlertConfig, useFactory: getAlertConfig }],
})
export class AlertsComponent {
  constructor(
    private tobase4Service: Tobase4Service,
    private fb: FormBuilder,
    private configService: ConfigService
  ) {}
  imageFilename1: string = null;
  imageFilename2: string = null;

  dragAreaClass: string;
  cover;
  images;
ext 
 cov_ext 
  onFileChange(event: any ,flag) {
   

    let files: FileList = event.target.files;
    this.saveFiles(files ,flag);
  }
  ngOnInit() {
    this.dragAreaClass = "dragarea";
  }

 async saveFiles(files: FileList ,flag) {
  if(flag === 1)  {
    this.imageFilename1 = files[0].name
     this.cover= await this.tobase4Service.getBase64(files[0])
     this.ext= files[0].name.split(".").pop();

  }
  if(flag === 2)  {
    (this.imageFilename2 = files[0].name) 
     this.images= await this.tobase4Service.getBase64(files[0])
     this.cov_ext= files[0].name.split(".").pop();

  }
  }

  // submotion form
  donationForm = this.fb.group({
    title: ["", Validators.required],
    description: ["", Validators.required],
    goal:["", Validators.required],
   
  });
  submit() {

    
    this.configService
      .addNewDepartment(JSON.stringify({...this.donationForm.value , cov_ext:  this.cov_ext ,ext:this.ext ,
        images: this.images ,cover: this.cover
      
      }))

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
