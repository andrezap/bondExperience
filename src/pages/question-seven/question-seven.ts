import { Component, ViewChild, ElementRef } from "@angular/core";
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
    this.answersA = this.shuffleAnswers(this.answersProvider.ANSWERS_CLIP_7_A);
    this.answersB = this.shuffleAnswers(this.answersProvider.ANSWERS_CLIP_7_B);
    this.answersC = this.shuffleAnswers(this.answersProvider.ANSWERS_CLIP_7_C);
    this.showVideo = false;
    this.enableQuestions = false;
    this.rightItemA = -1;
    this.rightItemB = -1;
    this.rightItemC = -1;
    this.rightAnswer = this.answersProvider.RIGHT_ANSWER_7;
  }

  checkQuestion02(index: number): void {
    let choosedAnswer = this.answersB[index];
    let right = false;

    if (choosedAnswer == this.rightAnswer.B) {
      this.rightItemB = index;
      right = true;
    }

    this.resume.push({ question: 2, right: right });
    this.choosedAnswerB = index;
    this.question2Disable = true;
  }

  checkQuestion03(index: number): void {
    let choosedAnswer = this.answersB[index];
    let right = false;

    if (choosedAnswer == this.rightAnswer.C) {
      this.rightItemC = index;
      right = true;
    }

    this.resume.push({ question: 3, right: right });
    this.question3Disable = true;
    this.choosedAnswerC = index;
    this.showPrompt();
  }

  ionViewDidLoad() {
    this.audioProvider.playFilmMsg();
    setTimeout(() => {
      this.showVideo = true;
    }, 2000);
  }
}
