import { Component, ViewChild, ElementRef } from "@angular/core";
import {
  IonicPage,
  NavController,
  ModalController,
  AlertController,
  NavParams
} from "ionic-angular";
import { QuestionComponent } from "../../components/question/question";
import { AudioProvider } from "../../providers/audio/audio";
import { VideoProvider } from "../../providers/video/video";
import { LocationProvider } from "../../providers/location/location";
import { AnswersProvider } from "../../providers/answers/answers";

@IonicPage()
@Component({
  selector: "page-question-six",
  templateUrl: "question-six.html"
})
export class QuestionSixPage extends QuestionComponent {
  @ViewChild("videoPlayer") videoPlayer: ElementRef;
  @ViewChild("question") question: ElementRef;
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
    this.answersA = this.answersProvider.ANSWERS_CLIP_6_A;
    this.answersB = this.answersProvider.ANSWERS_CLIP_6_B;
    this.showVideo = false;
    this.rightItemA = -1;
    this.rightItemB = -1;
    this.rightAnswer = answersProvider.RIGHT_ANSWER_6;
  }

  checkQuestion01(index: number): void {
    let choosedAnswer = this.answersA[index];

    this.choosedAnswerA = index;

    if (choosedAnswer == this.rightAnswer.A) {
      this.showPromptWihtTime();
    }

    this.timeStart = performance.now();
    this.question2Disable = false;
  }

  ionViewDidLoad() {
    this.audioProvider.playFilmMsg();
    setTimeout(() => {
      this.showVideo = true;
    }, 2000);
  }
}
