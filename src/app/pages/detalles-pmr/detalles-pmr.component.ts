import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-pmr',
  templateUrl: './detalles-pmr.component.html',
  styleUrls: ['./detalles-pmr.component.css'],
})
export class DetallesPmrComponent implements OnInit {
  persona: any;
  personas = [
    { id: 1, nombre: 'Juan Pérez', hora: '13:30', destino: 'Villa El Salvador', estacion: 'Bayóvar', necesitaAsistencia: true },
    { id: 2, nombre: 'María López', hora: '13:45', destino: 'Bayóvar', estacion: 'Bayóvar', necesitaAsistencia: true },
    { id: 3, nombre: 'Pedro Gómez', hora: '14:00', destino: 'Villa El Salvador', estacion: 'Bayóvar', necesitaAsistencia: true },
  ];
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.persona = this.personas.find((p) => p.id === id);
  }
  cambiarEstado() {
    if (this.persona) {
      this.persona.necesitaAsistencia = !this.persona.necesitaAsistencia;
    }
  }
}
