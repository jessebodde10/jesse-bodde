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
    slug: "leadz-systems",
    title: "Leadz Systems",
    period: "Mei 2026 tot heden",
    context:
      "Mijn eigen praktijk, opgebouwd naast mijn werk. Ik bouw automatiseringen voor kleine ondernemers die geen eigen technisch team hebben en die zelf geen tijd hebben om uit te zoeken wat er mogelijk is.",
    problem:
      "Bij kleine ondernemers blijft veel terugkerend werk handmatig: offertes opstellen, e-mails beantwoorden, administratie bijhouden en klanten opvolgen. Dat werk gaat ten koste van de tijd die naar klanten of het product kan, en het wordt zelden ingepland. Het gebeurt er gewoon bij, meestal 's avonds.",
    approach:
      "Per opdracht breng ik eerst het proces in kaart en bepaal ik welke stappen zich lenen voor automatisering. De workflows bouw ik in n8n, met taalmodellen voor de stappen die interpretatie vragen en API-koppelingen tussen de systemen die de ondernemer al gebruikt. Ik houd het bewust klein: liever één stap die betrouwbaar draait dan een keten die niemand meer kan volgen als er iets misgaat.",
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
      "Documenten zoals offertes, verklaringen en formulieren moeten worden gelezen, geïnterpreteerd en omgezet in een vervolgstap. Dat gebeurt vrijwel volledig met de hand, en juist bij dat overtypen sluipen de fouten erin.",
    approach:
      "Ik bouw agent-flows die een document uitlezen, de gegevens structureren en doorzetten naar de juiste vervolgstap. Op de punten waar een fout duur is, blijft een mens de controle houden.",
    tech: ["Claude Code", "n8n", "API-integraties"],
    status:
      "Experimenteel. Ik gebruik het vooral om te leren waar een agent betrouwbaar is en waar hij het laat afweten, want dat verschil bepaalt of je zoiets bij een klant durft neer te zetten.",
  },
  {
    slug: "e-mailworkflows",
    title: "E-mailworkflows met AI",
    period: "2026",
    context:
      "Ontstaan vanuit mijn tijd als Customer Success Specialist, waar ik dagelijks klantvragen beantwoordde via mail, telefoon en chat.",
    problem:
      "Klantvragen vragen om snelle en consistente opvolging. Zonder team is dat lastig vol te houden zodra het volume oploopt, en de vragen die het meest terugkomen zijn vaak juist de simpelste.",
    approach:
      "Flows die binnenkomende vragen classificeren, een concept-antwoord voorbereiden en doorschakelen naar een mens zodra een vraag beoordeling nodig heeft.",
    tech: ["n8n", "ChatGPT", "Gemini", "API-integraties"],
    status:
      "Experimenteel. Gebouwd om uit te zoeken hoe ver je komt met automatisch sorteren voordat iemand er echt zelf naar moet kijken.",
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
      "Douanedocumenten opstellen en controleren voor import en export, en klanten adviseren bij logistieke vraagstukken. Een aangifte moet kloppen voordat een zending verder kan, dus een fout kost meteen tijd en geld. Nauwkeurig werken onder tijdsdruk was hier de dagelijkse praktijk.",
  },
  {
    period: "Apr – dec 2024",
    title: "Customer Success Specialist",
    org: "Cargomate",
    description:
      "Vast aanspreekpunt voor klanten via chat, telefoon en WhatsApp. Naast het beantwoorden van vragen zocht ik uit waar klanten steeds opnieuw op vastliepen, zodat die knelpunten aan de bron opgelost konden worden in plaats van per geval.",
  },
  {
    period: "Mei 2023 – mrt 2024",
    title: "Administratief medewerker",
    org: "CAK Den Haag, medicijnverklaringen",
    description:
      "Vragen over medicijnverklaringen beantwoorden per telefoon en e-mail. Vaak ging het om mensen die vastliepen in de regels, dus het werk bestond vooral uit uitzoeken hoe een regeling in hun situatie uitpakte en dat begrijpelijk uitleggen.",
  },
  {
    period: "2017 – 2022",
    title: "Zelfstandig ondernemer",
    org: "Leadz Social Media Marketing",
    description:
      "Vijf jaar lang advertentiecampagnes opgezet en beheerd via Facebook en Google. Alles zelf gedaan: klanten binnenhalen, campagnes inrichten, resultaten bijhouden en bijsturen zodra de cijfers daar aanleiding toe gaven. Mijn eerste ervaring met een eigen bedrijf runnen, inclusief alles eromheen.",
  },
];

