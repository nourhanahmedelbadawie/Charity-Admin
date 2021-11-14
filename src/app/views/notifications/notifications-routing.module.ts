import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertsComponent } from './alerts.component';
import { BadgesComponent } from './badges.component';
import { ModalsComponent } from './modals.component';
import {  AlldonationComponent } from "./alldonation/alldonation.component";
import { SingleDonationComponent  } from "./single-donation/single-donation.component";
import { NewDonationComponent } from './new-donation/new-donation.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        redirectTo: 'donation'
      },
      {
        path: 'newdonation',
        component: AlertsComponent,
        data: {
          title: 'Alerts'
        }
      },
      {
        path: 'donations',
        component: AlldonationComponent,
        data: {
          title: 'Alerts'
        }
      },
      {
        path: 'single_donation',
        component: SingleDonationComponent,
        data: {
          title: 'Alerts'
        }
      },
      {
        path: 'badges',
        component: BadgesComponent,
        data: {
          title: 'Badges'
        }
      },
      {
        path: 'modals',
        component: ModalsComponent,
        data: {
          title: 'Modals'
        }
      }
      
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule {}
