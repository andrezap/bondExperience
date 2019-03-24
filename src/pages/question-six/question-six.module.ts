import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { QuestionSixPage } from "./question-six";
import { QuestionComponentModule } from "../../components/question/question.module";

@NgModule({
  declarations: [QuestionSixPage],
  imports: [QuestionComponentModule, IonicPageModule.forChild(QuestionSixPage)],
  exports: [QuestionSixPage]
})
export class QuestionSixPageModule {}
