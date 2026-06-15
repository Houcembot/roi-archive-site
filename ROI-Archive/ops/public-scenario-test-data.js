(() => {
  const data = window.ROI_ARCHIVE_OPS_DATA;
  if (!data) return;

  data.generatedAt = "2026-06-13T15:42:00+01:00";
  data.timezone = "Africa/Tunis";
  data.officialLocation = "Tunis";
  data.officialTime = "09:00";
  data.dashboardTitle = "ROI-Archive Operations - Scenario Test";
  data.infoBot.status = "scenario_test";
  data.infoBot.mission = "Scenario test actif : preparer InfoBot, ScrapBot, ComBot et CloBot pour 10 minutes de recherche pilote, sans email ni publication externe.";

  data.scenario = {
    name: "ROI-Archive / test 10 minutes",
    mode: "mission_bots_discord",
    durationMinutes: 10,
    timezone: "Africa/Tunis",
    startTime: "09:00",
    status: "pret_a_declencher",
    rule: "Codex initialise le cadre puis se retire. Les productions doivent venir des bots Discord et de leurs modeles associes.",
    dashboardRefresh: "ops/scenario-test-data.js",
    missionFile: "/home/max/.botfleet/shared/projets/ROI-Archive/ops/SCENARIO_10MIN_MISSION.md",
    logFile: "/home/max/.botfleet/shared/projets/ROI-Archive/ops/scenario_10min_live_log.md"
  };

  data.botRuntime = [
    {
      logicalBot: "ComBot",
      discordBot: "RocBot",
      aiModel: "Ollama local : qwen3:8b, fallback llama3.1:8b",
      backend: "local",
      mission: "Communication Voxel, posts, emails brouillons, matching preuve archive -> client.",
      trigger: "Discord #roi-archive / mention rocbot ou tache structuree",
      status: "en ligne"
    },
    {
      logicalBot: "ScrapBot",
      discordBot: "MaxBot",
      aiModel: "tencent/hy3-preview-20260421 via OpenRouter",
      backend: "OpenRouter",
      mission: "Lire le marche, detecter offres compatibles Voxel, scorer 10 opportunites.",
      trigger: "Discord #roi-archive / mention maxbot",
      status: "en ligne"
    },
    {
      logicalBot: "InfoBot",
      discordBot: "CloBot",
      aiModel: "google/gemini-3.1-flash-lite via OpenRouter",
      backend: "OpenRouter",
      mission: "Secretariat, rapport quotidien, questions 11:00, journal des blocages et validations.",
      trigger: "Discord #roi-archive / mention clobot",
      status: "en ligne"
    },
    {
      logicalBot: "OpsBot",
      discordBot: "FreBot",
      aiModel: "deepseek/deepseek-v4-flash:free via OpenRouter",
      backend: "OpenRouter",
      mission: "Coordination projet, passation, suivi du scenario, verification des livrables.",
      trigger: "Discord #roi-archive / mention frebot",
      status: "en ligne"
    }
  ];

  data.chartData = {
    researchLine: [
      { minute: 0, searches: 0, opportunities: 0, actions: 0 },
      { minute: 1, searches: 8, opportunities: 1, actions: 1 },
      { minute: 2, searches: 19, opportunities: 2, actions: 1 },
      { minute: 3, searches: 31, opportunities: 3, actions: 2 },
      { minute: 4, searches: 42, opportunities: 4, actions: 2 },
      { minute: 5, searches: 55, opportunities: 5, actions: 3 },
      { minute: 6, searches: 68, opportunities: 7, actions: 4 },
      { minute: 7, searches: 79, opportunities: 8, actions: 5 },
      { minute: 8, searches: 91, opportunities: 9, actions: 6 },
      { minute: 9, searches: 100, opportunities: 10, actions: 8 },
      { minute: 10, searches: 100, opportunities: 10, actions: 10 }
    ],
    taskDonut: [
      { label: "Recherche", value: 46, color: "#12b8a6" },
      { label: "Scoring", value: 18, color: "#d7a640" },
      { label: "ComBot", value: 22, color: "#6fa0d8" },
      { label: "InfoBot", value: 14, color: "#86bf73" }
    ],
    servicePie: [
      { label: "Formation IA/3D", value: 28, color: "#12b8a6" },
      { label: "R&D IA", value: 22, color: "#d7a640" },
      { label: "Scan patrimoine", value: 18, color: "#86bf73" },
      { label: "Medical 3D", value: 17, color: "#6fa0d8" },
      { label: "Animation/VFX", value: 15, color: "#d96a52" }
    ],
    funnel: [
      { label: "Lectures", value: 100 },
      { label: "Compatibles", value: 34 },
      { label: "Interessantes", value: 18 },
      { label: "Top", value: 10 },
      { label: "Emails", value: 10 }
    ]
  };
  data.researchDoc = {
    title: "Document secret des recherches",
    subtitle: "Version publique limitee. Les details secrets sont retires.",
    entries: []
  };

  data.kpis = [
    { label: "Mode", value: "10 MIN", sub: "mission bots Discord", state: "warn" },
    { label: "Fuseau", value: "Tunis", sub: "Africa/Tunis", state: "ok" },
    { label: "Recherches", value: "100", sub: "ScrapBot / MaxBot", state: "ok" },
    { label: "Opportunites", value: "10", sub: "selection test", state: "ok" },
    { label: "Emails", value: "10", sub: "brouillons uniquement", state: "attention" },
    { label: "Questions", value: "11:00", sub: "via CloBot", state: "attention" },
    { label: "Passations", value: "4", sub: "ScrapBot -> ComBot -> InfoBot", state: "ok" }
  ];

  data.agents = [
    {
      name: "ScrapBot",
      role: "lecteur de marche",
      discordBot: "MaxBot",
      model: "tencent/hy3-preview-20260421",
      backend: "OpenRouter",
      cadence: "test samedi 09:00",
      today: "100 recherches simulees, 10 opportunites candidates, 5 nouvelles sources",
      status: "test_ok",
      signal: "source_registry et opportunites alimentes en dry-run"
    },
    {
      name: "ComBot",
      role: "communication + prospection",
      discordBot: "RocBot",
      model: "Ollama local qwen3:8b + llama3.1:8b",
      backend: "local",
      cadence: "test lundi 09:00 et 10:00",
      today: "10 emails brouillons + brief ScrapBot 10:00 + post social test",
      status: "test_ok",
      signal: "matching opportunite -> client -> preuve Voxel fonctionne"
    },
    {
      name: "InfoBot",
      role: "secretaire operationnel",
      discordBot: "CloBot",
      model: "google/gemini-3.1-flash-lite",
      backend: "OpenRouter",
      cadence: "test 09:00 et questions 11:00",
      today: "rapport Discord dry-run, questions consolidees, dashboard mis a jour",
      status: "test_ok",
      signal: "controle central actif"
    },
    {
      name: "CloBot",
      role: "communication Discord directe",
      discordBot: "CloBot",
      model: "google/gemini-3.1-flash-lite",
      backend: "OpenRouter",
      cadence: "dry-run",
      today: "message Discord simule, aucun envoi reel",
      status: "dry_run",
      signal: "canal direct pret a brancher"
    }
  ];

  data.schedule = [
    { day: "Lundi", time: "09:00", owner: "ScrapBot -> ComBot", action: "TEST selection + passation + 10 emails", output: "10 opportunites mappees, 10 emails brouillons", status: "test_ok", type: "handoff" },
    { day: "Lundi", time: "10:00", owner: "ComBot -> ScrapBot", action: "TEST brief recherche semaine", output: "Formation IA/3D, scan patrimoine, medical 3D", status: "test_ok", type: "briefing" },
    { day: "Mardi", time: "09:00", owner: "ScrapBot + ComBot", action: "TEST 100 recherches + post social", output: "Post Voxel Brain valide en brouillon", status: "test_ok", type: "research_social" },
    { day: "Mercredi", time: "09:00", owner: "ScrapBot + InfoBot", action: "TEST 100 recherches + suivi", output: "Rapport source discovery", status: "test_ok", type: "research" },
    { day: "Jeudi", time: "09:00", owner: "ScrapBot + ComBot", action: "TEST 100 recherches + preparation vendredi", output: "Pack showreel Avatar IRIS", status: "test_ok", type: "research_prep" },
    { day: "Vendredi", time: "09:00", owner: "ScrapBot + ComBot", action: "TEST 100 recherches + post social", output: "Post showreel R&D brouillon", status: "test_ok", type: "research_social" },
    { day: "Samedi", time: "09:00", owner: "ScrapBot + InfoBot", action: "TEST 100 recherches + controle hebdo", output: "Synthese sources et problemes", status: "test_ok", type: "research_control" },
    { day: "Tous les jours", time: "11:00", owner: "InfoBot -> CloBot -> Utilisateur", action: "TEST questions consolidees", output: "3 questions prioritaires", status: "test_ok", type: "questions" }
  ];

  data.actions = [
    {
      id: "TEST-001",
      time: "09:00",
      agent: "ScrapBot",
      type: "recherche",
      title: "Lire 100 sources test",
      status: "test_ok",
      priority: "P0",
      estimate: "dry-run",
      forecast: "10 opportunites detectees",
      doubt: "aucun pour simulation",
      validationNeeded: false,
      notes: "Sources simulees : TED, UNGM, TUNEPS, Upwork, Malt, ArtStation, Reddit, universites, musees, medtech."
    },
    {
      id: "TEST-002",
      time: "09:00",
      agent: "ScrapBot",
      type: "passation",
      title: "Passer les 10 opportunites a ComBot",
      status: "test_ok",
      priority: "P0",
      estimate: "dry-run",
      forecast: "ComBot peut matcher les services",
      doubt: "a valider avec vraies sources plus tard",
      validationNeeded: false,
      notes: "Passation simulee avec score, client, besoin et canal."
    },
    {
      id: "TEST-003",
      time: "09:00",
      agent: "ComBot",
      type: "email",
      title: "Generer 10 emails de prospection test",
      status: "brouillon_test",
      priority: "P0",
      estimate: "10 brouillons",
      forecast: "aucun envoi reel",
      doubt: "template final a valider",
      validationNeeded: true,
      notes: "Chaque email relie opportunite, client, service Voxel et preuve archive."
    },
    {
      id: "TEST-004",
      time: "10:00",
      agent: "ComBot",
      type: "briefing",
      title: "Briefer ScrapBot pour la semaine",
      status: "test_ok",
      priority: "P0",
      estimate: "30 min simulees",
      forecast: "recherches plus precises mardi-samedi",
      doubt: "priorites business a choisir chaque lundi",
      validationNeeded: false,
      notes: "Focus test : formations ecoles, R&D IA, scan patrimoine, medical 3D."
    },
    {
      id: "TEST-005",
      time: "09:00",
      agent: "ComBot",
      type: "social",
      title: "Creer post mardi Voxel Brain",
      status: "brouillon_test",
      priority: "P1",
      estimate: "1 post + 1 caption",
      forecast: "LinkedIn expertise + Instagram showreel",
      doubt: "ton final a valider",
      validationNeeded: true,
      notes: "Message : le cerveau derriere l'image 3D."
    },
    {
      id: "TEST-006",
      time: "09:00",
      agent: "InfoBot",
      type: "rapport",
      title: "Compiler rapport Discord test",
      status: "pret_via_clobot",
      priority: "P0",
      estimate: "dry-run",
      forecast: "message CloBot simule",
      doubt: "canal Discord reel a brancher",
      validationNeeded: true,
      notes: "Rapport affiche dans dashboard, aucun message Discord reel envoye."
    },
    {
      id: "TEST-007",
      time: "11:00",
      agent: "InfoBot",
      type: "question",
      title: "Regrouper les questions des bots",
      status: "test_ok",
      priority: "P0",
      estimate: "3 questions",
      forecast: "l'utilisateur peut debloquer la suite",
      doubt: "aucun",
      validationNeeded: true,
      notes: "Questions test preparees pour CloBot."
    }
  ];

  data.questions = [
    {
      id: "QTEST-001",
      time: "11:00",
      from: "InfoBot",
      priority: "P0",
      question: "Confirmer le salon Discord ou CloBot doit envoyer le rapport InfoBot.",
      context: "Communication directe InfoBot -> CloBot -> utilisateur",
      status: "a_poser"
    },
    {
      id: "QTEST-002",
      time: "11:00",
      from: "ScrapBot",
      priority: "P0",
      question: "Creer ou fournir des comptes test Gmail dedies pour Upwork, Malt, Fiverr, ArtStation, Reddit, LinkedIn et Facebook.",
      context: "Lecture authentifiee et respect des plateformes",
      status: "a_poser"
    },
    {
      id: "QTEST-003",
      time: "11:00",
      from: "ComBot",
      priority: "P1",
      question: "Pour le premier lundi reel, prioriser formation ecoles, scan patrimoine, medical 3D ou R&D IA ?",
      context: "Brief ScrapBot du lundi 10:00",
      status: "a_poser"
    }
  ];

  data.validations = [
    { id: "VALTEST-001", owner: "Utilisateur", type: "Discord", title: "Valider CloBot comme canal direct InfoBot", priority: "P0", status: "a_valider", deadline: "avant activation reelle" },
    { id: "VALTEST-002", owner: "Utilisateur", type: "Email", title: "Valider le template email avant tout envoi reel", priority: "P0", status: "a_valider", deadline: "avant premier lundi" },
    { id: "VALTEST-003", owner: "Utilisateur", type: "Comptes", title: "Fournir ou creer des comptes test Gmail dedies", priority: "P0", status: "a_valider", deadline: "avant ScrapBot connecte" }
  ];

  data.emails = [
    { slot: 1, status: "brouillon_test", opportunity: "Universite - formation IA/3D", client: "Ecole design numerique", service: "Formation IA/3D", proof: "Course AI", risk: "validation template" },
    { slot: 2, status: "brouillon_test", opportunity: "Musee - scan patrimoine", client: "Institution culturelle", service: "Scan 3D patrimoine", proof: "Cuirasse de Carthage", risk: "canal appel d'offres" },
    { slot: 3, status: "brouillon_test", opportunity: "Medtech - animation explicative", client: "Startup sante", service: "Medical 3D", proof: "FootLyser", risk: "claims medicales" },
    { slot: 4, status: "brouillon_test", opportunity: "Agence - video produit", client: "Agence communication", service: "Animation 3D/VFX", proof: "Porsche / Brandt", risk: "budget a verifier" },
    { slot: 5, status: "brouillon_test", opportunity: "Ecole - Unreal VR", client: "Centre formation", service: "Formation Unreal/VR", proof: "VR Training ISBAS", risk: "planning" },
    { slot: 6, status: "brouillon_test", opportunity: "Institution - avatar accueil", client: "Organisme public", service: "Avatar Unreal", proof: "IASOBOT / Avatar IRIS", risk: "demo a preparer" },
    { slot: 7, status: "brouillon_test", opportunity: "Studio - audit pipeline", client: "Studio 3D", service: "Pipeline Doctor", proof: "Maya/Max/Substance archive", risk: "offre a cadrer" },
    { slot: 8, status: "brouillon_test", opportunity: "ONG - video pedagogique", client: "ONG education", service: "Animation scientifique", proof: "Projet SANTE", risk: "langue" },
    { slot: 9, status: "brouillon_test", opportunity: "Museum - viewer WebGL", client: "Musee regional", service: "Viewer web 3D", proof: "Mesh WebGL", risk: "asset source" },
    { slot: 10, status: "brouillon_test", opportunity: "Marque - AI video tests", client: "Marque produit", service: "R&D IA video", proof: "ComfyUI + n8n", risk: "definition besoin" }
  ];

  data.discoveries = [
    { date: "2026-06-13", source: "TED EU Tenders", category: "appel d'offres", fit: 88, service: "scan 3D / patrimoine / audiovisuel", accessState: "public", status: "test_lu" },
    { date: "2026-06-12", source: "UNGM Procurement", category: "institutionnel", fit: 84, service: "formation / contenu digital / sante", accessState: "public", status: "test_lu" },
    { date: "2026-06-11", source: "TUNEPS Tunisie", category: "local", fit: 81, service: "formation / digitalisation", accessState: "public", status: "test_lu" },
    { date: "2026-06-10", source: "Upwork", category: "marketplace", fit: 76, service: "animation 3D / medical / Unreal", accessState: "compte_voxel", account: "compte test Gmail ou compte dédié", status: "compte_a_brancher" },
    { date: "2026-06-09", source: "Malt", category: "marketplace", fit: 72, service: "agences FR/EU", accessState: "compte_voxel", account: "compte test Gmail ou compte dédié", status: "compte_a_brancher" },
    { date: "2026-06-08", source: "ArtStation Jobs", category: "creative jobs", fit: 69, service: "character / Unreal / animation", accessState: "compte_voxel", account: "compte test Gmail ou compte dédié", status: "test_lu" },
    { date: "2026-06-07", source: "Forums VR education", category: "forum", fit: 67, service: "formation VR / Unreal", accessState: "login_requis", status: "nouvelle_source" },
    { date: "2026-06-06", source: "Musees MENA", category: "institution", fit: 66, service: "scan patrimoine / viewer", accessState: "public", status: "nouvelle_source" },
    { date: "2026-06-05", source: "Medtech newsletters", category: "veille sectorielle", fit: 64, service: "medical 3D", accessState: "public", status: "nouvelle_source" },
    { date: "2026-06-04", source: "Agences produit Europe", category: "prospection", fit: 61, service: "animation produit / R&D IA", accessState: "compte_voxel", account: "compte test Gmail ou compte dédié", status: "nouvelle_source" }
  ];

  data.risks = [
    { id: "RTEST-001", level: "moyen", title: "CloBot non branche au canal reel", owner: "InfoBot", mitigation: "confirmer salon Discord" },
    { id: "RTEST-002", level: "moyen", title: "Comptes marketplace non configures", owner: "ScrapBot", mitigation: "creer comptes officiels Voxel" },
    { id: "RTEST-003", level: "bas", title: "Templates email encore brouillon", owner: "ComBot", mitigation: "valider 3 exemples avant lundi reel" }
  ];

  data.improvements = [
    { id: "ITEST-001", title: "Ajouter un bouton reset test/live", impact: "basculer dashboard sans patch manuel", owner: "InfoBot" },
    { id: "ITEST-002", title: "Ajouter une note par opportunite", impact: "historique plus clair", owner: "ScrapBot" },
    { id: "ITEST-003", title: "Créer 3 templates email par vertical", impact: "prospection plus precise", owner: "ComBot" },
    { id: "ITEST-004", title: "Envoyer le lien dashboard dans chaque rapport CloBot", impact: "suivi distant plus simple", owner: "InfoBot" }
  ];

  data.exchanges = [
    { time: "09:00", from: "ScrapBot", to: "ComBot", topic: "TEST passation", status: "test_ok", summary: "10 opportunites candidates transmises avec score et besoin." },
    { time: "09:20", from: "ComBot", to: "InfoBot", topic: "TEST emails", status: "brouillon_test", summary: "10 emails prepares sans envoi reel." },
    { time: "10:00", from: "ComBot", to: "ScrapBot", topic: "TEST brief semaine", status: "test_ok", summary: "Priorites : formation, R&D IA, scan, medical." },
    { time: "11:00", from: "InfoBot", to: "CloBot", topic: "TEST questions", status: "dry_run", summary: "3 questions groupees pour l'utilisateur." },
    { time: "11:05", from: "InfoBot", to: "Utilisateur", topic: "TEST dashboard", status: "pret", summary: "Dashboard mis a jour avec scenario test." }
  ];

  data.discordReport = {
    title: "Rapport InfoBot 09:00 - SCENARIO TEST",
    status: "dry_run_via_clobot",
    lines: [
      "Mode test actif : aucun email reel, aucun post reseau social, aucun message Discord reel.",
      "ScrapBot : 100 recherches simulees, 10 opportunites candidates, 5 nouvelles sources.",
      "ComBot : 10 emails brouillons, 1 briefing ScrapBot lundi 10:00, 1 post social test.",
      "InfoBot : dashboard mis a jour, questions 11:00 preparees.",
      "CloBot : canal direct simule, attente du salon Discord reel.",
      "Blocages avant activation reelle : comptes officiels, canal CloBot, validation template email."
    ]
  };
})();
