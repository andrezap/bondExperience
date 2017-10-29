import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoProvider } from '../../providers/video/video';
import { AudioProvider } from '../../providers/audio/audio';

@IonicPage()
@Component({
  selector: 'page-red-film',
  templateUrl: 'red-film.html',
})
export class RedFilmPage {

  public video : string;
  public showVideo : boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public videoProvider : VideoProvider, public audioProvider : AudioProvider) {
    this.video = this.videoProvider.playVideo('initial');
    this.showVideo = false;
  }

  ionViewDidLoad() {
    this.audioProvider.playFilmMsg();
    setTimeout(() => {
      this.showVideo = true;
    }, 2000);
    console.log('ionViewDidLoad RedFilmPage');
  }

  onEnded() {
    this.navCtrl.push('RedQuestionPage');
  }


}
