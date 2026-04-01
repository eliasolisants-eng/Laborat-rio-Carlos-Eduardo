import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";

import resinaDiamond from "@/assets/resina-diamond.jpg";
import placas from "@/assets/placas.jpg";
import protese from "@/assets/protese.jpg";

const services = [
  {
    image: resinaDiamond,
    title: "Resina Diamond",
    items: [
      "Acrilização de PT",
      "Troca de dente protocolo",
      "Protocolo imediato",
      "Protocolo tardio",
    ],
  },
  {
    image: placas,
    title: "Placas",
    items: [
      "Clareamento",
      "Acetato 2mm",
      "Acrílica",
      "Silicone 2mm",
      "Silicone 3mm",
    ],
  },
  {
    image: protese,
    title: "Diversos",
    items: [
      "Barra reforço fundido",
      "Clone",
      "Casquete",
      "Conserto & Conserto de protocolo",
      "Conserto com reforço",
      "Fundição de UCLA",
      "Guia acrílico & Guia acetato",
      "Ponto de solda",
      "Provisório & Provisório adesiva",
      "Ponte fixa provisória meia arcada",
    ],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-32">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              image={service.image}
              title={service.title}
              items={service.items}
              index={i}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
