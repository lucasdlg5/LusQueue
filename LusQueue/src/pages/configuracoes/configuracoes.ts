import { SobrePage } from './../sobre/sobre';
import { PerfilPage } from './../perfil/perfil';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConfiguracoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configuracoes',
  templateUrl: 'configuracoes.html',
})
export class ConfiguracoesPage {
  rootPage = PerfilPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ConfiguracoesPage');
  // }


  openPerfil(){
    this.navCtrl.push(PerfilPage); //Faz o redirecionamento das paginas pelos botoes do menu lateral  
  } 

  openSobre(){
    this.navCtrl.push(SobrePage);
  }

}
