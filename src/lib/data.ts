export const profile = {
  name: "Jesse Bodde",
  title: "AI Automation & Agentic Engineering",
  targetRole: "AI Trainee bij The Automation Group",
  tagline:
    "Ik bouw AI-agents en workflows die processen slimmer maken en wil dat leren op het hoogste niveau.",
  email: "jessebodde@outlook.com",
  linkedin: "https://www.linkedin.com/in/jessebodde/",
  github: "", // nog niet aangeleverd, knop wordt verborgen totdat dit is ingevuld
  cvUrl: "/cv/Jesse-Bodde-CV.pdf",
  companyName: "The Automation Group",
};

export const skills = [
  {
    name: "AI & Prompt Engineering",
    level: 90,
    group: "AI",
    detail: "Dagelijks werk: agents, context en prompts ontwerpen die betrouwbaar output leveren.",
  },
  {
    name: "Claude & Claude Code",
    level: 88,
    group: "AI",
    detail: "Bouw en debug AI-workflows en automatiseringen met Claude Code als engineering-partner.",
  },
  {
    name: "ChatGPT",
    level: 85,
    group: "AI",
    detail: "Voor ideatie, contentgeneratie en het testen van agent-gedrag.",
  },
  {
    name: "Gemini",
    level: 78,
    group: "AI",
    detail: "Vergelijk modellen op taken om de juiste tool voor het juiste probleem te kiezen.",
  },
  {
    name: "n8n",
    level: 85,
    group: "Automation",
    detail: "Workflow-automatisering: triggers, API-koppelingen en multi-stap AI-pipelines.",
  },
  {
    name: "API-integraties",
    level: 80,
    group: "Automation",
    detail: "Systemen aan elkaar knopen zodat data en acties automatisch stromen.",
  },
  {
    name: "Document- & e-mailautomatisering",
    level: 78,
    group: "Automation",
    detail: "Van handmatig kopiëren naar AI die documenten leest, structureert en verstuurt.",
  },
  {
    name: "HTML, CSS & JavaScript",
    level: 65,
    group: "Development",
    detail: "Fundament gelegd tijdens de Full Stack Web Developer-cursus bij Bit Academy.",
  },
  {
    name: "Data-analyse & procesoptimalisatie",
    level: 82,
    group: "Business",
    detail: "Jarenlange ervaring met campagnedata analyseren en operationele processen verbeteren.",
  },
  {
    name: "Klantgerichte communicatie",
    level: 90,
    group: "Business",
    detail: "Complexe vraagstukken vertalen naar heldere oplossingen, telefonisch, per mail en chat.",
  },
];

export const skillGroups = ["AI", "Automation", "Development", "Business"] as const;

export type Project = {
  slug: string;
  title: string;
  period: string;
  tagline: string;
  problem: string;
  solution: string;
  tools: string[];
  impact: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "leadz-systems",
    title: "Leadz Systems",
    period: "Mei 2026 tot heden",
    tagline: "AI Automation & Workflow-projecten voor kleine ondernemers",
    problem:
      "Kleine ondernemers verliezen uren aan repetitief werk: offertes, e-mails, administratie, klantopvolging. Dat werk gaat vaak ten koste van tijd voor de klant of het product.",
    solution:
      "Ik ontwerp en bouw AI-workflows die dat werk overnemen, van intake tot documentafhandeling, met n8n als motor en Claude Code, ChatGPT en Gemini als redenerende laag, gekoppeld via API-integraties.",
    tools: ["n8n", "Claude Code", "ChatGPT", "Gemini", "API's"],
    impact:
      "Ondernemers die voorheen alles handmatig deden, krijgen een workflow die 24/7 doorwerkt: minder handwerk, snellere reactietijd, minder foutgevoelige overdracht tussen stappen.",
    liveUrl: "https://leadzsystems.nl",
    featured: true,
  },
  {
    slug: "ai-agents-experiment",
    title: "AI-agents & documentautomatisering",
    period: "2026",
    tagline: "Experimenteren met agents die zelfstandig documenten verwerken",
    problem:
      "Documenten (offertes, verklaringen, formulieren) moeten worden gelezen, geïnterpreteerd en omgezet in een vervolgactie. Traditioneel volledig handwerk.",
    solution:
      "Bouw van agent-flows die documenten uitlezen, structureren en doorzetten naar de juiste vervolgstap, met menselijke controle op de kritieke punten.",
    tools: ["Claude Code", "n8n", "API's"],
    impact:
      "Directe toepasbaarheid van kennis uit mijn werk als Junior Declarant/Expediteur bij Cargomate, waar nauwkeurige documentcontrole dagelijkse praktijk was.",
  },
  {
    slug: "email-workflows",
    title: "E-mailworkflows met AI",
    period: "2026",
    tagline: "Van inbox naar geautomatiseerde afhandeling",
    problem:
      "Klantvragen via e-mail vragen om snelle, consistente en persoonlijke opvolging. Moeilijk schaalbaar zonder team.",
    solution:
      "AI-gestuurde e-mailflows die vragen classificeren, concept-antwoorden opstellen en escaleren wanneer menselijke beoordeling nodig is.",
    tools: ["n8n", "ChatGPT", "Gemini", "API's"],
    impact:
      "Gebouwd vanuit ervaring als Customer Success Specialist bij Cargomate, waar ik dagelijks klantvragen via chat, telefoon en WhatsApp vertaalde naar heldere oplossingen.",
  },
];

