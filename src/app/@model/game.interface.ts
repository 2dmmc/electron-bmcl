import {IVersion} from './version.interface';

export interface IGame {
  name: string;
  currentVersion: string;
  versions: IVersion[];
}
