import {
  Component,
  HostListener,
  SecurityContext,
  ViewEncapsulation,
} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { AlertConfig } from "ngx-bootstrap/alert";

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
  fileName: string = null;
  dragAreaClass: string;
  onFileChange(event: any) {
    let files: FileList = event.target.files;
    this.saveFiles(files);
  }
  ngOnInit() {
    this.dragAreaClass = "dragarea";
  }
  @HostListener("dragover", ["$event"]) onDragOver(event: any) {
    this.dragAreaClass = "droparea";
    event.preventDefault();
  }
  @HostListener("dragenter", ["$event"]) onDragEnter(event: any) {
    this.dragAreaClass = "droparea";
    event.preventDefault();
  }
  @HostListener("dragend", ["$event"]) onDragEnd(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
  }
  @HostListener("dragleave", ["$event"]) onDragLeave(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
  }
  @HostListener("drop", ["$event"]) onDrop(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files) {
      let files: FileList = event.dataTransfer.files;
      this.saveFiles(files);
    }
  }

  saveFiles(files: FileList) {
    console.log(files);

    this.fileName = files[0].name;
  }
}
