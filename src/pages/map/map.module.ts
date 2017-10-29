import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapPage } from './map';
import { TimerComponentModule } from '../../components/timer/timer.module';

@NgModule({
  declarations: [
    MapPage,
  ],
  imports: [
    TimerComponentModule,
    IonicPageModule.forChild(MapPage),
  ],
})
export class MapPageModule {}
