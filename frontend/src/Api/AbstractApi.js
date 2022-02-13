import api from './api';
import {Component} from 'react';

export default class AbstractApi extends Component{
  
  call(verb, service, idOrPage, aux){
    switch(verb){
         case 'GET':
             return this.callGet(service, idOrPage, this.token)
        case 'POST':
            return this.callPost(service, this.token, aux)
        case 'PUT':
            return this.callPut(service, idOrPage, this.token, aux);
        case 'DELETE':
            return this.callDelete(service, idOrPage, this.token);
        default :
            return null;    
    }
  }
  async callGet(service){
    var response;
    await api.get((service),{
            headers: {
            }
          }).then(res => {
              response = res;
          })
        return response;
  }
  async callPost(service, token, body){
    var response;
    await api.post(service, body, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(data => {
        response = data;
    })
    return response;
  }
  async callDelete(service, id, token){
    var response;
    await api.delete((service + id),{
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(data => {
        response = data;

    })
    return response;  
  }
  async callPut(service, id, token, user){
    var response;
    await api.put((service + id), user,{
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    }).then(data => {
        response = data;
    })
    return response;
  }
}