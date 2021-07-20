import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {PARecord} from '../_models/PARecord';
import {NotificationService} from '../_services/notification.service';
import {PAType} from '../_models/PAType';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'parecord-component',
  templateUrl: './parecord.component.html',
  styleUrls: ['./parecord.component.css']
})
export class ParecordComponent implements OnInit {
  //TODO: need to add to @Input for receiving card data from parent component
  //TODO: need to add @Output that will send delete event data to parent component.


  //TODO: setup the visuals that duplicate what is on the video.



  //TODO: show the unsupported feature notification when user selects edit from the card menu

  //TODO: delete should delete the card.

  ngOnInit() {
    // TODO: think carefully what needs to happen in this callback. Hint: this callback executes once the component has been fully initialized.
  }


}

