import {Component, Input} from '@angular/core';
import {IGame} from '../../../@model/game.interface';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  @Input() game: IGame;
}
