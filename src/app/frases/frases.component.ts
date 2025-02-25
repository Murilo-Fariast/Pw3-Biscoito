//Murilo Farias e Francisco
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'app-frases',
  imports: [CommonModule],
  templateUrl: './frases.component.html',
  styleUrl: './frases.component.css'
})
export class FrasesComponent {
  frases: string[] = [
    "A felicidade não é algo pronto, ela vem de suas próprias ações..",
    "Não é o que você faz, mas como você faz, que realmente importa",
    "A única limitação que você tem é aquela que você impõe a si mesmo.",
    "A persistência é o caminho do êxito",
    "O futuro depende do que você faz hoje.",
    "A vida começa onde sua zona de conforto termina.",
    "A felicidade não é algo pronto, ela vem de suas próprias ações.",
    "Seja a mudança que você quer ver no mundo.",
    "Acredite em si mesmo e tudo será possível.",
    "O maior erro que você pode cometer é não fazer nada."
  ];

  fraseAleatoria: string = this.frases[Math.floor(Math.random() * this.frases.length)];

  @Input() exibirFrase: boolean = true;
  get classeVisibilidade() {
    return this.exibirFrase ? 'visivel' : 'oculto';
  }
}


