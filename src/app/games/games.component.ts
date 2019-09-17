import {Component, OnInit} from '@angular/core';
import {ElectronService} from '../@core/services';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  constructor(electronService: ElectronService) {
  }

  ngOnInit() {
  }

}
