import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-notification-home',
  templateUrl: './notification-home.component.html',
  styleUrls: ['./notification-home.component.scss']
})

export class NotificationHomeComponent implements OnInit {

  @Input() notificationTitle:string;
  @Input() notificationText:string;
  @Input() notificationType:NotificationType = 0;

  constructor() { }

  ngOnInit() {
  }
}

export enum NotificationType{
  DANGER,
  SUCCESS,
  INFO
}
