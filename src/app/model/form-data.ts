import { Person } from './person';

export class FormData {
  public thePerson: Person;
  public spouse: Person;

  constructor() {
    this.thePerson = new Person();
    this.spouse = new Person();
    this.spouse.married = true;
  }
}
