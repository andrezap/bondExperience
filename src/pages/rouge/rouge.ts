import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AudioProvider } from "../../providers/audio/audio";

@IonicPage()
@Component({
  selector: "page-rouge",
  templateUrl: "rouge.html"
})
export class RougePage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public audioProvider: AudioProvider
  ) {}

  ionViewDidLoad() {
    this.audioProvider.playRougeSound();
    console.log("ionViewDidLoad RougePage");
  }

  start() {
    this.audioProvider
      .stopRogueSound()
      .then(() => this.navCtrl.push("MapPage", { pinNumber: 2 }));
  }
}
