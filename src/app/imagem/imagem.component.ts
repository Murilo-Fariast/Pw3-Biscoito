import { Component } from '@angular/core';

@Component({
  selector: 'app-imagem',
  imports: [],
  templateUrl: './imagem.component.html',
  styleUrl: './imagem.component.css'
})
  export class ImagemComponent {
    imagemFechada: string = '/biscoito-fechado.jpeg'; 
    imagemAberta: string = '/biscoito-aberto.jpeg';
    imagemAtual: string = this.imagemFechada;
  
    alternarImagem() {
      this.imagemAtual = this.imagemAtual === this.imagemFechada ? this.imagemAberta : this.imagemFechada;
    }

}
