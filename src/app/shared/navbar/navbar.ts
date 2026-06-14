import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
  imports: [CommonModule, NzButtonModule, NzDrawerModule, NzIconModule],
})
export class Navbar {
  isVisible = false;

  menuItems = [
    { label: 'Inicio', link: 'home', icon: 'home' },
    { label: 'Sobre Mí', link: 'about', icon: 'user' },
    { label: 'Habilidades', link: 'skills', icon: 'code' },
    { label: 'Proyectos', link: 'projects', icon: 'folder' },
    { label: 'Contacto', link: 'contact', icon: 'mail' },
  ];

  scrollTo(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.isVisible = false;
    }
  }
}
