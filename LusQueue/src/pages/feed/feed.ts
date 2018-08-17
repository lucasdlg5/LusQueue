import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [ //Adicionamos um Provider (Quem proverá as informacoes) para que possamos importar o MoovieProvider que tras o JSON
    MoovieProvider 
  ]
})
export class FeedPage {



  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private moovieProvider: MoovieProvider //Adicionamos as informaçoes que será enviada via injeção para dentro da classe na variavel moovieProvider (M Minusculo!!)
    ) {
  }

    /*Aqui podemos colocar todas as nossas variaveis para que possa ser consumido no APP!
  Tipos de variaveis no TypeScript:
  var1:string - Somente do tipo String
  var2:number - Somente valores numericos
  var3:any - Aceita qualquer tipo de dados*/
  
  public nomeUsuario:string = "Lucas Domingos do Codigo TS";

  //Funcao do tipo Void
  /*
  public somaDoisNumeros(num1:number, num2:number): void{ //Aqui dentro fazemos a funcao executar o que querermos, igual ao JS.
    alert(num1+num2);
  }*/

  public likeAction():void{
    alert("Ocorreu um erro: Falha com Sucesso.");
  }

  public lista_filmes = new Array<any>();
  public filme_image_link:String = "https://image.tmdb.org/t/p/w500";

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    //this.somaDoisNumeros(10,99); //Aqui chamamos a funcao criada acima ao carregar a pagina do Ionic
    this.moovieProvider.getLatestMoovies().subscribe(
      //O Data e Error é como um Try Catch do TypeScript
      //o => é como se fosse declarar uma funcao em uma unica linha só
      data => {
        const response = (data as any); //Fazendo o Casting de objeto para any, assim podemos acessar os dados do objeto 
        //const objeto_retorno = JSON.parse(response._object);// Não é preciso fazer o parse do SJON, pois o Angular 4 ja o faz internamente!
        //alert("Nome do Filme:"+response.original_title+"\Resumo:"+response.overview+"\nStatus:"+response.status+"\nCidades de producao:"+response.production_countries[0].name);
        this.lista_filmes = response.results // Capturando somente a lista de filmes do array enviado pelo JSON
      
       
      }, error => {
        console.log(error);
      }

    ); 
  }

  

}
