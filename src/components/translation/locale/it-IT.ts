let translation = new Map();
import TranslationRebuilder from "../TranslationRebuilder";

// Global
// footer.tsx
translation.set("overview","Panoramica");
translation.set("home","Home");
translation.set("features","Caratteristiche");
translation.set("downloads","Download");
translation.set("external links","Link esterni");
translation.set("twitter","");
translation.set("github","");
translation.set("youtube","");
translation.set("discord","");
translation.set("reddit","");
translation.set("legal","Legale");
translation.set("license","Licenza");
translation.set("eula","EULA");
translation.set("history of incidents","Storia degli incidenti");
translation.set("privacy and security","Privacy e sicurezza");
translation.set("inspired by","Inspirato da");
translation.set("avdanos contributors","Contributori di AvdanOS");
// alert.tsx
translation.set("is still in development.","E' ancora in via di sviluppo");
translation.set("join our discord","Entra nel nostro discord");
// menu.tsx / submenu.tsx
// "home" is in footer.tsx
// "features" is in footer.tsx
// "downloads" is in footer.tsx
translation.set("support","Supporto");
translation.set("documentation","Documentazione");
translation.set("docs","Documenti");
translation.set("demo","");

// index.tsx
translation.set("your pc but even better.","Il tuo pc, ma ancora meglio.");
translation.set("try in your browser","Provalo nel tuo browser");
translation.set("download now","Scarica adesso");
// discover.tsx
translation.set("open source on github","Open source su GitHub");
translation.set("browse all repos","Sfoglia tutte le repository");
// discoverCard.tsx
translation.set("avdanos","");
translation.set("meet avdanos, refining the way we think about operating systems.","");
translation.set("official website","");
translation.set("all the new updates and information about avdanos and support.","");
translation.set("desktop environment","");
translation.set("meet nadva, the official desktop environment for avdanos.","");
translation.set("a discord bot made for the avdanos community discord server.","");

// features-beta.tsx / features.tsx
translation.set("avdan's concept, we're making it real","Concetto di Avdan, noi lo stiamo realizzando");
translation.set("assets are loading, please wait","Le risorse stanno caricano, per favore attendi");
translation.set("scroll down to see what we've got here","Scorri verso il basso per vedere quello che abbiamo");
translation.set("this concept video is made by avdan","Questo concetto è creato da Avdan");
translation.set("watch on youtube","Guarda su YouTube");
translation.set("familiar dock, ultimate form","Dock familiare, forma definitiva");
translation.set("everyone know dock/task bar. we got a brand new dock, with more features than ever before.","Tutti conoscono la dock/task bar. noi abbiamo una nuova dock, con più funzionalità di prima.");
translation.set("brand new launch menu","Nuovo menù di lancio");
translation.set("with everything in one place, do anything anywhere at anytime.","Con tutto nello stesso posto, fai di tutto ogni momento.");
translation.set("easily apply layout","Applica facilmente il layout");
translation.set(
  "with a list of presets determined from you apps, easily get to work with the perfect window layout. not enough? change it in the settings.",
  "Con un elenco di preset determinati dalle tue app, puoi facilmente lavorare con il layout perfetto della finestra. non abbastanza? cambialo nelle impostazioni."
);
translation.set("overpowered dock","Dock sopraffatta");
translation.set("your dock can do more than ever. it's your ultimate manager to get you organised.","La tua dock può fare più che mai. è il tuo massimo manager per organizzarti.");
translation.set("new way to manage files","Nuovo modo per gestire i file");
translation.set("this file manager keeps you organised and productive. find your files the instant you need it.","Questo file manager ti mantiene organizzato e produttivo. trova i tuoi file nell'istante in cui ne hai bisogno.");
translation.set("drag & drop made easy","Drag & drop facile");
translation.set("drag and drop is the easiest way to transfer anything on your computer. we make it intuitive and easy to use.","Drag and drop è il modo più semplice per trasferire qualsiasi cosa sul tuo computer. lo rendiamo intuitivo e facile da usare.");
translation.set("more than multitask","Più che multitasking");
translation.set("want to do many tasks at a time? we know you and we got you. it's now not only multitasking, it's organised multitasking.","Vuoi fare più compiti alla volta? ti conosciamo e ti abbiamo preso. ora non è solo multitasking, è multitasking organizzato.");
translation.set("tabs!","Tab!");
translation.set(
  "browsers have proven how powerful tabs are, so why not use them to make your os even more powerful?",
  "I browser hanno dimostrato quanto siano potenti le schede, quindi perché non usarle per rendere il tuo sistema operativo ancora più potente?"
);
translation.set("new context menu","Nuovo menù contestuale");
translation.set(
  "context menu didn't change for multiple decades now. we are tired of a long list of items, and hey why not make it a circle? don't like it? you can switch it back in settings!",
  "Il menu contestuale non è cambiato da diversi decenni ormai. siamo stanchi di una lunga lista di elementi, e perché non farne un cerchio? non ti piace? puoi riattivarlo nelle impostazioni!"
);
translation.set("your os, your preference","Il tuo sistema operativo, le tue preferenze");
translation.set(
  "we give you control over your system. theme is just an important one of them, and you can get more if you don't like ours.",
  "Ti diamo il controllo sul tuo sistema. il tema è solo uno di quelli importanti e puoi ottenerne di più se non ti piace il nostro."
);
translation.set("day & night","Giorno e notte");
translation.set("let different themes tell you what time it is. hey, you can even make it reversed. can you do it on windows or macos?","Lascia che temi diversi ti dicano che ore sono. ehi, puoi anche farlo invertire. puoi farlo su windows o macos?");
translation.set("under development","Sotto sviluppo");
translation.set("this project wouldn't be possible without the community's contributions. join us and help!","Questo progetto non sarebbe possibile senza le contribuzioni della nostra fantastica community. entra nel team e aiutaci!");
translation.set("open demo","Demo aperta");

