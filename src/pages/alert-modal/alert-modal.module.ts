import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlertModalPage } from './alert-modal';

@NgModule({
  declarations: [
    AlertModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AlertModalPage),
  ],
})
export class AlertModalPageModule {}
