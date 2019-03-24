import { Component, ViewChild, ElementRef } from "@angular/core";
import {
  NavController,
  AlertController,
  ModalController,
  NavParams
} from "ionic-angular";
import { LocationProvider } from "../../providers/location/location";

@Component({
  selector: "question",
  templateUrl: "question.html"
})
export class QuestionComponent {
  public answersA: any[];
  public answersB: string[];
  public question1Disable: boolean;
  public question2Disable: boolean;
  public question3Disable: boolean;
  public rightItemA: number;
  public rightItemB: number;
  public rightAnswer;
  public choosedAnswerA: number;
  public choosedAnswerB: number;
  public timeStart: number;
  public lastQuestion: boolean;
  public showFabBtn: boolean;

  @ViewChild("question") questionElement: ElementRef;
  @ViewChild("question2") question2Element: ElementRef;
  @ViewChild("question3") question3Element: ElementRef;
  @ViewChild("videoPlayer") videoPlayer: ElementRef;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public locationProvider: LocationProvider
  ) {
    this.choosedAnswerA = null;
    this.choosedAnswerB = null;
    this.question1Disable = true;
    this.question2Disable = true;
    this.question3Disable = true;
    this.lastQuestion = false;
  }

  moveToNextPage() {
    let nextPinNumber = parseInt(this.navParams.get("pinNumber")) + 1;

    if (nextPinNumber > this.locationProvider.getLastLocationPin()) {
      localStorage.clear();
      this.navCtrl.push("HomePage");
    } else {
      this.navCtrl.push("MapPage", {
        pinNumber: nextPinNumber
      });
    }
  }

  showPromptWihtTime(): void {
    let time = this.formatTime();
    const alert = this.alertCtrl.create({
      title: "Right Answer!",
      subTitle: "Your time: " + time,
      buttons: ["OK"]
    });
    alert.present();
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

  checkQuestion02(index: number): void {
    this.choosedAnswerB = index;
    let choosedAnswer = this.answersB[index];
    this.lastQuestion = true;

    if (choosedAnswer == this.rightAnswer.B) {
      this.showPromptWihtTime();
    }
  }

  scrollToQuestion(question: number): void {
    if (question === 1) {
      this.questionElement.nativeElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      this.showFabBtn = false;
    }

    if (question === 2) {
      this.question2Element.nativeElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    if (question === 3) {
      this.question2Element.nativeElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }

  showQuestions(): void {
    this.timeStart = performance.now();
    this.question1Disable = false;
    this.showFabBtn = true;
  }

  formatTime(): string {
    let duration = performance.now() - this.timeStart;

    var seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    let hoursTxt = hours < 10 ? "0" + hours : hours;
    let minutesTxt = minutes < 10 ? "0" + minutes : minutes;
    let secondsTxt = seconds < 10 ? "0" + seconds : seconds;

    return hoursTxt + ":" + minutesTxt + ":" + secondsTxt;
  }
}
