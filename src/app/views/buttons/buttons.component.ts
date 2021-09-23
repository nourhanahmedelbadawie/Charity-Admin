import { Component } from '@angular/core';
import {  ConfigService } from "../../config/config.service";

@Component({
  templateUrl: 'buttons.component.html'
})
export class ButtonsComponent {

  constructor(private configService:ConfigService) { 
    this.getAchievement()
  }
  getAchievement(){
    this.configService.getAchievement().subscribe(data=>{
      console.log(data)
    })
  }

}