export type TimelineItem = {
  year: string;
  title: string;
  org: string;
  description: string;
  category: "opleiding" | "werk" | "ai" | "toekomst";
};

export const timeline: TimelineItem[] = [
  {
    year: "2012 tot 2016",
    title: "VMBO TL",
    org: "Stanislascollege Reinier de Graafpad",
    description:
      "De basis. Interesse in hoe dingen werken en waarom processen zo lopen zoals ze lopen.",
    category: "opleiding",
  },
  {
    year: "2016 tot 2020",
    title: "Ondernemer Retail, niveau 4",
    org: "ROC Mondriaan Delft",
    description:
      "Opleiding gericht op ondernemerschap: de eerste stap richting zelfstandig werken en verantwoordelijkheid nemen.",
    category: "opleiding",
  },
  {
    year: "2017 tot 2022",
    title: "Zelfstandig ondernemer",
    org: "Leadz Social Media Marketing",
    description:
      "Vijf jaar advertentiecampagnes opgezet via Facebook en Google, resultaten geanalyseerd en bijgestuurd op data. Mijn eerste ervaring met 'systemen bouwen die resultaat opleveren'.",
    category: "werk",
  },
  {
    year: "2021",
    title: "Eerste programmeerervaring",
    org: "Full Stack Web Developer, Bit Academy (12 weken)",
    description:
      "Intensieve cursus waarin ik voor het eerst leerde programmeren. Het moment waarop 'ik wil dit beter begrijpen' een concrete richting kreeg.",
    category: "opleiding",
  },
  {
    year: "2023 tot 2024",
    title: "Administratief medewerker",
    org: "CAK Den Haag, Medicijnverklaringen",
    description:
      "Vakinhoudelijke ondersteuning en complexe klantvragen beantwoorden per telefoon en e-mail. Precisie en heldere communicatie als vaste basis.",
    category: "werk",
  },
  {
    year: "Apr tot dec 2024",
    title: "Customer Success Specialist",
    org: "Cargomate",
    description:
      "Relatiebeheer en het optimaliseren van de customer journey door knelpunten vroegtijdig op te lossen, via chat, telefoon en WhatsApp.",
    category: "werk",
  },
  {
    year: "2024",
    title: "Douanevaardigheden in de praktijk",
    org: "Centuristics",
    description: "Verdieping in vakinhoudelijke kennis voor mijn rol in de logistieke sector.",
    category: "opleiding",
  },
  {
    year: "Dec 2024 tot 2026",
    title: "Junior Declarant / Expediteur",
    org: "Cargomate",
    description:
      "Verantwoordelijk voor het opstellen en nauwkeurig controleren van douanedocumenten en het proactief adviseren van klanten bij logistieke vraagstukken. Precisie onder tijdsdruk: een terugkerend thema in mijn werk.",
    category: "werk",
  },
  {
    year: "Mei 2026 tot heden",
    title: "Eerste AI-project: Leadz Systems",
    org: "AI Automation & Workflow Projecten",
    description:
      "In mijn vrije tijd AI-workflows en automatiseringen gebouwd voor kleine ondernemers met n8n, Claude Code, ChatGPT, Gemini en API-integraties. Wat begon als nieuwsgierigheid werd een eigen praktijk.",
    category: "ai",
  },
  {
    year: "Huidig leerdoel",
    title: "Van zelfgeleerd naar professioneel gevormd",
    org: "",
    description:
      "Mezelf structureel verdiepen in agentic engineering, context engineering en multi-agent systemen. Niet uit boeken, maar in productie.",
    category: "ai",
  },
  {
    year: "Ambitie",
    title: "Agentic Engineer bij The Automation Group",
    org: "",
    description:
      "In 12+ maanden doorgroeien tot volwaardig AI Agentic Engineer en meewerken aan AI-oplossingen voor de grootste organisaties van Nederland.",
    category: "toekomst",
  },
];

export type PlaygroundQA = {
  id: string;
  question: string;
  answer: string;
};

