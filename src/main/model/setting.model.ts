import {Column, Model, PrimaryKey, Table, DataType} from 'sequelize-typescript';

@Table({
  modelName: 'settings',
})
export class SettingModel extends Model<SettingModel> {
  @PrimaryKey @Column key: string;
  @Column({type: DataType.TEXT}) value: string;
}
