import { Injectable } from "@angular/core";

@Injectable()
export class VideoProvider {
  private readonly VIDEO_01 = "./assets/videos/BondClip1.3gp";
  private readonly VIDEO_02 = "./assets/videos/BondClip2.3gp";
  private readonly VIDEO_03 = "./assets/videos/BondClip3.avi";
  private readonly VIDEO_04 = "./assets/videos/BondClip4.3gp";
  private readonly VIDEO_05 = "./assets/videos/BondClip5.3gp";
  private readonly VIDEO_06 = "./assets/videos/BondClip6.3gp";

  constructor() {}

  selectVideoByLocation(location: number) {
    switch (location) {
      case 2:
        return this.VIDEO_01;
      case 3:
        return this.VIDEO_02;
      case 4:
        return this.VIDEO_03;
      case 5:
        return this.VIDEO_04;
      case 5:
        return this.VIDEO_05;
      case 7:
        return this.VIDEO_06;
    }
  }
}
