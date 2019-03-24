import { Component } from "@angular/core";
import {
  NavController,
  ModalController,
  AlertController,
  IonicPage,
  NavParams
} from "ionic-angular";
import { QuestionComponent } from "../../components/question/question";
import { LocationProvider } from "../../providers/location/location";
import { AnswersProvider } from "../../providers/answers/answers";
import { AudioProvider } from "../../providers/audio/audio";
import { VideoProvider } from "../../providers/video/video";

@IonicPage()
@Component({
  selector: "page-question-three",
  templateUrl: "question-three.html"
})
export class QuestionThreePage extends QuestionComponent {
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
    this.answersA = this.answersProvider.ANSWERS_CLIP_3_A;
    this.answersB = this.answersProvider.ANSWERS_CLIP_3_B;
    this.showVideo = false;
    this.rightItemA = -1;
    this.rightItemB = -1;
    this.rightAnswer = answersProvider.RIGHT_ANSWER_3;
  }

  ionViewDidLoad() {
    this.audioProvider.playFilmMsg();
    setTimeout(() => {
      this.showVideo = true;
    }, 2000);
  }
}
