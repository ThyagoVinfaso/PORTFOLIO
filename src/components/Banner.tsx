'use client'

export default function Banner() {

    return (
        <div id="inicio" className="w-screen desktop:mb-[20vh] mobile:mb-[10vh] scroll-mt-32">

            <div className="flex-col desktop:w-[36vw] mobile:w-[80vw] desktop:ml-[10vw] mobile:ml-[5vw]">
                <p className="text-6xl">Olá, eu sou um desenvolvedor <span className="text-vermelho">Front-End</span></p>
                <div className="desktop:w-[20vw]">
                <p className="mt-[2vh] text-cinza_claro">Meu nome é Thyago, sou desenvolvedor focado principalmente em Front-end e com forte interesse em QA, atualmente graduando do 7º período de engenharia de Software da UTFPR.</p>
                </div>
                
                <button className="flex h-[6vh] desktop:w-[14vw] mobile:w-[50vw] items-center justify-center bg-vermelho mt-[2vh] rounded-sm hover:animate-pulse">
                    <p className="">Github</p>

                </button>

            </div>

        </div>
    )
}