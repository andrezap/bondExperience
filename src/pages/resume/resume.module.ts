import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResumePage } from './resume';

@NgModule({
  declarations: [
    ResumePage,
  ],
  imports: [
    IonicPageModule.forChild(ResumePage),
  ],
})
export class ResumePageModule {}
