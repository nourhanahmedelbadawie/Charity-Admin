import {Component} from '@angular/core';
import { navItems } from '../../_nav';
import {ConfigService} from "../../config/config.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  notifyCount=0
  constructor( private configService:ConfigService)
  {

  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  logOut(){
    this.configService.logout()
  }
  ngOnInit(): void {
    this.getNotifications()
  }
  getNotifications(){
    this.configService.getNotifications().subscribe(data=>{
      this.notifyCount=(data.length);
    })
}
readNotifications(){
  
  this.configService.getNotificationsRead().subscribe(data=>{
    this.notifyCount=null;
  })
}
}
