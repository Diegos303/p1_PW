import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../model/produto';
// import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-vitrine',
  imports: [CommonModule],
  templateUrl: './vitrine.html',
  styleUrl: './vitrine.css',
})
export class Vitrine {
  mensagem: string = "";
  lista: Produto[] = [
    
  {
    codigo: 1,
    nome: "Calça Sonia Marrom",
    imagem: "img-protudo/F-Calca-Sonia-Marron.webp",
    descritivo: "Calça de cintura alta com modelagem reta e levemente ampla, que alonga a silhueta com elegância. O caimento é fluido e confortável, valorizando o movimento da peça. Possui acabamento minimalista e estrutura que equilibra sofisticação e praticidade, ideal para composições coordenadas ou produções mais atemporais.\n\nComposição:\n99% Algodão\n1% Elastano",
    categoria: "feminino",
    valor: 868.00,
    promo: 868.00,
    quantidade: 10,
    keywords: "calca, marrom, elegante, cintura alta, feminino"
  },
  {
    codigo: 2,
    nome: "Camisa Mila Listrada",
    imagem: "img-protudo/F-camisa-mila-listrada.webp",
    descritivo: "Camisa de caimento fluido, com modelagem levemente ampla que traz movimento e elegância ao look. Confeccionada em tecido leve, possui toque macio e acabamento sofisticado. O destaque fica por conta das listras verticais que alongam a silhueta e adicionam um ar contemporâneo à peça. A gola clássica e o fechamento frontal por botões reforçam sua versatilidade, permitindo composições que transitam do casual ao sofisticado.\n\nComposição:\n100% Viscose",
    categoria: "feminino",
    valor: 698.00,
    promo: 698.00,
    quantidade: 10,
    keywords: "camisa, listrada, elegante, feminino, social"
  },
  {
    codigo: 3,
    nome: "Polo Manga Curta Piquet",
    imagem: "img-protudo/M-Polo-Manga-Curta-Lisa-Piquet.webp",
    descritivo: "Polo lisa em piquet de toque encorpado, com acabamento impecável e visual limpo. Uma peça essencial que combina casualidade e elegância.\n\nComposição:\n100% Algodão",
    categoria: "masculino",
    valor: 499.90,
    promo: 499.90,
    quantidade: 10,
    keywords: "polo, camiseta, piquet, casual, masculino"
  },
  {
    codigo: 4,
    nome: "Blusão Thermoblock com Capuz",
    imagem: "img-protudo/M-Blusao-Thermoblock-Meio-Ziper-E-Capuz.webp",
    descritivo: "Blusão com meio zíper e capuz, ideal para dias frios.\n\nComposição:\nPreto: 89% Poliéster, 11% Elastano / Forro: 91% Poliéster, 9% Elastano\nMarinho: 90% Poliéster, 11% Elastano / Forro: 91% Poliéster, 9% Elastano",
    categoria: "masculino",
    valor: 699.90,
    promo: 699.90,
    quantidade: 10,
    keywords: "blusao, moletom, frio, capuz, masculino"
  },
  {
    codigo: 5,
    nome: "Paletó Linho Sem Forro",
    imagem: "img-protudo/F-Casulo-Greta-Bege-e-Preto.webp",
    descritivo: "Paletó em linho de caimento natural e visual refinado. Uma peça versátil para ocasiões formais e casuais sofisticadas.\n\nComposição:\n100% Linho\nForro: 52% Acetato, 48% Viscose",
    categoria: "masculino",
    valor: 2999.90,
    promo: 2999.90,
    quantidade: 5,
    keywords: "paleto, linho, elegante, social, masculino"
  },
  {
    codigo: 6,
    nome: "Mochila Couro Bolso Frontal",
    imagem: "img-protudo/A-Mochila-Couro-Bolso-Frontal-Embutido.webp",
    descritivo: "Mochila em couro com bolso frontal embutido.\n\nComposição:\nCouro",
    categoria: "acessorio",
    valor: 1999.90,
    promo: 1999.90,
    quantidade: 8,
    keywords: "mochila, couro, acessorio, bolsa, casual"
  },
  {
    codigo: 7,
    nome: "Casaco Casulo Greta",
    imagem: "img-protudo/F-Casulo-Greta-Bege-e-Preto.webp",
    descritivo: "Casaco sofisticado com modelagem ampla e tecido texturizado. O contraste nas extremidades traz personalidade à peça.\n\nComposição:\n70% Poliamida\n20% Acrílico\n10% Algodão",
    categoria: "feminino",
    valor: 988.00,
    promo: 988.00,
    quantidade: 10,
    keywords: "casaco, elegante, inverno, feminino, sofisticado"
  },
  {
    codigo: 8,
    nome: "Conjunto Martina Tricot",
    imagem: "img-protudo/F-Casulo-Greta-Bege-e-Preto.webp",
    descritivo: "Conjunto sofisticado com blusa de gola alta, mangas amplas e modelagem confortável. A calça possui caimento reto e fluido.\n\nComposição:\n100% Poliéster",
    categoria: "feminino",
    valor: 1398.00,
    promo: 1398.00,
    quantidade: 10,
    keywords: "conjunto, tricot, elegante, feminino, moderno"
  },
  {
    codigo: 9,
    nome: "Bolsa Tote Preta Média",
    imagem: "img-protudo/Bolsa-Tote-Preta-Media.webp",
    descritivo: "Bolsa tote média preta com acabamento texturizado. Possui alças de mão e alça longa regulável.\n\nDimensões: 29x12x21cm\nMaterial: Outros",
    categoria: "acessorio",
    valor: 359.90,
    promo: 359.90,
    quantidade: 15,
    keywords: "bolsa, tote, preta, acessorio, feminino"
  },
  {
    codigo: 10,
    nome: "Cinto Couro Marrom",
    imagem: "img-protudo/Bolsa-Tote-Preta-Media.webp",
    descritivo: "Cinto feminino marrom em couro com fivela metálica e acabamento texturizado.\n\nMaterial: Couro",
    categoria: "acessorio",
    valor: 229.90,
    promo: 229.90,
    quantidade: 20,
    keywords: "cinto, couro, marrom, acessorio, feminino"
  },
  {
    codigo: 11,
    nome: "Bermuda Sarja Cargo",
    imagem: "img-protudo/M-Bermuda-Sarja-Bolso-Faca-Cargo-Com-Elastico.webp",
    descritivo: "Bermuda em sarja com bolso cargo e elástico.\n\nComposição:\n57% Liocel\n33% Algodão\n7% Elastomultiéster\n3% Elastano",
    categoria: "masculino",
    valor: 459.90,
    promo: 459.90,
    quantidade: 12,
    keywords: "bermuda, cargo, sarja, casual, masculino"
  },
  {
    codigo: 12,
    nome: "Boné Sarja Bordado",
    imagem: "img-protudo/Bone-Basico-De-Sarja-Bordado-Com-Contraste.webp",
    descritivo: "Boné de sarja com design minimalista e acabamento premium.\n\nComposição:\n100% Algodão",
    categoria: "acessorio",
    valor: 199.90,
    promo: 199.90,
    quantidade: 25,
    keywords: "bone, sarja, acessorio, casual, estilo"
  }
];




  

  /*Routes*/

  redirecionar(obj:Produto){
      localStorage.setItem("ProdutoSelecionado", JSON.stringify(obj));
      location.href="detalhe";
  }
}