export const education: ExperienceItem[] = [
  {
    period: "2024",
    title: "Douanevaardigheden in de praktijk",
    org: "Centuristics",
    description:
      "Praktijkgerichte cursus over douaneaangiftes, regelgeving en de documenten die daarbij horen. Gevolgd naast mijn werk als declarant, om de theorie achter het dagelijkse werk beter te begrijpen.",
  },
  {
    period: "2021",
    title: "Full Stack Web Developer",
    org: "Bit Academy, cursus van twaalf weken",
    description:
      "Twaalf weken lang leren programmeren met HTML, CSS en JavaScript. Wat ik hier vooral leerde was een probleem opdelen in stappen die een computer kan uitvoeren. Dat bleek later precies de manier van denken die je nodig hebt om workflows te bouwen.",
  },
  {
    period: "2016 – 2020",
    title: "Ondernemer Retail, niveau 4",
    org: "ROC Mondriaan Delft",
    description:
      "Mbo-opleiding gericht op ondernemerschap en bedrijfsvoering in de retail. Tijdens deze opleiding ben ik voor mezelf begonnen.",
  },
  {
    period: "2012 – 2016",
    title: "VMBO TL",
    org: "Stanislascollege Reinier de Graafpad",
    description: "Middelbare school, afgerond met de theoretische leerweg.",
  },
];

export const ownProjects: ExperienceItem[] = [
  {
    period: "Mei 2026 – heden",
    title: "Leadz Systems",
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
    "Vanuit die nieuwsgierigheid ben ik mij gaan verdiepen in programmeren, AI-workflows en API-koppelingen. Ik combineer daardoor technische nieuwsgierigheid met ervaring aan de operationele en menselijke kant van een organisatie. Dat betekent dat ik een proces meestal eerst van de andere kant heb gezien, vanaf de telefoon of de balie, voordat ik er iets aan ga bouwen.",
    "Vijf jaar als zelfstandig ondernemer leerde me wat er nodig is om zelf iets op te bouwen. In customer success, logistiek en douane kwam daar de operationele kant bij: werken met vaste procedures, korte lijnen naar de klant en documenten die tot op de letter moeten kloppen. De Full Stack Web Developer-cursus bij Bit Academy gaf me de basis om zelf te bouwen, de rest heb ik mezelf aangeleerd door AI-workflows te maken voor echte ondernemers met echte deadlines.",
  ],
  // Begint bewust niet met "Buiten werk", dat staat al in de kop erboven.
  kika: "Ik ben fanatiek hardloper. Ik loop marathons voor Stichting KiKa en haal daarmee geld op voor onderzoek naar kinderkanker. De laatste was de marathon van Berlijn.",
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
      body: "Ik ben niet via een technische opleiding in automatisering terechtgekomen. Ik begon als ondernemer, werkte daarna in klantcontact, administratie en logistiek, en liep in elke rol tegen hetzelfde aan: werk dat elke dag terugkomt en dat eigenlijk niet handmatig zou hoeven. Op een gegeven moment werd de vraag hoe dat dan wél kon interessanter dan het werk zelf. Dat is wat mij naar programmeren en automatisering heeft gebracht.",
    },
    {
      heading: "Hoe ik werk",
      body: "Ik begin bij het proces, niet bij de tool. Eerst uitzoeken waar het vastloopt en wat het de mensen die ermee werken elke dag kost. Pas daarna kijk ik welke stappen zich lenen voor automatisering en wat er beter met de hand kan blijven. Dat voorkomt oplossingen die technisch kloppen maar in de praktijk niemand helpen, en dat zijn er meer dan je zou denken.",
    },
    {
      heading: "Wat ik meebreng",
      body: "Praktijkervaring met het bouwen van AI-workflows in n8n, gekoppeld aan taalmodellen en bestaande systemen. Daarnaast jaren ervaring aan de kant van de klant en de operatie: uitleggen wat er gebeurt, meedenken met wie er belt, en werken met documenten waarin een fout geld of tijd kost. Ik ken daardoor beide kanten. Hoe je iets bouwt, en wat er misgaat zodra het terechtkomt bij mensen die er niet dagelijks mee bezig zijn.",
    },
    {
      heading: "Wat ik zoek",
      body: "Werk waarin ik dicht bij de praktijk blijf. Een plek waar techniek en het dagelijkse werk elkaar raken, waar ik processen mag doorgronden en waar wat ik bouw ook echt gebruikt wordt. Dat laatste is voor mij de snelste manier om beter te worden: van iets dat in productie draait krijg je eerlijker feedback dan van een oefenproject.",
    },
  ],
};
