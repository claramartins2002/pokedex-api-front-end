import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  template: `
    <h2 mat-dialog-title>{{ data.message }}</h2>
    <div mat-dialog-content>
      <!-- Conteúdo adicional do modal, se necessário -->
    </div>
  `,
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
