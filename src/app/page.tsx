import Contato from "@/components/Contato";
import Navbar from "@/components/Navbar";
import Numeros from "@/components/Numeros";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-azul_cinzento">
      <Navbar />
      <Numeros />
      <Contato />
    </main>
  );
}
