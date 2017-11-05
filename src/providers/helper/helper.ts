import { Injectable } from '@angular/core';

@Injectable()
export class HelperProvider {
  
  static readonly AGENT = 1;
  static readonly ROUGE = 2;

  static readonly INITIAL_CODE = '24';
  
  static readonly AGENT_CODE_01 = 'AAA';
  static readonly AGENT_CODE_02 = 'BBB';
  static readonly AGENT_CODE_03 = 'GGG';
  static readonly AGENT_CODE_04 = 'HHH';
  static readonly AGENT_CODE_05 = 'III';
  static readonly AGENT_CODE_06 = 'JJJ';

  static readonly ROUGE_CODE_01 = 'DDD';
  static readonly ROUGE_CODE_02 = 'EEE';
  static readonly ROUGE_CODE_03 = 'FFF';
  static readonly ROUGE_CODE_04 = 'MMM';
  static readonly ROUGE_CODE_05 = 'NNN';
  static readonly ROUGE_CODE_06 = 'LLL';

  static readonly LOCATION_01 = [25.078295, -77.340429];
  static readonly LOCATION_02 = [25.07875, -77.33967];
  static readonly LOCATION_03 = [25.0789,  -77.34056];
  static readonly LOCATION_04 = [25.07865, -77.34028]; 
  static readonly LOCATION_05 = [25.07843, -77.34016];
  static readonly LOCATION_06 = [25.078533, -77.340012];
  static readonly LOCATION_07 = [25.07786, -77.33969];

  static readonly LOCATION_02_IMG = './assets/images/location_02.jpg';
  static readonly LOCATION_03_IMG = './assets/images/location_03.jpg';
  static readonly LOCATION_04_IMG = './assets/images/location_04.jpg';
  static readonly LOCATION_05_IMG = './assets/images/location_05.jpg';
  static readonly LOCATION_06_IMG = './assets/images/location_06.JPG';
  static readonly LOCATION_07_IMG = './assets/images/location_07.jpg';

  static readonly MARKER_01 = './assets/icon/marker-red.png';
  static readonly MARKER_02 = './assets/images/marker_02.png';
  static readonly MARKER_03 = './assets/images/marker_03.png';
  static readonly MARKER_04 = './assets/images/marker_04.png';
  static readonly MARKER_05 = './assets/images/marker_05.png';
  static readonly MARKER_06 = './assets/images/marker_06.png';
  static readonly MARKER_07 = './assets/images/marker_07.png';

  static readonly CODE_IMG_01 = "TO";
  static readonly CODE_IMG_02 = "OOT";
  static readonly CODE_IMG_03 = "M";
  static readonly CODE_IMG_04 = "TO.SP";
  static readonly CODE_IMG_05 = "AT";
  static readonly CODE_IMG_06 = "IANTI";
  
  static getMarker(location) {
       switch(JSON.stringify(location)) {
           case JSON.stringify(this.LOCATION_01) :
           return this.MARKER_01;
           case JSON.stringify(this.LOCATION_02) :
           return this.MARKER_02;
           case JSON.stringify(this.LOCATION_03) :
           return this.MARKER_03;
           case JSON.stringify(this.LOCATION_04) :
           return this.MARKER_04;
           case JSON.stringify(this.LOCATION_05) :
           return this.MARKER_05;
           case JSON.stringify(this.LOCATION_06) :
           return this.MARKER_06;
           case JSON.stringify(this.LOCATION_07) :
           return this.MARKER_07;
       }
  }

  static getCodes() {
      return [HelperProvider.AGENT_CODE_01, HelperProvider.AGENT_CODE_02, HelperProvider.AGENT_CODE_03, HelperProvider.AGENT_CODE_04, HelperProvider.AGENT_CODE_05,
       HelperProvider.AGENT_CODE_06, HelperProvider.ROUGE_CODE_01, HelperProvider.ROUGE_CODE_02, HelperProvider.ROUGE_CODE_03, HelperProvider.ROUGE_CODE_04,
       HelperProvider.ROUGE_CODE_05, HelperProvider.ROUGE_CODE_06];
  }

  static getAllLocations() {
      return [HelperProvider.LOCATION_01, HelperProvider.LOCATION_02, HelperProvider.LOCATION_03, HelperProvider.LOCATION_04, HelperProvider.LOCATION_05, HelperProvider.LOCATION_06, HelperProvider.LOCATION_07];
  }

  static getStartLocations() {
      return [HelperProvider.LOCATION_05, HelperProvider.LOCATION_07, HelperProvider.LOCATION_02, HelperProvider.LOCATION_03, HelperProvider.LOCATION_06, HelperProvider.LOCATION_04, 
       HelperProvider.LOCATION_04, HelperProvider.LOCATION_06, HelperProvider.LOCATION_03, HelperProvider.LOCATION_02, HelperProvider.LOCATION_07, HelperProvider.LOCATION_05];
  }

  static getImagesByLocation() {
       let imagesByLocation = new Array;
       imagesByLocation[0] = {
           "location" : HelperProvider.LOCATION_02,
           "img" : HelperProvider.LOCATION_02_IMG,
           "index": "0"
       };
       imagesByLocation[1] = {
           "location" : HelperProvider.LOCATION_03,
           "img" : HelperProvider.LOCATION_03_IMG,
           "index": "1"
       };
       imagesByLocation[2] = {
           "location" : HelperProvider.LOCATION_04,
           "img" : HelperProvider.LOCATION_04_IMG,
           "index": "2"
       };
       imagesByLocation[3] = {
           "location" : HelperProvider.LOCATION_05,
           "img" : HelperProvider.LOCATION_05_IMG,
           "index": "3"
       };
       imagesByLocation[4] = {
           "location" : HelperProvider.LOCATION_06,
           "img" : HelperProvider.LOCATION_06_IMG,
           "index": "4"
       };
       imagesByLocation[5] = {
           "location" : HelperProvider.LOCATION_07,
           "img" : HelperProvider.LOCATION_07_IMG,
           "index": "5"
       };
       
       return imagesByLocation;
  }

  static getCodeByImg(index) {
      let codes = [HelperProvider.CODE_IMG_01, HelperProvider.CODE_IMG_02, HelperProvider.CODE_IMG_03, HelperProvider.CODE_IMG_04, HelperProvider.CODE_IMG_05,HelperProvider.CODE_IMG_06];
      return codes[index];
  }

  static checkPinByLocation(location) {
       if(JSON.stringify(location) == JSON.stringify(HelperProvider.LOCATION_02))
           return '02';
       else if (JSON.stringify(location) == JSON.stringify(HelperProvider.LOCATION_03))
           return '03';
       else if (JSON.stringify(location) == JSON.stringify(HelperProvider.LOCATION_04))
           return '04';
       else if (JSON.stringify(location) == JSON.stringify(HelperProvider.LOCATION_05))
           return '05';
       else if (JSON.stringify(location) == JSON.stringify(HelperProvider.LOCATION_06))
           return '06';
       else if (JSON.stringify(location) == JSON.stringify(HelperProvider.LOCATION_07))
           return '07';
  }

  static getTimer(item) {
      debugger;
    let begin = item.begin;
    let end = item.end;
    let result = begin - end;
    return Math.floor(result / 60) + ":" + (result % 60 ? result % 60 : '00');
  }

  static formatDate() {
    let date = new Date();
    return date.getFullYear().toString() + '/' + (date.getMonth() + 1).toString() + '/' + date.getDate().toString();
  }

}
