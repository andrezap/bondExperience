import { Injectable } from "@angular/core";
import { HelperProvider } from "../helper/helper";

@Injectable()
export class CodeProvider {
  private rougeCodes: string[];
  private agentCodes: string[];

  constructor() {
    this.rougeCodes = [
      HelperProvider.ROUGE_CODE_01,
      HelperProvider.ROUGE_CODE_02,
      HelperProvider.ROUGE_CODE_03,
      HelperProvider.ROUGE_CODE_04,
      HelperProvider.ROUGE_CODE_05,
      HelperProvider.ROUGE_CODE_06
    ];
    this.agentCodes = [
      HelperProvider.AGENT_CODE_01,
      HelperProvider.AGENT_CODE_02,
      HelperProvider.AGENT_CODE_03,
      HelperProvider.AGENT_CODE_04,
      HelperProvider.AGENT_CODE_05,
      HelperProvider.AGENT_CODE_06
    ];
  }

  checkCode(code: string) {
    if (this.agentCodes.indexOf(code) > -1) return HelperProvider.AGENT;
    else if (this.rougeCodes.indexOf(code) > -1) return HelperProvider.ROUGE;
    else return -1;
  }

  checkInitialCode(code: string) {
    return code == HelperProvider.INITIAL_CODE;
  }
}
