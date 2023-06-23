import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {
  pokemons = [];

  constructor(private httpClient: HttpClient) {
    this.carregarPokemons();
  }

  async carregarPokemons() {
    const requisicao = await this.httpClient
      .get<any>('https://pokeapi.co/api/v2/pokemon?limit=151')
      .toPromise();

    this.pokemons = requisicao.results;
  }
  async filtrar(value: string) {
  if(!value) {
     window.location.reload();
  } else {
    this.pokemons = this.pokemons!.filter(x=> 
     JSON.stringify(x['name']).trim().toLowerCase().includes(value.trim().toLowerCase())
    );
  }
}
}