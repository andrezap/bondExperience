import { Injectable } from "@angular/core";

@Injectable()
export class AnswersProvider {
  public readonly ANSWERS_CLIP_2_A = [
    "Costa",
    "Carnival",
    "Cunard",
    "Celebrity"
  ];
  public readonly ANSWERS_CLIP_2_B = ["7", "4", "6", "10"];
  public readonly RIGHT_ANSWER_2 = { A: "Costa", B: "7" };

  public readonly ANSWERS_CLIP_3_A = ["2000", "1990", "1960", "1980's"];
  public readonly ANSWERS_CLIP_3_B = ["Soca", "Junkanoo", "Regga", "Carnival"];
  public readonly RIGHT_ANSWER_3 = { A: "1980's", B: "Junkanoo" };

  public readonly ANSWERS_CLIP_4_A = [
    "assets/images/4A1.jpg",
    "assets/images/4A2.jpg",
    "assets/images/4A3.jpg",
    "assets/images/4A4.jpg"
  ];
  public readonly ANSWERS_CLIP_4_B = [
    "RUSSIAN – KGB",
    "BRITISH – MI6",
    "USA – CIA",
    "USA – FBI"
  ];
  public readonly RIGHT_ANSWER_4 = {
    A: "assets/images/4A1.jpg",
    B: "USA – CIA"
  };

  public readonly ANSWERS_CLIP_5_A = [
    "assets/images/5A1.jpeg",
    "assets/images/5A2.png",
    "assets/images/5A4.jpg",
    "assets/images/5A3.jpg"
  ];

  public readonly ANSWERS_CLIP_5_B = [
    "Bahamian Surrey Horses",
    "Bahamian Morgan Horses",
    "Bahamian Quarter Horses",
    "Bahamian Breton Horses"
  ];
  public readonly RIGHT_ANSWER_5 = {
    A: "assets/images/5A2.png",
    B: "Bahamian Surrey Horses"
  };

  public readonly ANSWERS_CLIP_6_A = [
    "assets/images/6A1.png",
    "assets/images/6A2.png",
    "assets/images/6A3.png",
    "assets/images/6A4.png"
  ];
  public readonly ANSWERS_CLIP_6_B = [
    "Sean Connery and Rolando Villazon",
    "Rodger Moore and Joe Jonas",
    "Sean Connery and Rowan Atkinson",
    "Rodger Moore and Hugh Laurie"
  ];
  public readonly RIGHT_ANSWER_6 = {
    A: "assets/images/6A3.png",
    B: "Sean Connery and Rowan Atkinson"
  };

  public readonly ANSWERS_CLIP_7_A = [
    "assets/images/7A1.jpg",
    "assets/images/7A2.jpg",
    "assets/images/7A3.jpg",
    "assets/images/7A4.jpg"
  ];
  public readonly ANSWERS_CLIP_7_B = ["True", "False"];
  public readonly ANSWERS_CLIP_7_C = [
    "assets/images/7C1.jpg",
    "assets/images/7C2.jpg",
    "assets/images/7C3.jpg",
    "assets/images/7C4.jpeg"
  ];
  public readonly RIGHT_ANSWER_7 = {
    A: "assets/images/7A1.jpg",
    B: "True",
    C: "assets/images/7C4.jpeg"
  };
}
