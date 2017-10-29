import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { TimerComponent } from '../../components/timer/timer';


@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  @ViewChild(TimerComponent) timer: TimerComponent;
  private disable: boolean;
  private next : string;
  private timerInSeconds : number;
  
  constructor(public navCtrl: NavController, public navParam: NavParams, private alertCtrl: AlertController) {
    this.next = this.navParam.get('next');    
    if(this.next)
      this.timerInSeconds = this.navParam.get('timer');
  }

  ionViewDidLoad() {    
    if(!this.next) {
      this.disable = true;
      this.presentAlert();
      setTimeout(() => {
        this.disable = false;
      }, 10000  );
    } else {
      this.timer.startTimer();
    }
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: "Don't touch the button yet!",
      subTitle: '',
      buttons: ['Ok']
    });
    alert.present();
  }


  start() {
    if(this.next == 'filmpage') {
      this.navCtrl.push('FilmPage', {
        timer : this.timer.timerRemaining(),
        nextQuestion : this.navParam.get('nextQuestion'),
        location : this.navParam.get('location')
      });
    } else {
      this.navCtrl.push('FirstLocationPage');
    }
  }

}
