import { Component } from '@angular/core';
import { PLATFORM, STATUS } from '../constant';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent {
  PLATFORM = PLATFORM
  STATUS = STATUS
  platformData = [
    {
      'platform': PLATFORM.FACEBOOK,
      img: 'icon-facebook.svg',
      account: '@nathanf',
      followers: 1987,
      status:STATUS.INCREASE,
      status_value: 12,
    },
    {
      'platform': PLATFORM.TWITTER,
      img: 'icon-twitter.svg',
      account: '@nathanf',
      followers: 1044,
      status:STATUS.INCREASE,
      status_value: 99,
    },
    {
      'platform': PLATFORM.INSTAGRAM,
      img: 'icon-instagram.svg',
      account: '@realnathanf',
      followers: 11000,
      status:STATUS.INCREASE,
      status_value: 1099,
    },
    {
      'platform': PLATFORM.YOUTUBE,
      img: 'icon-youtube.svg',
      account: 'Nathan F.',
      followers: 8239,
      status:STATUS.DECREASE,
      status_value: 144,
    },
  ]
}
