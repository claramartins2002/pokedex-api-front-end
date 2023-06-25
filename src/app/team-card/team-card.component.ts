import { Component, Input } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})
export class TeamCardComponent {

  constructor(public globalService: GlobalService){}
  @Input()
  pokemon: string = "pokemon de teste";

  
  @Input()
  type: string = "pokemon de teste";
  
  @Input()
  imageUrl: string = "";

}
