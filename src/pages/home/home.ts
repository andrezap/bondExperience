import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AudioProvider } from "../../providers/audio/audio";
import { LoadingController } from "ionic-angular";
import { NativeAudio } from "@ionic-native/native-audio";

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  audio: any;

  constructor(
    public loadingCtrl: LoadingController,
    public nativeAudio: NativeAudio,
    public navCtrl: NavController,
    public navParams: NavParams,
    public audioProvider: AudioProvider
  ) {
    localStorage["lastIndex"] = "0";
  }

  ionViewDidLoad() {
    this.nativeAudio
      .preloadComplex("homeAudio", "assets/audios/homeAudio.mp3", 1, 1, 0)
      .then(() => {
        this.nativeAudio.play("homeAudio");
      });
  }

  ionViewWillLeave() {
    this.nativeAudio.unload("homeAudio");
  }

  goToNextPage() {
    this.navCtrl.push("CodePage");
  }
}
