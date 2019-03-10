import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AudioProvider } from "../../providers/audio/audio";

@IonicPage()
@Component({
  selector: "page-agent",
  templateUrl: "agent.html"
})
export class AgentPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public audioProvider: AudioProvider
  ) {}

  ionViewDidLoad() {
    this.audioProvider.playAgentSound();
    console.log("ionViewDidLoad AgentPage");
  }

  start() {
    this.audioProvider
      .stopAgentSound()
      .then(() => this.navCtrl.push("MapPage", { pinNumber: 2 }));
  }
}
