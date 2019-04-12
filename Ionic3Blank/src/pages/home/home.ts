import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { MessagesProvider } from '../../providers/messages/messages';
//import { MessageModel } from '../../model/messages-model';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name:any;
  //messages:MessageModel[];
  messages:any[];
  user:any;
  message:string;
  

  constructor(public navCtrl: NavController,
    private message_provider:MessagesProvider,
    private navParams:NavParams) {
      this.user =this.navParams.data;
      this.loadMesages();
  }

  ionViewDidLoad(){//se ejecuta cuando termina de cargar la aplicacion
    this.loadMesages();
    setInterval( () => {
      this.loadMesages();
    },1000 );
  }

  goAbout(){
    this.navCtrl.push(AboutPage,{name:'Roque'});
  }
  loadMesages(){
    this.message_provider
    .getMessage()
    .subscribe(response=>{
      this.messages=response;
      console.log(this.messages);
    },error =>{

    });
  }
  sendMessage() {
    this.message_provider.sendMessage( this.user.id_user,this.message ).subscribe( () => {
      //this.message = null;
      //this.content.scrollToBottom();
    },error => console.log( error ) );
  }

}
