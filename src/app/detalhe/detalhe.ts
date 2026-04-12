import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalhe',
  imports: [CommonModule],
  templateUrl: './detalhe.html',
  styleUrl: './detalhe.css',
})
export class Detalhe {
    obj: Produto = new Produto();
    mensagem: string = "";

    ngOnInit() {
      this.carregar();


    }

    carregar() {
      let json = localStorage.getItem("ProdutoSelecionado");
      if(json != null) {
        this.obj = JSON.parse(json);

      }
      else {
        this.mensagem = "Produto invalido!"
      }
    }
    Comprar() {
      
    }

}