export const playgroundQA: PlaygroundQA[] = [
  {
    id: "why-here",
    question: "Waarom wil je hier werken?",
    answer:
      "The Automation Group vraagt om denkkracht, geen informatica-diploma. Dat is precies wat ik de afgelopen jaren heb opgebouwd: een bedrijf gerund, klanten geadviseerd en processen onder tijdsdruk op orde gehouden. Die manier van denken wil ik nu inzetten op het grootste vraagstuk van dit moment, hoe je AI-agents bouwt die écht werken, bij klanten als ANWB, Wolters Kluwer en AFAS. Hier vallen leren en direct impact maken samen, en dat spreekt me aan.",
  },
  {
    id: "challenge",
    question: "Wat is je grootste uitdaging?",
    answer:
      "Ik ben grotendeels zelfgeleerd op het gebied van AI en engineering, en dat is mijn kracht én mijn uitdaging. Ik kan snel een werkende workflow bouwen, maar mis nog de diepgaande, gestructureerde kennis van agentic- en context-engineering die je alleen opbouwt door het intensief te doen naast mensen die het al beheersen. Dat is precies waarom ik een traineeship zoek in plaats van in mijn eentje door te blijven experimenteren.",
  },
  {
    id: "why-ai",
    question: "Waarom AI?",
    answer:
      "Omdat het het eerste stuk technologie is waarmee ik zelf processen kon herontwerpen in plaats van ze alleen uit te voeren. Jarenlang loste ik knelpunten voor klanten handmatig op, nu bouw ik systemen die dat structureel doen. AI is voor mij geen hype, het is het gereedschap waarmee ik het probleem oplos dat ik al jaren zie: te veel goede mensen die hun tijd kwijt zijn aan werk dat een systeem zou moeten doen.",
  },
  {
    id: "different",
    question: "Wat maakt jou anders?",
    answer:
      "Ik kom niet uit de tech. Ik heb ondernomen, mensen aan de telefoon geholpen met complexe vraagstukken en douanedocumenten tot op de letter gecontroleerd. Daardoor kijk ik naar AI vanuit het probleem van de gebruiker, niet vanuit de code. Dat is volgens mij precies wat ze bedoelen met 'denkkracht, geen CV-checks'.",
  },
  {
    id: "contribute",
    question: "Wat kun je bijdragen?",
    answer:
      "Praktijkervaring met échte AI-workflows (n8n, Claude Code, ChatGPT, Gemini, API's), gebouwd voor echte ondernemers met echte problemen, niet in een sandbox. Daarnaast een klantgerichte, analytische blik uit jaren klantcontact en procesoptimalisatie, en ook het vermogen om complexe technische oplossingen te vertalen naar iets dat een klant, of een collega zonder technische achtergrond, gewoon begrijpt.",
  },
  {
    id: "learn",
    question: "Wat wil je leren tijdens dit traineeship?",
    answer:
      "Agentic engineering, context engineering en evaluatie op het niveau waarop het bij grote organisaties daadwerkelijk in productie draait, inclusief security en multi-agent systemen. Ik wil van 'iemand die AI-tools slim gebruikt' doorgroeien naar iemand die agentic systemen ontwerpt waar bedrijven op kunnen bouwen.",
  },
  {
    id: "hire-me",
    question: "Waarom zou je mij aannemen?",
    answer:
      "Omdat ik al doe waar dit traineeship over gaat, nog vóórdat iemand het me vroeg. Ik bouw AI-workflows in mijn eigen tijd, met dezelfde tools die jullie gebruiken: Claude, ChatGPT, Gemini, n8n. Ik heb in drie verschillende sectoren bewezen dat ik processen kan doorgronden en verbeteren. Daarnaast heb ik de klantgerichtheid en precisie om dat bij klanten als ANWB en AFAS ook professioneel te brengen, niet alleen technisch voor elkaar te krijgen. Ik hoef niet overtuigd te worden dat AI de toekomst is, ik ben er al mee bezig. Geef mij de structuur en het niveau van dit traineeship en ik groei sneller dan gemiddeld.",
  },
];

export const whyTraineeship = {
  company:
    "The Automation Group bouwt agentic AI-oplossingen voor de grootste organisaties van Nederland, van ANWB tot Wolters Kluwer en AFAS. Dat is geen los experimentje: die systemen draaien echt in productie, bij klanten die zich geen fouten kunnen veroorloven.",
  consultancy:
    "Bij consultancy blijf je niet hangen bij één probleem voor één bedrijf. Je leert dezelfde aanpak steeds weer toepassen op heel verschillende organisaties, en dat sluit aan bij wat ik al deed als ondernemer en in klantcontact: snel inwerken in een nieuw vraagstuk en met een heldere oplossing komen.",
  ai:
    "AI is niet zomaar een nieuwe tool op de stapel, het is het vakgebied waar de komende jaren het verschil wordt gemaakt tussen bedrijven die voorlopen en bedrijven die achteraan blijven hobbelen. Ik wil daar middenin zitten en meebouwen, niet er over twee jaar pas over lezen.",
  learn:
    "Agentic engineering, context engineering, prompt-architectuur en evaluatie op productieniveau. Dat leer je niet uit een boek, dat leer je door het meteen te gebruiken zodra het uitkomt.",
  contribute:
    "Een niet-technische, klantgerichte blik gecombineerd met bewezen zelfstandige bouwervaring in AI-automatisering. Ik vertaal complexe systemen naar iets dat werkt voor de mensen die het écht gebruiken.",
};
