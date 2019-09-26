import {AutoIncrement, Column, Model, PrimaryKey, Table} from 'sequelize-typescript';
import {DataTypes} from 'sequelize';

@Table({
  modelName: 'settings',
})
export class GameSettingModel extends Model<GameSettingModel> {
  @PrimaryKey @AutoIncrement @Column id: number;
  @Column directoryId: number;
  @Column key: string;
  @Column({type: DataTypes.TEXT}) value: string;
}
