import { Component } from '@angular/core';
import { PLATFORM, STATUS, TYPE } from '../constant';

@Component({
  selector: 'app-info-dashboard',
  templateUrl: './info-dashboard.component.html',
  styleUrls: ['./info-dashboard.component.css']
})
export class InfoDashboardComponent {
  PLATFORM = PLATFORM
  STATUS = STATUS
  TYPE = TYPE

  platFormDataDetail = [
    {
      'platform': PLATFORM.FACEBOOK,
      'type': TYPE.PAGE_VIEWS,
      img: 'icon-facebook.svg',
      value: 87,
      status:STATUS.INCREASE,
      status_value_percent: 3,
    },
    {
      'platform': PLATFORM.FACEBOOK,
      'type': TYPE.LIKES,
      img: 'icon-facebook.svg',
      value: 52,
      status:STATUS.DECREASE,
      status_value_percent: 2,
    },
    {
      'platform': PLATFORM.INSTAGRAM,
      img: 'icon-instagram.svg',
      'type': TYPE.LIKES,
      value: 5462,
      status:STATUS.INCREASE,
      status_value_percent: 2257,
    },
    {
      'platform': PLATFORM.INSTAGRAM,
      img: 'icon-instagram.svg',
      'type': TYPE.PROFILE_VIEWS,
      value: 52000,
      status:STATUS.INCREASE,
      status_value_percent: 1375,
    },
    {
      'platform': PLATFORM.TWITTER,
      img: 'icon-twitter.svg',
      'type': TYPE.RETWEETS,
      value: 117,
      status:STATUS.INCREASE,
      status_value_percent: 303,
    },
    {
      'platform': PLATFORM.TWITTER,
      img: 'icon-twitter.svg',
      'type': TYPE.LIKES,
      value: 507,
      status:STATUS.INCREASE,
      status_value_percent: 553,
    },
    {
      'platform': PLATFORM.YOUTUBE,
      img: 'icon-youtube.svg',
      'type': TYPE.LIKES,
      value: 107,
      status:STATUS.DECREASE,
      status_value_percent: 19,
    },
    {
      'platform': PLATFORM.YOUTUBE,
      img: 'icon-youtube.svg',
      'type': TYPE.TOTAL_VIEWS,
      value: 1407,
      status:STATUS.DECREASE,
      status_value_percent: 12,
    },
  ]
}
