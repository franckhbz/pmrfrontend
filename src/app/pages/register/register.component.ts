import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  station: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}


  onRegister() {
    this.authService.register(this.name, this.email, this.password, this.station).subscribe(
      (response) => {
        console.log('Registro exitoso:', response);
        this.successMessage = 'Registro exitoso, ahora puedes iniciar sesión.';
        this.errorMessage = '';
  
        // Redirigir al componente de inicio de sesión
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error al registrarse:', error);
        this.errorMessage = 'Ocurrió un error al registrarse.';
        this.successMessage = '';
      }
    );
  }
  
}
