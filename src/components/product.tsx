import React, { useState } from "react"
import { IProduct } from "../models"

interface ProductProps {
    product: IProduct
}

export function Products({ product }: ProductProps) {

    const [open, setOpen] = useState(false)
    const openMenu=()=>{
        setOpen(!open)
    }

    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' , border: '1px solid black', width: "400px"}}>
                <img src={product.image}  style={{width: "100px" }}/>
                <p>{product.title}</p>
                <button onClick={openMenu} style={{width: "100px", height: '30px', background: 'yellow'}}>Show details</button>
                {open && ( <p>{product.description}</p> )}
            </div>
        </>
    )
}