import { Component, ViewChild, ElementRef } from "@angular/core";
import {
  NavController,
  AlertController,
  ModalController,
  NavParams
} from "ionic-angular";
import { LocationProvider } from "../../providers/location/location";
import { AnswersProvider } from "../../providers/answers/answers";

export interface Resume {
  question: number;
  right: boolean;
}

@Component({
  selector: "question",
  templateUrl: "question.html"
})
export class QuestionComponent {
  public answersA: any[];
  public answersB: string[];
  public question1Disable: boolean;
  public question2Disable: boolean;
  public resume: Array<Resume>;
  public rightItemA: number;
  public rightItemB: number;
  public enableQuestions: boolean;
  public rightAnswer;
  public choosedAnswerA: number;
  public choosedAnswerB: number;
  @ViewChild("question") questionElement: ElementRef;
  @ViewChild("videoPlayer") videoPlayer: ElementRef;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public locationProvider: LocationProvider
  ) {
    this.resume = new Array<Resume>();
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

  shuffleAnswers(answers: any[]): string[] {
    let input = answers;
    for (var i = input.length - 1; i >= 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let itemAtIndex = input[randomIndex];

      input[randomIndex] = input[i];
      input[i] = itemAtIndex;
    }
    return input;
  }

  showPrompt() {
    let modal = this.modalCtrl.create("ResumePage", { resume: this.resume });
    modal.present();
    modal.onDidDismiss(() => {
      this.moveToNextPage();
    });
  }

  checkQuestion01(index: number): void {
    if (this.question1Disable) {
      return;
    }
    let choosedAnswer = this.answersA[index];
    let right = false;

    if (choosedAnswer == this.rightAnswer.A) {
      this.rightItemA = index;
      right = true;
    }

    this.resume.push({ question: 1, right: right });
    this.choosedAnswerA = index;
    this.question1Disable = true;
  }

  checkQuestion02(index: number): void {
    if (this.question2Disable) {
      return;
    }
    let choosedAnswer = this.answersB[index];
    let right = false;

    if (choosedAnswer == this.rightAnswer.B) {
      this.rightItemB = index;
      right = true;
    }

    this.resume.push({ question: 2, right: right });

    this.question2Disable = true;
    this.choosedAnswerB = index;
    this.showPrompt();
  }

  scrollToQuestion() {
    this.questionElement.nativeElement.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  showQuestions() {
    this.enableQuestions = true;
  }
}
