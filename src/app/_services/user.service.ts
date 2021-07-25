
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {NotificationService} from './notification.service';
import {PAType} from '../_models/PAType';
import {PARecord} from '../_models/PARecord';




@Injectable({ providedIn: 'root' })
export class UserService {


  parecords: PARecord[];




  constructor(private notif: NotificationService) {

    this.parecords = [{calories: 2345,
    minutes: 123,
    caloriegoal: 2000,
    minutegoal: 180,
    steps: 12000,
    activityType: PAType.walking,
    createdDate:  new Date('2020-12-15T09:30:00')
    },
      {
          calories: 1345,
          minutes: 63,
          caloriegoal: 2000,
          minutegoal: 180,
          steps: 15000,
          activityType: PAType.biking,
          createdDate:  new Date('2020-11-13T09:30:00')
      },
      {
        calories: 1945,
        minutes: 83,
        caloriegoal: 2000,
        minutegoal: 180,
        steps: 13000,
        activityType: PAType.running,
        createdDate:  new Date('2020-11-19T06:30:00')
      },
      {
        calories: 1745,
        minutes: 639,
        caloriegoal: 2400,
        minutegoal: 190,
        steps: 19000,
        activityType: PAType.running,
        createdDate:  new Date('2020-08-13T03:55:00')
      }

    ];

  }




  getActivities() {
    // const param = 'getCourse';
    console.log('getActivities()');

    return new Observable<PARecord[]>(subscriber => {
      if (this.parecords.length > 0) {
        setTimeout(() => {subscriber.next(this.parecords); }, 1000);
      } else {
        setTimeout(() => {subscriber.error('No courses in the DB. Create a new course.'); }, 1000);
      }

    });

  }


  deleteActivity(createdDate: Date) {
    const index = this.parecords.findIndex(data => data.createdDate === createdDate);
    console.log(index);
    this.parecords.splice(index, 1);
    // implemented deleteion of PA card from parecords.
    // Hint: this could be done as a oneliner.Hint2: use date:Date to uniquely identify the object in the array of objects.


  }

  generateRandomActivity() {
    const types = [PAType.biking, PAType.walking, PAType.running];
    setTimeout(() => {
      if (this.parecords.length === 10) {
      this.notif.showNotif('Activity limit reached', 'warning');
    } else {
      this.parecords.push({
        calories: Math.floor(Math.random() * 4000),
        minutes: Math.floor((Math.random() * 1000)),
        caloriegoal: Math.floor(Math.random() * 4000),
        minutegoal: Math.floor(Math.random() * 1000),
        steps: Math.floor(Math.random() * 30) * 1000,
        activityType: types[(Math.floor(Math.random() * 2))],
        createdDate: new Date(new Date(1990, 0, 1).getTime() + Math.random()
          * (new Date(2021, 6, 23).getTime() - new Date(1990, 0, 1).getTime()))});
    }
    }, 1000);
    // generate random activites with randomzied values for calories and duration as well as activity type.
    // use setTimeout to simulate delayed network connection
    // limit the number of cards to 10. Show a notification once the limit is reached.
    // make sure to generate unique dates for the objects.


  }


}
