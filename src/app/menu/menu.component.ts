import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TeamPageComponent } from '../team-page/team-page.component';
import { PokemonServiceService } from '../pokemon-service.service';
import { LoginPageComponent } from '../login-page/login-page.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {

  filtro: string = "";
<<<<<<< HEAD
  isLoggedIn: boolean = false;

  constructor(public dialog: MatDialog, public pokemonService: PokemonServiceService) {}

  //todo- add validacao de login
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    if(this.isLoggedIn){

    this.dialog.open(TeamPageComponent, {
      width: '800px',
=======
  isLoggedIn: boolean = true;

  constructor(public dialog: MatDialog, public pokemonService: PokemonServiceService) {}

  //todo- add validacao de login 
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    if(this.isLoggedIn){
     
    this.dialog.open(TeamPageComponent, {
      width: '1200px',
>>>>>>> 682b9f703466f9ee776f6be0c2111ded08dfdda3
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  else {
    this.dialog.open(LoginPageComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}

<<<<<<< HEAD
}
=======
}
>>>>>>> 682b9f703466f9ee776f6be0c2111ded08dfdda3
