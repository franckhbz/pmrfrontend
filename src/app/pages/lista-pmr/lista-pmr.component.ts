import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-pmr',
  templateUrl: './lista-pmr.component.html',
  styleUrls: ['./lista-pmr.component.css'],
})
export class ListaPmrComponent {
  personas = [
    { id: 1, nombre: 'Juan Pérez', hora: '13:30', destino: 'Villa El Salvador', necesitaAsistencia: true },
    { id: 2, nombre: 'María López', hora: '13:45', destino: 'Bayóvar', necesitaAsistencia: true },
    { id: 3, nombre: 'Pedro Gómez', hora: '14:00', destino: 'Villa El Salvador', necesitaAsistencia: true },
  ];
}
