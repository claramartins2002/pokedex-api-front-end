import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }
  private isLoggedIn: boolean = false;

  getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  setIsLoggedIn(value: boolean): void {
    this.isLoggedIn = value;
  }

  private team: any[] = [];

  getTeam(): any[] {
    return this.team;
  }

  addToTeam(value: any): void {
    this.team.push(value);
  }
  removeInTeam(value: any): void {
    const index = this.team.indexOf( value );
    this.team.splice(index, 1);  }
}
