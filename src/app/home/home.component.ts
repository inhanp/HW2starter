import {Component, OnDestroy, OnInit} from '@angular/core';
import { first } from 'rxjs/operators';

import {UserService} from '../_services/user.service';
import {NotificationService} from '../_services/notification.service';
import {PARecord} from '../_models/PARecord';

@Component({ templateUrl: 'home.component.html' ,

  styleUrls: ['home.component.css']})
  export class HomeComponent implements OnInit {



  parecords: PARecord[] = [];


  constructor(
    private userService: UserService,
    private notifService: NotificationService
  ) {}

  ngOnInit() {
    this.loadAllActivities();
      }





  private loadAllActivities() {
    this.userService.getActivities().subscribe(
         parecords => {this.parecords = parecords;

         },
        error => {this.notifService.showNotif(error, 'error'); });
  }


  //TODO: add functions for creating and deleting PA records.

}

