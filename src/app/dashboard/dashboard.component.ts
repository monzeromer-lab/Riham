import { Component, OnInit } from '@angular/core';
import { IHero } from '../interfaces/Heros';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  heros: IHero[] = [];
  model: boolean = false;
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeros();
  }

  getHeros(): void {
    this.heroService
      .getHeros()
      .subscribe((heros) => (this.heros = heros.slice(0, 3)));
  }

  Model() {
    this.model = !this.model;
  }
}
