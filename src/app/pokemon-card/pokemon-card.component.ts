import { Component, Input } from '@angular/core';
<<<<<<< HEAD
=======
import { GlobalService } from '../global.service';
>>>>>>> 682b9f703466f9ee776f6be0c2111ded08dfdda3

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
<<<<<<< HEAD
  @Input()
  pokemon: string = "pokemon de teste";


  @Input()
  type: string = "pokemon de teste";

=======
  constructor(public globalService: GlobalService){}
  @Input()
  pokemon: string = "pokemon de teste";

  
  @Input()
  type: string = "pokemon de teste";
  
>>>>>>> 682b9f703466f9ee776f6be0c2111ded08dfdda3
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
<<<<<<< HEAD
  pegarIconeTipoPokemon(tipo: String) {
    return `assets/${tipo}.png`
  }
=======
>>>>>>> 682b9f703466f9ee776f6be0c2111ded08dfdda3
}

