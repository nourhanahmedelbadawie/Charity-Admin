import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IconModule } from '@coreui/icons-angular';

import { CoreUIIconsComponent } from './coreui-icons.component';
import { FlagsComponent } from './flags.component';
import { FontAwesomeComponent } from './font-awesome.component';
import { SimpleLineIconsComponent } from './simple-line-icons.component';

import { IconsRoutingModule } from './icons-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IconsRoutingModule,
    IconModule ,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [
    CoreUIIconsComponent,
    FlagsComponent,
    FontAwesomeComponent,
    SimpleLineIconsComponent
  ]
})
export class IconsModule { }
