function schoolRegister(input) {
    let arrObj = [];
  
    for (let lines of input) {
      let tokens = lines.split(" ");
      let studentName = tokens[2].split(",")[0];
      let grade = Number(tokens[4].split(",")[0]);
      let studentAvgScore = Number(tokens[10]);
      let registerInfo = {
        studentName,
        grade,
        studentAvgScore,
      };
      arrObj.push(registerInfo);
    }
    let sortedArr = arrObj.sort((a, b) => a.grade - b.grade);
    for (let keys of sortedArr) {
      if (keys.studentAvgScore >= 3) {
        keys.grade++;
        console.log(`
        ${keys.grade} Grade
        List of students: ${keys.studentName}
        Average annual grade from last year: ${keys.studentAvgScore.toFixed(2)}`);
        console.log();
      }
    }
  }
  
  schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
  ]);