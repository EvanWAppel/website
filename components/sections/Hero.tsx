import Image from "next/image";
import { siteConfig } from "@/data/site";
import Button from "@/components/ui/Button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">
              Available for work
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
              {siteConfig.name}
            </h1>
            <p className="text-xl text-muted font-medium mb-6">
              {siteConfig.title}
            </p>
            <p className="text-neutral-600 leading-relaxed max-w-lg mx-auto md:mx-0 mb-8">
              {siteConfig.bio}
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Button href="#projects">
                <ArrowDown size={16} />
                View my work
              </Button>
              <Button href="#contact" variant="outline">
                Get in touch
              </Button>
            </div>
          </div>
          <div className="shrink-0">
            <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden ring-4 ring-blue-100">
              <Image
                src={siteConfig.photo}
                alt={`Photo of ${siteConfig.name}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
