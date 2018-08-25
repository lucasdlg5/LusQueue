import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

let config_KEY_name = "config";
@Injectable()
export class ConfigProvider {

  // constructor(public http: HttpClient) {
  //   console.log('Hello ConfigProvider Provider');
  // }


  private config = {
    showslide: false, //fazer com que o slide apareça somente uma vez só usando localsotrage do HTML
    username: "",
    name: ""
  }
 

  constructor() {

  }


  getConfigData():any{
    return localStorage.getItem(config_KEY_name);
  }

  setConfigData(showslide?:boolean, name?:string, username?:string){ //O ponto de interrogacao em frente as variaveis de parametros os deixam como OPCIONAIS!
    let config = {
      showslide: false, //fazer com que o slide apareça somente uma vez só usando localsotrage do HTML
      username: "",
      name: ""
    };

    if (showslide){
      config.showslide = showslide;
    }


    if (username){
      config.username=username;
    }

    if (name){
      config.name=name;
    }

    localStorage.setItem(config_KEY_name, JSON.stringify(config)); //Parar para entender o que é novamente do config_KEY_name na aula: Seção 12, Aula 39
  }
}
