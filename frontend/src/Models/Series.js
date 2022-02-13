import {Component} from 'react';

export default class Series extends Component {
  constructor(id, name, description, image){
    super();
    this.data = {
      id, name, description, image
    }
  }
  get id(){
    return this.data.id;
  }
  set id(id){
      this.data.id = id;
  }
  get name(){
    return this.data.name;
  }
  set name(name){
      this.data.name = name;
  }
  get description(){
    return this.data.description;
  }
  set description(description){
      this.data.description = description;
  }
  get image(){
    return this.data.image;
  }
  set image(image){
      this.data.image = image;
  }
  
}