import { Injectable } from "@angular/core";
import { NativeAudio } from "@ionic-native/native-audio";

@Injectable()
export class AudioProvider {
  constructor(private nativeAudio: NativeAudio) {}

  playRougeSound() {
    this.nativeAudio.play("rogueAgentAudio", () =>
      console.log("rougeSound is done playing")
    );
  }

  playAgentSound() {
    this.nativeAudio.play("007AgentAudio", () =>
      console.log("agentSound is done playing")
    );
  }

  unloadAgentSound() {
    this.nativeAudio.unload("007AgentAudio");
  }

  stopAgentSound() {
    return this.nativeAudio.stop("007AgentAudio");
  }

  stopRogueSound() {
    return this.nativeAudio.stop("rogueAgentAudio");
  }

  playPinSound(number) {
    switch (number) {
      case "02":
        return this.nativeAudio.play("pin2");
      case "03":
        return this.nativeAudio.play("pin3");
      case "04":
        return this.nativeAudio.play("pin4");
      case "05":
        return this.nativeAudio.play("pin5");
      case "06":
        return this.nativeAudio.play("pin6");
      case "07":
        return this.nativeAudio.play("pin7");
    }
  }

  playFilmMsg() {
    this.nativeAudio.play("filmMsg");
  }
}
