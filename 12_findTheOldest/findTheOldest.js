// const findTheOldest = function(people) {
// return people.map((person) => ({ 
//     name: person.name,
//     age: person.yearOfDeath - person.yearOfBirth
// }))
// .reduce((oldest, current) => (current.age > oldest.age) ? current : oldest);
// };

const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    return people.map((person) => ({ 
        name: person.name,
        age: (person.yearOfDeath || currentYear) - person.yearOfBirth
    }))
    .reduce((oldest, current) => {
      return (current.age > oldest.age) ? current : oldest;
    });
  };
  

// Do not edit below this line
module.exports = findTheOldest;
