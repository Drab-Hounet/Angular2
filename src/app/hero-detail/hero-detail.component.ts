import { Component, Input, OnInit }   from '@angular/core';
import { ActivatedRoute, Params }     from '@angular/router';
import { Location }                   from '@angular/common';
import { Hero }                       from '../model/hero';
import { HeroService }                from '../service/hero.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})

export class HeroDetailComponent implements OnInit {              //to be able to import somewhere else the component
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ){

  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);

  }

  goBack(): void {
    this.location.back();
  }
  @Input() hero: Hero;

}
