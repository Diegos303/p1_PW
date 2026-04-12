import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-vitrine',
  imports: [CommonModule, RouterLink],
  templateUrl: './vitrine.html',
  styleUrl: './vitrine.css',
})
export class Vitrine {
  mensagem: string = "";
  lista: Produto[] = [];


  

  /*Routes*/

  redirecionar(obj:Produto){
      localStorage.setItem("ProdutoSelecionado", JSON.stringify(obj));
      location.href="detalhe";
  }
}
