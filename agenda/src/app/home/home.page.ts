import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContatoService } from './home.service';
import { IContatoModel } from './Model/Contato.model';
import { ContatosPage } from '../contatos/contatos.page';
import { NavController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //private data: IContatoModel = {Id: 0 ,nome:''};
  nome = "hugo";

  private inscricao:Subscription[] = [];
  
  constructor(private route: Router) {

  }


  gerenciarContatos(){
    this.route.navigate(['/contatos', this.nome]);
  }


}
