import { Injectable } from "@angular/core";
import { HelperProvider } from "../helper/helper";

@Injectable()
export class LocationProvider {
  constructor() {}

  getAllLocations() {
    return HelperProvider.getAllLocations();
  }

  getLastLocationPin() {
    return 7;
  }

  getLocationByIndex(index: number) {
    switch (index) {
      case 2:
        return HelperProvider.LOCATION_02;
      case 3:
        return HelperProvider.LOCATION_03;
      case 4:
        return HelperProvider.LOCATION_04;
      case 5:
        return HelperProvider.LOCATION_05;
      case 6:
        return HelperProvider.LOCATION_06;
      case 7:
        return HelperProvider.LOCATION_07;
    }
  }
}
