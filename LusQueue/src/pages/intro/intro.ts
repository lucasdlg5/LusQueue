import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { //Estas informacoes se chamam injeção de dependencias
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

  public goToTabsPage(){
    this.navCtrl.push(TabsPage);//Usaremos a funcao do navCrtrl para fazer a navegacao, usando o metodo push passando como parametro a pagina para que queremos navegar

  }

}
