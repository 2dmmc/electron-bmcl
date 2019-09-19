import * as Bluebird from 'bluebird';
import {readdir, stat} from 'fs-extra';
import {DirectoryModel} from '../model/directory.model';
import {join} from 'path';
import {IVersion} from '../../app/@model/version.interface';

export class GameService {
  public constructor(private directory: DirectoryModel) {
  }

  public async listVersions(): Promise<Array<IVersion>> {
    const path = join(this.directory.path, 'versions');
    const files = await readdir(path);
    return Bluebird.filter(files, async (file) => {
      const s = await stat(join(path, file));
      return s.isDirectory();
    })
      .map((name) => ({name}));
  }
}

interface IVersionRule {
  action: string;
  features?: {[key: string]: boolean};
  os: {
    name: string;
    version: string;
  };
}

interface IVersionArgumentRule {
  rules: IVersionRule[];
  value: string;
}

interface IVersionArguments {
  game: Array<string | IVersionArgumentRule>;
  jvm: Array<string | IVersionArgumentRule>;
}

interface IVersionAsset {
  id: string;
  sha1: string;
  size: number;
  totalSize: number;
  url: string;
}

interface IVersionDownload {
  sha1: string;
  size: number;
  url: string;
}

interface IVersionDownloads {
  client: IVersionDownload;
  server: IVersionDownload;
}

interface IVersionArtifact {
  path: string;
  sha1: string;
  size: number;
  url: string;
}

interface IVersionLibrary {
  name: string;
  downloads: {
    artifact: IVersionArtifact;
    classifiers: {
      javadoc: IVersionArtifact;
      'natives-linux': IVersionArtifact;
      'natives-macos': IVersionArtifact;
      'natives-windows': IVersionArtifact;
      sources: IVersionArtifact;
    }
    natives: {
      osx: string;
      linux: string;
      windows: string;
    }
    extract: {
      exclude: string[];
    }
  };
  rules: IVersionRule[];
}

interface IVersionLogging {
  client: {
    argument: string
    file: {
      id: string;
      sha1: string;
      size: string;
      url: string;
    };
    type: string;
  };
}

interface IVersionSchema {
  arguments: IVersionArguments;
  assetIndex: IVersionAsset;
  assets: string;
  downloads: IVersionDownloads;
  libraries: IVersionLibrary[];
  logging: IVersionLogging;
  mainClass: string;
  minimumLauncherVersion: number;
  releaseTime: string;
  time: string;
  type: string;
}
