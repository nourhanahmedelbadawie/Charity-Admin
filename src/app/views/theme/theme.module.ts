// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';
import { UserInterceptor } from '../../provider/user.interceptor';



// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';
import { HttpClientModule ,HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule ,
    FormsModule, ReactiveFormsModule ,
    HttpClientModule
  ],
  declarations: [
    ColorsComponent,
    TypographyComponent 
  ] ,
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:UserInterceptor,
      multi:true
    }
  ]
})
export class ThemeModule { }
