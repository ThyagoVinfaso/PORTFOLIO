'use client'

import { TextField } from "@mui/material";

export default function Contato() {

    return (
        <div className="w-screen flex flex-col px-[10vw] mt-32">
            <label className="text-vermelho font-bold text-6xl pb-16">Contato</label>
            <div className="flex flex-col desktop:w-[50%] mobile:w-full gap-12">
                <TextField className="bg-azul_cinzento_meio_claro text-2xl" slotProps={{ input: { style: { color: "#b7b7b7" } }, inputLabel: { style: { color: "#b7b7b7" } } }} variant="filled" label="Email" />
                <TextField className="bg-azul_cinzento_meio_claro text-2xl" slotProps={{ input: { style: { color: "#b7b7b7" } }, inputLabel: { style: { color: "#b7b7b7" } } }} variant="filled" label="Mensagem" />
                <button className="bg-vermelho px-8 py-4 text-base after:content-['_►'] w-[50%] ml-[50%]">Enviar</button>
            </div>
        </div>
    );

}