import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { QuestionFourPage } from "./question-four";
import { QuestionComponentModule } from "../../components/question/question.module";

@NgModule({
  declarations: [QuestionFourPage],
  imports: [QuestionComponentModule, IonicPageModule.forChild(QuestionFourPage)]
})
export class QuestionFourPageModule {}
