import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

interface Skill {
  name: string;
  imageUrl: string;
  yearsOfExperience: number;
  category: string;
  description: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, NzCarouselModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  // Skills con imágenes desde la carpeta public
  allSkills: Skill[] = [
    {
      name: 'Java',
      imageUrl: '/java.jpg',
      yearsOfExperience: 3,
      category: 'Backend',
      description: 'Aplicaciones empresariales',
    },
    {
      name: 'Spring Boot',
      imageUrl: '/spring.png',
      yearsOfExperience: 2.5,
      category: 'Backend',
      description: 'Microservicios y APIs REST',
    },
    {
      name: 'Python',
      imageUrl: '/Python.webp',
      yearsOfExperience: 2,
      category: 'Backend',
      description: 'Automatización y backend',
    },
    {
      name: 'Django',
      imageUrl: '/django.png',
      yearsOfExperience: 2,
      category: 'Backend',
      description: 'Desarrollo web rápido',
    },
    {
      name: 'Angular',
      imageUrl: '/angular.jpg',
      yearsOfExperience: 3,
      category: 'Frontend',
      description: 'SPAs y aplicaciones empresariales',
    },
    {
      name: 'Ionic',
      imageUrl: '/ionic.png',
      yearsOfExperience: 1.5,
      category: 'Mobile',
      description: 'Apps híbridas',
    },
    {
      name: 'TypeScript',
      imageUrl: '/ts.png',
      yearsOfExperience: 2.5,
      category: 'Frontend',
      description: 'Tipado estático en JS',
    },
    {
      name: 'PostgreSQL',
      imageUrl: '/postgres.png',
      yearsOfExperience: 2.5,
      category: 'Database',
      description: 'Bases de datos relacionales',
    },
    {
      name: 'Redis',
      imageUrl: '/redis.png',
      yearsOfExperience: 1,
      category: 'Database',
      description: 'Caché y mensajería',
    },
    {
      name: 'Docker',
      imageUrl: '/docker.png',
      yearsOfExperience: 1.5,
      category: 'DevOps',
      description: 'Contenedores y despliegue',
    },
    {
      name: 'AWS',
      imageUrl: '/aws.png',
      yearsOfExperience: 1,
      category: 'Cloud',
      description: 'Servicios en la nube',
    },
    {
      name: 'Git',
      imageUrl: '/git.png',
      yearsOfExperience: 3,
      category: 'Tools',
      description: 'Control de versiones',
    },
  ];

  // Agrupar por categoría
  getSkillsByCategory(category: string): Skill[] {
    return this.allSkills.filter((skill) => skill.category === category);
  }

  categories = [
    'Backend',
    'Frontend',
    'Database',
    'Mobile',
    'DevOps',
    'Cloud',
    'Tools',
  ];

  // Manejo de error cuando no carga la imagen
  handleImageError(event: any) {
    // Intenta con formato PNG si falló
    const currentSrc = event.target.src;
    if (!currentSrc.includes('.png') && !currentSrc.includes('.webp')) {
      event.target.src = currentSrc.replace(/\.(jpg|jpeg)$/, '.png');
    } else {
      // Si ya falló con PNG, usa un placeholder
      event.target.src = '/placeholder.svg';
      console.warn('No se pudo cargar la imagen:', currentSrc);
    }
  }
}
