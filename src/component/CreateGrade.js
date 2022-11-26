import React, { useState } from 'react';
function CreateGrade({name, attend, task,midterm, final, onChange}){
    const [isOnline, changeIsOnline] = useState(false);
    const testF = e =>{
        onChange(e);
        const {name, value} = e.target;
        if(name === 'credit' && value === '1'){
            changeIsOnline(true);
        }else if(name === 'credit' && value !== '1'){
            changeIsOnline(false)
        }
    }
    return (
        <tr>
            <td style={{width:'80px'}}>
                <select name='course' defaultValue={""} onChange={onChange} style={{width:'80px'}}>
                    <option value={""}>교양/전공</option>
                    <option value={"교양"}>교양</option>
                    <option value={"전공"}>전공</option>
                </select>
            </td>
            <td style={{width:'80px'}}>
                <select name='required' defaultValue={""} onChange={onChange} style={{width:'80px'}}>
                    <option value={""}>선택/필수</option>
                    <option value={"선택"}>선택</option>
                    <option value={"필수"}>필수</option>
                </select>
            </td>
            <td style={{width:'170px'}}>
                <input type="text" name="name" onChange={onChange} style={{width:'170px'}}
                value={name} required placeholder='과목명'/>
            </td>
            <td style={{width:'50px'}}>
                <select name='credit' onChange={testF} style={{width:'50px'}}>
                    <option value={0}>학점</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>
            </td>
            <td style={{width:'70px'}}>
                <input type="number" min={0} max={40} name="attend" onChange={onChange} style={{width:'70px'}}
                value={attend} required disabled={isOnline}/>
            </td>
            <td style={{width:'70px'}}>
                <input type="number" min={0} max={40} name="task" onChange={onChange} style={{width:'70px'}} 
                value={task} required disabled={isOnline}/>
            </td>
            <td style={{width:'70px'}}>
                <input type="number" min={0} max={40} name="midterm" onChange={onChange} style={{width:'70px'}} 
                value={midterm} required disabled={isOnline}/>
            </td>
            <td style={{width:'70px'}}>
                <input type="number" min={0} max={40} name="final" onChange={onChange} style={{width:'70px'}} 
                value={final} required disabled={isOnline}/>
            </td>
            <td></td>
            <td></td>
            <td>{
                isOnline &&
                <select name='onlineGrade' onChange={onChange} style={{width:'60px'}}>
                    <option value={""}>P/NP</option>
                    <option value={"P"}>P</option>
                    <option value={"NP"}>NP</option>
                </select>
                }</td>
        </tr>
    )
}

export default CreateGrade;