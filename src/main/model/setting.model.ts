import {Column, Model, PrimaryKey, Table} from 'sequelize-typescript';

@Table({
  modelName: 'settings',
})
export class SettingModel extends Model<SettingModel> {
  @PrimaryKey @Column key: string;
  @Column value: string;
}
