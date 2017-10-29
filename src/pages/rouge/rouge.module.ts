import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RougePage } from './rouge';
import { TimerComponentModule } from '../../components/timer/timer.module';

@NgModule({
  declarations: [
    RougePage,
  ],
  imports: [
    TimerComponentModule,
    IonicPageModule.forChild(RougePage),
  ],
})
export class RougePageModule {}
