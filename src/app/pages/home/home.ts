import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  imports: [
    CommonModule, // 👈 IMPORTANTE: Para *ngFor, *ngIf, etc.
    NzAvatarModule,
    NzBadgeModule,
    NzCardModule,
    NzGridModule,
    NzTagModule,
    NzButtonModule,
    NzIconModule,
  ],
})
export class Home {
  name = 'Edgar David Jiménez Jijón';
  title = 'Ingeniero en Sistemas Computacionales';
  specialty = 'Full Stack Developer';

  description = `Soy un desarrollador web especializado en tecnologías backend y frontend, 
  con experiencia sólida en Java, Angular, Django y Spring Boot. Me he enfocado en construir 
  aplicaciones empresariales escalables y seguras, integrando interfaces dinámicas y backend robustos.`;

  achievements = [
    'Medalla de Plata - Infomatrix Regional Oaxaca 2025',
    'Medalla de Plata - Infomatrix Nacional 2025',
    'Sistema de Gestión de Archivos premiado',
  ];

  location = 'Oaxaca de Juárez, Oax., México';
  email = 'dgr36877@gmail.com';
  phone = '+52 (951) 453 6178';

  // Método para descargar CV
  downloadCV() {
    // Ruta del archivo en la carpeta public
    const cvPath = '/CV_Edgar David Jimenez Jijon.pdf'; // Ajusta el nombre de tu archivo

    // Crear un enlace temporal para descargar
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'CV_Edgar_Jimenez_Jijon.pdf'; // Nombre del archivo al descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // Método para abrir GitHub
  openGitHub() {
    window.open('https://github.com/edgar1223', '_blank');
  }

  // Método para abrir LinkedIn
  openLinkedIn() {
    window.open(
      'https://www.linkedin.com/in/edgar-david-jim%C3%A9nez-jij%C3%B3n-4290a71b9/',
      '_blank',
    );
  }
}
