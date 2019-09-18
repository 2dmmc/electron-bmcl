import {Component, OnInit} from '@angular/core';
import {ElectronService} from '../@core/services';
import {IGame} from '../@model/game.interface';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  private mockGames: {
    favorite: IGame[],
    total: IGame[],
  };

  constructor(electronService: ElectronService) {
    this.mockGames = {
      favorite: [{
        name: 'fmc',
        versions: [{
          name: '1.7.2 forge-16.3.384',
        }],
        currentVersion: '1.7.2 forge-16.3.384'
      }],
      total: [{
        name: 'fmc',
        versions: [{
          name: '1.7.2 forge-16.3.384',
        }, {
          name: '1.7.2',
        }],
        currentVersion: '1.7.2 forge-16.3.384'
      }, {
        name: 'bmcl',
        versions: [{
          name: '1.7.2 forge-16.3.384',
        }, {
          name: '1.7.2',
        }],
        currentVersion: '1.7.2 forge-16.3.384'
      }, {
        name: 'rmca',
        versions: [{
          name: '1.7.2 forge-16.3.384',
        }, {
          name: '1.7.2',
        }],
        currentVersion: '1.7.2 forge-16.3.384'
      }, {
        name: '2dmmc 8th',
        versions: [{
          name: '1.7.2 forge-16.3.384',
        }, {
          name: '1.7.2',
        }],
        currentVersion: '1.7.2 forge-16.3.384'
      }, {
        name: '2dmmc 9th',
        versions: [{
          name: '1.7.2 forge-16.3.384',
        }, {
          name: '1.7.2',
        }],
        currentVersion: '1.7.2 forge-16.3.384'
      }]
    };
  }

  ngOnInit() {

  }

}
