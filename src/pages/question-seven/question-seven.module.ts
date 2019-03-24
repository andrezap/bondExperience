import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { QuestionSevenPage } from "./question-seven";
import { QuestionComponentModule } from "../../components/question/question.module";

@NgModule({
  declarations: [QuestionSevenPage],
  imports: [
    QuestionComponentModule,
    IonicPageModule.forChild(QuestionSevenPage)
  ]
})
export class QuestionSevenPageModule {}
