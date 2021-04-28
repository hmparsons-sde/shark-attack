const students = [
  {
    id: 1,
    firstName: 'Sara',
    lastName: 'Schoonover',
    isDead: false
  },
  {
    id: 2,
    firstName: 'Casey',
    lastName: 'Walker',
    isDead: false
  },
  {
    id: 3,
    firstName: 'Matthew',
    lastName: 'Gonzales',
    isDead: false
  },
  {
    id: 4,
    firstName: 'Rob',
    lastName: 'Cole',
    isDead: false
  },
  {
    id: 5,
    firstName: 'Katy',
    lastName: 'Fry',
    isDead: false
  },
  {
    id: 6,
    firstName: 'Jesse',
    lastName: 'Robinson',
    isDead: false
  },
  {
    id: 7,
    firstName: 'Chie',
    lastName: 'Stroud',
    isDead: false
  },
  {
    id: 8,
    firstName: 'Tad',
    lastName: 'Sekeres',
    isDead: false
  },
  {
    id: 9,
    firstName: 'Ellie',
    lastName: 'Walker',
    isDead: false
  },
  {
    id: 10,
    firstName: 'Ben',
    lastName: 'Jarrett',
    isDead: false
  },
  {
    id: 11,
    firstName: 'Dani',
    lastName: 'Crosby',
    isDead: false
  },
  {
    id: 12,
    firstName: 'Chris',
    lastName: 'Meffley',
    isDead: false
  },
  {
    id: 13,
    firstName: 'Gabby',
    lastName: 'Tobermann',
    isDead: false
  },
  {
    id: 14,
    firstName: 'Martin',
    lastName: 'Sisk',
    isDead: false
  },
  {
    id: 15,
    firstName: 'John',
    lastName: 'Maple',
    isDead: false
  },
  {
    id: 16,
    firstName: 'Hunter',
    lastName: 'Juneau',
    isDead: false
  },
  {
    id: 17,
    firstName: 'Jim',
    lastName: 'Cooper',
    isDead: false
  },
  {
    id: 18,
    firstName: 'Juan',
    lastName: 'Davila',
    isDead: false
  },
  {
    id: 19,
    firstName: 'Lindsey',
    lastName: 'Satterfield',
    isDead: false
  },
  {
    id: 20,
    firstName: 'Nathan',
    lastName: 'Keith',
    isDead: false
  },
  {
    id: 21,
    firstName: 'Sean',
    lastName: 'Rossettie',
    isDead: false
  },
  {
    id: 22,
    firstName: 'Honey-Rae',
    lastName: 'Swan',
    isDead: false
  },
  {
    id: 23,
    firstName: 'Mitchell',
    lastName: 'Crumbley',
    isDead: false
  },
];

const livingStudents = () => students.filter((student) => student.isDead === false);

const dearlyBeloved = () => students.filter((student) => student.isDead === true);

const followTheLight = (studentId) => {
  students.forEach((response) => {
    if (response.id === studentId) {
      response.isDead = true;
    }
  });
};

export default { livingStudents, dearlyBeloved, followTheLight };
