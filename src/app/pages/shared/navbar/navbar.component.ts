import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  currentTime: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  private updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString();
  }

  navigateToEstacionPMR() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/lista']); // Redirige si está autenticado
    } else {
      this.router.navigate(['/login']); // Redirige si no está autenticado
    }
  }
  
  navigateToForm() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/form']); // Redirige si está autenticado
    } else {
      this.router.navigate(['/login']); // Redirige si no está autenticado
    }
  }
}
