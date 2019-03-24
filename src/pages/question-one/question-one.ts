import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  ModalController,
  AlertController,
  NavParams
} from "ionic-angular";
import { QuestionComponent } from "../../components/question/question";
import { AnswersProvider } from "../../providers/answers/answers";
import { AudioProvider } from "../../providers/audio/audio";
import { VideoProvider } from "../../providers/video/video";
import { LocationProvider } from "../../providers/location/location";

@IonicPage()
@Component({
  selector: "page-question-one",
  templateUrl: "question-one.html"
})
export class QuestionOnePage extends QuestionComponent {
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
    this.answersA = this.answersProvider.ANSWERS_CLIP_2_A;
    this.answersB = this.answersProvider.ANSWERS_CLIP_2_B;
    this.showVideo = false;
    this.rightItemA = -1;
    this.rightItemB = -1;
    this.rightAnswer = answersProvider.RIGHT_ANSWER_2;
  }

  ionViewDidLoad() {
    this.audioProvider.playFilmMsg();
    setTimeout(() => {
      this.showVideo = true;
    }, 2000);
  }
}
