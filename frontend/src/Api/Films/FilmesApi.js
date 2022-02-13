import React, {Component} from 'react';
import AbstractAPI from '../AbstractApi';
import Collection from '../../Collection/Collection.js'
import FilmsFactory from '../../Factories/FilmsFactory';

export default class FilmsApi extends Component {
  async list(service){
    const response = await new AbstractAPI().call('GET', service);
    const filmsArray = response.data.map(data => {
            return FilmsFactory.create(data)
         });
        return new Collection(filmsArray);
    }
    update(service, id, user){
        const response = new AbstractAPI().call('PUT', service, id, user);
        response.then(res=>{
        })
        return response;
    }
    create(service, obj){
        const response = new AbstractAPI().call('POST', service, '', obj);
        response.then(res => {

        });
        return response;
    }
    delete(service, id){
        const response = new AbstractAPI().call('DELETE', service, id);
        response.then(res=>{
        })
        return response;
    }
}