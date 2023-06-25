import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { MenuComponent } from './menu/menu.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { TeamPageComponent } from './team-page/team-page.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import { ModalComponent } from './modal/modal.component';
=======
import { TeamCardComponent } from './team-card/team-card.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
>>>>>>> 682b9f703466f9ee776f6be0c2111ded08dfdda3

@NgModule({
  declarations: [
    AppComponent,
    PokemonCardComponent,
    PokemonListComponent,
    MenuComponent,
    LoginPageComponent,
    TeamPageComponent,
<<<<<<< HEAD
    ModalComponent
=======
    TeamCardComponent
>>>>>>> 682b9f703466f9ee776f6be0c2111ded08dfdda3
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
<<<<<<< HEAD
    ReactiveFormsModule
=======
    ReactiveFormsModule,
    MatSnackBarModule
>>>>>>> 682b9f703466f9ee776f6be0c2111ded08dfdda3
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
