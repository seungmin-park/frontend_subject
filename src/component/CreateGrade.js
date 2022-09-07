import React from 'react';
 
function CreateGrade({name, attend, task,midterm, final,onChange, onCreate}){
    return (
        <div>
                <select name='course' onChange={onChange}>
                    <option value={""}>교양/전공</option>
                    <option value={"교양"}>교양</option>
                    <option value={"전공"}>전공</option>
                </select>
                <select name='required' onChange={onChange}>
                    <option value={""}>선택/필수</option>
                    <option value={"선택"}>선택</option>
                    <option value={"필수"}>필수</option>
                </select>
                <input type="text" name="name" onChange={onChange} 
                value={name}/>
                <select name='credit' onChange={onChange}>
                    <option value={0}>학점</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>
            <input type="number" name="attend" onChange={onChange} 
                value={attend}/>
            <input type="number" name="task" onChange={onChange} 
                value={task}/>
            <input type="number" name="midterm" onChange={onChange} 
                value={midterm}/>
            <input type="number" name="final" onChange={onChange} 
                value={final}/>
            <button onClick={onCreate}>등록</button>
        </div>
    )
}

export default CreateGrade;