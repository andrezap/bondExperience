import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { QuestionOnePage } from "./question-one";
import { QuestionComponentModule } from "../../components/question/question.module";

@NgModule({
  declarations: [QuestionOnePage],
  imports: [QuestionComponentModule, IonicPageModule.forChild(QuestionOnePage)]
})
export class QuestionOnePageModule {}
