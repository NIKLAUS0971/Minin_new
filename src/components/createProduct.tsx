import React, { useState } from "react";

export function CrModal(){

    const [value, setValue] = useState('')

    const sumbitHandler = (e: React.FormEvent)=>{
        e.preventDefault();
    }
    return(
        <form onSubmit={sumbitHandler}>
            <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
            <button style={{width:"100px", height:"30px", background:'yellow'}}>Click me</button>
        </form>
    )
}