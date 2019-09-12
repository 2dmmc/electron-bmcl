import {Column, Model, PrimaryKey, Table} from 'sequelize-typescript';

@Table
export class SettingModel extends Model<SettingModel> {
  @PrimaryKey @Column key: string;
  @Column value: string;
}
