import { useRef, useState } from 'react';
import CreateGrade from './CreateGrade';
import GradeList from './GradeList';


export default function ReportCard(year){
    let total = 0;
    let integrationCredit = 0;
    let integrationAttend = 0;
    let integrationTask = 0;
    let integrationMidterm = 0;
    let integrationFinal = 0;
    let integrationTotal = 0;
    let avg = 0;
    const [addForm, visibleAddForm] = useState(false);
    const [rmBtnVisible, changeRmBtnVisible] = useState(false);
    const nextId = useRef(0);
    const [inputs, setInputs] = useState({
        "course":"",
        "required":"",
        "name":"",
        "credit" : 0,
        "attend":0,
        "task":0,
        "midterm":0,
        "final":0,
        "total":0
    });
    const {course,required,name,credit,attend,task,midterm,final} = inputs;
    const [subjectGrades, setSubjectGrades] = useState([]);

    const onChange = e =>{
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const onCreate = () =>{
        const regExp = /^[0-9]+$/;
        const subjectGrade = {
            id: nextId.current,
            course,
            required,
            name,
            credit,
            attend,
            task,
            midterm,
            final,
        }
        if(course === '' || required=== ''|| name=== ''|| credit=== ''){
            alert("값을 전부 입력하세요");
            return;
        }
        if(!(regExp.test(attend) && regExp.test(task) && regExp.test(midterm) && regExp.test(final))){
            alert("점수 부분에는 숫자만 입력이 가능합니다.");
            return;
        }
        if(attend > 25){
            alert("출석점수의 최대 비중은 25 입니다.");
            return;
        }
        if(task > 15){
            alert("과제점수의 최대 비중은 15 입니다.");
            return;
        }
        if(midterm > 30 || final > 30){
            alert("각 시험의 최대 비중은 30 입니다.");
            return;
        }
        if(attend + task + midterm + final > 100){
            alert("모든 점수의 합은 최대 100 입니다.");
            return;
        }
        setSubjectGrades([...subjectGrades, subjectGrade])
        setInputs({
            "course":course,
            "required":required,
            "name":"",
            "credit" : credit,
            "attend":0,
            "task":0,
            "midterm":0,
            "final":0,
            "total":0
        })
        nextId.current += 1;
    }

    const onRemove = id => {
        setSubjectGrades(subjectGrades.filter(subject => subject.id !== id));
    }

    const getGrade = (credit,score) => {
        if(credit === 1){
            return "P"
        }else{
            if(score >= 95){
                return "A+";
            }
            else if(score >= 90){
                return "A0";
            }
            else if(score >= 85){
                return "B+";
            }
            else if(score >= 80){
                return "B0";
            }
            else if(score >= 75){
                return "C+";
            }
            else if(score >= 70){
                return "C0";
            }
            else if(score >= 65){
                return "D+";
            }
            else if(score >= 60){
                return "D0";
            }
            else{
                return "F";
            }
        }
    }

    subjectGrades.map((subject) =>
    (
        // eslint-disable-next-line
        integrationCredit+= parseInt(subject.credit),
        integrationAttend+= parseInt(subject.attend),
        integrationTask+= parseInt(subject.task),
        integrationMidterm+= parseInt(subject.midterm),
        integrationFinal+= parseInt(subject.final),
        total = parseInt(subject.attend) + parseInt(subject.task) + parseInt(subject.midterm) + parseInt(subject.final),
        integrationTotal+= total,
        avg = parseInt(integrationTotal/subjectGrades.length)
    ))

    return <div style={{
        width:"1000px",
        margin:'0 auto',
        marginTop:"50px",
    }}>
    <span style={
        {
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            width:'935px',
            height:'40px'
        }
    }>
            <h2>
            {year.year}학년
            </h2>
        <span>
        <button onClick={() => {visibleAddForm(!addForm)}}>{addForm? "확인": "추가"}</button>
        <button onClick={() => {changeRmBtnVisible(!rmBtnVisible)}}>{rmBtnVisible? "확인": "삭제"}</button>
        <button onClick={onCreate}>저장</button>
        </span>
        </span>
    <table style={{
        fontWeight:600,
        textAlign: 'center',
        width:'100%',
    }}>
        <thead style={{
            backgroundColor:'#E3C770',
            color:'white'
        }}>
            <tr>
            <th>이수</th>
            <th>필수</th>
            <th>과목명</th>
            <th>학점</th>
            <th>출석점수</th>
            <th>과제점수</th>
            <th>중간고사</th>
            <th>기말고사</th>
            <th>총점</th>
            <th>평균</th>
            <th>성적</th>
            <th style={{width:'60px', backgroundColor:'white'}}></th>
            </tr>
        </thead>
        <tbody style={
            {
                backgroundColor:'#F3E0B5',
            }
        }>
        <GradeList grades={subjectGrades} onRemove={onRemove} getGrade={getGrade} rmBtnVisible={rmBtnVisible}></GradeList>
        {addForm &&
        <CreateGrade name={name} attend={attend} task={task} midterm={midterm} final={final} onChange={onChange} onCreate={onCreate} />
        }
        </tbody>
        <tfoot style={
            {
                backgroundColor:'#F3E0B5',
            }
        }>
            <tr>
                <td colSpan={3}>합계</td>
                <td>{integrationCredit}</td>
                <td>{integrationAttend}</td>
                <td>{integrationTask}</td>
                <td>{integrationMidterm}</td>
                <td>{integrationFinal}</td>
                <td>{integrationTotal}</td>
                <td>{avg}</td>
                <td style={getGrade(0,avg) === "F" ? {color : "red"} : {color : "black"}}>{getGrade(0,avg)}</td>
            </tr>
        </tfoot>
    </table>
    </div>
}