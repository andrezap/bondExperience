import { Component, ViewChild, ElementRef } from "@angular/core";
import {
  IonicPage,
  NavController,
  ModalController,
  AlertController,
  NavParams
} from "ionic-angular";
import { QuestionComponent, Resume } from "../../components/question/question";
import { AnswersProvider } from "../../providers/answers/answers";
import { AudioProvider } from "../../providers/audio/audio";
import { VideoProvider } from "../../providers/video/video";
import { LocationProvider } from "../../providers/location/location";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

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
    this.answersA = this.shuffleAnswers(this.answersProvider.ANSWERS_CLIP_2_A);
    this.answersB = this.shuffleAnswers(this.answersProvider.ANSWERS_CLIP_2_B);
    this.showVideo = false;
    this.enableQuestions = false;
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
