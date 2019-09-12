import {AutoIncrement, Column, Model, PrimaryKey, Table, Unique} from 'sequelize-typescript';

@Table
export class DirectoryModel extends Model<DirectoryModel> {
  @AutoIncrement @PrimaryKey @Column id: number;
  @Unique @Column name: string;
  @Unique @Column path: string;
}
