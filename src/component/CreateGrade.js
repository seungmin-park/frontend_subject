import React from 'react';
 
function CreateGrade({course, required,name, credit, attend, task,midterm, final,onChange, onCreate}){
    return (
        <div>
                <select name='course'>
                    <option value={""}>교양/전공</option>
                    <option value={"교양"}>교양</option>
                    <option value={"전공"}>전공</option>
                </select>
                <select name='required'>
                    <option value={""}>선택/필수</option>
                    <option value={"교양"}>교양</option>
                    <option value={"전공"}>전공</option>
                </select>
                <input type="text" name="name"/>
                <select name='credit'>
                    <option value={0}>학점</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>
            <input type="number" name="attend"/>
            <input type="number" name="task"/>
            <input type="number" name="midterm"/>
            <input type="number" name="final"/>
            <button onClick={onCreate}>등록</button>
        </div>
    )
}

export default CreateGrade;