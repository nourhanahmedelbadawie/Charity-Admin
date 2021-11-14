import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';
import { NgxFileDropModule } from 'ngx-file-drop';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { UserInterceptor } from './provider/user.interceptor';



const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { DropImageDirective } from './directives/drop-image.directive';
import { AboutComponent } from './views/theme/about/about.component';
import { SettingComponent } from './views/theme/setting/setting.component';
import { AuthGuard } from './config/authguard.guard';
import { EditAchievmentComponent } from './views/buttons/edit-achievment/edit-achievment.component';
import { SingleDonationComponent } from './views/notifications/single-donation/single-donation.component';
import { NewDonationComponent } from './views/notifications/new-donation/new-donation.component';

@NgModule({
 schemas: [ CUSTOM_ELEMENTS_SCHEMA ]  , 

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    IconModule,
    IconSetModule.forRoot(),
    NgxFileDropModule ,
    HttpClientModule,
    AngularEditorModule ,
FormsModule ,
ReactiveFormsModule

  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    DropImageDirective,
    AboutComponent,
    SettingComponent,
    EditAchievmentComponent,
    SingleDonationComponent,
    NewDonationComponent
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
      {
        provide:HTTP_INTERCEPTORS,
        useClass:UserInterceptor,
        multi:true
      }
     ,
    IconSetService,
    AuthGuard
  ],
  bootstrap: [ AppComponent ]

})
export class AppModule { }
