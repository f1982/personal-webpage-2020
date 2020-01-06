import _ from 'lodash'
import { add } from 'lodash/fp'
import {
  observable,
  autorun,
  action,
  reaction,
  computed,
  transaction
} from "mobx";

interface PersonObject {
  firstName: string;
  lastName: string;
  age: number;
  fullName: string;
  setFirstAndLastName?: any;
}

var person: PersonObject = observable({
  firstName: "Andy",
  lastName: "Cao",
  age: 37,
  get fullName() {
    console.log("--hit fullName--");
    return this.firstName + " " + this.lastName;
  }
});

autorun(() => {
  console.log(person.fullName + " " + person.age);
});

const startMobXTest = () => {
  // _.times(10, () => {
  //     person.age = _.random(40);
  // });

  // transaction(() => {
  //     _.times(10, () => {
  //         person.age = _.random(40);
  //     });
  // })

  Object.assign(person, {
    setFirstAndLastName: action(function setFirstAndLastName(
      firstName: string,
      lastName: string
    ) {
      person.firstName = firstName;
      person.lastName = lastName;
    })
  });

  person.setFirstAndLastName("Cindy", "Fang");
};

export { startMobXTest };
