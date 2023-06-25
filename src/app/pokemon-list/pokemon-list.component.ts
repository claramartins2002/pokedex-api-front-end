import { Component } from '@angular/core';
import {  PokemonServiceService } from '../pokemon-service.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  constructor(public pokemonService: PokemonServiceService) {}

}
