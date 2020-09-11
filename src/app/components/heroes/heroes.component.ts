import { compileNgModuleFromRender2 } from '@angular/compiler/src/render3/r3_module_compiler';
import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[];
  constructor(private _heroesService: HeroesService,
              private router: Router) {
    // console.log('constructor');
  }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
    // sconsole.log(this.heroes);
  }

  // tslint:disable-next-line: typedef
  verHeroe(idx: number){
    this.router.navigate(['/heroe', idx]);
  }

}
