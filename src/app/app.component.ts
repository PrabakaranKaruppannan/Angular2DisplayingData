import { Component } from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'My Heroes';
  heroes: Hero[] = [new Hero (1, 'Super Man'),
    new Hero (2, 'Bat Man'),
    new Hero (3, 'Iron Man'),
    new Hero (4, 'Wonder woman'),
    new Hero (5, 'Wolverine')];

  myHero = this.heroes[0];
}
