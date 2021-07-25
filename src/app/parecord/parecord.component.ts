import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {PARecord} from '../_models/PARecord';
import {NotificationService} from '../_services/notification.service';
import {PAType} from '../_models/PAType';
import {UserService} from '../_services/user.service';
import {ThemePalette} from '@angular/material';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'parecord-component',
  templateUrl: './parecord.component.html',
  styleUrls: ['./parecord.component.css']
})
export class ParecordComponent implements OnInit {
  date: Date;
  calorie: number;
  calorieRate: number;
  minute: number;
  minuteRate: number;
  type: PAType;
  direction: string;
  const ; // @ts-ignore
  color = Math.floor(Math.random() * 2);
  barColor: ThemePalette;
  constructor(private user: UserService,
              private notif: NotificationService) {
  }
  @Input() data: PARecord;
  @Output() deleteData = new EventEmitter();
  // need to add to @Input for receiving card data from parent component
  // need to add @Output that will send delete event data to parent component.


  // setup the visuals that duplicate what is on the video.



  // show the unsupported feature notification when user selects edit from the card menu
  edit() {
    this.notif.notImplementedWarning('Edit activity');
  }

  // delete should delete the card.
  delete() {
    this.deleteData.emit(this.date);
  }

  ngOnInit() {
    this.calorie = this.data.calories;
    this.calorieRate = Math.floor(this.data.calories / this.data.caloriegoal * 100);
    this.minute = this.data.minutes;
    this.minuteRate = Math.floor(this.data.minutes / this.data.minutegoal * 100);
    this.date = this.data.createdDate;
    this.type = this.data.activityType;
    if (this.type === PAType.running) {
      this.direction = 'directions_run';
    } else if (this.type === PAType.walking) {
      this.direction = 'directions_walk';
    } else {
      this.direction = 'directions_bike';
    }
    if (this.color === 0) {
      this.barColor = 'primary';
    } else if (this.color === 1) {
      this.barColor = 'accent';
    } else {
      this.barColor = 'warn';
    }
    // think carefully what needs to happen in this callback.
    //  Hint: this callback executes once the component has been fully initialized.
  }


}

