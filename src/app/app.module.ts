import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { HttpModule } from "@angular/http";
import { MyApp } from "./app.component";
import { AudioProvider } from "../providers/audio/audio";
import { CodeProvider } from "../providers/code/code";
import { AnswersProvider } from "../providers/answers/answers";
import { HelperProvider } from "../providers/helper/helper";
import { LocationProvider } from "../providers/location/location";
import { VideoProvider } from "../providers/video/video";

import { GoogleMaps } from "@ionic-native/google-maps";
import { NativeAudio } from "@ionic-native/native-audio";

@NgModule({
  declarations: [MyApp],
  imports: [BrowserModule, HttpModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AudioProvider,
    CodeProvider,
    HelperProvider,
    LocationProvider,
    VideoProvider,
    NativeAudio,
    GoogleMaps,
    AnswersProvider
  ]
})
export class AppModule {}
