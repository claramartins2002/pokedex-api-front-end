import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserServiceService } from '../user-service.service';
import { GlobalService } from '../global.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  username: string = ""
  password: string = ""

  hide = true;
  constructor(public dialogRef: MatDialogRef<LoginPageComponent>, public service: UserServiceService, private globalService: GlobalService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.globalService.setIsLoggedIn(false);
  }

  login(username: string, password: string) {

    const users = this.service.users

    for (let i = 0; i < users.length; i++) {

      if (users[i]['username'] === username && users[i]['password'] === password) {
        console.log("Login realizado com sucesso!");
        this.dialogRef.close();
        this.openWelcomeModal();
        break;
      } else {
        console.log("Usuário não encontrado!");
        break;
      }
    }

    return false; // Retorna false se não encontrar o username
  }

  openWelcomeModal(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        message: 'Bem-vindo usuário!',
        color: 'green'
      }
    });

    setTimeout(() => {
      dialogRef.close();
    }, 3000); // Feche o modal após 3 segundos
  }

}
