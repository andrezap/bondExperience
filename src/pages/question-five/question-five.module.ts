import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { QuestionFivePage } from "./question-five";
import { QuestionComponentModule } from "../../components/question/question.module";

@NgModule({
  declarations: [QuestionFivePage],
  imports: [QuestionComponentModule, IonicPageModule.forChild(QuestionFivePage)]
})
export class QuestionFivePageModule {}
