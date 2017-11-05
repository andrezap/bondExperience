import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CodeProvider } from '../../providers/code/code';

@IonicPage()
@Component({
  selector: 'page-red-code',  
  templateUrl: 'red-code.html',
})
export class RedCodePage {

  private typedCode : string;
  public error : boolean;
  public errorMsg : string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public codeProvider : CodeProvider) {
    this.error = false;
    this.errorMsg = "Wrong code, try again!";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RedCodePage');
  }

  checkCode() {
    if(this.typedCode) {
      let upperCode = this.typedCode.toUpperCase();
      if(this.codeProvider.checkInitialCode(upperCode)) {
        this.navCtrl.push('RedFilmPage');
      } else {
        this.error = true;
      }
    }
  }
}
