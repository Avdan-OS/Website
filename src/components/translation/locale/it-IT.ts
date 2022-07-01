let translation = new Map();
import TranslationRebuilder from "../TranslationRebuilder";

// Global
// footer.tsx
translation.set("overview","panoramica");
translation.set("home","home");
translation.set("features","caratteristiche");
translation.set("downloads","download");
translation.set("external links","link esterni");
translation.set("twitter","");
translation.set("github","");
translation.set("youtube","");
translation.set("discord","");
translation.set("reddit","");
translation.set("legal","legale");
translation.set("license","licenza");
translation.set("eula","eula");
translation.set("history of incidents","storia degli incidenti");
translation.set("privacy and security","privacy e sicurezza");
translation.set("inspired by","inspirato da");
translation.set("avdanos contributors","contributori di AvdanOS");
// alert.tsx
translation.set("is still in development.","è ancora in via di sviluppo");
translation.set("join our discord","entra nel nostro discord");
// menu.tsx / submenu.tsx
// "home" is in footer.tsx
// "features" is in footer.tsx
// "downloads" is in footer.tsx
translation.set("support","supporto");
translation.set("documentation","documentazione");
translation.set("docs","documenti");
translation.set("demo","");

// index.tsx
translation.set("your pc but even better.","il tuo pc ma ancora meglio.");
translation.set("try in your browser","provalo nel tuo browser");
translation.set("download now","scarica adesso");
// discover.tsx
translation.set("open source on github","open source su github");
translation.set("browse all repos","sfoglia tutte le reopistory");

// features-beta.tsx / features.tsx
translation.set("avdan's concept, we're making it real","concetto di avdan, noi lo stiamo realizzando");
translation.set("assets are loading, please wait","le risorse stanno caricano, per favore attendi");
translation.set("scroll down to see what we've got here","scprro verso il basso per vedere quello che abbiamo");
translation.set("this concept video is made by avdan","questo concetto è creato da avdan");
translation.set("watch on youtube","guarda su youtube");
translation.set("familiar dock, ultimate form","dock familiare, forma definitiva");
translation.set("everyone know dock/task bar. we got a brand new dock, with more features than ever before.","tutti conoscono la dock/task bar. noi abbiamo una nuova dock, con più funzionalità di prima.");
translation.set("brand new launch menu","nuovo menù di lancio");
translation.set("with everything in one place, do anything anywhere at anytime.","con tutto nello stesso posto, fai di tutto ogni momento.");
translation.set("easily apply layout.","applica facilmente il layout");
translation.set(
  "with a list of presets determined from you apps, easily get to work with the perfect window layout. not enough? change it in the settings.",
  "con un elenco di preset determinati dalle tue app, puoi facilmente lavorare con il layout perfetto della finestra. non abbastanza? cambialo nelle impostazioni."
);
translation.set("overpowered dock","dock sopraffatta");
translation.set("your dock can do more than ever. it's your ultimate manager to get you organised.","la tua dock può fare più che mai. è il tuo massimo manager per organizzarti.");
translation.set("new way to manage files","nuovo modo per gestire i file");
translation.set("this file manager keeps you organised and productive. find your files the instant you need it.","questo file manager ti mantiene organizzato e produttivo. trova i tuoi file nell'istante in cui ne hai bisogno.");
translation.set("drag & drop made easy","drag & drop facile");
translation.set("drag and drop is the easiest way to transfer anything on your computer. we make it intuitive and easy to use.","drag and drop è il modo più semplice per trasferire qualsiasi cosa sul tuo computer. lo rendiamo intuitivo e facile da usare.");
translation.set("more than multitask","più che multitasking");
translation.set("want to do many tasks at a time? we know you and we got you. it's now not only multitasking, it's organised multitasking.","vuoi fare più compiti alla volta? ti conosciamo e ti abbiamo preso. ora non è solo multitasking, è multitasking organizzato.");
translation.set("tabos!","tab!");
translation.set(
  "browsers have proven how powerful tabs are, so why not use them to make your os even more powerful?",
  "i browser hanno dimostrato quanto siano potenti le schede, quindi perché non usarle per rendere il tuo sistema operativo ancora più potente?"
);
translation.set("new context menu","nuovo menù contestuale");
translation.set(
  "context menu didn't change for multiple decades now. we are tired of a long list of items, and hey why not make it a circle? don't like it? you can switch it back in settings!",
  "il menu contestuale non è cambiato da diversi decenni ormai. siamo stanchi di una lunga lista di elementi, e perché non farne un cerchio? non ti piace? puoi riattivarlo nelle impostazioni!"
);
translation.set("your os, your preference","il tuo sistema operativo, le tue preferenze");
translation.set(
  "we give you control over your system. theme is just an important one of them, and you can get more if you don't like ours.",
  "ti diamo il controllo sul tuo sistema. il tema è solo uno di quelli importanti e puoi ottenerne di più se non ti piace il nostro."
);
translation.set("day & night","giorno e notte");
translation.set("let different themes tell you what time it is. hey, you can even make it reversed. can you do it on windows or macos?","lascia che temi diversi ti dicano che ore sono. ehi, puoi anche farlo invertire. puoi farlo su windows o macos?");
translation.set("under development","sotto sviluppo");
translation.set("this project wouldn't be possible without the community's contributions. join us and help!","questo progetto non sarebbe possibile senza le contribuzioni della nostra fantastica community. entra nel team e aiutaci!");
translation.set("open demo","demo aperta");

