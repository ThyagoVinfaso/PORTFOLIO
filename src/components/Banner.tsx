'use client'

export default function Banner() {

    return (
        <div className="w-screen h-[40vh]">

            <div className="flex-col w-[36vw] h-full ml-[10vw] ">
                <p className="text-6xl">Olá, eu sou um desenvolvedor <span className="text-vermelho">Front-End</span></p>
                <div className="w-[20vw]">
                <p className="mt-[2vh] text-cinza_claro">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium Sed ut perspiciatis unde omnis iste natus error</p>
                </div>
                
                <div className="flex h-[6vh] w-[14vw] items-center justify-center bg-vermelho mt-[2vh] rounded-sm">
                    <p className="">Github</p>

                </div>

            </div>

        </div>
    )
}