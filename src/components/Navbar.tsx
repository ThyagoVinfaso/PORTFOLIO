'use client'
import Image from "next/image";

export default function Navbar() {

    const ClickHandler = (local: string) => {
        document.getElementById(local)?.scrollIntoView({behavior: "smooth"});
    }

    return (
        <header className="w-screen bg-cinza_escuro flex flex-row items-center justify-evenly py-6 fixed">
           
            <div className="flex flex-row justify-between desktop:w-[40vw] mobile:gap-2">
                <button onClick={()=>ClickHandler("inicio")} className="text-cinza_claro hover:text-white">Início</button>
                <button onClick={()=>ClickHandler("estagios")} className="text-cinza_claro hover:text-white">Estágios</button>
                <button onClick={()=>ClickHandler("skills")} className="text-cinza_claro hover:text-white">Skills</button>
                <button onClick={()=>ClickHandler("contato")} className="text-cinza_claro hover:text-white">Contato</button>
            </div>
        </header>
    )
}