import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { LocationProvider } from '../../providers/location/location';
import { TimerComponent } from '../../components/timer/timer';
import { AudioProvider } from '../../providers/audio/audio';
import { HelperProvider } from '../../providers/helper/helper';
import {
 GoogleMaps,
 GoogleMapsEvent,
 GoogleMapOptions,
 Marker
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-first-location',
  templateUrl: 'first-location.html',
})
export class FirstLocationPage {

  @ViewChild('map_first_location') mapElement: ElementRef;
  @ViewChild(TimerComponent) timer: TimerComponent;
  private map: any;
  private startlocation: any;
  private number: number;
  private locations;
  private image : any;
  private pinStart : string;
  public  timerInSeconds : number = 1800;
  
  constructor(public navCtrl: NavController, public locationProvider: LocationProvider, 
    public audioProvider : AudioProvider, public modalCtrl: ModalController, private _googleMaps: GoogleMaps) {
      
      this.startlocation = locationProvider.getStartLocation();
      this.pinStart = HelperProvider.checkPinByLocation(this.startlocation.location);
      this.number = this.startlocation.pin;
      this.locations = locationProvider.getAllLocations();
      this.image = locationProvider.getImage(this.startlocation.location);           
      this.audioProvider.playPinSound(this.number);
  }

  ionViewDidLoad() {
    this.loadMap();
    this.timer.startTimer();
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
        rotate:false,
        tilt: false
      },
      controls: {
        zoom: false
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
    let alertModal = this.modalCtrl.create('AlertModalPage', { img: this.image, pin : this.pinStart});
    alertModal.present();
    alertModal.onDidDismiss((result) => {
      this.navCtrl.push('StartPage', {
          next : 'filmpage',
          timer: this.timer.timerRemaining(),
          nextQuestion : this.pinStart,
          location : this.pinStart
      });
    });
  }
  

  addLocationsOnMap() {
    for (let i = 0; i < this.locations.length; i++) {  
      this.map.addMarker({
        icon: {
          url : HelperProvider.getMarker(this.locations[i]),
          size: {
          width: 60,
          height: 60
        },        
      },
      position: {
        lat: this.locations[i][0],
        lng: this.locations[i][1]
      },
      disableAutoPan: true
      }).then((marker: Marker) => {        
          marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe((params) => {
            if (this.locations[i][0] == this.startlocation.location[0] && this.locations[i][1] == this.startlocation.location[1]) {
              this.presentAlertModal();
            }
          });
      });
    }
  }
}
