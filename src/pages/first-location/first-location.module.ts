import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirstLocationPage } from './first-location';
import { TimerComponentModule } from '../../components/timer/timer.module';

@NgModule({
  declarations: [
    FirstLocationPage,
  ],
  imports: [
    TimerComponentModule,
    IonicPageModule.forChild(FirstLocationPage),
  ]
})
export class FirstLocationPageModule {}
