import { Injectable } from '@angular/core';
import { HelperProvider } from '../helper/helper';

@Injectable()
export class CodeProvider {

  private _rouge_codes;
  private _agent_codes;
  private _codes_will_expire;
  
  constructor() {
    this._rouge_codes = [HelperProvider.ROUGE_CODE_01, HelperProvider.ROUGE_CODE_02, HelperProvider.ROUGE_CODE_03, HelperProvider.ROUGE_CODE_04, HelperProvider.ROUGE_CODE_05,
    HelperProvider.ROUGE_CODE_EXPIRES_01, HelperProvider.ROUGE_CODE_EXPIRES_02, HelperProvider.ROUGE_CODE_EXPIRES_03, HelperProvider.ROUGE_CODE_EXPIRES_04, HelperProvider.ROUGE_CODE_EXPIRES_05];
    this._agent_codes = [HelperProvider.AGENT_CODE_01, HelperProvider.AGENT_CODE_02, HelperProvider.AGENT_CODE_03, HelperProvider.AGENT_CODE_04, HelperProvider.AGENT_CODE_05,
    HelperProvider.AGENT_CODE_EXPIRES_01, HelperProvider.AGENT_CODE_EXPIRES_02, HelperProvider.AGENT_CODE_EXPIRES_03, HelperProvider.AGENT_CODE_EXPIRES_04, HelperProvider.AGENT_CODE_EXPIRES_05];
    this._codes_will_expire = HelperProvider.codesWillExpire();
  }

  checkCode(code) {
    if(this.isExpired(code)) 
      return -1;
    if(this._agent_codes.indexOf(code) > -1)
      return HelperProvider.AGENT;
    else if(this._rouge_codes.indexOf(code) > -1)
      return HelperProvider.ROUGE;
    else return -1;
  }

  isExpired(code) {
    if(this._codes_will_expire.indexOf(code) > -1) {
      let today = new Date();
      return !(today.getMonth() == 10 && today.getFullYear() == 2017 && today.getDate() < 13);
    }
    
    return false;
  }

  checkInitialCode(code) {
    return code == HelperProvider.INITIAL_CODE;
  }

  checkCodeImage(code, image) {
      let codeImage = HelperProvider.getCodeByImg(image.index);
      return codeImage == code;
  }

}
