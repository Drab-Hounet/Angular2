import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Hero }           from '../hero';
import { HEROES }         from '../mock-heroes';

import 'rxjs/add/operator/map';

@Injectable()
export class HeroService {
  constructor (
    private http: Http
  ) {}

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  } // stub

  getUser() {
    return this.http.get(`https://conduit.productionready.io/api/profiles/eric`)
    .map((res:Response) => res.json());
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
  }
}
