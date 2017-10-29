import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AudioProvider } from '../../providers/audio/audio';
import { VideoProvider } from '../../providers/video/video';
import { TimerComponent } from '../../components/timer/timer';

@IonicPage()
@Component({
  selector: 'page-film',
  templateUrl: 'film.html',
})
export class FilmPage {

  @ViewChild(TimerComponent) timer: TimerComponent;
  private showVideo: boolean;
  private videoByCode: string;
  private timerInSeconds : number;

  constructor(public navCtrl: NavController, public audioProvider: AudioProvider, public videoProvider: VideoProvider, public navParam: NavParams) {
    this.showVideo = false;
    this.timerInSeconds = this.navParam.get('timer');    
  }

  ionViewDidLoad() {
    this.timer.startTimer();
    this.audioProvider.playFilmMsg();
    setTimeout(() => {
      this.showVideo = true;
    }, 2000);
    this.videoByCode = this.videoProvider.playVideo(this.navParam.get('location'));
  }

  goToQuestion(QuestionPage) {
    return this.navCtrl.push(QuestionPage, {
        location : this.navParam.get('location'),
        timer : this.timer.timerRemaining()
    });
  }

  showQuestions() {
    switch(this.navParam.get('nextQuestion')) {
      case '02' :
        return this.goToQuestion('QuestionOnePage');
      case '03' :
        return this.goToQuestion('QuestionThreePage');
      case '04' :
        return this.goToQuestion('QuestionFourPage');
      case '05' :
        return this.goToQuestion('QuestionFivePage');
      case '06' :
        return this.goToQuestion('QuestionSixPage');
      case '07' :
        return this.goToQuestion('QuestionSevenPage');
    }
  }
}
