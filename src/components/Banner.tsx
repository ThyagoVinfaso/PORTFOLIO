'use client'

export default function Banner() {

    return (
        <div className="w-screen mb-[20vh]">

            <div className="flex-col desktop:w-[36vw] mobile:w-[80vw] desktop:ml-[10vw] mobile:ml-[5vw]">
                <p className="text-6xl">Olá, eu sou um desenvolvedor <span className="text-vermelho">Front-End</span></p>
                <div className="w-[20vw]">
                <p className="mt-[2vh] text-cinza_claro">Meu nome é Thyago, sou desenvolvedor focado principalmente no Front-end e atualmente graduando do 7º período de engenharia de Software da UTFPR.</p>
                </div>
                
                <div className="flex h-[6vh] desktop:w-[14vw] mobile:w-[50vw] items-center justify-center bg-vermelho mt-[2vh] rounded-sm">
                    <p className="">Github</p>

                </div>

            </div>

        </div>
    )
}