import React from 'react';

function CreateGrade({name, attend, task,midterm, final,onChange}){
    return (
        <tr>
            <td style={{width:'50px'}}>
                <select name='course' onChange={onChange} style={{width:'50px'}}>
                    <option value={"교양"}>교양</option>
                    <option value={"전공"}>전공</option>
                </select>
            </td>
            <td style={{width:'50px'}}>
                <select name='required' onChange={onChange} style={{width:'50px'}}>
                    <option value={"선택"}>선택</option>
                    <option value={"필수"}>필수</option>
                </select>
            </td>
            <td style={{width:'170px'}}>
                <input type="text" name="name" onChange={onChange} style={{width:'170px'}}
                value={name} required placeholder='과목명'/>
            </td>
            <td style={{width:'50px'}}>
                <select name='credit' onChange={onChange} style={{width:'50px'}}>
                    <option value={0}>학점</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>
            </td>
            <td style={{width:'70px'}}>
                <input type="number" min={0} max={40} name="attend" onChange={onChange} style={{width:'70px'}}
                value={attend} required />
            </td>
            <td style={{width:'70px'}}>
                <input type="number" min={0} max={40} name="task" onChange={onChange} style={{width:'70px'}} 
                value={task} required />
            </td>
            <td style={{width:'70px'}}>
                <input type="number" min={0} max={40} name="midterm" onChange={onChange} style={{width:'70px'}} 
                value={midterm} required />
            </td>
            <td style={{width:'70px'}}>
                <input type="number" min={0} max={40} name="final" onChange={onChange} style={{width:'70px'}} 
                value={final} required />
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    )
}

export default CreateGrade;