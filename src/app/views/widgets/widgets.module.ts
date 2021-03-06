import { CommonModule } from "@angular/common";

import { NgModule } from "@angular/core";
import { ChartsModule } from "ng2-charts";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";

import { WidgetsComponent } from "./widgets.component";
import { VolunteerComponent } from "./volunteer.component";

import { WidgetsRoutingModule } from "./widgets-routing.module";

@NgModule({
  imports: [WidgetsRoutingModule, ChartsModule, BsDropdownModule, CommonModule],
  declarations: [WidgetsComponent, VolunteerComponent],
})
export class WidgetsModule {}
