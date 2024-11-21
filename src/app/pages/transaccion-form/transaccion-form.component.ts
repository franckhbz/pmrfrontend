import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransaccionService } from 'src/app/service/transaccion.service';

@Component({
  selector: 'app-transaccion-form',
  templateUrl: './transaccion-form.component.html',
  styleUrls: ['./transaccion-form.component.css'],
})
export class TransaccionFormComponent implements OnInit {
  transaccionForm!: FormGroup;
  selectedFile: File | null = null;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private transaccionService: TransaccionService) {}

  ngOnInit(): void {
    this.transaccionForm = this.fb.group({
      idEstacion: ['', Validators.required],
      idTren: ['', Validators.required],
      descripcion: ['', Validators.required],
      idDestino: ['', Validators.required],
    });
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit(): void {
    if (this.transaccionForm.valid && this.selectedFile) {
      const formData = new FormData();
      formData.append('idEstacion', this.transaccionForm.get('idEstacion')?.value);
      formData.append('idTren', this.transaccionForm.get('idTren')?.value);
      formData.append('descripcion', this.transaccionForm.get('descripcion')?.value);
      formData.append('idDestino', this.transaccionForm.get('idDestino')?.value);
      formData.append('foto', this.selectedFile);
      const currentDate = new Date().toISOString().replace('Z', ''); 
      
      formData.append('fechaHora', currentDate);
      // Imprime el contenido de FormData
      console.log('Datos que se enviarán al backend:');
      formData.forEach((value, key) => {
        console.log(`${key}:`, value);
      });
  
      this.transaccionService.createTransaccion(formData).subscribe(
        (response) => {
          console.log('Transacción registrada exitosamente:', response);
          this.successMessage = 'Transacción registrada exitosamente.';
          this.errorMessage = '';
          this.resetForm();
        },
        (error) => {
          console.error('Error al registrar la transacción:', error);
          this.errorMessage = 'Error al registrar la transacción.';
          this.successMessage = '';
        }
      );
    } else {
      this.errorMessage = 'Por favor, completa todos los campos requeridos y selecciona una foto.';
      this.successMessage = '';
    }
  }
  

  resetForm(): void {
    this.transaccionForm.reset();
    this.selectedFile = null;
    this.successMessage = '';
    this.errorMessage = '';
  }
}

