import { Component, ViewChild } from '@angular/core';
import { IonicPage, ViewController, NavController, NavParams } from 'ionic-angular';
import { CodeProvider } from '../../providers/code/code';

@IonicPage()
@Component({
  selector: 'page-alert-modal',
  templateUrl: 'alert-modal.html',
})
export class AlertModalPage {

  @ViewChild('input') input ;
  img : any;
  pushed : boolean;
  typedCode : string;
  error : boolean;  
  pin : string;
  errorMsg : string;

  constructor(navParams: NavParams, public codes: CodeProvider, public viewCtrl: ViewController) {
     this.img = navParams.get('img');
     this.pin = navParams.get('pin');
     this.pushed = false;
     this.errorMsg = "Wrong code, try again!";
     this.error = false;
  }

  checkCode() {
    if(this.typedCode) {
      if(this.codes.checkCodeImage(this.typedCode.toUpperCase().replace(" ", ""), this.img)) {
        this.viewCtrl.dismiss();
      }
      else {
        this.error = true;
      }
    }
  }

  push() {
    this.pushed = true;
    setTimeout(() => {
      this.input.setFocus();
    }, 300);
  }

}
