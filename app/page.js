import { SocialLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative w-full h-screen max-sm:h-dvh bg-[#f2d494ff] bg-scroll bg-center overflow-hidden z-0">
      {/* <Image
        src="/bg.webp"
        alt="Imagen Fondo"
        width={1920}
        height={707}
        className="absolute object-cover left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        priority
      /> */}

      <div className="flex flex-col items-center justify-between h-full w-full px-12 max-sm:px-5 py-10 z-10">
        <section className="w-full h-auto pt-2 flex justify-center items-start">
          <Image
            src="/logo.svg"
            width={1000}
            height={432}
            alt="Logo Coffee and Fruits"
            className="object-contain w-[250px] h-auto max-sm:w-[200px]"
            priority
          />
        </section>
        
        <section className="relative flex flex-row max-sm:flex-col justify-center items-center w-full h-auto py-10 max-sm:px-5 gap-10 max-sm:gap-2">
          <div className="grid grid-cols-5 grid-rows-1 max-[1000px]:grid-cols-3 max-sm:grid-cols-2 gap-10 max-sm:gap-16 w-full h-auto">
            {SocialLinks.map((link, i) => (
              <Link key={i} href={link.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center group w-full h-full">
                <div className="relative w-[200px] max-[1000px]:w-[150px] max-sm:w-[100px] h-[150px] max-[1000px]:h-[100px] max-sm:h-[50px]">
                  <div className="absolute">
                    <Image
                      src="/plate.svg"
                      alt="Icono Plato"
                      width={200}
                      height={128}
                      className="object-contain w-auto h-full transition-transform duration-300"
                    />
                  </div>

                  <div className="absolute right-6 -top-7 max-[1000px]:-top-5 max-[1000px]:right-3 max-sm:-top-3 max-sm:right-3">
                    <Image
                      src="/cup.svg"
                      alt="Icono Taza de Café"
                      width={170}
                      height={127}
                      className="object-contain w-full h-auto transition-transform duration-300"
                    />
                  </div>

                  <div className="absolute -top-12 left-17 max-[1000px]:-top-8 max-[1000px]:left-12 max-sm:-top-8 max-sm:left-7">
                    <Image
                      src={link.icon}
                      alt={link.name}
                      width={80}
                      height={80}
                      className="object-contain w-[80px] max-[1000px]:w-[70px] max-sm:w-[50px] h-auto transition-transform duration-300"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="w-full h-auto flex justify-center items-end pb-4 cursor-default">
          <h2 className="text-xl max-sm:text-sm font-light text-center">Tu heladería, Frutería y Cafetería de <span className="text-3xl max-sm:text-xl">Confianza</span>.</h2>
        </section>
      </div>
    </main>
  );
};