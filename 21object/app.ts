interface StudentRecord {
    name: string;
    rollNumber: number;
    semester: number;
    fees: number;
    active: boolean;
    age: number;
    gender: string;
  }
  
  const studentRecords: StudentRecord[] = [
    { name: "Ali Khan", rollNumber: 101, semester: 3, fees: 2500, active: true, age: 20, gender: "Male" },
    { name: "Sana Ahmed", rollNumber: 102, semester: 2, fees: 2000, active: true, age: 19, gender: "Female" },
    { name: "Ayesha Mahmood", rollNumber: 103, semester: 4, fees: 3000, active: true, age: 21, gender: "Female" },
    { name: "Usman Malik", rollNumber: 104, semester: 1, fees: 1800, active: false, age: 22, gender: "Male" },
  ];
  
  console.log("Student Records:");
  console.log(studentRecords);