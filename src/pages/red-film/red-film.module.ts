import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RedFilmPage } from './red-film';

@NgModule({
  declarations: [
    RedFilmPage,
  ],
  imports: [
    IonicPageModule.forChild(RedFilmPage),
  ],
  exports: [
    RedFilmPage
  ]
})
export class RedFilmPageModule {}
