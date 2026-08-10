export const profile = {
  name: "Jesse Bodde",
  role: "AI-automatisering, procesverbetering en klantgerichte technologie",
  intro:
    "Ik combineer ervaring in ondernemerschap, klantcontact en logistiek met praktische kennis van AI en automatisering. Ik analyseer processen, zie waar werk onnodig handmatig blijft en bouw oplossingen die mensen daadwerkelijk helpen.",
  email: "jessebodde@outlook.com",
  linkedin: "https://www.linkedin.com/in/jessebodde/",
  github: "", // knop blijft verborgen zolang dit leeg is
  cvUrl: "/cv/Jesse-Bodde-CV.pdf",
};

/* ---------------------------------------------------------------- projecten */

export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
  period: string;
  context: string;
  problem: string;
  approach: string;
  tech: string[];
  status: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "bodai",
    title: "Bodai",
    subtitle: "voorheen Leadz Systems",
    period: "Mei 2026 tot heden",
    context:
      "Mijn eigen praktijk, opgebouwd naast mijn werk. Ik bouw automatiseringen voor kleine ondernemers die geen eigen technisch team hebben.",
    problem:
      "Bij kleine ondernemers blijft veel terugkerend werk handmatig: offertes opstellen, e-mails beantwoorden, administratie bijhouden en klanten opvolgen. Dat werk gaat ten koste van de tijd die naar klanten of het product kan.",
    approach:
      "Per opdracht breng ik eerst het proces in kaart en bepaal ik welke stappen zich lenen voor automatisering. De workflows bouw ik in n8n, met taalmodellen voor de stappen die interpretatie vragen en API-koppelingen tussen de systemen die de ondernemer al gebruikt.",
    tech: ["n8n", "Claude Code", "ChatGPT", "Gemini", "API-integraties"],
    status: "Doorlopend. De website staat live op leadzsystems.nl.",
    liveUrl: "https://leadzsystems.nl",
    featured: true,
  },
  {
    slug: "documentautomatisering",
    title: "AI-agents en documentautomatisering",
    period: "2026",
    context:
      "Eigen onderzoeksproject, voortgekomen uit mijn werk als declarant, waar het controleren van documenten dagelijkse praktijk is.",
    problem:
      "Documenten zoals offertes, verklaringen en formulieren moeten worden gelezen, geïnterpreteerd en omgezet in een vervolgstap. Dat gebeurt vrijwel volledig met de hand.",
    approach:
      "Ik bouw agent-flows die een document uitlezen, de gegevens structureren en doorzetten naar de juiste vervolgstap. Op de punten waar een fout duur is, blijft een mens de controle houden.",
    tech: ["Claude Code", "n8n", "API-integraties"],
    status: "Experimenteel. Ik gebruik dit om te leren waar agents betrouwbaar zijn en waar niet.",
  },
  {
    slug: "e-mailworkflows",
    title: "E-mailworkflows met AI",
    period: "2026",
    context:
      "Ontstaan vanuit mijn tijd als Customer Success Specialist, waar ik dagelijks klantvragen beantwoordde via mail, telefoon en chat.",
    problem:
      "Klantvragen vragen om snelle en consistente opvolging. Zonder team is dat lastig vol te houden zodra het volume oploopt.",
    approach:
      "Flows die binnenkomende vragen classificeren, een concept-antwoord voorbereiden en doorschakelen naar een mens zodra een vraag beoordeling nodig heeft.",
    tech: ["n8n", "ChatGPT", "Gemini", "API-integraties"],
    status: "Experimenteel, gebouwd om de aanpak te testen.",
  },
];

/* ----------------------------------------------------------------- ervaring */

export type ExperienceItem = {
  period: string;
  title: string;
  org: string;
  description: string;
};

export const work: ExperienceItem[] = [
  {
    period: "Dec 2024 – 2026",
    title: "Junior Declarant / Expediteur",
    org: "Cargomate",
    description:
      "Douanedocumenten opstellen en controleren, en klanten adviseren bij logistieke vraagstukken. Werk waarin precisie onder tijdsdruk de norm is.",
  },
  {
    period: "Apr – dec 2024",
    title: "Customer Success Specialist",
    org: "Cargomate",
    description:
      "Relatiebeheer en het verbeteren van de klantreis door knelpunten vroeg te signaleren. Contact liep via chat, telefoon en WhatsApp.",
  },
  {
    period: "Mei 2023 – mrt 2024",
    title: "Administratief medewerker",
    org: "CAK Den Haag, medicijnverklaringen",
    description:
      "Vakinhoudelijke ondersteuning en het beantwoorden van complexe klantvragen per telefoon en e-mail.",
  },
  {
    period: "2017 – 2022",
    title: "Zelfstandig ondernemer",
    org: "Leadz Social Media Marketing",
    description:
      "Vijf jaar lang advertentiecampagnes opgezet via Facebook en Google, resultaten geanalyseerd en bijgestuurd op basis van data.",
  },
];

