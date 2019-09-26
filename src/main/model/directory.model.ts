import {AutoIncrement, Column, Default, Model, NotNull, PrimaryKey, Table, Unique} from 'sequelize-typescript';

@Table({
  modelName: 'directory',
})
export class DirectoryModel extends Model<DirectoryModel> {
  @PrimaryKey @AutoIncrement @Column id: number;
  @Unique @NotNull @Column({allowNull: false}) name: string;
  @Unique @NotNull @Column({allowNull: false}) path: string;
  @Default(false) @NotNull @Column({allowNull: false}) isFavorite: boolean;
  @Default('') @NotNull @Column({allowNull: false}) currentVersion: string;
}
