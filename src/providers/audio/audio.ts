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

  playFilmMsg() {
    this.nativeAudio.play("filmMsg");
  }
}
