// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Alert Component
import { AlertModule } from 'ngx-bootstrap/alert';
import { AlertsComponent } from './alerts.component';

import { BadgesComponent } from './badges.component';

// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalsComponent } from './modals.component';

// Notifications Routing
import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsComponent } from '../theme/notifications/notifications.component';

import {  AlldonationComponent } from "./alldonation/alldonation.component";

@NgModule({
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    AlertModule.forRoot(),
    ModalModule.forRoot() ,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [
    AlertsComponent,
    BadgesComponent,
    ModalsComponent,
    NotificationsComponent ,
    AlldonationComponent
  ]
})
export class NotificationsModule { }
