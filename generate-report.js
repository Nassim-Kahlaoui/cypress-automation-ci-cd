const mochawesomeMerge = require('mochawesome-merge');
const generator = require('mochawesome-report-generator');

const reportDir = 'cypress/reports/mochawesome';

(async () => {
  try {
    // ✅ Récupère tous les fichiers JSON générés
    const jsonReport = await mochawesomeMerge.merge({
      files: [`${reportDir}/*.json`]
    });

    // ✅ Génère le rapport HTML
    await generator.create(jsonReport, {
      reportDir: `${reportDir}/html`,
      reportFilename: 'report.html',
      inlineAssets: true
    });

    console.log('✅ Rapport HTML généré avec succès !');
  } catch (err) {
    console.error('⛔ Erreur lors de la génération du rapport HTML :', err);
  }
})();
