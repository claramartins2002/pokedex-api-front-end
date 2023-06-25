import { Component } from '@angular/core';
<<<<<<< HEAD
import { TeamServiceService } from '../team-service.service';
import { MatDialogRef } from '@angular/material/dialog';
=======
import { MatDialogRef } from '@angular/material/dialog';
import { GlobalService } from '../global.service';
>>>>>>> 682b9f703466f9ee776f6be0c2111ded08dfdda3

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.css']
})
export class TeamPageComponent {
<<<<<<< HEAD
  constructor(public teamService: TeamServiceService, public dialogRef: MatDialogRef<TeamPageComponent>) {}
=======
  pokemonTeam: any[] = [];
  constructor(public globalService: GlobalService, public dialogRef: MatDialogRef<TeamPageComponent>) {}
>>>>>>> 682b9f703466f9ee776f6be0c2111ded08dfdda3

}