export const education: ExperienceItem[] = [
  {
    period: "2024",
    title: "Douanevaardigheden in de praktijk",
    org: "Centuristics",
    description: "Vakinhoudelijke verdieping voor mijn rol in de logistieke sector.",
  },
  {
    period: "2021",
    title: "Full Stack Web Developer",
    org: "Bit Academy, cursus van twaalf weken",
    description:
      "Mijn eerste serieuze kennismaking met programmeren en het punt waarop mijn interesse in techniek een concrete richting kreeg.",
  },
  {
    period: "2016 – 2020",
    title: "Ondernemer Retail, niveau 4",
    org: "ROC Mondriaan Delft",
    description: "Opleiding gericht op ondernemerschap en zelfstandig werken.",
  },
  {
    period: "2012 – 2016",
    title: "VMBO TL",
    org: "Stanislascollege Reinier de Graafpad",
    description: "",
  },
];

export const ownProjects: ExperienceItem[] = [
  {
    period: "Mei 2026 – heden",
    title: "Bodai, voorheen Leadz Systems",
    org: "Eigen praktijk",
    description:
      "AI-workflows en automatiseringen voor kleine ondernemers, gebouwd met n8n, Claude Code, ChatGPT, Gemini en API-koppelingen.",
  },
];

export const experienceOutlook =
  "Mijn volgende stap is een rol waarin ik proceskennis, klantcontact en AI-automatisering verder kan combineren en verdiepen.";

/* -------------------------------------------------------------- vaardigheden */

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Automatisering en AI",
    items: [
      "n8n",
      "Claude en Claude Code",
      "ChatGPT",
      "Gemini",
      "Prompt- en contextontwerp",
      "Document- en e-mailautomatisering",
    ],
  },
  {
    title: "Development en integraties",
    items: [
      "HTML",
      "CSS",
      "JavaScript / TypeScript",
      "React / Next.js",
      "API-integraties",
      "Workflow debugging",
    ],
  },
  {
    title: "Business en operations",
    items: [
      "Procesanalyse",
      "Customer success",
      "Klantgerichte communicatie",
      "Logistiek en douanedocumentatie",
      "Ondernemerschap",
      "Data- en campagneanalyse",
    ],
  },
];

/* ----------------------------------------------------------------- over mij */

export const about = {
  lead:
    "Mijn loopbaan loopt via ondernemerschap, klantcontact, administratie en logistiek naar automatisering. In iedere rol merkte ik dat ik vooral geïnteresseerd was in dezelfde vraag: waar loopt een proces vast en hoe kan het slimmer?",
  body: [
    "Vanuit die nieuwsgierigheid ben ik mij gaan verdiepen in programmeren, AI-workflows en API-koppelingen. Ik combineer daardoor technische nieuwsgierigheid met ervaring aan de operationele en menselijke kant van een organisatie.",
    "Vijf jaar als zelfstandig ondernemer leerde me wat er nodig is om zelf iets op te bouwen. In customer success, logistiek en douane kwam daar de operationele kant bij: werken met vaste procedures, korte lijnen naar de klant en documenten die tot op de letter moeten kloppen. De Full Stack Web Developer-cursus bij Bit Academy gaf me de basis om zelf te bouwen, de rest heb ik mezelf aangeleerd door AI-workflows te maken voor echte ondernemers.",
  ],
  kika: "Buiten werk ben ik fanatiek hardloper. Ik loop marathons voor Stichting KiKa en haal daarmee geld op voor onderzoek naar kinderkanker.",
  kikaImageAlt: "Jesse Bodde na afloop van de marathon van Berlijn, met finishersmedaille",
};

/* ---------------------------------------------------------------- motivatie */

export const motivation = {
  title: "Motivatie",
  intro:
    "Waar ik vandaan kom, wat ik zoek en wat ik meebreng. Geschreven voor iedereen die overweegt met mij samen te werken.",
  sections: [
    {
      heading: "Waar mijn interesse begon",
      body: "Ik ben niet via een technische opleiding in automatisering terechtgekomen. Ik begon als ondernemer, werkte daarna in klantcontact, administratie en logistiek, en liep in elke rol tegen hetzelfde aan: werk dat elke dag terugkomt en dat eigenlijk niet handmatig zou hoeven. Dat is wat mij naar programmeren en automatisering heeft gebracht.",
    },
    {
      heading: "Hoe ik werk",
      body: "Ik begin bij het proces, niet bij de tool. Eerst uitzoeken waar het vastloopt en wat het de mensen die ermee werken daadwerkelijk kost. Pas daarna kijk ik welke stappen zich lenen voor automatisering en wat er beter met de hand kan blijven. Dat scheelt oplossingen die technisch kloppen maar in de praktijk niemand helpen.",
    },
    {
      heading: "Wat ik meebreng",
      body: "Praktijkervaring met het bouwen van AI-workflows in n8n, gekoppeld aan taalmodellen en bestaande systemen. Daarnaast jaren ervaring aan de kant van de klant en de operatie: uitleggen wat er gebeurt, meedenken met wie er belt, en werken met documenten waarin een fout geld of tijd kost. Die combinatie is zeldzamer dan alleen de techniek.",
    },
    {
      heading: "Wat ik zoek",
      body: "Een rol waarin ik proceskennis, klantcontact en AI-automatisering verder kan combineren en verdiepen. Ik werk graag op de plek waar techniek en de dagelijkse praktijk elkaar raken, en ik leer het snelst in een omgeving waar ik dingen mag bouwen die echt gebruikt worden.",
    },
  ],
};
