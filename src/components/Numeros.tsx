'use client'
import CountUp from "react-countup";

export default function Numeros() {



    return (
        <div className="w-screen grid grid-cols-2 px-[10vw]">
            <div className="pr-[20vw]">
                <button className="text-cinza_claro font-extralight before:content-['←_'] tracking-wider">Lorem Lorem</button>
                <p className="text-3xl">ESTÁGIO EM PROGRAMAS DE EXTENSÃO</p>
                <p className="text-cinza_claro my-12">Atuei em programas de extensão voltados a Biometria infantil e Museu Tecnológico de Agricultura, trabalhei como desenvolvedor ativo em ambos os casos utilizando principalmente React, Next e Python</p>
                <button className="text-2xl text-vermelho font-bold after:content-['_→'] mt-4">Lorem Lorem</button>
            </div>
            <div className="pr-[15vw]">
                <p className="text-3xl">Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                <p className="text-cinza_claro my-12">Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                <div className="grid grid-cols-2">
                    <div className="flex flex-row gap-4 items-end">
                        <CountUp className="text-vermelho text-6xl font-bold" start={0} end={15} />
                        <p>Lorem Lorem Lorem Lorem Lorem</p>
                    </div>
                    <div className="flex flex-row gap-4 items-end">
                        <CountUp className="text-vermelho text-6xl font-bold" start={0} end={15} />
                        <p>Lorem Lorem Lorem Lorem Lorem</p>
                    </div>
                </div>
            </div>
        </div>
    )
}