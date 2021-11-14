import { Component } from "@angular/core";
import { getStyle } from "@coreui/coreui/dist/js/coreui-utilities";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import { ConfigService } from "../../config/config.service";

@Component({
  templateUrl: "widgets.component.html",
})
export class WidgetsComponent {
donors
  constructor(private configService: ConfigService) { 
    this.configService.getAllDonors().subscribe(data =>{
      console.log(data)
      this.donors=data
    })

  }

getDate(date){
let newDate=new Date(date).toLocaleDateString("en-US")
return newDate
}


}
