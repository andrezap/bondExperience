import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-red-image',
  templateUrl: 'red-image.html',
})
export class RedImagePage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RedImagePage');
  }

  goToNextPage() {
    this.navCtrl.push('RedCodePage');
  }

}
