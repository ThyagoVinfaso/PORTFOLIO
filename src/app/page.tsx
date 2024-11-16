import Contato from "@/components/Contato";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Navbar />
      <Contato />
    </main>
  );
}
