import { Injectable } from '@angular/core';

@Injectable()
export class VideoProvider {

  private readonly VIDEO_01 = './assets/videos/BondClip1.3gp';
  private readonly VIDEO_02 = './assets/videos/BondClip2.3gp';
  private readonly VIDEO_03 = './assets/videos/BondClip3.3gp';
  private readonly VIDEO_04 = './assets/videos/BondClip4.3gp';
  private readonly VIDEO_05 = './assets/videos/BondClip5.3gp';
  private readonly VIDEO_06 = './assets/videos/BondClip6.3gp';
  private readonly VIDEO_INITIAL = './assets/videos/BondRedClip.3gp';

  constructor() {
  }

  playVideo(location) {
    switch(location) {
      case '02' :
      return this.VIDEO_01;
      case '03' :
      return this.VIDEO_02;
      case '04' :
      return this.VIDEO_03;
      case '05' :
      return this.VIDEO_04;
      case '06' :
      return this.VIDEO_05;
      case '07' :
      return this.VIDEO_06;
      case 'initial' :
      return this.VIDEO_INITIAL;
    }
  }

}