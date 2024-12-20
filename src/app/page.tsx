import Banner from "@/components/Banner";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import Numeros from "@/components/Numeros";
import Skillset from "@/components/Skillset";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-azul_cinzento w-screen pt-32">
      <Banner />
      <Numeros />
      <Skillset />
      <Contato />
      <Footer />
    </main>
  );
}
