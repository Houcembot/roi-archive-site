(() => {
  const data = window.ROI_ARCHIVE_OPS_DATA;
  if (!data) return;

  data.liveScenario = {
    "status": "termine",
    "phase": "Scenario termine",
    "elapsedMinutes": 10,
    "remainingMinutes": 0,
    "lastEvent": "Fin de test : dashboard pret pour revue utilisateur.",
    "updatedAt": "2026-06-13T16:44:06+01:00"
  };

  data.discordBridge = {
    "status": "envoye",
    "roiArchiveChannelId": "1515406640998907964",
    "roiArchiveMessageId": "1515410674262605854",
    "dmMessageId": "1515410677316194532",
    "dmUserId": "458941683464404993",
    "lastEvent": "Message de coordination envoye dans #roi-archive et DM de confirmation envoye a HoucemBen.",
    "updatedAt": "2026-06-13T16:59:00+01:00"
  };
})();
