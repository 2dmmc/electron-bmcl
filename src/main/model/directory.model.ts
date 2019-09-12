import {Column, Model, PrimaryKey, Table, Unique} from 'sequelize-typescript';

@Table
export class DirectoryModel extends Model<DirectoryModel> {
  @PrimaryKey @Column name: string;
  @Unique @Column path: string;
}
