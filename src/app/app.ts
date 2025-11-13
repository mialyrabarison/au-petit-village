import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

// Composants standalone
import HeaderComponent from './components/header/header';
import FooterComponent from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // <- au pluriel
})
export default class App {
  protected readonly title = signal('au-petit-village');
}
