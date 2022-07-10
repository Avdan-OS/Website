let translation = new Map();
import TranslationRebuilder from "../TranslationRebuilder";

// Global
// footer.tsx
translation.set("overview","Panoramica");
translation.set("home","Home");
translation.set("features","Caratteristiche");
translation.set("downloads","Download");
translation.set("external links","Link esterni");
translation.set("twitter","Twitter");
translation.set("github","GitHub");
translation.set("youtube","YouTube");
translation.set("discord","Discord");
translation.set("reddit","Reddit");
translation.set("legal","Legale");
translation.set("license","Licenza");
translation.set("eula","EULA");
translation.set("history of incidents","Cronologia degli incidenti");
translation.set("privacy and security","Privacy e sicurezza");
translation.set("inspired by","Ispirato da");
translation.set("avdanos contributors","Contributori di AvdanOS");
// alert.tsx
translation.set("is still in development.","È ancora in via di sviluppo");
translation.set("join our discord!","Entra nel nostro discord!");
// menu.tsx / submenu.tsx
// "home" is in footer.tsx
// "features" is in footer.tsx
// "downloads" is in footer.tsx
translation.set("support","Supporto");
translation.set("documentation","Documentazione");
translation.set("docs","Documenti");
translation.set("demo","Demo");

// index.tsx
translation.set("your pc but even better!","Il tuo pc, ma ancora meglio!");
translation.set("try in your browser","Provalo nel tuo browser");
translation.set("download now!","Scarica adesso!");
// discover.tsx
translation.set("open source on github","Open source su GitHub");
translation.set("browse all repos","Sfoglia tutti i repository");
// discoverCard.tsx
translation.set("avdanos","AvdanOS");
translation.set("meet avdanos, refining the way we think about operating systems.","Scopri AvdanOS, riscopri il modo in cui si pensa ai sistemi operativi");
translation.set("official website","Sito ufficiale");
translation.set("all the new updates and information about avdanos and support.","Tutti i nuovi aggiornamenti e informazioni riguardanti AvdanOS e supporto");
translation.set("desktop environment","Ambiente desktop");
translation.set("meet nadva, the official desktop environment for avdanos.","Scopri Nadva, l'ambiente desktop ufficiale per AvdanOS");
translation.set("a discord bot made for the avdanos community discord server.","Un bot Discord fatto per il server della community di Avdanos");

// features-beta.tsx / features.tsx
translation.set("avdan's concept, we're making it real","Concept di Avdan, noi lo stiamo realizzando");
translation.set("assets are loading, please wait","Le risorse si stanno caricando, perfavore attendi");
translation.set("scroll down to see what we've got here","Scorri verso il basso per scoprire le caratteristiche");
translation.set("this concept video is made by avdan","Questo video concept è fatto da Avdan");
translation.set("watch on youtube","Guarda su YouTube");
translation.set("familiar dock, ultimate form","Dock familiare, forma definitiva");
translation.set("everyone knows dock/task bar. we got a brand new dock, with more features than ever before.","Tutti conoscono la dock/task bar. Noi abbiamo una nuova dock, con più funzionalità di prima.");
translation.set("brand new launch menu","Nuovo launch menù");
translation.set("with everything in one place, do anything anywhere at anytime.","Con tutto nello stesso posto, fai di tutto ovunque e in ogni momento.");
translation.set("easily apply layout","Applica facilmente il layout");
translation.set(
  "with a list of presets determined from you apps, easily get to work with the perfect window layout. not enough? change it in the settings.",
  "Con un elenco di preset determinati dalle tue app, puoi facilmente lavorare con il tuo layout perfetto delle finestre. Non è abbastanza? Cambialo nelle impostazioni."
);
translation.set("overpowered dock","Dock potenziata");
translation.set("your dock can do more than ever. it's your ultimate manager to get you organised.","La tua dock può fare più che mai. È il tuo massimo manager per organizzarti.");
translation.set("new way to manage files","Nuovo modo per gestire i file");
translation.set("this file manager keeps you organised and productive. find your files the instant you need it.","Questo file manager ti mantiene organizzato e produttivo. Trova i tuoi file nell'istante in cui ne hai bisogno.");
translation.set("drag & drop made easy","Drag & drop facile");
translation.set("drag and drop is the easiest way to transfer anything on your computer. we make it intuitive and easy to use.","Il drag and drop è il modo più semplice per trasferire qualsiasi cosa sul tuo computer. Noi lo rendiamo intuitivo e facile da usare.");
translation.set("more than multitask","Più che multitasking");
translation.set("want to do many tasks at a time? we know you and we got you. it's now not only multitasking, it's organised multitasking.","Vuoi fare più task alla volta? Lo sappiamo. Ora non è solo multitasking, è multitasking organizzato.");
translation.set("tabs!","Tab!");
translation.set(
  "browsers have proven how powerful tabs are, so why not use them to make your os even more powerful?",
  "I browser hanno dimostrato quanto siano potenti le schede, quindi perché non usarle per rendere il tuo sistema operativo ancora più potente?"
);
translation.set("new context menu","Nuovo context menù");
translation.set(
  "context menu didn't change for multiple decades now. we are tired of a long list of items, and hey why not make it a circle? don't like it? you can switch it back in settings!",
  "Il context menù non è mai cambiato da diversi decenni ormai. Siamo stanchi di una lunga lista di elementi, e perché non renderla un cerchio? Non ti piace? Puoi riattivarlo nelle impostazioni!"
);
translation.set("your os, your preference","Il tuo sistema operativo, le tue preferenze");
translation.set(
  "we give you control over your system. theme is just an important one of them, and you can get more if you don't like ours.",
  "Ti diamo il controllo sul tuo sistema. Il tema è solo uno di quelli importanti, e puoi ottenerne di più se non ti piacciono i nostri."
);
translation.set("day & night","Giorno e notte");
translation.set("let different themes tell you what time it is. hey, you can even make it reversed. can you do it on windows or macos?","Lascia che temi diversi ti dicano che ore sono. Hey, puoi anche farlo invertire. Puoi farlo su Windows o su MacOS?");
translation.set("under development","Sotto sviluppo");
translation.set("this project wouldn't be possible without the community's contributions. join us and help!","Questo progetto non sarebbe possibile senza il contributo della community. Entra nel team e aiutaci!");
translation.set("open demo","Open demo");

