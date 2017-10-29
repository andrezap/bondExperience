import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionThreePage } from './question-three';
import { TimerComponentModule } from '../../components/timer/timer.module';
import { QuestionComponentModule } from '../../components/question/question.module';

@NgModule({
  declarations: [
    QuestionThreePage,
  ],
  imports: [
    TimerComponentModule,
    QuestionComponentModule,
    IonicPageModule.forChild(QuestionThreePage),
  ],
})
export class QuestionThreePageModule {}
