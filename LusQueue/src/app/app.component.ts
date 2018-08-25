import { TabsPage } from './../pages/tabs/tabs';
import { ConfigProvider } from './../providers/config/config';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from '../pages/intro/intro';

@Component({
  templateUrl: 'app.html',
  providers: [
    ConfigProvider
  ]
})
export class MyApp {
  //rootPage:any = TabsPage; //Page Inicio antigo do sistema. Foi adicionado a linha abaixo
  //Em rootPage definimos qual é a pagina na qual o aplicativo ira iniciar!
  // rootPage:any = IntroPage;
  rootPage:any;
  constructor(platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    ConfigProvider: ConfigProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      let config = ConfigProvider.getConfigData();
      if (config == null){ //Caso seja nulo retorno, quer dizer que é a primeira vez de que o slide esta
         //sendo mostrado (Uma vez execuado, ele ira armazenar um JSON dentrod o LocalStorage com a chave Config, 
         //dando localStorage.getItem("config") dentro do console no navegador é possivel ver os dados armazenados no navegador.)


        this.rootPage = IntroPage; 
        ConfigProvider.setConfigData(false); 
      }else{
        this.rootPage = TabsPage; //Caso nao seja a primeira vez, ele caira nesta condicao e assim já jogando para a pagina TabsPage
      }
      console.log(config); 
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
