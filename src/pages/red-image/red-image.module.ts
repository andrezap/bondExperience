import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RedImagePage } from './red-image';

@NgModule({
  declarations: [
    RedImagePage,
  ],
  imports: [
    IonicPageModule.forChild(RedImagePage),
  ],
  exports: [
    RedImagePage
  ]
})
export class RedImagePageModule {}
