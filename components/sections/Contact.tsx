import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { siteConfig } from "@/data/site";
import SectionWrapper from "@/components/ui/SectionWrapper";

const links = [
  {
    Icon: Mail,
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    display: siteConfig.email,
  },
  {
    Icon: GithubIcon,
    label: "GitHub",
    href: siteConfig.github,
    display: "github.com/evanappel",
  },
  {
    Icon: LinkedinIcon,
    label: "LinkedIn",
    href: siteConfig.linkedin,
    display: "linkedin.com/in/evanappel",
  },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="bg-surface dark:bg-neutral-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">
          Get in Touch
        </h2>
        <p className="text-muted max-w-md mx-auto">
          I&apos;m open to new opportunities. Feel free to reach out via any of
          the channels below.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        {links.map(({ Icon, label, href, display }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            aria-label={label}
            className="flex items-center gap-3 px-6 py-4 bg-white dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-xl hover:border-accent hover:text-accent transition-colors group w-full sm:w-auto"
          >
            <Icon
              size={20}
              className="text-muted group-hover:text-accent transition-colors"
            />
            <div>
              <p className="text-xs font-medium text-muted uppercase tracking-wide">
                {label}
              </p>
              <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200 group-hover:text-accent transition-colors">
                {display}
              </p>
            </div>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
