import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController, AlertController, IonicPage, NavParams } from 'ionic-angular';
import { QuestionComponent } from '../../components/question/question';
import { DatabaseProvider } from '../../providers/database/database';
import { TimerComponent } from '../../components/timer/timer';

@IonicPage()
@Component({
  selector: 'page-question-four',
  templateUrl: 'question-four.html',
})
export class QuestionFourPage extends QuestionComponent {

  
  @ViewChild(TimerComponent) timer: TimerComponent;
  private question_01 : boolean;
  private question_02 : boolean;
  private question_bonus : boolean;
  private readonly RIGHT_ANSWER_01 = "B"; 
  private readonly RIGHT_ANSWER_02 = "A";
  private readonly BONUS_ANSWER = "C";
  private timerInSeconds : number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    public modalCtrl: ModalController, public database : DatabaseProvider) {
        super(navCtrl, alertCtrl, modalCtrl, navParams, database);
        this.question_01 = true;
        this.question_02 = false;
        this.question_bonus = false;
        this.timerInSeconds = this.navParams.get('timer');
  }

  ionViewDidLoad() {
    this.setTimer(this.timer);
    this.timer.startTimer();
  }

  checkBonusQuestion(letter) {
    let msg = "Incorrect Answer";
    let right = false;
    if(letter == this.BONUS_ANSWER) {
       msg = "Correct Answer";
       right = true;
    }
    
    let confirm = this.alertCtrl.create({
      title: msg,
      buttons: [
      {
        text: 'Ok',
        handler: () => {
          this.saveOnDB(3, right);
          this.moveToNextPage();
        }
      }]
    });
    confirm.present();
  }

  showPrompt(question, msg, right = false, move = false) {
    let prompt = this.alertCtrl.create({
      title: msg,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.saveOnDB(question, right);
            if(right) {
              if(this.question_01) {
                let modal = this.modalCtrl.create('ImagesModalPage', {"object" : "4"});
                modal.present();
                modal.onDidDismiss(()=>{
                  this.question_01 = false;      
                  this.question_02 = true;
                });    
              } else {
                if(!move) {
                  this.question_bonus = true;
                  this.question_02 = false;                  
                }
              }
            } else {
              if(this.question_01) {
                this.question_02 = true;
                this.question_01 = false;
              } else {
                this.question_02 = false;
                this.question_bonus = true;
              }
            }           
          }
        }
      ]
    });
    prompt.present();
  }

  checkQuestion01(letter) {
    let msg = "Incorrect Answer";
    let right = false;
    if(letter == this.RIGHT_ANSWER_01) {
      msg = "Correct Answer";
      right = true;
    }
    this.showPrompt(1, msg, right);  
  }

  checkQuestion02(letter) {    
    let msg = "Incorrect Answer";
    let right = false;
    if(letter == this.RIGHT_ANSWER_02) {
      msg = "Correct Answer";
      right = true;      
    } 
    this.showPrompt(2, msg, right);
  }  

}
