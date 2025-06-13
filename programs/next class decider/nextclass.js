function studentstoredinfo(){
    let studentname = document.getElementById("nameofstudent");


    let studentgrade = document.getElementById("gradeofstudent");

    studentname.textContent =`THE NAME OF THE STUDENT IS:${document.getElementById("studentsname").value}`;
    studentgrade.textContent =` THE SCORE IS:${document.getElementById("gradeInput").value}`;

    let score = document.getElementById("gradeInput").value;

    let actualgrade = score < 40 ? "F" :
            score < 60 ? "C" :
            score < 75 ? "B" :
            score < 90 ? "A" :
            "Excellent";


let actualoutputgrade = document.getElementById("actualgrade");

actualoutputgrade.textContent = `THE GRADE OF THE STUDENT IS:${actualgrade}`;
}

            


            
