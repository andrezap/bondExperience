import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionFivePage } from './question-five';
import { TimerComponentModule } from '../../components/timer/timer.module';
import { QuestionComponentModule } from '../../components/question/question.module';

@NgModule({
  declarations: [
    QuestionFivePage,
  ],
  imports: [
    TimerComponentModule,
    QuestionComponentModule,
    IonicPageModule.forChild(QuestionFivePage),
  ],
})
export class QuestionFivePageModule {}
