import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TimerComponent } from './timer';

@NgModule({
  declarations: [
    TimerComponent,
  ],
  imports: [
   IonicModule
  ],
  exports: [
    TimerComponent
  ]
})
export class TimerComponentModule {}
