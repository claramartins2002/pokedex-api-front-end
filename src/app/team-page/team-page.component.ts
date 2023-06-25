import { Component } from '@angular/core';
import { TeamServiceService } from '../team-service.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.css']
})
export class TeamPageComponent {
  constructor(public teamService: TeamServiceService, public dialogRef: MatDialogRef<TeamPageComponent>) {}

}
