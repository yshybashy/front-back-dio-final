import Films from "../Models/Films";

export default class FilmsFactory {

  static create(payload){
    return new Films(
      payload.id,
      payload.name,
      payload.description,
      payload.image
    )
  }
}