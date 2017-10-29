import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RedQuestionPage } from './red-question';

@NgModule({
  declarations: [
    RedQuestionPage,
  ],
  imports: [
    IonicPageModule.forChild(RedQuestionPage),
  ],
  exports: [
    RedQuestionPage
  ]
})
export class RedQuestionPageModule {}
