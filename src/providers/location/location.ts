import { Injectable } from '@angular/core';
import { HelperProvider } from '../helper/helper';

@Injectable()
export class LocationProvider {


  constructor() {
    
  }

  getImage(location) {
      let images = HelperProvider.getImagesByLocation();
      let imagebylocation = null;
      images.forEach(element => {
        if(JSON.stringify(element.location) == JSON.stringify(location)) {
          imagebylocation = {"img" : element.img, "index" : element.index};
        }    
      });
      return imagebylocation;
  }

  getAllLocations() {
    return HelperProvider.getAllLocations();
  }

  getStartLocation() {
    let code = localStorage['code'];
    switch(code) {
      case HelperProvider.AGENT_CODE_01 :
      return {'location' : HelperProvider.LOCATION_05, 'pin' : 5 };
      case HelperProvider.AGENT_CODE_02 :
      return {'location' : HelperProvider.LOCATION_07, 'pin' : 7 };
      case HelperProvider.AGENT_CODE_03 :
      return {'location' : HelperProvider.LOCATION_02, 'pin' : 2 };
      case HelperProvider.AGENT_CODE_04 :
      return {'location' : HelperProvider.LOCATION_03, 'pin' : 3 };
      case HelperProvider.AGENT_CODE_05 :
      return {'location' : HelperProvider.LOCATION_06, 'pin' : 6 };
      case HelperProvider.AGENT_CODE_06 :
      return {'location' : HelperProvider.LOCATION_04, 'pin' : 4 };
      case HelperProvider.ROUGE_CODE_01 :
      return {'location' : HelperProvider.LOCATION_04, 'pin' : 4 };
      case HelperProvider.ROUGE_CODE_02 :
      return {'location' : HelperProvider.LOCATION_06, 'pin' : 6 };
      case HelperProvider.ROUGE_CODE_03 :
      return {'location' : HelperProvider.LOCATION_03, 'pin' : 3 };
      case HelperProvider.ROUGE_CODE_04 :
      return {'location' : HelperProvider.LOCATION_02, 'pin' : 2 };
      case HelperProvider.ROUGE_CODE_05 :
      return {'location' : HelperProvider.LOCATION_07, 'pin' : 7 };
      case HelperProvider.ROUGE_CODE_06 :
      return {'location' : HelperProvider.LOCATION_06, 'pin' : 6 };
    }
  }

  getLocationByIndex(index) {
    switch(index) {
      case "02" :
        return HelperProvider.LOCATION_02;
      case "03" :
        return HelperProvider.LOCATION_03;
      case "04" :
        return HelperProvider.LOCATION_04;
      case "05" :
        return HelperProvider.LOCATION_05;
      case "06" :
        return HelperProvider.LOCATION_06;
      case "07" :
        return HelperProvider.LOCATION_07;
    }
  }
}