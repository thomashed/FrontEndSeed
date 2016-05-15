import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-details.component';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}!</h1>

    <!-- Our heroes -->
    <h2>My heroes</h2>
    <ul>
        <li *ngFor="let hero of heroes" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
            <span class="badge">{{hero.id}}</span>{{hero.name}}
        </li>
    </ul>

    <my-hero-detail [hero]="selectedHero"></my-hero-detail>


    `,
    styles:[`
      h2 {
        color: blue;
      }
      .badge span {
        color: blue;
      }
      .heroes .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0 0 4px;
      }
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .heroes {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
      }
      .heroes li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0;
        height: 1.6em;
        border-radius: 4px;
      }
      .heroes li.selected:hover {
        background-color: #BBD8DC !important;
        color: white;
      }
      .heroes li:hover {
        color: #607D8B;
        background-color: #DDD;
        left: .1em;
      }
      .heroes .text {
        position: relative;
        top: -3px;
      }
    `],
    directives: [HeroDetailComponent],
    providers: [HeroService]
})
export class AppComponent implements OnInit {
    // A lifecycle hook
    ngOnInit(){
        this.getHeroes();
    }
    constructor(private heroService: HeroService) {}
    title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;
    // Will populate the 'heroes' array
    getHeroes(){
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    // Will set css class on selected hero
    onSelect(hero: Hero){
        this.selectedHero = hero;
    }
}

