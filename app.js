// Configurazione Globale del Salone Curatori1
const ISSUER_ID = "GD22GBKOUYWC3C2QDZPMT27GBD2L6STAPXN2QEZB3HX4GNISW3P7XSQK";
const NETWORK = "PUBLIC";

/**
 * Funzione per gestire l'acquisto dei prodotti.
 * Questa funzione viene richiamata dai pulsanti nell'index.html
 */
function buy(assetCode) {
    // Log di controllo per lo sviluppatore (visibile nella console di VS Code/Browser)
    console.log("Inizializzazione ordine per l'asset:", assetCode);

    // Messaggio di conferma per l'utente
    const messaggio = `
        --- DETTAGLI ORDINE ---
        Prodotto: ${assetCode}
        Prezzo: 1.00 ${assetCode}
        Gestore: Salone Curatori1
        Blockchain: Stellar Mainnet
        
        Issuer: ${ISSUER_ID}
        
        Vuoi procedere con il pagamento?
    `;

    // Alert interattivo
    if (confirm(messaggio)) {
        console.log("L'utente ha confermato l'acquisto di " + assetCode);
        // Nota per il futuro: qui inseriremo la chiamata a Albedo o Freighter Wallet
        alert("Reindirizzamento al Wallet Stellar in corso... (Funzione in fase di test)");
    } else {
        console.log("Acquisto annullato dall'utente.");
    }
}

// Inizializzazione al caricamento della pagina
window.onload = () => {
    console.log("Negozio Curatori1 online. Pronti per emettere i token sulla rete Stellar.");
};
