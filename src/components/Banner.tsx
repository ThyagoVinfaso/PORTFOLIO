'use client'

export default function Banner() {

    return (
        <div className="w-screen h-[40vh]">

            <div className="flex-col w-[40vw] h-full ml-[10vw] ">
                <p className="text-3xl">Olá, eu sou um desenvolvedor Front-End</p>
                <p className="mt-[2vh] text-cinza_claro">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                <div className="flex h-[6vh] w-[14vw] items-center justify-center bg-vermelho mt-[2vh] rounded-sm">
                    <p className="">Github</p>

                </div>

            </div>

        </div>
    )
}