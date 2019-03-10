import { Injectable } from "@angular/core";

@Injectable()
export class HelperProvider {
  static readonly AGENT = 1;
  static readonly ROUGE = 2;

  static readonly INITIAL_CODE = "24";

  static readonly AGENT_CODE_01 = "AZAZER";
  static readonly AGENT_CODE_02 = "EXOGOF";
  static readonly AGENT_CODE_03 = "OGATIM";
  static readonly AGENT_CODE_04 = "URIDUM";
  static readonly AGENT_CODE_05 = "IWODOT";
  static readonly AGENT_CODE_06 = "UCOMAR";

  static readonly ROUGE_CODE_01 = "UCERUL";
  static readonly ROUGE_CODE_02 = "IKEMIC";
  static readonly ROUGE_CODE_03 = "EMENUC";
  static readonly ROUGE_CODE_04 = "AKESEL";
  static readonly ROUGE_CODE_05 = "AVIGES";
  static readonly ROUGE_CODE_06 = "ABOQOR";

  static readonly LOCATION_01 = [25.078295, -77.340429];
  static readonly LOCATION_02 = [25.07875, -77.33967];
  static readonly LOCATION_03 = [25.0789, -77.34056];
  static readonly LOCATION_04 = [25.07865, -77.34028];
  static readonly LOCATION_05 = [25.07843, -77.34016];
  static readonly LOCATION_06 = [25.078533, -77.340012];
  static readonly LOCATION_07 = [25.07786, -77.33969];

  static readonly MARKER_02 = "./assets/images/pin2.png";
  static readonly MARKER_03 = "./assets/images/pin3.png";
  static readonly MARKER_04 = "./assets/images/pin4.png";
  static readonly MARKER_05 = "./assets/images/pin5.png";
  static readonly MARKER_06 = "./assets/images/pin6.png";
  static readonly MARKER_07 = "./assets/images/pin7.png";

  static getMarker(location) {
    switch (JSON.stringify(location)) {
      case JSON.stringify(this.LOCATION_02):
        return this.MARKER_02;
      case JSON.stringify(this.LOCATION_03):
        return this.MARKER_03;
      case JSON.stringify(this.LOCATION_04):
        return this.MARKER_04;
      case JSON.stringify(this.LOCATION_05):
        return this.MARKER_05;
      case JSON.stringify(this.LOCATION_06):
        return this.MARKER_06;
      case JSON.stringify(this.LOCATION_07):
        return this.MARKER_07;
    }
  }

  static getCodes() {
    return [
      HelperProvider.AGENT_CODE_01,
      HelperProvider.AGENT_CODE_02,
      HelperProvider.AGENT_CODE_03,
      HelperProvider.AGENT_CODE_04,
      HelperProvider.AGENT_CODE_05,
      HelperProvider.AGENT_CODE_06,
      HelperProvider.ROUGE_CODE_01,
      HelperProvider.ROUGE_CODE_02,
      HelperProvider.ROUGE_CODE_03,
      HelperProvider.ROUGE_CODE_04,
      HelperProvider.ROUGE_CODE_05,
      HelperProvider.ROUGE_CODE_06
    ];
  }

  static getAllLocations() {
    return [
      HelperProvider.LOCATION_01,
      HelperProvider.LOCATION_02,
      HelperProvider.LOCATION_03,
      HelperProvider.LOCATION_04,
      HelperProvider.LOCATION_05,
      HelperProvider.LOCATION_06,
      HelperProvider.LOCATION_07
    ];
  }

  static getStartLocations() {
    return [
      HelperProvider.LOCATION_05,
      HelperProvider.LOCATION_07,
      HelperProvider.LOCATION_02,
      HelperProvider.LOCATION_03,
      HelperProvider.LOCATION_06,
      HelperProvider.LOCATION_04,
      HelperProvider.LOCATION_04,
      HelperProvider.LOCATION_06,
      HelperProvider.LOCATION_03,
      HelperProvider.LOCATION_02,
      HelperProvider.LOCATION_07,
      HelperProvider.LOCATION_05
    ];
  }

  static checkPinByLocation(location) {
    if (JSON.stringify(location) == JSON.stringify(HelperProvider.LOCATION_02))
      return "02";
    else if (
      JSON.stringify(location) == JSON.stringify(HelperProvider.LOCATION_03)
    )
      return "03";
    else if (
      JSON.stringify(location) == JSON.stringify(HelperProvider.LOCATION_04)
    )
      return "04";
    else if (
      JSON.stringify(location) == JSON.stringify(HelperProvider.LOCATION_05)
    )
      return "05";
    else if (
      JSON.stringify(location) == JSON.stringify(HelperProvider.LOCATION_06)
    )
      return "06";
    else if (
      JSON.stringify(location) == JSON.stringify(HelperProvider.LOCATION_07)
    )
      return "07";
  }

  static getTimer(item) {
    let begin = item.begin;
    let end = item.end;
    let result = begin - end;
    return Math.floor(result / 60) + ":" + (result % 60 ? result % 60 : "00");
  }

  static formatDate() {
    let date = new Date();
    return (
      date.getFullYear().toString() +
      "/" +
      (date.getMonth() + 1).toString() +
      "/" +
      date.getDate().toString()
    );
  }
}
