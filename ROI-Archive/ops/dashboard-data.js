window.ROI_ARCHIVE_OPS_DATA = {
  generatedAt: "2026-06-13T09:00:00+01:00",
  timezone: "Africa/Tunis",
  officialLocation: "Tunis",
  officialTime: "09:00",
  dashboardTitle: "ROI-Archive Operations",
  publicAccess: {
    enabled: true,
    label: "Acces public limite",
    hint: "Demander le code de debloquage a Houcemben."
  },
  infoBot: {
    name: "InfoBot",
    status: "actif",
    mission: "Documenter les echanges, verifier les actions de 09:00, maintenir le dashboard et envoyer le rapport Discord quotidien.",
    dailyDiscordReport: "09:00"
  },
  objectives: {
    daily: "Identifier les opportunites les plus recentes et les plus proches des services Voxel Studio.",
    weekly: "Retenir les signaux fit >= 80, les convertir en leads exploitables et preparer l'accroche de nouveaux clients.",
    site: "Mettre voxel3ds.com au niveau du savoir-faire R&D: innovation, preuves et cas d'usage clairs."
  },
  kpis: [
    { label: "Recherches semaine", value: "500", sub: "ScrapBot mardi-samedi", state: "ok" },
    { label: "Emails lundi", value: "10", sub: "ComBot prospection", state: "attention" },
    { label: "Posts semaine", value: "2", sub: "mardi + vendredi", state: "ok" },
    { label: "Validations ouvertes", value: "6", sub: "decision utilisateur", state: "warn" },
    { label: "Problemes actifs", value: "2", sub: "a surveiller", state: "risk" },
    { label: "Ameliorations", value: "5", sub: "proposees", state: "ok" },
    { label: "Questions", value: "11:00", sub: "tous les jours via CloBot", state: "attention" }
  ],
  questionWindow: {
    time: "11:00",
    owner: "InfoBot -> CloBot -> Utilisateur",
    rule: "Les questions de ScrapBot, ComBot et InfoBot sont groupees et posees chaque jour a 11:00 pour aider les bots a progresser.",
    dataFile: "/home/max/.botfleet/shared/projets/ROI-Archive/ops/question_queue.csv"
  },
  agents: [
    {
      name: "ScrapBot",
      role: "lecteur de marche",
      cadence: "mardi-samedi 09:00",
      today: "100 recherches, source discovery, opportunites candidates",
      status: "pret",
      signal: "500 recherches par semaine"
    },
    {
      name: "ComBot",
      role: "communication + prospection",
      cadence: "lundi, mardi, vendredi 09:00",
      today: "lundi: 10 emails; mardi/vendredi: posts reseaux sociaux",
      status: "pret",
      signal: "matching opportunite -> client -> preuve Voxel"
    },
    {
      name: "InfoBot",
      role: "secretaire operationnel",
      cadence: "tous les jours 09:00",
      today: "rapport Discord, dashboard, validations, problemes",
      status: "actif",
      signal: "source de verite operationnelle"
    },
    {
      name: "CloBot",
      role: "communication Discord directe",
      cadence: "selon alertes",
      today: "envoyer a l'utilisateur les rapports InfoBot, validations et alertes",
      status: "canal_direct",
      signal: "liaison directe InfoBot -> utilisateur"
    }
  ],
  schedule: [
    { day: "Lundi", time: "09:00", owner: "ScrapBot -> ComBot", action: "Selection + passation + 10 emails", output: "Top opportunites, matching client, emails", status: "a_valider", type: "handoff" },
    { day: "Lundi", time: "10:00", owner: "ComBot -> ScrapBot", action: "Brief recherche semaine", output: "Services Voxel, cibles, mots-cles, preuves archive", status: "planifie", type: "briefing" },
    { day: "Mardi", time: "09:00", owner: "ScrapBot + ComBot", action: "100 recherches + post social", output: "Registre sources + post 1", status: "planifie", type: "research_social" },
    { day: "Mercredi", time: "09:00", owner: "ScrapBot + InfoBot", action: "100 recherches + suivi", output: "Nouvelles sources + rapport", status: "planifie", type: "research" },
    { day: "Jeudi", time: "09:00", owner: "ScrapBot + ComBot", action: "100 recherches + preparation vendredi", output: "Opportunites + pack post", status: "planifie", type: "research_prep" },
    { day: "Vendredi", time: "09:00", owner: "ScrapBot + ComBot", action: "100 recherches + post social", output: "Registre sources + post 2", status: "planifie", type: "research_social" },
    { day: "Samedi", time: "09:00", owner: "ScrapBot + InfoBot", action: "100 recherches + controle hebdo", output: "Synthese sources", status: "planifie", type: "research_control" },
    { day: "Dimanche", time: "09:00", owner: "InfoBot", action: "Maintenance", output: "Dashboard pret lundi", status: "reserve", type: "maintenance" }
  ],
  actions: [
    {
      id: "ACT-001",
      time: "09:00",
      agent: "InfoBot",
      type: "rapport",
      title: "Envoyer rapport quotidien Discord",
      status: "a_connecter",
      priority: "P0",
      estimate: "10 min",
      forecast: "rapport court + lien dashboard",
      doubt: "canal Discord a confirmer",
      validationNeeded: true,
      notes: "Doit resumer actions, opportunites, emails, problemes et validations."
    },
    {
      id: "ACT-002",
      time: "09:00",
      agent: "ScrapBot",
      type: "recherche",
      title: "100 recherches mardi-samedi",
      status: "planifie",
      priority: "P0",
      estimate: "2h-4h agent",
      forecast: "10 opportunites candidates par jour",
      doubt: "acces comptes marketplaces a configurer",
      validationNeeded: false,
      notes: "La liste source initiale est non exhaustive."
    },
    {
      id: "ACT-003",
      time: "09:00",
      agent: "ComBot",
      type: "passation",
      title: "Reprendre les opportunites ScrapBot lundi",
      status: "planifie",
      priority: "P0",
      estimate: "60-90 min",
      forecast: "10 emails de prospection",
      doubt: "templates email a valider",
      validationNeeded: true,
      notes: "Relier client, besoin, service Voxel, preuve archive."
    },
    {
      id: "ACT-003B",
      time: "10:00",
      agent: "ComBot",
      type: "briefing",
      title: "Briefer ScrapBot sur les services Voxel",
      status: "planifie",
      priority: "P0",
      estimate: "30 min",
      forecast: "ScrapBot cherche mieux mardi-samedi",
      doubt: "brief hebdomadaire a standardiser",
      validationNeeded: false,
      notes: "ComBot connait les offres Voxel, le positionnement R&D et les preuves archive."
    },
    {
      id: "ACT-004",
      time: "09:00",
      agent: "ComBot",
      type: "social",
      title: "Post reseaux sociaux mardi",
      status: "planifie",
      priority: "P1",
      estimate: "45 min",
      forecast: "post R&D LinkedIn + declinaison Instagram",
      doubt: "premiers posts avec validation utilisateur",
      validationNeeded: true,
      notes: "Angle: Voxel Brain ou ComfyUI + n8n."
    },
    {
      id: "ACT-005",
      time: "09:00",
      agent: "ComBot",
      type: "social",
      title: "Post reseaux sociaux vendredi",
      status: "planifie",
      priority: "P1",
      estimate: "45 min",
      forecast: "showreel ou carousel process",
      doubt: "assets a choisir",
      validationNeeded: true,
      notes: "Message centre sur le cerveau Voxel."
    },
    {
      id: "ACT-006",
      time: "09:00",
      agent: "InfoBot",
      type: "controle",
      title: "Verifier validations et problemes",
      status: "actif",
      priority: "P0",
      estimate: "15 min",
      forecast: "liste decision utilisateur claire",
      doubt: "aucun",
      validationNeeded: false,
      notes: "Doit alimenter le dashboard."
    },
    {
      id: "ACT-007",
      time: "11:00",
      agent: "InfoBot",
      type: "question",
      title: "Poser les questions des bots a l'utilisateur",
      status: "planifie",
      priority: "P0",
      estimate: "10-20 min",
      forecast: "reponses journalisees et actions debloquees",
      doubt: "format des questions a stabiliser",
      validationNeeded: true,
      notes: "InfoBot regroupe les questions de ScrapBot, ComBot et InfoBot, puis CloBot les transmet sur Discord."
    }
  ],
  questions: [
    {
      id: "Q-001",
      time: "11:00",
      from: "InfoBot",
      priority: "P0",
      question: "Quel canal Discord exact CloBot doit utiliser pour le rapport quotidien et les questions ?",
      context: "Activation du flux direct InfoBot -> CloBot -> utilisateur",
      status: "a_poser"
    },
    {
      id: "Q-002",
      time: "11:00",
      from: "ScrapBot",
      priority: "P0",
      question: "Quels comptes test Gmail dedies sont disponibles pour lire les marketplaces et forums ?",
      context: "Lecture authentifiee sans stocker de mot de passe dans Obsidian",
      status: "a_poser"
    },
    {
      id: "Q-003",
      time: "11:00",
      from: "ComBot",
      priority: "P1",
      question: "Quel service Voxel doit etre pousse en premier dans les emails : formation, R&D IA, scan patrimoine, medical ou animation ?",
      context: "Brief ScrapBot du lundi 10:00 et prospection lundi 09:00",
      status: "a_poser"
    }
  ],
  validations: [
    { id: "VAL-001", owner: "Utilisateur", type: "Discord", title: "Confirmer CloBot comme canal rapport quotidien InfoBot", priority: "P0", status: "a_valider", deadline: "avant activation" },
    { id: "VAL-002", owner: "Utilisateur", type: "Email", title: "Valider template email prospection Voxel", priority: "P0", status: "a_valider", deadline: "avant premier lundi" },
    { id: "VAL-003", owner: "Utilisateur", type: "Comptes", title: "Creer des comptes test Gmail dedies pour lecture authentifiee", priority: "P0", status: "a_valider", deadline: "avant ScrapBot actif" },
    { id: "VAL-004", owner: "Utilisateur", type: "Social", title: "Valider premier post ComBot mardi", priority: "P1", status: "a_preparer", deadline: "mardi 09:00" },
    { id: "VAL-005", owner: "Utilisateur", type: "Site", title: "Choisir premieres mises a jour voxel3ds.com", priority: "P1", status: "a_preparer", deadline: "apres top20" },
    { id: "VAL-006", owner: "Utilisateur", type: "InfoBot", title: "Valider format du rapport quotidien", priority: "P2", status: "optionnel", deadline: "ouvert" }
  ],
  emails: [
    { slot: 1, status: "vide", opportunity: "A remplir lundi", client: "", service: "", proof: "", risk: "validation template" },
    { slot: 2, status: "vide", opportunity: "A remplir lundi", client: "", service: "", proof: "", risk: "validation template" },
    { slot: 3, status: "vide", opportunity: "A remplir lundi", client: "", service: "", proof: "", risk: "validation template" },
    { slot: 4, status: "vide", opportunity: "A remplir lundi", client: "", service: "", proof: "", risk: "validation template" },
    { slot: 5, status: "vide", opportunity: "A remplir lundi", client: "", service: "", proof: "", risk: "validation template" },
    { slot: 6, status: "vide", opportunity: "A remplir lundi", client: "", service: "", proof: "", risk: "validation template" },
    { slot: 7, status: "vide", opportunity: "A remplir lundi", client: "", service: "", proof: "", risk: "validation template" },
    { slot: 8, status: "vide", opportunity: "A remplir lundi", client: "", service: "", proof: "", risk: "validation template" },
    { slot: 9, status: "vide", opportunity: "A remplir lundi", client: "", service: "", proof: "", risk: "validation template" },
    { slot: 10, status: "vide", opportunity: "A remplir lundi", client: "", service: "", proof: "", risk: "validation template" }
  ],
  discoveries: [
    { date: "2026-06-13", source: "TED EU Tenders", category: "appel d'offres", fit: 86, service: "scan 3D / formation / audiovisuel", accessState: "public", status: "source P0" },
    { date: "2026-06-12", source: "UNGM Procurement", category: "institutionnel", fit: 82, service: "formation / contenu digital / sante", accessState: "public", status: "source P0" },
    { date: "2026-06-11", source: "TUNEPS Tunisie", category: "local", fit: 80, service: "formation / digitalisation", accessState: "public", status: "source P0" },
    { date: "2026-06-10", source: "Upwork", category: "marketplace", fit: 74, service: "animation 3D / Unreal / medical", accessState: "compte_voxel", account: "compte test Gmail ou compte dédié", status: "lecture compte" },
    { date: "2026-06-09", source: "Malt", category: "marketplace", fit: 71, service: "agences FR/EU", accessState: "compte_voxel", account: "compte test Gmail ou compte dédié", status: "lecture compte" }
  ],
  risks: [
    { id: "RIS-001", level: "haut", title: "Envoi email sans template valide", owner: "ComBot", mitigation: "validation humaine premier lot" },
    { id: "RIS-002", level: "moyen", title: "Comptes plateformes non configures", owner: "ScrapBot", mitigation: "comptes test Gmail dedies + coffre secrets" },
    { id: "RIS-003", level: "moyen", title: "Dashboard non mis a jour automatiquement", owner: "InfoBot", mitigation: "mettre a jour ops/dashboard-data.js" }
  ],
  improvements: [
    { id: "IMP-001", title: "Creer un statut unique par opportunite", impact: "moins de confusion entre ScrapBot et ComBot", owner: "InfoBot" },
    { id: "IMP-002", title: "Ajouter score confiance email", impact: "eviter les messages faibles", owner: "ComBot" },
    { id: "IMP-003", title: "Ajouter historique sources productives", impact: "mieux choisir les 100 recherches", owner: "ScrapBot" },
    { id: "IMP-004", title: "Ajouter lien direct vers validation Discord", impact: "decision plus rapide", owner: "MaxBot" },
    { id: "IMP-005", title: "Relier chaque post social a une opportunite commerciale", impact: "contenu plus utile", owner: "ComBot" }
  ],
  exchanges: [
    { time: "09:00", from: "ScrapBot", to: "ComBot", topic: "passation lundi", status: "planifie", summary: "Top opportunites semaine -> matching client/service/preuve." },
    { time: "09:00", from: "ComBot", to: "CloBot", topic: "lot emails", status: "a_connecter", summary: "10 brouillons ou emails a valider sur Discord." },
    { time: "09:00", from: "InfoBot", to: "CloBot", topic: "rapport quotidien", status: "canal_direct", summary: "Synthese actions, trouvailles, problemes, validations pour l'utilisateur." }
  ],
  discordReport: {
    title: "Rapport InfoBot 09:00",
    status: "pret_via_clobot",
    lines: [
      "Actions dues : 7",
      "Validations ouvertes : 6",
      "Emails lundi : 10 slots a remplir",
      "Brief ComBot -> ScrapBot : lundi 10:00",
      "Questions bots -> utilisateur : tous les jours 11:00 via CloBot",
      "Recherches ScrapBot : 100/jour mardi-samedi",
      "Posts ComBot : mardi et vendredi",
      "Problemes actifs : 2"
    ]
  }
};
