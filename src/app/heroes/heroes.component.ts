import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';

import { Hero }               from '../model/hero';
import { HeroService }        from '../service/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl : './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})

export class HeroesComponent implements OnInit {
  selectedHero : Hero;
  heroes: Hero[];

  constructor(
      private heroService: HeroService,
      private router: Router
      ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  gotoDetail() : void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    //this.heroes = this.heroService.getHeroes();
  }

  onSelect(hero : Hero): void {
    this.selectedHero = hero;
  }
}
