import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionSixPage } from './question-six';
import { TimerComponentModule } from '../../components/timer/timer.module';
import { QuestionComponentModule } from '../../components/question/question.module';

@NgModule({
  declarations: [
    QuestionSixPage,
  ],
  imports: [
    TimerComponentModule,
    QuestionComponentModule,
    IonicPageModule.forChild(QuestionSixPage),
  ],
  exports: [
    QuestionSixPage
  ]
})
export class QuestionSixPageModule {}
