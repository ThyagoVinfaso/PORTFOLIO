import SkillCard from "./SkillCard";

export default function Skillset() {
    return (
        <div id="skills" className="w-screen flex flex-col px-[10vw] mt-32 scroll-mt-32">
            <label className="text-cinza_claro font-extralight mt-4 tracking-wider mb-4">Lorem</label>
            <label className="text-vermelho font-bold text-6xl pb-16"><span className="underline underline-offset-[32px]">Skill</span>-Set</label>
            <div className="grid desktop_g:grid-cols-3 desktop:grid-cols-2 mobile:grid-cols-1 desktop_g:gap-32 desktop:gap-8 mobile:gap-12">
                <SkillCard imagem={"/assets/github.png"} titulo={"Git Version Control"} descricao={"Habilidades em controle de versão com Github, habituado a trabalhar em equipe com a ferramenta."} />
                <SkillCard imagem={"/assets/expo-icon.png"} titulo={"Expo"} descricao={"Utilitário de Expo e ExpoGo para desenvolvimento de soluções de Software Mobile."} />
                <SkillCard imagem={"/assets/figma.png"} titulo={"Figma"} descricao={"Conhecimento de features figma, boas práticas, prototipação e UX/UI."} />
                <SkillCard imagem={"/assets/next.png"} titulo={"Next.js"} descricao={"Base sólida em desenvolvimento de aplicações em Next JS e derivados. Apto a otimizar websoluções React."} />
                <SkillCard imagem={"/assets/react.png"} titulo={"React/ReactNative"} descricao={"Grande volume de experiência com React e Frameworks, familiar com codificação limpa."} />
                <SkillCard imagem={"/assets/typescript.png"} titulo={"Typescript"} descricao={"Capacitado a resolver problemas utilizando Typescript, desde a fase de planejamento até a etapa de desenvolvimento."} />
            </div>
        </div>
    )
}