import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinishPage } from './finish';

@NgModule({
  declarations: [
    FinishPage,
  ],
  imports: [
    IonicPageModule.forChild(FinishPage),
  ],
  exports: [
    FinishPage
  ]
})
export class FinishPageModule {}
