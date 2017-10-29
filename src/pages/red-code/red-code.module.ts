import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RedCodePage } from './red-code';

@NgModule({
  declarations: [
    RedCodePage,
  ],
  imports: [
    IonicPageModule.forChild(RedCodePage),
  ],
  exports: [
    RedCodePage
  ]
})
export class RedCodePageModule {}
