function Grade({grade, onRemove,getGrade, rmBtnVisible}){
    const {id,course, required, name, credit, attend, task, midterm, final, onlineGrade} = grade;
    let total = parseInt(attend) + parseInt(task) + parseInt(midterm) + parseInt(final);
    let totalGrade = "F";
    if(credit === '1'){
        totalGrade = onlineGrade;
    }else if(attend > 7){
        totalGrade = getGrade(total);
    }
    return<tr>
        <td style={{width:'80px'}}>{course}</td>
        <td style={{width:'80px'}}>{required}</td>
        <td style={{width:'175px'}}>{name}</td>
        <td style={{width:'50px'}}>{credit}</td>
        <td style={{width:'70px'}}>{attend}</td>
        <td style={{width:'70px'}}>{task}</td>
        <td style={{width:'70px'}}>{midterm}</td>
        <td style={{width:'70px'}}>{final}</td>
        <td>{total}</td>
        <td></td>
        <td style={
            {
                width : '60px',
                color : totalGrade === "F" || totalGrade === "NP" ? "red" : "black"
            }
            }>{totalGrade}</td>
        {
            rmBtnVisible &&
            <td style={{backgroundColor:'white', width:'60px', height:'23px'}}>
                <button onClick={() => onRemove(id)} style={{height:'20px',fontSize:'15px'}}>삭제</button>
            </td>
        }
    </tr>
}

function GradeList({grades, onRemove, getGrade, rmBtnVisible}){
    return <>
        {
            grades.map(
                grade => (<Grade grade={grade} key={grade.id} onRemove={onRemove} getGrade={getGrade} rmBtnVisible={rmBtnVisible}/>
                )
            )
        }
    </>
}

export default GradeList;