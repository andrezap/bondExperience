import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { NativeAudio } from "@ionic-native/native-audio";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage: any = "HomePage";

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private nativeAudio: NativeAudio
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      this.loadAudios();
      localStorage.clear();
      splashScreen.hide();
    });
  }

  loadAudios() {
    this.nativeAudio.preloadComplex(
      "rogueAgentAudio",
      "assets/audios/rogueAgentAudio.mp3",
      1,
      1,
      0
    );
    this.nativeAudio.preloadComplex(
      "007AgentAudio",
      "assets/audios/007AgentAudio.mp3",
      1,
      2,
      0
    );
    this.nativeAudio.preloadSimple("filmMsg", "assets/audios/filmMsg.mp3");
  }
}
