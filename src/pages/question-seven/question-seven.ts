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
  selector: "page-question-seven",
  templateUrl: "question-seven.html"
})
export class QuestionSevenPage extends QuestionComponent {
  public showVideo: boolean;
  public answersC: string[];
  public question3Disable: boolean;
  public rightItemC: number;
  public choosedAnswerC: number;

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
    this.answersA = this.answersProvider.ANSWERS_CLIP_7_A;
    this.answersB = this.answersProvider.ANSWERS_CLIP_7_B;
    this.answersC = this.answersProvider.ANSWERS_CLIP_7_C;
    this.showVideo = false;
    this.rightItemA = -1;
    this.rightItemB = -1;
    this.rightItemC = -1;
    this.choosedAnswerC = null;
    this.rightAnswer = this.answersProvider.RIGHT_ANSWER_7;
  }

  checkQuestion02(index: number): void {
    let choosedAnswer = this.answersB[index];

    this.choosedAnswerB = index;

    if (choosedAnswer == this.rightAnswer.B) {
      this.showPromptWihtTime();
    }

    this.timeStart = performance.now();
    this.question3Disable = false;
  }

  checkQuestion03(index: number): void {
    let choosedAnswer = this.answersC[index];

    this.lastQuestion = true;
    this.choosedAnswerC = index;

    if (choosedAnswer == this.rightAnswer.C) {
      this.showPromptWihtTime();
    }
  }

  ionViewDidLoad() {
    this.audioProvider.playFilmMsg();
    setTimeout(() => {
      this.showVideo = true;
    }, 2000);
  }
}
