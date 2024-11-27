'use client'
import CountUp from "react-countup";

export default function Numeros() {



    return (
        <div id="estagios" className="w-screen grid desktop:grid-cols-2 mobile:grid-cols-1 desktop:px-[10vw] mobile:px-[5vw] scroll-mt-32">
            <div className="desktop:pr-[20vw]">
                <button className="text-cinza_claro font-extralight before:content-['←_'] tracking-wider">Lorem Lorem</button>
                <p className="text-3xl">ESTÁGIO EM PROGRAMAS DE EXTENSÃO</p>
                <p className="text-cinza_claro my-12">Atuei em programas de extensão voltados a Biometria infantil e Museu Tecnológico de Agricultura, trabalhei como desenvolvedor ativo em ambos os casos utilizando principalmente React, Next e Python</p>
                <button className="text-2xl text-vermelho font-bold after:content-['_→'] mt-4">Lorem Lorem</button>
            </div>
            <div className="desktop:pr-[15vw]">
                <p className="text-3xl">COMPROMETIMENTO EM ENTREGAR O MELHOR PARA A EQUIPE</p>
                <p className="text-cinza_claro my-12">Já estagiei na diretoria de pesquisa e Pós Graduação do meu Câmpus. No estágio elaborei diversas atividades como refazer o site do setor em React com aplicação do Prisma, mas principalmente, desenvolvi fortemente meu senso coletivo e coopetativismo.</p>
                <div className="grid grid-cols-2">
                    <div className="flex flex-row gap-4 items-end">
                        <CountUp className="text-vermelho text-6xl font-bold" start={0} end={900} />
                        <p>HORAS DE CÓDIGO</p>
                    </div>
                    <div className="flex flex-row gap-4 items-end">
                        <CountUp className="text-vermelho text-6xl font-bold" start={0} end={4} />
                        <p>ANOS DE ESTUDO</p>
                    </div>
                </div>
            </div>
        </div>
    )
}