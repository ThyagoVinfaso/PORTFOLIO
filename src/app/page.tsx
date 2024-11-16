import Navbar from "@/components/Navbar";
import Numeros from "@/components/Numeros";
import Skillset from "@/components/Skillset";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-azul_cinzento">
      <Navbar />
      <Numeros />
      <Skillset />
    </main>
  );
}
