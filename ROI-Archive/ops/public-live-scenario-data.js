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
    "roiArchiveChannelId": "roi-archive",
    "roiArchiveMessageId": "redacted",
    "dmMessageId": "redacted",
    "dmUserId": "redacted",
    "lastEvent": "Message de coordination envoye dans #roi-archive.",
    "updatedAt": "redacted"
  };
})();
