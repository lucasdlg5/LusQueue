import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//import { Observable } from '../../../node_modules/rxjs/Observable';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

//Injeção de Dependencia - Utilizada dentro de outra classe, nunca sozinho, possibilitando usar em varias partes do aplicativo
@Injectable()
export class MoovieProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MoovieProvider Provider');
  }

  //Aplicando o DRY (Dont Repeat Yourself) logo que o link sera o mesmo para todas as solicitações da API
  private baseApiPath = "https://api.themoviedb.org/3";
  
  getLatestMoovies()/*: Observable<Response>*/ { //O modo de Observable fica literalmente observando se a funcao da API obteve alguma resposta, assim retornando em caso de sucesso ou falha. Caso contrario, ficará sempre na espera e travará o aplicativo, pois nunca tera uma resposta ja que nao ficou em observacao pelo servico
    //return this.http.get(this.baseApiPath + "/movie/latest?api_key=24f4dde17f8b32e9fbee028404ad2c3c");
    return this.http.get("https://api.themoviedb.org/3/movie/76341?api_key=24f4dde17f8b32e9fbee028404ad2c3c");
  }
}
