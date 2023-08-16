import { Injectable } from '@angular/core';
import { Person } from '../models/person';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor(private webService: WebService) { }

  getPersons(){
    return this.webService.get('persons');
  }
  addPerson(person : Person){
    return this.webService.post('persons', person);
  }
  deletePerson(name : string){
    return this.webService.delete('persons', name);
  }
  updatePerson(surname:string, name:string){
    return this.webService.patch('persons',surname,name)
  }
}
