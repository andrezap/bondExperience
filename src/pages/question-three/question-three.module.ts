import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { QuestionThreePage } from "./question-three";
import { QuestionComponentModule } from "../../components/question/question.module";

@NgModule({
  declarations: [QuestionThreePage],
  imports: [
    QuestionComponentModule,
    IonicPageModule.forChild(QuestionThreePage)
  ]
})
export class QuestionThreePageModule {}
