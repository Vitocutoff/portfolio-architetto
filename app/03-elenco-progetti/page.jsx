import Menu from "@/components/elenco-progetti/Menu";
import WorksList from "@/components/elenco-progetti/WorksList";

export default function LavoriPage() {
  return (
    <div>

      <div
        className="text-left mt-20 px-40 py-1 shadow"
      >

        <p
          className="text-3xl lg:text-4xl font-serif italic mb-2 font-extralight"
        >
          I miei lavori dal 1989 ad oggi.
        </p>

        <p
          className="font-mono font-extralight text-gray-500"
        >
          Seleziona l'arco temporale per vederli nel dettaglio.
        </p>

      </div>

      <Menu />

      <WorksList />

    </div>
  );
}
