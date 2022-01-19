const result_cal = document.querySelector('#result_cal');
const r_btn = document.querySelector('#r_btn');
const exam_result = document.querySelector('#exam_result')
const sub_result = document.querySelector('#sub_result')

const basic_info = document.querySelector('#basic_info')
const noti = document.querySelector('#notifi')
const f_name = document.querySelector('#f_name');
const l_name = document.querySelector('#l_name');
const roll = document.querySelector('#roll');
const reg = document.querySelector('#reg');

const Ban = document.querySelector('#Ban');
const Eng = document.querySelector('#Eng');
const G_math = document.querySelector('#Math');
const Sos = document.querySelector('#Sos');
const Rel = document.querySelector('#rel');
const Phy = document.querySelector('#Phy');
const Che = document.querySelector('#Che');
const Bio = document.querySelector('#Bio');



result_cal.addEventListener('submit', (e) => {
    e.preventDefault();
    let bn = Number(Ban.value);
    let en = Number(Eng.value);
    let mat = Number(G_math.value);
    let sos = Number(Sos.value);
    let rel = Number(Rel.value);
    let phy = Number(Phy.value);
    let che = Number(Che.value);
    let bio = Number(Bio.value);

    let total_marks = bn + en + mat + sos + rel + phy + che + bio;

    let total_point = s_grade(bn).points + s_grade(en).points + s_grade(mat).points + s_grade(sos).points + s_grade(rel).points + s_grade(phy).points + s_grade(che).points + s_grade(bio).points
    let final_grade = total_point / 8;

    exam_result.innerHTML = `
    <div id = "notifi">
       <h4 class="alert alert-success text-uppercase text-center">Congratulations</h4>
    </div> 
    <div id="basic_info">
        <span class="d-block">Name <span class="m_1">:</span> ${f_name.value} ${l_name.value}</span>
        <span class="d-block">Roll <span class="m_2">:</span> ${roll.value}</span>
        <span class="d-block">Registration : ${reg.value}</span>
        <span class="d-block">Grade <span class="m_3">: ${fail(s_grade(bn).grade),fail(s_grade(en).grade),fail(s_grade(mat).grade),fail(s_grade(sos).grade),fail(s_grade(rel).grade),fail(s_grade(phy).grade),fail(s_grade(che).grade),fail(s_grade(bio).grade)}</span></span>
    </div>
    <hr>
    <table>
        <thead>
            <tr>
                <th>Code</th>
                <th>Subject</th>
                <th>Marks</th>
                <th>Points</th>
                <th>Grade</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>101</td>
                <td>Bangla</td>
                <td>${bn}</td>
                <td>${s_grade(bn).points}</td>
                <td>${s_grade(bn).grade}</td>
            </tr>
            <tr>
                <td>102</td>
                <td>English</td>
                <td>${en}</td>
                <td>${s_grade(en).points}</td>
                <td>${s_grade(en).grade}</td>
            </tr>
            <tr>
                <td>103</td>
                <td>Mathematics</td>
                <td>${mat}</td>
                <td>${s_grade(mat).points}</td>
                <td>${s_grade(mat).grade}</td>
            </tr>
            <tr>
                <td>104</td>
                <td>Social Science</td>
                <td>${sos}</td>
                <td>${s_grade(sos).points}</td>
                <td>${s_grade(sos).grade}</td>
            </tr>
            <tr>
                <td>105</td>
                <td>Religion</td>
                <td>${rel}</td>
                <td>${s_grade(rel).points}</td>
                <td>${s_grade(rel).grade}</td>
            </tr>
            <tr>
                <td>106</td>
                <td>Physics</td>
                <td>${phy}</td>
                <td>${s_grade(phy).points}</td>
                <td>${s_grade(phy).grade}</td>
            </tr>
            <tr>
                <td>107</td>
                <td>Chemistry</td>
                <td>${che}</td>
                <td>${s_grade(che).points}</td>
                <td>${s_grade(che).grade}</td>
            </tr>  
            <tr>
                <td>108</td>
                <td>Biology</td>
                <td>${bio}</td>
                <td>${s_grade(bio).points}</td>
                <td>${s_grade(bio).grade}</td>
            </tr>    
        </tbody>
        <tfoot>
            <tr class="alert alert-success">
                <td></td>
                <td></td>
                <td>Total Marks : ${total_marks}</td>
                <td>GPA : ${final_grade.toFixed(2)}</td>
                <td>Grade : ${total_grade(final_grade)}</td>
            </tr> 
        </tfoot>
    </table>
    `

    l_name.value = "";
    f_name.value = "";
    roll.value = "";
    reg.value = "";
    dept.value = "";
    pass_year.value = "";
    Ban.value = "";
    Eng.value = "";
    G_math.value = "";
    Bio.value = "";
    Che.value = "";
    Phy.value = "";
    Rel.value = "";
    Sos.value = "";
})