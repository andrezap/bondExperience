import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { CodeProvider } from '../../providers/code/code';
import { HelperProvider } from '../../providers/helper/helper';
import { RouteProvider } from '../../providers/route/route';

@IonicPage()
@Component({
  selector: 'page-code',
  templateUrl: 'code.html',
})
export class CodePage {

  private typedCode : string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, 
    public codesProvider : CodeProvider, public routesProvider: RouteProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CodePage');
  }

  presentAlert() {
    const alert = this.alertCtrl.create({
      title: 'Invalid code',
      subTitle: 'Please, try again',
      buttons: ['Ok']
    });
    alert.present();
  }

  chooseSide() {
    if(this.typedCode) {
      let codeUpperCase = this.typedCode.toUpperCase()
      let side = this.codesProvider.checkCode(codeUpperCase);
      localStorage['code'] = codeUpperCase;
      localStorage['route'] = this.routesProvider.getRouteByCode(codeUpperCase);
      if(side == HelperProvider.AGENT) {
        this.navCtrl.push('AgentPage');
      } else if(side == HelperProvider.ROUGE) {
        this.navCtrl.push('RougePage');
      } else {
        this.presentAlert();
      }
    }
  }

}
