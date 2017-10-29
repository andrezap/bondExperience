import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResultModalPage } from './result-modal';

@NgModule({
  declarations: [
    ResultModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ResultModalPage),
  ],
})
export class ResultModalPageModule {}
