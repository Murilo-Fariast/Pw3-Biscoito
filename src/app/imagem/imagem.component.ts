import { Component } from '@angular/core';

@Component({
  selector: 'app-imagem',
  imports: [],
  templateUrl: './imagem.component.html',
  styleUrl: './imagem.component.css'
})
  export class ImagemComponent {
    biscoito: string = '/biscoito-fechado.jpeg'; 
    biscoitoAberto: string = '/biscoito-aberto.jpeg';
    imagemAtual: string = this.biscoito;
  
    alternarImagem() {
      this.imagemAtual = this.imagemAtual === this.biscoito ? this.biscoitoAberto: this.biscoito;
    }

}
