import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImagesModalPage } from './images-modal';

@NgModule({
  declarations: [
    ImagesModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ImagesModalPage),
  ],
})
export class ImagesModalPageModule {}
