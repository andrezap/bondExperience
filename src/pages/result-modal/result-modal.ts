import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-result-modal',
  templateUrl: 'result-modal.html',
})
export class ResultModalPage {

 
  private questions;

  constructor(public navParams: NavParams, public viewCtrl: ViewController) {
      this.questions = this.navParams.get('data');
  }

  finalizar() {
    this.viewCtrl.dismiss();
  }

  getClass(question) {
    switch(question.location) {
      case 2 :
      return 'color-one';
      case 3 :
      return 'color-two';
      case 4 :
      return 'color-three';
      case 5 :
      return 'color-four';
      case 6 :
      return 'color-five';
      case 7 :
      return 'color-six';
    }
  }

}
