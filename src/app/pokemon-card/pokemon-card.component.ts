import { Component, Input } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  constructor(public globalService: GlobalService){}
  @Input()
  pokemon: string = "pokemon de teste";

  
  @Input()
  type: string = "pokemon de teste";
  
  @Input()
  numero: number = 0;

  pegarImagemPokemon() {
    const numeroFormatado = this.leadingZero(this.numero);
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroFormatado}.png`;
  }
  leadingZero(str: string | number, size = 3): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = '0' + s;
    }

    return s;
  }
}

