function s_grade (marks){

    let grade;
    let points;

if (marks >= 0 && marks < 33) {
    grade = 'F';
    points = 0;
}else if (marks >= 33 && marks < 40){
    grade = 'D';
    points = 1;
}else if (marks >= 40 && marks < 50){
    grade = 'C';
    points = 2;
}else if (marks >= 50 && marks < 60){
    grade = 'B';
    points = 3;
}else if (marks >= 60 && marks < 70){
    grade = 'A-';
    points = 3.5;
}else if (marks >= 70 && marks < 80){
    grade = 'A';
    points = 4;
}else if (marks >= 80 && marks <= 100){
    grade = 'A+';
    points = 5;
}else{
    grade = 'Invalid!';
    points = 'Invalid!';
}
return {
    grade : grade,
    points : points
};
}

function total_grade (grade){
   let t_grade;
   if (grade >= 0 && grade < 1){
    t_grade = "Failed";
   }else if (grade >= 1 && grade < 2){
    t_grade = "D";
   }else if (grade >= 2 && grade < 3){
    t_grade = "C";
   }else if (grade >= 3 && grade < 3.5){
    t_grade = "B";
   }else if (grade >= 3.5 && grade < 4){
    t_grade = "A-";
   }else if (grade >= 4 && grade < 5){
    t_grade = "A";
   }else if (grade = 5 ){
    t_grade = "A+";
   }
   return t_grade;
} 

function fail (bng, eng, math, sosc, reli, ph, ch, bi){

let final_cgpa;

if (bng == "F" || eng == "F" || math == "F" || sosc == "F" || reli == "F" || ph == "F" || ch == "F" || bi == "F"){

final_cgpa = "Failed";

} else{
final_cgpa = "Passed";
}

return final_cgpa;

}

function t_point (pen){
let pending;
if (pen == "Failed"){
    pending = "Pending"
}
return pending;
}