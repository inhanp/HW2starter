import {Component, OnDestroy, OnInit} from '@angular/core';
import { first } from 'rxjs/operators';

import {UserService} from '../_services/user.service';
import {NotificationService} from '../_services/notification.service';
import {PARecord} from '../_models/PARecord';

@Component({ templateUrl: 'home.component.html' ,

  styleUrls: ['home.component.css']})
  export class HomeComponent implements OnInit {



  parecords: PARecord[] = [];
  data: Date;
  constructor(
    private userService: UserService,
    private notifService: NotificationService
  ) {}
  deleteDate(event) {
    console.log('Executed');
    this.data = event;
    this.delete();
  }

  ngOnInit() {
    this.loadAllActivities();
      }





  private loadAllActivities() {
    this.userService.getActivities().subscribe(
         parecords => {this.parecords = parecords;

         },
        error => {this.notifService.showNotif(error, 'error'); });
  }


  // add functions for creating and deleting PA records.
  add() {
    this.userService.generateRandomActivity();
    console.log(this.parecords);
  }
  delete() {
    this.userService.deleteActivity(this.data);
    console.log(this.parecords);
  }

}

