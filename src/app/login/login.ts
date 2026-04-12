import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../model/cliente';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  
  obj: Cliente = new Cliente();
  mensagem: string = '';

  entrar() {
    if(this.obj.email=="diego@gmail.com" && this.obj.senha=="123"){
        this.obj.nome = "Diego";
        this.obj.endereco = "Rua frei joao";
        this.obj.numero = "59";
        this.obj.estado = "sp"
        this.obj.telefone = "11 1233-1223";
        localStorage.setItem("Cliente", JSON.stringify(this.obj));
        this.mensagem = "Login realizado com sucesso!";
      } else {
        this.mensagem = "Email ou senha incorretos!";
      }
  }

  esqueciSenha() {
    location.href = 'esqueciSenha';
  }

  irParaCadastro() {
    location.href = 'cadastro';
    
  }
  
  cancelar() {
    location.href = 'vitrine';
  }
 
}
