import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  users = []


  constructor(private httpClient: HttpClient) {
    this.carregaUsers()
  }

  async carregaUsers() {
    const requisicao = await this.httpClient
      .get<any>(`http://localhost:8080/users`)
      .toPromise();

    this.users = requisicao;
  }
}