// download.tsx
translation.set("this download is not available yet.", "");
translation.set("give your pc an upgrade.","Aggiorna il tuo pc.");
// "try in your browser" is in index.tsx section
// "open demo" is in features-beta.tsx section
translation.set("for most people","Raccomandato");
translation.set("for pi, pine, and mac","Per Pi, Pine e Mac");
translation.set("download","Scarica");
translation.set("web preview","Preview nel browser");
translation.set(
  "you're about to visit the web demo version of avdanos, which is only a proof of concept. trying the live system is strongly recommended to getting the full experience from the operating system.",
  "Stai per visitare la versione demo web di AvdanOS, che è solo una prova di concetto. si consiglia vivamente di provare il sistema live per ottenere l'esperienza completa dal sistema operativo."
);
translation.set("*live system is currently not available because the system is still under development","*Il sistema live non è attualmente disponibile perché il sistema è ancora in fase di sviluppo");
translation.set("yes, take me there","Si, portami là");
translation.set("cancel","Cancella");
translation.set("before you download","Prima che scarichi");
translation.set("please read this before you continue","Perfavore leggi questo prima di continuare");
translation.set("below is the shasum of the download. you can use it to check download's integrity:","Sotto c'è lo shasum del download. puoi usarlo per verificare l'integrità del download");
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
translation.set("avdanos support articles","articoli di supporto di AvdanOS");
translation.set("search support articles","Cerca articoli di supporto");
translation.set("ask our community","Chiedi alla nostra community");

// betapopup.tsx
translation.set("hey look! a new testing version of this page is available!","Hei, aspetta! una nuova versione di questa pagina è disponibile!");
translation.set("close","Chiudi");
translation.set("check it out","Dacci un'ochiata");

// docs.tsx
translation.set("read the features in detail.","Lggi le funzionalita in dettaglio");
translation.set("i'm a user","Sono un utente");
translation.set("open manual","Apri il manuale");
translation.set("manual is not available yet","");
translation.set("i'm a developer","Sono un developer");
translation.set("open documentation","Apri la documentazione");
translation.set("doc is not available yet","");

// demo.tsx
// "Try in your browser." is in index.tsx
translation.set("full screen","Schermo intero");

// 404.tsx
translation.set("page not found","Pagina non trovata");
translation.set("this page does not exist.","Questa pagina non esiste.");
translation.set("join in and help us out developing an open-source operating system.","Entra e aiutaci a sviluppare un sistema operativo open source"); // don't translate this yet (technical issue)

// widthrequirement.tsx
translation.set("width incompatibility","incompatibilità di larghezza");
translation.set("increase your window width","Aumenta la larghezza della tua finestra");
translation.set(
  "your window is too small to display the content of this page, and we detected that you got more screen estate. please increase your window width or maximise your browser window.",
  "La tua finestra è troppo piccola per visualizzare il contenuto di questa pagina e abbiamo rilevato che hai più spazio sullo schermo. si prega di aumentare la larghezza della finestra o di ingrandire la finestra del browser."
);
translation.set("rotate your device","Ruota il tuo dispositivo");
translation.set("your screen is too small to display this page. please rotate to landscape view or use desktop.","Il tuo schermo è troppo piccolo per mostrare questa pagina. per favore ruota ad una vista da paesaggio, o visualizzalo su desktop");
translation.set("this page is incompatible","Questa pagina è incompatibile");
translation.set(
  "your screen width is too small to display the content of this page. you might need to increase your system's resolution use desktop to view this page.",
  "La larghezza dello schermo è troppo piccola per visualizzare il contenuto di questa pagina. Potrebbe essere necessario aumentare la risoluzione del tuo sistema usa desktop per visualizzare questa pagina."
);
translation.set(
  "your screen width is too small to display the content of this page. please increase your system's resolution.",
  "La larghezza dello schermo è troppo piccola per visualizzare il contenuto di questa pagina. Aumenta la risoluzione del tuo sistema."

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
