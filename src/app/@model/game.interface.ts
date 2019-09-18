import {IVersion} from './version.interface';

export interface IGame {
  name: string;
  path: string;
  currentVersion: string;
  versions: IVersion[];
  isFavorite?: boolean;
}
