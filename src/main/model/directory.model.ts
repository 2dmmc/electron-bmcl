import {
  AutoIncrement,
  Column,
  DataType,
  Default,
  Model,
  NotNull,
  PrimaryKey,
  Table,
  Unique
} from 'sequelize-typescript';

@Table({
  modelName: 'directory',
})
export class DirectoryModel extends Model<DirectoryModel> {
  @PrimaryKey @AutoIncrement @Column id: number;
  @Unique @NotNull @Column({allowNull: false}) name: string;
  @Unique @NotNull @Column({allowNull: false}) path: string;
  @Default(false) @NotNull @Column({allowNull: false}) isFavorite: boolean;
  @Default('') @NotNull @Column({allowNull: false}) currentVersion: string;

  @Column loginMethod: string;
  @Column({type: DataType.INTEGER}) memory: number;
  @Column java: string;
  @Column({type: DataType.STRING(1000)}) jvmArguments: string;
  @Column username: string;
  @Column yggdrasilToken: string;
}
