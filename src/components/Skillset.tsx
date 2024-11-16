import SkillCard from "./SkillCard";

export default function Skillset() {
    return (
        <div className="w-screen flex flex-col px-[10vw] mt-32">
            <label className="text-cinza_claro font-extralight mt-4 tracking-wider mb-4">Lorem</label>
            <label className="text-vermelho font-bold text-6xl pb-16"><span className="underline underline-offset-[32px]">Skill</span>-Set</label>
            <div className="grid grid-cols-3 gap-32">
                <SkillCard imagem={"/assets/github.png"} titulo={"Git Version Control"} descricao={"Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"} />
                <SkillCard imagem={"/assets/github.png"} titulo={"Git Version Control"} descricao={"Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"} />
                <SkillCard imagem={"/assets/github.png"} titulo={"Git Version Control"} descricao={"Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"} />
                <SkillCard imagem={"/assets/github.png"} titulo={"Git Version Control"} descricao={"Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"} />
                <SkillCard imagem={"/assets/github.png"} titulo={"Git Version Control"} descricao={"Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"} />
                <SkillCard imagem={"/assets/github.png"} titulo={"Git Version Control"} descricao={"Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"} />
            </div>
        </div>
    )
}