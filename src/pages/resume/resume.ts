import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from "ionic-angular";
import { Resume } from "../../components/question/question";

@IonicPage()
@Component({
  selector: "resume",
  templateUrl: "resume.html"
})
export class ResumePage {
  private resume: Array<Resume>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    this.resume = this.navParams.get("resume");
  }

  ionViewDidLoad() {}

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
