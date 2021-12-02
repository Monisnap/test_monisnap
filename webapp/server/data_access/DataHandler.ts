import * as mongoose from "mongoose";

export default class DataHandler<T> {
  public TModel: mongoose.Model<T>;

  constructor(model: mongoose.Model<T>) {
    this.TModel = model;
  }

  public async find(filter: any): Promise<T[]> {
    try {
      const results = await this.TModel.find(filter);
      return results;
    } catch (error) {
      return error;
    }
  }

  public async create(data: T | T[]): Promise<T | T[]> {
    try {
      if (!Array.isArray(data)) {
        const dbRecord = new this.TModel(data);
        await dbRecord.save();
        return dbRecord;
      } else return this.TModel.insertMany(data);
    } catch (error) {
      return error;
    }
  }

  public async update(data: T): Promise<T> {
    try {
      const id = data["_id"];
      delete data["_id"];
      delete data["__v"];
      let toUpdate = await this.TModel.findById(id);
      toUpdate.set(data);
      await toUpdate.save();
      return toUpdate;
    } catch (error) {
      return error;
    }
  }
}
