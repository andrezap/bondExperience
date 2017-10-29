import { Injectable } from '@angular/core';

@Injectable()
export class ImageProvider {

  private readonly IMAGES_01_OBJ_02 = "./assets/images/L2/img_correct_01.JPG";
  private readonly IMAGES_02_OBJ_02 = "./assets/images/L2/img_correct_02.JPG";
  private readonly IMAGES_03_OBJ_02 = "./assets/images/L2/img_correct_03.JPG";
  private readonly IMAGES_04_OBJ_02 = "./assets/images/L2/img_correct_04.JPG";
  
  private readonly IMAGES_01_OBJ_03 = "./assets/images/L3/img_correct_01.JPG";
  private readonly IMAGES_02_OBJ_03 = "./assets/images/L3/img_correct_02.JPG";
  private readonly IMAGES_03_OBJ_03 = "./assets/images/L3/img_correct_03.JPG";
  private readonly IMAGES_04_OBJ_03 = "./assets/images/L3/img_correct_04.JPG";
  
  private readonly IMAGES_01_OBJ_04 = "./assets/images/L4/img_correct_01.JPG";
  private readonly IMAGES_02_OBJ_04 = "./assets/images/L4/img_correct_02.JPG";
  private readonly IMAGES_03_OBJ_04 = "./assets/images/L4/img_correct_03.JPG";
  private readonly IMAGES_04_OBJ_04 = "./assets/images/L4/img_correct_04.JPG";
  
  private readonly IMAGES_01_OBJ_05 = "./assets/images/L5/img_correct_01.JPG";
  private readonly IMAGES_02_OBJ_05 = "./assets/images/L5/img_correct_02.JPG";
  private readonly IMAGES_03_OBJ_05 = "./assets/images/L5/img_correct_03.JPG";
  private readonly IMAGES_04_OBJ_05 = "./assets/images/L5/img_correct_04.JPG";
  
  private readonly IMAGES_01_OBJ_06 = "./assets/images/L6/img_correct_01.JPG";
  private readonly IMAGES_02_OBJ_06 = "./assets/images/L6/img_correct_02.JPG";
  private readonly IMAGES_03_OBJ_06 = "./assets/images/L6/img_correct_03.JPG";
  private readonly IMAGES_04_OBJ_06 = "./assets/images/L6/img_correct_04.JPG";
  
  private readonly IMAGES_01_OBJ_07 = "./assets/images/L7/img_correct_01.JPG";
  private readonly IMAGES_02_OBJ_07 = "./assets/images/L7/img_correct_02.JPG";
  private readonly IMAGES_03_OBJ_07 = "./assets/images/L7/img_correct_03.JPG";
  private readonly IMAGES_04_OBJ_07 = "./assets/images/L7/img_correct_04.JPG";


  constructor() {
  }

  getImages(object) {
    switch(object) {
      case "2":
        return [this.IMAGES_01_OBJ_02, this.IMAGES_02_OBJ_02, this.IMAGES_03_OBJ_02, this.IMAGES_04_OBJ_02];
      case "3":
        return [this.IMAGES_01_OBJ_03, this.IMAGES_02_OBJ_03, this.IMAGES_03_OBJ_03, this.IMAGES_04_OBJ_03];
      case "4":
        return [this.IMAGES_01_OBJ_04, this.IMAGES_02_OBJ_04, this.IMAGES_03_OBJ_04, this.IMAGES_04_OBJ_04];
      case "5":
        return [this.IMAGES_01_OBJ_05, this.IMAGES_02_OBJ_05, this.IMAGES_03_OBJ_05, this.IMAGES_04_OBJ_05];
      case "6":
        return [this.IMAGES_01_OBJ_06, this.IMAGES_02_OBJ_06, this.IMAGES_03_OBJ_06, this.IMAGES_04_OBJ_06];
      case "7":
        return [this.IMAGES_01_OBJ_07, this.IMAGES_02_OBJ_07, this.IMAGES_03_OBJ_07, this.IMAGES_04_OBJ_07];
    }
  }

}