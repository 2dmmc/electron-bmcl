import {AutoIncrement, Column, Model, PrimaryKey, Table, Unique} from 'sequelize-typescript';

@Table
export class SettingModel extends Model<SettingModel> {
  @PrimaryKey @AutoIncrement @Column id: number;
  @Unique @Column key: string;
  @Column value: string;
}
