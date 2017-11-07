import { Injectable } from '@angular/core';
import { HelperProvider } from '../helper/helper';

@Injectable()
export class RouteProvider {

  private readonly ROUGE_01_ROUTE = ["07", "05", "02", "03", "06"];
  private readonly ROUGE_02_ROUTE = ["02", "04", "03", "07", "05"];
  private readonly ROUGE_03_ROUTE = ["05", "06", "07", "02", "04"];
  private readonly ROUGE_04_ROUTE = ["04", "07", "05", "06", "03"];
  private readonly ROUGE_05_ROUTE = ["06", "03", "04", "05", "02"];
  private readonly ROUGE_06_ROUTE = ["03", "02", "06", "04", "07"];

  private readonly AGENT_01_ROUTE = ["03", "02", "06", "04", "07"];
  private readonly AGENT_02_ROUTE = ["06", "03", "04", "05", "02"];
  private readonly AGENT_03_ROUTE = ["04", "07", "05", "06", "03"];
  private readonly AGENT_04_ROUTE = ["05", "06", "07", "02", "04"];
  private readonly AGENT_05_ROUTE = ["02", "04", "03", "07", "05"];
  private readonly AGENT_06_ROUTE = ["07", "05", "02", "03", "06"];

  getRouteByCode(code) {
      if(HelperProvider.AGENT_CODE_01 || HelperProvider.AGENT_CODE_EXPIRES_01)
        return this.AGENT_01_ROUTE;
      if(HelperProvider.AGENT_CODE_02 || HelperProvider.AGENT_CODE_EXPIRES_02)
        return this.AGENT_02_ROUTE;
      if(HelperProvider.AGENT_CODE_03 || HelperProvider.AGENT_CODE_EXPIRES_03)
        return this.AGENT_03_ROUTE;
      if(HelperProvider.AGENT_CODE_04 || HelperProvider.AGENT_CODE_EXPIRES_04)
        return this.AGENT_04_ROUTE;
      if(HelperProvider.AGENT_CODE_05 || HelperProvider.AGENT_CODE_EXPIRES_05)
        return this.AGENT_05_ROUTE;
      if(HelperProvider.AGENT_CODE_06 || HelperProvider.AGENT_CODE_EXPIRES_06)
        return this.AGENT_06_ROUTE;
      if(HelperProvider.ROUGE_CODE_01 || HelperProvider.ROUGE_CODE_EXPIRES_01)
        return this.ROUGE_01_ROUTE;
      if(HelperProvider.ROUGE_CODE_02 || HelperProvider.ROUGE_CODE_EXPIRES_02)
        return this.ROUGE_02_ROUTE;
      if(HelperProvider.ROUGE_CODE_03 || HelperProvider.ROUGE_CODE_EXPIRES_03)
        return this.ROUGE_03_ROUTE;
      if(HelperProvider.ROUGE_CODE_04 || HelperProvider.ROUGE_CODE_EXPIRES_04)
        return this.ROUGE_04_ROUTE;
      if(HelperProvider.ROUGE_CODE_05 || HelperProvider.ROUGE_CODE_EXPIRES_05)
        return this.ROUGE_05_ROUTE;
      if(HelperProvider.ROUGE_CODE_06 || HelperProvider.ROUGE_CODE_EXPIRES_06)
        return this.ROUGE_06_ROUTE;
  }

}
