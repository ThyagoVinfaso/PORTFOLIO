import Image from "next/image";

interface CardProps {
    imagem: string,
    alt?: string,
    titulo: string,
    descricao: string
}

export default function SkillCard({ imagem, alt, titulo, descricao }: CardProps) {
    return (
        <div className="flex flex-col bg-azul_cinzento_claro w-full p-12 aspect-square shadow-xl shadow-[#00000066] justify-center hover:scale-105 duration-200">
            <Image className="size-16 mt-4" width={720} height={720} src={imagem} alt={alt ? alt : ""} />
            <label className="font-bold text-xl mt-4">{titulo}</label>
            <p className="text-cinza_claro text-xl mt-4">{descricao}</p>
        </div>
    )
}