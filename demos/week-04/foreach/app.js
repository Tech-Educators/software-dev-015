const students = [
  "Liam",
  "Bertie",
  "Angelica (Happy Birthday)",
  "Cameron",
  "Barmington",
  "Adam",
  "Stefan",
  "Reece",
  "Nick",
  "Andre",
  "Jae",
  "Khushi",
];

// for loop
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

// forEach loop
students.forEach(function (student) {
  console.log(student);
});

// forEach in one line
students.forEach((student) => console.log(student));
