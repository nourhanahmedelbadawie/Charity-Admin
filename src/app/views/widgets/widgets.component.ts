import { Component } from "@angular/core";
import { getStyle } from "@coreui/coreui/dist/js/coreui-utilities";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import { ConfigService } from "../../config/config.service";

@Component({
  templateUrl: "widgets.component.html",
})
export class WidgetsComponent {
  // lineChart1

  constructor(private configService: ConfigService) { 
    this.configService.getAllDonors().subscribe(data =>{
      console.log(data)
    })

  }




}
