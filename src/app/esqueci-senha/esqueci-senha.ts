import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SuporteEsqueciSenha } from '../model/suporte-esqueci-senha';


@Component({
  selector: 'app-esqueci-senha',
  imports: [FormsModule],
  templateUrl: './esqueci-senha.html',
  styleUrl: './esqueci-senha.css',
})
export class EsqueciSenha {

  obj: SuporteEsqueciSenha = new SuporteEsqueciSenha();
  mensagem: string = '';

  enviar() {
    if (this.obj.email == "diego@gmail.com") {

      localStorage.setItem("esqueciSenha", JSON.stringify(this.obj));

      this.mensagem = ("Enviamos um link para redefinição de senha para o seu email.");


    } else {
      this.mensagem = "Email não encontrado!";
    }


  }
  cancelar () {
    location.href =  'login'
  }


  
}

