import { Component } from '@angular/core';
import { NavController, AlertController, ModalController, NavParams} from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';

@Component({
  selector: 'question',
  templateUrl: 'question.html'
})
export class QuestionComponent {

  private INDEX_LAST_ROUTE = "4";
  private location;
  private _timer;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, 
    public modalCtrl: ModalController, public navParams : NavParams, public database : DatabaseProvider) {
      this.location = this.navParams.get('location');
  }

  setTimer(timer) {
    this._timer = timer;
  }

  ionViewDidLoad() {
    this._timer.startTimer();
  }
    
  moveToNextPage() {
    if(localStorage['lastIndex'] == this.INDEX_LAST_ROUTE) {
      this.navCtrl.push('FinishPage', {
        timer : this._timer.timerRemaining()
      });
    } else {
      this.navCtrl.push('MapPage', {
        timer : this._timer.timerRemaining()
      });
    }
  }

  saveOnDB(question, right) {
    console.log('save on database');
    return this.database.addQuestion(question, this.location, right, this.navParams.get('timer'), this._timer.timerRemaining());
  }

  showPrompt(question : number, msg : string, right = false, object = null, move = false, callback = null) {
    let prompt = this.alertCtrl.create({
      title: msg,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.saveOnDB(question, right).then(
              () => {
              if(right && !move) {
                let modal = this.modalCtrl.create('ImagesModalPage', {"object" : object});
                modal.present();
                modal.onDidDismiss(()=>{
                  callback();
                });    
              } else {
                callback();
              }
              
              if(move) {
                this.moveToNextPage();
              } 
            
            })
          }
        }
      ]
    });
    prompt.present();
  }


}
