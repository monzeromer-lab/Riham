import { Component, OnInit } from '@angular/core';
import { IHero } from '../interfaces/Heros';
import { HeroService } from '../hero.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css'],
})
export class HerosComponent implements OnInit{

  constructor(private heroService: HeroService, private messageService: MessagesService) {}

  heros: IHero[] = [];
  
  ngOnInit(): void{
    this.getHeros();
  }

  getHeros() {
    this.heroService.getHeros().subscribe(heros => this.heros = heros);
  }
}
