import { Component, ViewChild, ElementRef } from "@angular/core";
import {
  NavController,
  IonicPage,
  NavParams,
  ModalController
} from "ionic-angular";
import { LocationProvider } from "../../providers/location/location";
import { TimerComponent } from "../../components/timer/timer";
import { AudioProvider } from "../../providers/audio/audio";
import { HelperProvider } from "../../providers/helper/helper";
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  Marker
} from "@ionic-native/google-maps";

@IonicPage()
@Component({
  selector: "page-map",
  templateUrl: "map.html"
})
export class MapPage {
  @ViewChild("map") mapElement: ElementRef;

  private map: GoogleMap;
  private allLocations: any;
  private location: any;
  private image: string;
  private pinNumber: number;
  private initalLocation = [25.078295, -77.340429];
  private lastRouteIndex: number;

  constructor(
    public navCtrl: NavController,
    public locationProvider: LocationProvider,
    public navParams: NavParams,
    public audioProvider: AudioProvider,
    public modalCtrl: ModalController,
    private _googleMaps: GoogleMaps
  ) {
    this.allLocations = locationProvider.getAllLocations();
    this.pinNumber = this.navParams.get("pinNumber");
    this.location = this.locationProvider.getLocationByIndex(this.pinNumber);
  }

  ionViewDidLoad() {
    console.log("load");
    this.loadMap();
    if (this.pinNumber) {
      setTimeout(() => {
        this.audioProvider.playPinSound(this.pinNumber);
      }, 1000);
    }
  }

  loadMap() {
    let element = this.mapElement.nativeElement;
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 25.07843,
          lng: -77.34016
        },
        zoom: 18,
        tilt: 30
      },
      gestures: {
        zoom: false,
        scroll: false,
        rotate: false
      }
    };

    this.map = this._googleMaps.create(element, mapOptions);

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log("Map is ready!");
      this.addLocationsOnMap();
    });
  }

  goToNextPage() {
    this.navCtrl.push("StartPage", {
      pinNumber: this.pinNumber
    });
  }

  addMarker(location, icon, callback) {
    this.map
      .addMarker({
        icon: {
          url: icon,
          size: {
            width: 60,
            height: 60
          }
        },
        position: {
          lat: location[0],
          lng: location[1]
        },
        disableAutoPan: true
      })
      .then((marker: Marker) => {
        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(params => {
          callback();
        });
      });
  }

  addLocationsOnMap() {
    for (let i = 0; i < this.allLocations.length; i++) {
      this.addMarker(
        this.allLocations[i],
        HelperProvider.getMarker(this.allLocations[i]),
        () => {
          if (
            this.allLocations[i][0] == this.location[0] &&
            this.allLocations[i][1] == this.location[1]
          )
            this.goToNextPage();
        }
      );
    }
  }
}
