import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transaccion-form',
  templateUrl: './transaccion-form.component.html',
  styleUrls: ['./transaccion-form.component.css'],
})
export class TransaccionFormComponent implements OnInit {
  transaccionForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.transaccionForm = this.fb.group({
      idEstacion: ['', Validators.required],
      idTren: ['', Validators.required],
      foto: ['', [Validators.required, Validators.pattern(/^https?:\/\//)]],
      descripcion: ['', Validators.required],
      fechaHora: ['', Validators.required],
      idDestino: ['', Validators.required],
      necesitaAsistencia: [true],
    });
  }

  onSubmit(): void {
    if (this.transaccionForm.valid) {
      console.log('Formulario enviado:', this.transaccionForm.value);
      // Aquí puedes enviar los datos al backend
    } else {
      console.log('Formulario inválido');
    }
  }

  resetForm(): void {
    this.transaccionForm.reset({
      necesitaAsistencia: true,
    });
  }
}