// download.tsx
translation.set("this download is not available yet.", "Questo download non è ancora disponibile.");
translation.set("give your pc an upgrade.","Aggiorna il tuo pc.");
// "try in your browser" is in index.tsx section
// "open demo" is in features-beta.tsx section
translation.set("for most people","Raccomandato");
translation.set("for pi, pine, and mac","Per Pi, Pine e Mac");
translation.set("download","Scarica");
translation.set("web preview","Preview nel browser");
translation.set(
  "you're about to visit the web demo version of avdanos, which is only a proof of concept. trying the live system is strongly recommended to getting the full experience from the operating system.",
  "Stai per visitare la versione demo web di AvdanOS, che è solo una prova del concetto. Si consiglia vivamente di provare il sistema live per ottenere l'esperienza completa dal sistema operativo."
);
translation.set("*live system is currently not available because the system is still under development","*Il sistema live non è attualmente disponibile perché il sistema è ancora in fase di sviluppo");
translation.set("yes, take me there","Sì, portami là");
translation.set("cancel","Annulla");
translation.set("before you download","Prima che scarichi");
translation.set("please read this before you continue","Perfavore leggi questo prima di continuare");
translation.set("below is the shasum of the download. you can use it to check download's integrity:","Sotto c'è lo shasum del download. Puoi usarlo per verificare l'integrità del download");
translation.set("yes, i understand","Sì, capisco");
translation.set("use torrent download","Scarica tramite torrent");
translation.set("continue","Continua");
// in testing
translation.set("having trouble? click [%s] here [%/s] to get help!","Hai qualche problema? Clicca [%s] qua [%/s] per chiedere aiuto!");

// support.tsx
translation.set("avdanos support","Supporto AvdanOS");
translation.set("contact us on social media","Contattaci sui social media");
translation.set("visit","Visita");

// support-beta.tsx
translation.set("avdanos support articles","Articoli di supporto per AvdanOS");
translation.set("search support articles","Cerca articoli di supporto");
translation.set("ask our community","Chiedi alla nostra community");

// betapopup.tsx
translation.set("hey look! a new testing version of this page is available!","Hey, aspetta! Una nuova versione di questa pagina è disponibile!");
translation.set("close","Chiudi");
translation.set("check it out","Dacci un'occhiata");

// docs.tsx
translation.set("read the features in detail.","Leggi le funzionalità in dettaglio");
translation.set("i'm a user","Sono un utente");
translation.set("open manual","Apri il manuale");
translation.set("manual is not available yet","Il manuale non è ancora disponibile");
translation.set("i'm a developer","Sono uno sviluppatore");
translation.set("open documentation","Apri la documentazione");
translation.set("doc is not available yet","La documentazione non è ancora disponibile");

// demo.tsx
// "Try in your browser." is in index.tsx
translation.set("full screen","Schermo intero");

// 404.tsx
translation.set("page not found","Pagina non trovata");
translation.set("this page does not exist.","Questa pagina non esiste.");
translation.set("join in and help us out developing an open-source operating system.","Entra e aiutaci a sviluppare un sistema operativo open source"); // don't translate this yet (technical issue)

// widthrequirement.tsx
translation.set("width incompatibility","Incompatibilità di larghezza");
translation.set("increase your window width","Aumenta la larghezza della tua finestra");
translation.set(
  "your window is too small to display the content of this page, and we detected that you got more screen estate. please increase your window width or maximise your browser window.",
  "La tua finestra è troppo piccola per visualizzare il contenuto di questa pagina e abbiamo rilevato che hai più spazio sullo schermo. Si prega di aumentare la larghezza della finestra o di ingrandire la finestra del browser."
);
translation.set("rotate your device","Ruota il tuo dispositivo");
translation.set("your screen is too small to display this page. please rotate to landscape view or use desktop.","Il tuo schermo è troppo piccolo per mostrare questa pagina. Per favore ruota in orizzontale o visualizzalo su desktop");
translation.set("this page is incompatible","Questa pagina è incompatibile");
translation.set(
  "your screen width is too small to display the content of this page. you might need to increase your system's resolution use desktop to view this page.",
  "La larghezza del tuo schermo è troppo piccola per visualizzare il contenuto di questa pagina. Potrebbe essere necessario aumentare la risoluzione del tuo sistema. Altrimenti visualizza da desktop per visitare questa pagina."
);
translation.set(
  "your screen width is too small to display the content of this page. please increase your system's resolution.",
  "La larghezza del tuo schermo è troppo piccola per visualizzare il contenuto di questa pagina. Aumenta la risoluzione del tuo sistema."

);

// This below is for identifier (for developers), please don't touch
translation.set(
  "download.tsx/having-trouble",
  TranslationRebuilder(
    "download.tsx/having-trouble",
    translation.get("having trouble? click [%s] here [%/s] to get help!")
  )
);

export default translation;
