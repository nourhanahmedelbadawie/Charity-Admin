import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../config/config.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  notifications
  constructor(private configService:ConfigService) { }

  ngOnInit(): void {
    this.getNotifications()
  }
  getNotifications(){
    this.configService.getNotifications().subscribe(data=>{
      this.notifications=(data);
    })
}
}