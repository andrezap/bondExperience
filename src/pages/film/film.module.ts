import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilmPage } from './film';
import { TimerComponentModule } from '../../components/timer/timer.module';

@NgModule({
  declarations: [
    FilmPage,
  ],
  imports: [
    TimerComponentModule,
    IonicPageModule.forChild(FilmPage),
  ]
})
export class FilmPageModule {}
