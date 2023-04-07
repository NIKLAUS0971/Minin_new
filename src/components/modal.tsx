import React from "react";
import '../App.css'

interface ModalProps {
    children: React.ReactNode,
    title: string
}

export function Modal({ children, title }: ModalProps) {
    return (
        <>

            <div>
                <div className="modal"></div>
                <div className="modal-content">
                    <h1>{title}</h1>
                    {children}
                </div>
            </div>

        </>
    )
}