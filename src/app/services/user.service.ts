import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './../model/user.model';
import {AGENDA_API} from './agenda.api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient) {}

  login(user:User){
    return this.http.post(`${ AGENDA_API}/api/auth`,user);

  }

  createOrUpdate(user:User){
    if(user.id !=null && user.id != ''){
    return this.http.put(`${ AGENDA_API}/api/auth`,user);
    }else {
      user.id != null;
      return this.http.post(`${ AGENDA_API}/api/auth`,user);
    }

  }

   
}
