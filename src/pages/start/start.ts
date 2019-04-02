import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AlertController } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-start",
  templateUrl: "start.html"
})
export class StartPage {
  private disable: boolean;
  private pinNumber;

  constructor(
    public navCtrl: NavController,
    public navParam: NavParams,
    private alertCtrl: AlertController
  ) {
    if (this.navParam.get("pinNumber") === undefined) {
      this.pinNumber = parseInt(localStorage["lastPin"]) + 1;
    } else {
      this.pinNumber = this.navParam.get("pinNumber");
      localStorage["lastPin"] = this.navParam.get("pinNumber");
    }
  }

  ionViewDidLoad() {
    this.disable = true;
    this.presentAlert();
    setTimeout(() => {
      this.disable = false;
    }, 3000);
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: "Don't touch the button yet!",
      subTitle: "",
      buttons: ["Ok"]
    });
    alert.present();
  }

  goToQuestion(QuestionPage: string) {
    return this.navCtrl.push(QuestionPage, {
      pinNumber: this.pinNumber
    });
  }

  showQuestion() {
    switch (this.pinNumber) {
      case 2:
        return this.goToQuestion("QuestionOnePage");
      case 3:
        return this.goToQuestion("QuestionThreePage");
      case 4:
        return this.goToQuestion("QuestionFourPage");
      case 5:
        return this.goToQuestion("QuestionFivePage");
      case 6:
        return this.goToQuestion("QuestionSixPage");
      case 7:
        return this.goToQuestion("QuestionSevenPage");
    }
  }
}
