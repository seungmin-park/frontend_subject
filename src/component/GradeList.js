function Grade({grade, onRemove,getGrade, rmBtnVisible}){
    const {id,course, required, name, credit, attend, task, midterm, final} = grade;
    let total = parseInt(attend) + parseInt(task) + parseInt(midterm) + parseInt(final);
    return<tr>
        <td style={{width:'50px'}}>{course}</td>
        <td style={{width:'50px'}}>{required}</td>
        <td style={{width:'175px'}}>{name}</td>
        <td style={{width:'50px'}}>{credit}</td>
        <td style={{width:'70px'}}>{attend === 0 ? "" : attend}</td>
        <td style={{width:'70px'}}>{task === 0 ? "" : task}</td>
        <td style={{width:'70px'}}>{midterm === 0 ? "" : midterm}</td>
        <td style={{width:'70px'}}>{final === 0 ? "" : final}</td>
        <td>{total === 0 ? "" : total}</td>
        <td></td>
        <td style={getGrade(credit,total) === "F" ? {color : "red"} : {color : "black"}}>{getGrade(credit, total)}</td>
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