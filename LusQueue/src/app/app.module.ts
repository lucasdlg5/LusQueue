import { SobrePageModule } from './../pages/sobre/sobre.module';
import { PerfilPageModule } from './../pages/perfil/perfil.module';
import { FeedPage } from './../pages/feed/feed';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import {HttpModule} from "@angular/http"; //Devemos adicionar o module para conexão HTTP do Angular
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FeedPageModule } from '../pages/feed/feed.module';
import { IntroPageModule } from '../pages/intro/intro.module';
import { MoovieProvider } from '../providers/moovie/moovie';
import { HttpClientModule } from '@angular/common/http';
import { ConfigProvider } from '../providers/config/config'; //Foi necessario importar esta lib, por conta de uma atualizacao do Angular
import { LoginPageModule } from '../pages/login/login.module';
import { LoginPage } from '../pages/login/login';
import { ConfiguracoesPageModule } from '../pages/configuracoes/configuracoes.module';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    // FeedPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FeedPageModule,
    IntroPageModule,
    HttpModule, //Apos inserir a importacao acima, adicionar aqui para importa-lo ao projeto
    HttpClientModule, //Adicionado tambem!!
    // LoginPageModule
    ConfiguracoesPageModule,
    PerfilPageModule,
    SobrePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FeedPage,
    LoginPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MoovieProvider,
    ConfigProvider
  ]
})
export class AppModule {}
