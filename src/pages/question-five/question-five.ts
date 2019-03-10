import { Component, ViewChild, ElementRef } from "@angular/core";
import {
  NavController,
  ModalController,
  AlertController,
  IonicPage,
  NavParams
} from "ionic-angular";
import { QuestionComponent } from "../../components/question/question";
import { VideoProvider } from "../../providers/video/video";
import { AudioProvider } from "../../providers/audio/audio";
import { AnswersProvider } from "../../providers/answers/answers";
import { LocationProvider } from "../../providers/location/location";

@IonicPage()
@Component({
  selector: "page-question-five",
  templateUrl: "question-five.html"
})
export class QuestionFivePage extends QuestionComponent {
  public showVideo: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public answersProvider: AnswersProvider,
    public audioProvider: AudioProvider,
    public videoProvider: VideoProvider,
    public locationProvider: LocationProvider
  ) {
    super(navCtrl, alertCtrl, modalCtrl, navParams, locationProvider);
    this.answersA = this.shuffleAnswers(this.answersProvider.ANSWERS_CLIP_5_A);
    this.answersB = this.shuffleAnswers(this.answersProvider.ANSWERS_CLIP_5_B);
    this.showVideo = false;
    this.enableQuestions = false;
    this.rightItemA = -1;
    this.rightItemB = -1;
    this.rightAnswer = answersProvider.RIGHT_ANSWER_5;
  }

  ionViewDidLoad() {
    this.audioProvider.playFilmMsg();
    setTimeout(() => {
      this.showVideo = true;
    }, 2000);
  }
}
