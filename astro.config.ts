import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://newjersey.github.io/njia-brand-design-guidelines",
  integrations: [
    starlight({
      title: "NJIA Brand Guidelines",
      description: "Shared brand design standards for the New Jersey Innovation Authority.",
      favicon: "/favicon.svg",
      customCss: ["./src/styles/starlight.css"],
      editLink: {
        baseUrl: "https://github.com/newjersey/njia-brand-design-guidelines/edit/main/",
      },
      lastUpdated: true,
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/newjersey/njia-brand-design-guidelines",
        },
      ],
      sidebar: [
        {
          label: "Start Here",
          items: [
            {
              label: "Overview",
              link: "/",
            },
          ],
        },
        {
          label: "Brand Foundation",
          items: [
            {
              autogenerate: {
                directory: "foundations",
              },
            },
          ],
        },
        {
          label: "Identity System",
          items: [
            {
              label: "Logo",
              link: "/logo/",
            },
            {
              label: "Color",
              link: "/color/",
            },
            {
              label: "Typography",
              link: "/typography/",
            },
          ],
        },
        {
          label: "Application",
          items: [
            {
              label: "Voice and Tone",
              link: "/voice-and-tone/",
            },
            {
              label: "Assets",
              link: "/assets/",
            },
          ],
        },
      ],
    }),
  ],
});