// download.tsx
translation.set("give your pc an upgrade.","aggiorna il tuo pc.");
// "try in your browser" is in index.tsx section
// "open demo" is in features-beta.tsx section
translation.set("for most people","raccomandato");
translation.set("for pi, pine, and mac","per pi, pine e mac");
translation.set("download","scarica");
translation.set("web preview","preview nel browser");
translation.set(
  "you're about to visit the web demo version of avdanos, which is only a proof of concept. trying the live system is strongly recommended to getting the full experience from the operating system.",
  "stai per visitare la versione demo web di avdanos, che è solo una prova di concetto. si consiglia vivamente di provare il sistema live per ottenere l'esperienza completa dal sistema operativo."
);
translation.set("*live system is currently not available because the system is still under development","*Il sistema live non è attualmente disponibile perché il sistema è ancora in fase di sviluppo");
translation.set("yes, take me there","si, portami là");
translation.set("cancel","cancella");
translation.set("before you download","prima che scarichi");
translation.set("please read this before you continue","perfavore leggi questo prima di continuare");
translation.set("below is the shasum of the download. you can use it to check download's integrity:","sotto è lo shasum del download. puoi usarlo per verificare l'integrità del download");
translation.set("yes, i understand","si, capisco");
translation.set("use torrent download","scarica tramite torrent");
translation.set("continue","continua");
// in testing
translation.set("Having trouble? Click [%s] here [%/s] to get help!","Hai qualche problema? Clicca [%s] qua [%/s] per chiedere aiuto!");

// support.tsx
translation.set("avdanos support","support AvdanOS");
translation.set("contact us on social media","contattaci sui social media");
translation.set("visita","");

// support-beta.tsx
translation.set("avdanos support articles","AvdanOS articoli di supporto");
translation.set("search support articles","cerca articoli di supporto");
translation.set("ask our community","chiedi alla nostra community");

// betapopup.tsx
translation.set("hey look! a new testing version of this page is available!","hei aspetta! una nuova versione di questa pagina è disponibile!");
translation.set("close","chiudi");
translation.set("check it out","dai un'ochiata");

// docs.tsx
translation.set("read the features in detail.","leggi le funzionalita in dettaglio");
translation.set("i'm a user","sono un utente");
translation.set("open manual","apri il manuale");
translation.set("i'm a developer","sono un developer");
translation.set("open documentation","apri la documentazione");

// demo.tsx
// "Try in your browser." is in index.tsx
translation.set("full screen","schermo intero");

// 404.tsx
translation.set("page not found","pagina non trovata");
translation.set("this page does not exist.","questa pagina non esiste.");
translation.set("join in and help us out developing an open-source operating system.","entra e aiutaci a sviluppare un sistema operativo open source"); // don't translate this yet (technical issue)

// widthrequirement.tsx
translation.set("incompatibilità di larghezza","");
translation.set("aumenta la larghezza della tua finestra","");
translation.set(
  "your window is too small to display the content of this page, and we detected that you got more screen estate. please increase your window width or maximise your browser window.",
  "la tua finestra è troppo piccola per visualizzare il contenuto di questa pagina e abbiamo rilevato che hai più spazio sullo schermo. si prega di aumentare la larghezza della finestra o di ingrandire la finestra del browser."
);
translation.set("rotate your device","ruota il tuo dispositivo");
translation.set("your screen is too small to display this page. please rotate to landscape view or use desktop.","il tuo schermo è troppo piccolo per mostrare questa pagina. per favore ruota ad una vista da paesaggio, o visualizzalo su desktop");
translation.set("this page is incompatible","questa pagina è incompatibile");
translation.set(
  "Your screen width is too small to display the content of this page. You might need to increase your system's resolution use desktop to view this page.",
  "La larghezza dello schermo è troppo piccola per visualizzare il contenuto di questa pagina. Potrebbe essere necessario aumentare la risoluzione del tuo sistema usa desktop per visualizzare questa pagina."
);
translation.set(
  "Your screen width is too small to display the content of this page. Please increase your system's resolution.",
  "La larghezza dello schermo è troppo piccola per visualizzare il contenuto di questa pagina. Aumenta la risoluzione del tuo sistema."
);

// This below is for identifier (for developers), please don't touch
translation.set(
  "download.tsx/having-trouble",
  TranslationRebuilder(
    "download.tsx/having-trouble",
    translation.get("Having trouble? Click [%s] here [%/s] to get help!")
  )
);

export default translation;
