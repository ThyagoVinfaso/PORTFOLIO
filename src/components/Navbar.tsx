'use client'
import Image from "next/image";

export default function Navbar() {

    const ClickHandler = (local: string) => {

    }

    return (
        <header className="w-screen bg-cinza_escuro flex flex-row items-center justify-evenly py-6">
            <Image src={""} alt={""}  />
            <div className="flex flex-row justify-between w-[40vw]">
                <button onClick={()=>ClickHandler("home")} className="text-cinza_claro hover:text-white">Home</button>
                <button onClick={()=>ClickHandler("home")} className="text-cinza_claro hover:text-white">Serviços</button>
                <button onClick={()=>ClickHandler("home")} className="text-cinza_claro hover:text-white">Sobre</button>
                <button onClick={()=>ClickHandler("home")} className="text-cinza_claro hover:text-white">Skills</button>
                <button onClick={()=>ClickHandler("home")} className="text-cinza_claro hover:text-white">Portfolio</button>
                <button onClick={()=>ClickHandler("home")} className="text-cinza_claro hover:text-white">Contato</button>
            </div>
        </header>
    )
}