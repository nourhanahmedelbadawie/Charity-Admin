import { Router } from '@angular/router';
import { Component } from '@angular/core';
import {  ConfigService } from "../../config/config.service";

@Component({
  templateUrl: 'buttons.component.html'
})
export class ButtonsComponent {
   achs=[]
   url="http://178.62.19.101:8888/"

  constructor(private configService:ConfigService , private route:Router) { 
    this.getAchievement()
  }
  getAchievement(){
    this.configService.getAchievement().subscribe(data=>{
      console.log(data)
      this.achs=data
    })
  }
  getAch(id){
    console.log(id)
    this.route.navigate([`/admin/edit-ach/${id}`]);


  }
}
