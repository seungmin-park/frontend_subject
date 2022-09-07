import { useRef, useState } from 'react';
import CreateGrade from './CreateGrade';


export default function ReportCard(){
    let total = 0;
    let integrationCredit = 0;
    let integrationAttend = 0;
    let integrationTask = 0;
    let integrationMidterm = 0;
    let integrationFinal = 0;
    let integrationTotal = 0;
    const nextId = useRef(3);
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
    const [subjectGrades, setSubjectGrades] = useState([{
        "id" : 0,
        "course":"교양",
        "required":"선택",
        "name":"교양1",
        "credit" : 1,
        "attend":0,
        "task":0,
        "midterm":0,
        "final":0,
        "total":0
    },{
        "id" : 1,
        "course":"",
        "required":"",
        "name":"",
        "credit" : 2,
        "attend":1,
        "task":1,
        "midterm":1,
        "final":1,
        "total":1
    },{
        "id" : 2,
        "course":"",
        "required":"",
        "name":"",
        "credit" : 3,
        "attend":3,
        "task":3,
        "midterm":3,
        "final":3,
        "total":3
    }]);

    const onChange = e =>{
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const onCreate = () =>{
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
        setSubjectGrades([...subjectGrades, subjectGrade])
        setInputs({
            "course":"",
            "required":"",
            "name":"",
            "credit" : 0,
            "attend":0,
            "task":0,
            "midterm":0,
            "final":0,
            "total":0
        })
        nextId.current += 1;
    }

    // const [subjects, subjectsFunc] = useState(subjectList);
    // let total = 0;
    // let cnt = 0;

    // function add(){

    // }

    function getGrade(credit,score){
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
    return <>
    <CreateGrade name={name} attend={attend} task={task} midterm={midterm} final={final} onChange={onChange} onCreate={onCreate} />
    {/* <span>
        <span>1학년</span>
        <button onClick={add}>추가</button>
        <button>삭제</button>
        <button>저장</button>
        </span>
        */
    <table border={1}>
        <thead>
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
            </tr>
        </thead>
        <tbody>
        {subjectGrades.map((subject) =>(
            integrationCredit+= parseInt(subject.credit),
            integrationAttend+= parseInt(subject.attend),
            integrationTask+= parseInt(subject.task),
            integrationMidterm+= parseInt(subject.midterm),
            integrationFinal+= parseInt(subject.final),
            total = parseInt(subject.attend) + parseInt(subject.task) + parseInt(subject.midterm) + parseInt(subject.final),
            integrationTotal+= total,
        <tr key={subject.id}>
            <td>{subject.course}</td>
            <td>{subject.required}</td>
            <td>{subject.name}</td>
            <td>{subject.credit}</td>
            <td>{subject.attend === 0 ? "" : subject.attend}</td>
            <td>{subject.task === 0 ? "" : subject.task}</td>
            <td>{subject.midterm === 0 ? "" : subject.midterm}</td>
            <td>{subject.final === 0 ? "" : subject.final}</td>
            <td>{total === 0 ? "" : total}</td>
            <td></td>
            <td style={getGrade(subject.credit,total) === "F" ? {color : "red"} : {color : "black"}}>{getGrade(subject.credit, total)}</td>
        </tr>
        ))}
        </tbody>
        {/*
        <tr className='addForm'>
            <td>
                <select name='course'>
                    <option value={""}>교양/전공</option>
                    <option value={"교양"}>교양</option>
                    <option value={"전공"}>전공</option>
                </select>
            </td>
            <td>
            <select name='required'>
                    <option value={""}>선택/필수</option>
                    <option value={"교양"}>교양</option>
                    <option value={"전공"}>전공</option>
                </select>
            </td>
            <td><input type="text" name="name"/></td>
            <td>
                <select name='credit'>
                    <option value={0}>학점</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select></td>
            <td><input type="number" name="attend"/></td>
            <td><input type="number" name="task"/></td>
            <td><input type="number" name="midterm"/></td>
            <td><input type="number" name="final"/></td>
            <td>1</td>
            <td></td>
            <td></td>
        </tr>
        */}
        <tfoot>
            <tr>
                <td colSpan={3}>합계</td>
                <td>{integrationCredit}</td>
                <td>{integrationAttend}</td>
                <td>{integrationTask}</td>
                <td>{integrationMidterm}</td>
                <td>{integrationFinal}</td>
                <td>{integrationTotal}</td>
                <td>{parseInt(integrationTotal/nextId.current)}</td>
                <td style={getGrade(0,integrationTotal/nextId.current) === "F" ? {color : "red"} : {color : "black"}}>{getGrade(0,integrationTotal/nextId.current)}</td>
            </tr>
        </tfoot>
    </table> }
    </>
}