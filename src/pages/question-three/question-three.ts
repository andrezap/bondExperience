import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController, AlertController, IonicPage, NavParams } from 'ionic-angular';
import { QuestionComponent } from '../../components/question/question';
import { DatabaseProvider } from '../../providers/database/database';
import { TimerComponent } from '../../components/timer/timer';

@IonicPage()
@Component({
  selector: 'page-question-three',
  templateUrl: 'question-three.html',
})
export class QuestionThreePage extends QuestionComponent {

  @ViewChild(TimerComponent) timer: TimerComponent;
  private question_01 : boolean;
  private readonly RIGHT_ANSWER_01 = "D"; 
  private readonly RIGHT_ANSWER_02 = "A";
  private timerInSeconds : number

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, 
    public alertCtrl: AlertController, public database : DatabaseProvider) {
    super(navCtrl, alertCtrl, modalCtrl, navParams, database);
    this.question_01 = true;
    this.timerInSeconds = this.navParams.get('timer');
  }

  ionViewDidLoad() {
    this.setTimer(this.timer);
    this.timer.startTimer();
  }

  checkQuestion01(letter) {
    let msg = "Incorrect Answer";
    let right = false;
    if(letter == this.RIGHT_ANSWER_01) {
      msg = "Correct Answer";
      right = true;
    }
    this.showPrompt(1, msg, right, "3", false,  () => this.question_01 = false);  
  }

  checkQuestion02(letter) {    
    let msg = "Incorrect Answer";
    let right = false;
    if(letter == this.RIGHT_ANSWER_02) {
      msg = "Correct Answer";
      right = true;      
    } 
    this.showPrompt(2, msg, right, null, true, () => null);
  }  


}
