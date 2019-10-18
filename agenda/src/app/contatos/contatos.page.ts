import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.page.html',
  styleUrls: ['./contatos.page.scss'],
})
export class ContatosPage implements OnInit {
  argumentos=null

  constructor( private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe( parametros => {
      if (parametros['id']) {
        this.argumentos = parametros['id'];
      }
    });

    console.log(this.argumentos)
    //this.argumentos = this.activeRoute.snapshot.paramMap.get('nome');
  }

}
