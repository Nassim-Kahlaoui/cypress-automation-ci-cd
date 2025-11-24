const { InfluxDB, Point } = require('@influxdata/influxdb-client');
const fs = require('fs');

const url = 'http://localhost:8086'; // URL de ton InfluxDB (à adapter si distant)
const token = 'F43spTr06PdT5H8G_mR2rWfnItLHfKnGZAuPDxTx1DUFk2qvH1fNF-teoAssvTkbPrRU89FBPVc6s0TkUnnyHw=='; // Ton token InfluxDB
const org = 'QA'; // Ton organisation InfluxDB
const bucket = 'cypress'; // Ton bucket InfluxDB

const influxDB = new InfluxDB({ url, token });
const writeApi = influxDB.getWriteApi(org, bucket);

const reportPath = './cypress/reports/mochawesome/mochawesome.json'; // chemin vers rapport mochawesome fusionné

// Lire le fichier JSON mochawesome
const data = JSON.parse(fs.readFileSync(reportPath, 'utf-8'));

// Parcours les tests et envoie les résultats dans InfluxDB
data.results.forEach(result => {
  result.suites.forEach(suite => {
    suite.tests.forEach(test => {
      const point = new Point('test_result')
        .tag('status', test.status)
        .tag('title', test.title)
        .intField('duration', test.duration);
      writeApi.writePoint(point);
    });
  });
});

// Envoie et ferme la connexion
writeApi
  .close()
  .then(() => {
    console.log('✅ Résultats envoyés à InfluxDB');
  })
  .catch(e => {
    
    console.error('❌ Erreur en envoyant à InfluxDB', e);
  });
