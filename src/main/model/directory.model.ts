import {Column, Model, NotNull, PrimaryKey, Table, Unique} from 'sequelize-typescript';

@Table({
  modelName: 'directory',
})
export class DirectoryModel extends Model<DirectoryModel> {
  @PrimaryKey @Column @NotNull name: string;
  @Unique @Column @NotNull path: string;
  @Column isFavorite: boolean;
  @Column currentVersion: string;
}
