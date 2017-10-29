import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgentPage } from './agent';

@NgModule({
  declarations: [
    AgentPage,
  ],
  imports: [
    IonicPageModule.forChild(AgentPage),
  ],
  exports: [
    AgentPage
  ]
})
export class AgentPageModule {}
