import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, IonicPage, NavParams, ModalController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapOptions
} from '@ionic-native/google-maps';


@IonicPage()
@Component({
  selector: 'page-finish',
  templateUrl: 'finish.html',
})
export class FinishPage {

  @ViewChild('map') mapElement: ElementRef;
  
  private map : GoogleMap;
  private initalLocation = [25.078295, -77.340429];

  constructor(public navParams: NavParams, private database : DatabaseProvider,  public modalCtrl: ModalController, 
    private _googleMaps: GoogleMaps, public navCtrl : NavController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinishPage');
    this.promptStatistics();
    this.loadMap();
  }

  promptStatistics() {
    this.database.getStatistic().then(
      data => {
        let alertModal = this.modalCtrl.create('ResultModalPage', { data: data });
        alertModal.present();
        alertModal.onDidDismiss((result) => {
        });
      }
    )    
  }

  reset() {
    localStorage.clear();
    this.database.deleteDB().then(() => {
      this.navCtrl.push('HomePage');
    });
  }

  loadMap() {
    let element = this.mapElement.nativeElement;

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: this.initalLocation[0],
          lng: this.initalLocation[1]
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = this._googleMaps.create(element, mapOptions);

    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        this.map.addMarker({
          'icon': {
            url : 'assets/icon/marker-red.png',
            size: {
              width: 60,
              height: 60
              }
            },
          'position': {
            lat: this.initalLocation[0],
            lng: this.initalLocation[1]
          }
        });
      });
  }
}
