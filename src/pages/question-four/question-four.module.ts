import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionFourPage } from './question-four';
import { TimerComponentModule } from '../../components/timer/timer.module';
import { QuestionComponentModule } from '../../components/question/question.module';

@NgModule({
  declarations: [
    QuestionFourPage,
  ],
  imports: [
    QuestionComponentModule,
    TimerComponentModule,
    IonicPageModule.forChild(QuestionFourPage),
  ]
})
export class QuestionFourPageModule {}
