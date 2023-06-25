import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.css']
})
export class TeamPageComponent {
  pokemonTeam: any[] = [];
  constructor(public globalService: GlobalService, public dialogRef: MatDialogRef<TeamPageComponent>) {}

}
