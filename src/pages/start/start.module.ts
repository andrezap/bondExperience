import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StartPage } from './start';
import { TimerComponentModule } from '../../components/timer/timer.module';

@NgModule({
  declarations: [
    StartPage,
  ],
  imports: [
    TimerComponentModule,
    IonicPageModule.forChild(StartPage),
  ],
})
export class StartPageModule {}
