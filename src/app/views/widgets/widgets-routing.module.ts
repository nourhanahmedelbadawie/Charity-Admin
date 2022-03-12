import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { WidgetsComponent } from "./widgets.component";
import { VolunteerComponent } from "./volunteer.component";

const routes: Routes = [
  {
    path: "doners",
    component: WidgetsComponent,
    data: {
      title: "Widgets",
    },
  },
  {
    path: "volunteers",
    component: VolunteerComponent,
    data: {
      title: "Widgets",
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WidgetsRoutingModule {}
