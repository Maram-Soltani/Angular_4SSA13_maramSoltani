import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Home } from './home/home';
import { Event } from './event/event';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Footer, Header, Home, Event, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('projectSSA');
}
