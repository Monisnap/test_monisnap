import { Model } from "mongoose";
import DataHandler from "../data_access/DataHandler";

export default class BaseManager<TModel> {
  public model: Model<TModel>;
  protected dbHandler: DataHandler<TModel>;

  constructor(model: Model<TModel>) {
    this.model = model;
    this.dbHandler = new DataHandler<TModel>(model);
  }

  async find(filter: any): Promise<TModel[]> {
    return this.dbHandler.find(filter);
  }

  async update(data: TModel): Promise<TModel> {
    return this.dbHandler.update(data);
  }

  async create(data: TModel | TModel[]): Promise<TModel | TModel[]> {
    return this.dbHandler.create(data);
  }
}
