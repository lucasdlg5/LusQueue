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

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    //this.somaDoisNumeros(10,99); //Aqui chamamos a funcao criada acima ao carregar a pagina do Ionic
    this.moovieProvider.getLatestMoovies().subscribe(
      //O Data e Error é como um Try Catch do TypeScript
      //o => é como se fosse declarar uma funcao em uma unica linha só
      data => {
        console.log(data);
      }, error => {
        console.log(error);
      }

    ); 
  }

  public content_feed = {
    f_title: "Melhor Doguinho Protegido",
    f_date: "Novembro 5, 2018",
    f_content: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you have a protected doggo?!... Whoa. This is heavy.",
    f_likes: 12,
    f_comments: 4,
    f_postHours: 11
  }

}
