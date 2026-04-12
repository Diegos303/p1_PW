import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-cadastro',
  imports: [FormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  mensagem: string = "";
  obj: Cliente = new Cliente();

    cadastrar() {
      if (this.obj.email && this.obj.senha && this.obj.repitaSenha) {
        if (this.obj.senha.trim() === this.obj.repitaSenha.trim()) {

          this.mensagem = "O seu cadastro foi realizado com sucesso";

          let json = JSON.stringify(this.obj);
          
          localStorage.setItem("cliente", json);

        } else {
          this.mensagem = "As senhas não coincidem, tente novamente.";
        }
      } else {
        this.mensagem = "";
      }
    }

    cancelar () {
      location.href =  'login'
    }


}

