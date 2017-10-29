import { Component } from '@angular/core';

/**
 * Generated class for the AlertComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'alert',
  templateUrl: 'alert.html'
})
export class AlertComponent {

  text: string;

  constructor() {
    console.log('Hello AlertComponent Component');
    this.text = 'Hello World';
  }

}
