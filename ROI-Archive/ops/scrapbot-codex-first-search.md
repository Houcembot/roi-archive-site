# ScrapBot + Codex - première vraie recherche

Date: 2026-06-20T12:01:36+02:00

Mode: `ScrapBot collecte / Codex vérifie`

Source testée: World Bank Procurement Notices

Fichier brut: `ops/scrapbot-codex-probe.json`

## Résultat brut ScrapBot

- Candidats officiels lus: 67
- Compatibles probables avant revue Codex: 2
- A revoir avant décision: 2
- Rejets: 63
- Durée de collecte: 50.09 secondes

## Verdict Codex

### Include - OP00451397 - Kenya

Titre: Supply, Delivery, Installation and Commissioning of Virtual Laboratory (VR) Equipment for Simulation-Based Training in TVETs Institutions

Lien: https://projects.worldbank.org/en/projects-operations/procurement-detail/OP00451397

Décision: `include`

Segment principal: `animation / VR`

Pourquoi c'est pertinent:
- Le besoin est explicitement un laboratoire virtuel VR.
- Le texte parle de simulation-based training pour institutions TVET.
- Le match archive Voxel est direct: Unreal / MetaHumans / facial tracking, Projet Deformations, pipeline temps réel.
- Voxel peut se positionner sur conception de contenu VR, simulation pédagogique, formation ou intégration visuelle.

Point d'attention:
- C'est un appel d'offres équipement + installation. Voxel doit répondre comme partenaire technique/contenu ou avec un intégrateur local, pas comme simple studio isolé.

Action recommandée:
- Préparer une approche "VR simulation training content + Unreal pipeline".
- Chercher partenaire Kenya/TVET ou intégrateur hardware.
- Priorité prospection: forte.

### Include - OP00452214 - Micronesia

Titre: Training Equipment to Support Skills Testing & Certification

Lien: https://projects.worldbank.org/en/projects-operations/procurement-detail/OP00452214

Décision: `include`

Segment principal: `animation / VR`

Pourquoi c'est pertinent:
- Le détail mentionne AR/VR learning hardware, simulation software, welding simulator, HVAC training simulator.
- Le match archive Voxel est direct sur VR/simulation/laboratoire virtuel.
- Voxel peut proposer contenu pédagogique immersif, adaptation de modules, démonstration VR, ou accompagnement formation.

Point d'attention:
- Deadline proche: 2026-06-29.
- C'est très orienté achat matériel/logiciel. Réponse directe possible seulement si Voxel a partenaire matériel ou rôle de sous-traitant contenu/training.

Action recommandée:
- Ne pas perdre du temps sur un dossier complet seul.
- Tenter approche rapide de partenariat/complément contenu VR.
- Priorité prospection: moyenne à forte, mais urgence élevée.

### Reject - OP00451818 - St. Lucia

Titre: Technical Assistance for CSO website upgrade, strategic communications, and outreach to support official statistics

Lien: https://projects.worldbank.org/en/projects-operations/procurement-detail/OP00451818

Décision: `reject HUD`, éventuellement `watch ComBot`

Pourquoi le robot l'a vu:
- Mots-clés: strategic communications, website upgrade, outreach.

Pourquoi Codex le rejette pour Voxel:
- Pas de 3D, VR, animation, simulation, visualisation scientifique ou pipeline créatif.
- C'est une mission communication institutionnelle/statistiques. Trop générique.
- Risque de remplir le HUD avec des opportunités hors profil.

Action recommandée:
- Ne pas publier comme offre Voxel.
- Garder uniquement si ComBot développe une offre web/communication séparée.

### Reject - OP00451910 - Gambia

Titre: HEMIS Higher Education Information Management System

Lien: https://projects.worldbank.org/en/projects-operations/procurement-detail/OP00451910

Décision: `reject`

Pourquoi le robot l'a vu:
- Mots-clés: information management system, software, training.

Pourquoi Codex le rejette:
- C'est un système d'information universitaire complet, pas une mission R&D IA/3D/VR.
- Besoin probable: éditeur logiciel/SI gouvernemental, intégration enterprise, maintenance.
- Le mot "training" ne suffit pas à créer une opportunité formation Voxel.

Action recommandée:
- Exclure du HUD et de la prospection.

## Exemples de rejets utiles

- OP00450900 / Ethiopia: training equipment électrique/autotronics/EV. Pas de VR/3D/simulation Voxel explicite.
- OP00451715 / Ethiopia: manufacturing/industrial automation/ICT/welding equipment. Trop matériel/générique sans besoin contenu immersif.
- OP00452355 / Philippines: cybersecurity specialist. Hors Voxel.
- OP00431982 / Ukraine: battery energy storage systems avec formation staff. Hors Voxel.

## Différence visible entre règle simple et Codex

La règle simple repère des mots: `training`, `software`, `communication`, `information system`.

Codex ajoute le jugement métier:
- Est-ce que Voxel peut vraiment répondre?
- Est-ce que c'est une prestation créative/R&D/3D/VR ou juste un achat matériel/SI?
- Faut-il répondre directement, chercher un partenaire, ou rejeter?
- Quelle preuve de l'archive Voxel soutient l'offre?
- Quelle action commerciale doit suivre?

Conclusion: les 2 offres publiables sont bien VR/simulation. Les 2 offres "review" doivent être rejetées pour le HUD actuel.
