import Series from "../Models/Series";

export default class SeriesFactory {

  static create(payload){
    return new Series(
      payload.id,
      payload.name,
      payload.description,
      payload.image
    )
  }
}