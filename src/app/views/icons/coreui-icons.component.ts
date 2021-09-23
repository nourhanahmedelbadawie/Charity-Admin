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
  imageFilename1: string = null;
  imageFilename2: string = null;
  imageFilename3: string = null;

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


  saveFiles(files: FileList) {
    console.log(files);

    this.fileName = files[0].name;
  }
}
