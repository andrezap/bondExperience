import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { ImageProvider } from '../../providers/image/image';

@IonicPage()
@Component({
  selector: 'page-images-modal',
  templateUrl: 'images-modal.html',
})
export class ImagesModalPage {

  private object : string;
  private images : Array<string>;

  constructor(public navParams:NavParams, public imagesProvider : ImageProvider, public viewController : ViewController) {
    this.object = this.navParams.get('object');
    this.images = this.imagesProvider.getImages(this.object);       
    setTimeout(() => {
      this.closeModal();
    }, 5000);
  }

  closeModal() {
    this.viewController.dismiss();
  }
}
