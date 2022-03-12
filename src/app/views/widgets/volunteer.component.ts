import { Component } from "@angular/core";
import { getStyle } from "@coreui/coreui/dist/js/coreui-utilities";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import { ConfigService } from "../../config/config.service";

@Component({
  templateUrl: "volunteer.component.html",
})
export class VolunteerComponent {
donors
  constructor(private configService: ConfigService) { 
    this.configService.getAllDonors().subscribe(data =>{
      this.donors=data
    })

  }

getDate(date){
let newDate=new Date(date).toLocaleDateString("en-US")
return newDate
}


}
