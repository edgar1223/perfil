import { Component } from '@angular/core';

import { Navbar } from './shared/navbar/navbar';
import { Footer } from './shared/footer/footer';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Skills } from './pages/skills/skills';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Footer,
    Home,
    About,
    Skills,
    Projects,
    Contact
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}