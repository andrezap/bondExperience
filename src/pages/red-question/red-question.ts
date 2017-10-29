import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-red-question',
  templateUrl: 'red-question.html',
})
export class RedQuestionPage {

  private readonly RIGHT_ANSWER_01 = "B"; 
  private readonly RIGHT_ANSWER_02 = "A";
  public question_01 : boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.question_01 = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RedQuestionPage');
  }

  presentAlert(msg, next) {
    const alert = this.alertCtrl.create({
      title: msg,
      subTitle: '',
      buttons: [
        {
        text: 'Ok',
        handler: () => {
          if(next)
            this.navCtrl.push('StartPage')
        }
      }]
    });
    alert.present();
  }

  checkQuestion01(letter) {
    let msg = "Incorrect Answer";
    if(letter == this.RIGHT_ANSWER_01) {
      msg = "Correct Answer";
    }
    this.question_01 = false;
    this.presentAlert(msg, false);
  }

  checkQuestion02(letter) {
    let msg = "Incorrect Answer";
    if(letter == this.RIGHT_ANSWER_02) {
      msg = "Correct Answer";
    } 
    this.presentAlert(msg, true);
  }

}
