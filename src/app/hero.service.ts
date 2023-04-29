import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROS } from './mock-heros';
import { IHero } from './interfaces/Heros';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessagesService) {}

  getHeros(): Observable<IHero[]> {
    const heros = of(HEROS);
    this.messageService.add('HeroService: fetched heros');
    return heros;
  }

  getHero(id: number): Observable<IHero> {
    const hero = HEROS.find((h) => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
