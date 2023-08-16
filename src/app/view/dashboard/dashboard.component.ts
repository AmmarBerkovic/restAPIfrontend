import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  persons: Person[] = [];

  constructor(private personService: PersonsService) { }

  ngOnInit(): void {
    this.getPersons();
  }
  getPersons() {
    this.personService.getPersons().subscribe((persons,) => {
      this.persons = persons;
    })
  }
  addPerson(name: string, surname: string) {
    this.personService.addPerson(new Person(name, surname)).subscribe((person) => {
      this.persons.push(person);
    });
  }
  deletePerson(surname: string) {
    this.personService.deletePerson(surname).subscribe((person) => {
      this.getPersons();
    });
  }
  updatePerson(surname: string, name: string) {
    this.personService.updatePerson(surname, name).subscribe((person) => {
      this.getPersons();
    });
  }

}
