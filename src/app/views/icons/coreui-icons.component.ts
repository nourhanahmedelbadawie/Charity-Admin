import { Component, HostListener, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Platform } from "@angular/cdk/platform";

import { IconSetService } from "@coreui/icons-angular";

@Component({
  templateUrl: "coreui-icons.component.html",
  styleUrls: ["coreui-icons.component.scss"],
})
export class CoreUIIconsComponent implements OnInit {
  public title = "CoreUI Icons";
  public icons = [];
  fileName: string = null;

  constructor(
    public platform: Platform,
    private route: ActivatedRoute,
    public iconSet: IconSetService
  ) {}

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
