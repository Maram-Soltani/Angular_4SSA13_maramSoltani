import { Component, signal } from '@angular/core';
import { EventM } from '../models/EventM';

@Component({
  selector: 'app-event',
  imports: [],
  templateUrl: './event.html',
  styleUrl: './event.css',
})
export class Event {
  events = signal<EventM[]>([
    {
      id: 1,
      title: 'Concert K-pop',
      description: 'Concert de musique',
      location: 'Tunis',
      date: '2026-10-10',
      price: 50,
      nbPLaces: 100,
    },
    {
      id: 2,
      title: 'Workshop Angular',
      description: 'Formation Angular',
      location: 'Ariana',
      date: '2026-10-15',
      price: 30,
      nbPLaces: 50,
    },
  ]);
  selectedEvent = signal<EventM | null>(null);
  details(id: number) {
    const event = this.events().find((e) => e.id === id);
    this.selectedEvent.set(event || null);
  }

  participer(id: number) {
    this.events.update((list) =>
      list.map((event) =>
        event.id === id && event.nbPLaces > 0 ? { ...event, nbPLaces: event.nbPLaces - 1 } : event,
      ),
    );
  }

  modifier(id: number) {
    console.log('Modifier :', id);
  }

  supprimer(id: number) {
    this.events.update((list) => list.filter((event) => event.id !== id));
  }
}
