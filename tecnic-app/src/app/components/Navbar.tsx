import React from 'react'

const Navbar = ({ onClickLogOut }: any) => {
    return (
        <div className="topnav">
            <h2>Gestor de Tareas</h2>
            <a className="active pointer" onClick={onClickLogOut}>Cerrar Sesión</a>
        </div>
    )
}

export default Navbar