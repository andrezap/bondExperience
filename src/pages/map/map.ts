
import { Component, ViewChild, ElementRef  } from '@angular/core';
import { NavController, IonicPage, NavParams, ModalController } from 'ionic-angular';
import { LocationProvider } from '../../providers/location/location';
import { TimerComponent } from '../../components/timer/timer';
import { AudioProvider } from '../../providers/audio/audio';
import { HelperProvider } from '../../providers/helper/helper';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapOptions,
 Marker
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('timer') timer: TimerComponent;

  private map: GoogleMap;
  private allLocations : any;
  private location : any;
  private image : string;
  private pinNumber;
  private initalLocation = [25.078295, -77.340429];
  private lastRouteIndex;
  private begin : boolean;
  private timerInSeconds : number;

  constructor(public navCtrl: NavController, public locationProvider: LocationProvider, public navParams: NavParams, 
    public audioProvider : AudioProvider, public modalCtrl: ModalController, private _googleMaps: GoogleMaps) {
      let route = localStorage['route'].split(",");

      this.allLocations = locationProvider.getAllLocations();
      this.lastRouteIndex = localStorage['lastIndex'];
      this.begin = this.navParams.get('begin');
      if(this.begin)  {
        this.location = this.initalLocation;
        localStorage['lastIndex'] = -1;
      } else {
        if(this.lastRouteIndex >= 0) {
          let lastIndex = localStorage['lastIndex'];     
          this.lastRouteIndex = parseInt(lastIndex) + 1;
          localStorage['lastIndex'] = this.lastRouteIndex;
        } else {
          this.lastRouteIndex = 0;
          localStorage['lastIndex'] = 0;
        }
        this.timerInSeconds = this.navParams.get('timer');
        this.pinNumber = route[this.lastRouteIndex];
        this.location = locationProvider.getLocationByIndex(this.pinNumber);
      }
    
    }

  ionViewDidLoad() {
    this.loadMap();
    if(this.pinNumber) {
      this.image = this.locationProvider.getImage(this.location);
      setTimeout(() => {
        this.timer.startTimer();
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
        zoom:false,
        scroll: false,
        rotate:false
      }
    };

    this.map = this._googleMaps.create(element, mapOptions);

    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');
        this.addLocationsOnMap();
      });
  }

  presentAlertModal() {
    let alertModal = this.modalCtrl.create('AlertModalPage', { img: this.image, pin : this.pinNumber });
    alertModal.present();
    alertModal.onDidDismiss((result) => {
        this.navCtrl.push('StartPage', {
            next : 'filmpage',
            timer : this.timer.timerRemaining(),
            nextQuestion : this.pinNumber,
            location : this.pinNumber
        });
    });
  }


  addMarker(location, icon, callback) {
    this.map.addMarker({
        icon: {
          url : icon,
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
      }).then((marker: Marker) => {
          marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe((params) => {
              callback();
          });
      });
  }

  addLocationsOnMap() {
    for (let i = 0; i < this.allLocations.length; i++) {
      if(this.begin && this.allLocations[i][0] == this.location[0] && this.allLocations[i][1] == this.location[1]) {  
        this.addMarker(this.allLocations[i],'assets/icon/marker-red.png', () => this.navCtrl.push('RedImagePage'));
      } else {
        this.addMarker(this.allLocations[i],  HelperProvider.getMarker(this.allLocations[i]), ()=> {
            if(!this.begin && this.allLocations[i][0] == this.location[0] && this.allLocations[i][1] == this.location[1])
                this.presentAlertModal();
        });
      }
    }
  }

}
