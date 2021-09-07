import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'List of pokemons';
  value = 1;

  //pokemons = new Pokemon();
  pokemons: Pokemon[] = POKEMONS ;

  ngOnInit(): void {}

  onClick() {
    console.log(this.pokemons);
  }
}
