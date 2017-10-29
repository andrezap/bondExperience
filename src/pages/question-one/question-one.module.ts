import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionOnePage } from './question-one';
import { TimerComponentModule } from '../../components/timer/timer.module';
import { QuestionComponentModule } from '../../components/question/question.module';

@NgModule({
  declarations: [
    QuestionOnePage,
  ],
  imports: [
    TimerComponentModule,
    QuestionComponentModule,
    IonicPageModule.forChild(QuestionOnePage),
  ]
})
export class QuestionOnePageModule {}
