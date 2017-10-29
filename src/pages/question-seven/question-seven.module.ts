import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionSevenPage } from './question-seven';
import { TimerComponentModule } from '../../components/timer/timer.module';
import { QuestionComponentModule } from '../../components/question/question.module';

@NgModule({
  declarations: [
    QuestionSevenPage,
  ],
  imports: [
    TimerComponentModule,
    QuestionComponentModule,
    IonicPageModule.forChild(QuestionSevenPage),
  ],
})
export class QuestionSevenPageModule {}
