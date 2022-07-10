let translation = new Map();
import TranslationRebuilder from "../TranslationRebuilder";

// Global
// footer.tsx
translation.set("overview","Oversigt");
translation.set("home","Hjem");
translation.set("features","Funktioner");
translation.set("downloads","Nedhentninger");
translation.set("external links","Eksterne links");
translation.set("twitter","");
translation.set("github","");
translation.set("youtube","");
translation.set("discord","");
translation.set("reddit","");
translation.set("legal","Juridisk");
translation.set("license","Licens");
translation.set("eula","EULA");
translation.set("history of incidents","Hændelseshistorik");
translation.set("privacy and security","Privatliv og Sikkerhed");
translation.set("inspired by","Inspireret af");
translation.set("avdanos contributors","AvdanOS bidragydere");
// alert.tsx
translation.set("is still in development.","Stadig under udvikling");
translation.set("join our discord!","Tilslut vores discord");
// menu.tsx / submenu.tsx
// "home" is in footer.tsx
// "features" is in footer.tsx
// "downloads" is in footer.tsx
translation.set("support","Hjælp");
translation.set("documentation","Dokumentation");
translation.set("docs","Docs");
translation.set("demo","Demo");

// index.tsx
translation.set("your pc but even better!","Din pc, men meget bedre");
translation.set("try in your browser","Prøv i din browser");
translation.set("download now!","Hent nu");
// discover.tsx
translation.set("open source on github","Åben kildekode på GitHub");
translation.set("browse all repos","Gennemse alle depoter");
// discoverCard.tsx
translation.set("avdanos","AvdanOS");
translation.set("meet avdanos, refining the way we think about operating systems.","Mød avdanOS, raffinere måden vi tænker på operativ systemer");
translation.set("official website","Officielle hjemmeside");
translation.set("all the new updates and information about avdanos and support.","Alle nye opdateringer samt informationer om avdanOS og hjælp");
translation.set("desktop environment","Skrivebords system");
translation.set("meet nadva, the official desktop environment for avdanos.","Mød nadva, det officielle skrivebord til avdanOS");
translation.set("a discord bot made for the avdanos community discord server.","en discord robot lavet til avdanOS fællesskabs discord server©");

// features-beta.tsx / features.tsx
translation.set("avdan's concept, we're making it real!","Avdan's koncept, vi gør det til virkelighed");
translation.set("assets are loading, please wait","Aktiver bliver læst, vent venligst");
translation.set("scroll down to see what we've got here","Scroll ned for at se hvad vi har her");
translation.set("this concept video is made by avdan","Denne konceptvideo er lavet af Avdan");
translation.set("watch on youtube","Se den på youtube");
translation.set("familiar dock, ultimate form","Velkendt dok, ultimativ form");
translation.set("everyone knows dock/task bar. we got a brand new dock, with more features than ever before.","Enhver kender en dok-/taskbar. Vi har en helt ny dok, med flere funktioner end nogensinde før.");
translation.set("brand new launch menu","Helt ny startmenu");
translation.set("with everything in one place, do anything anywhere at anytime.","Med alting på et sted, lav alting hvor som helst når som helst.");
translation.set("easily apply layout","Nemt anvendeligt layout");
translation.set(
  "with a list of presets determined from you apps, easily get to work with the perfect window layout. not enough? change it in the settings.",
  "Kom nemt igang med den perfekte vindueopsætning, med en liste af forudindstillinger bestemt af dine apps. Er det ikke nok, kan du bare lave det om i indstillingerne."
);
translation.set("overpowered dock","Kraftfuld Dok");
translation.set("your dock can do more than ever. it's your ultimate manager to get you organised.","Din dok kan gøre mere end nogensinde. Det er din ultimative manager til at blive organiseret");
translation.set("new way to manage files","Ny måde at administrere filer");
translation.set("this file manager keeps you organised and productive. find your files the instant you need it.","Denne filmanager holder dig organiseret og produktiv");
translation.set("drag & drop made easy","Træk & slip gjort nemt");
translation.set(
  "drag and drop is the easiest way to transfer anything on your computer. we make it intuitive and easy to use.",
  "Træk & slip er den nemmeste måde at flytte alting på din computer. Vi gør det intuitivt og nemt at bruge."
);
translation.set("more than multitask","mere end multitasking");
translation.set(
  "want to do many tasks at a time? we know you and we got you. it's now not only multitasking, it's organised multitasking.",
  "Vil du lave flere ting på én gang? vi ved du vil og vi har dig. Nu er det ikke kun multitasking, det er organiseret multitasking."
);
translation.set("tabos!","TabOS!");
translation.set(
  "browsers have proven how powerful tabs are, so why not use them to make your os even more powerful?",
  "Browsere har bevist hvor kraftfulde tabs er, så hvorfor ikke bruge dem til at gøre dit OS mere kraftfuldt"
);
translation.set("new context menu","Ny kontekstmenu");
translation.set(
  "context menu didn't change for multiple decades now. we are tired of a long list of items, and hey why not make it a circle? don't like it? you can switch it back in settings!",
  "Kontekstmenuen har ikke ændret sig i flere årtier nu. Vi er trætte af lange lister af ting, og hey hvorfor ikke lave en cirkel? Kan du ikke lide den? så skift tilbage i indstillingerne!"
);
translation.set("your os, your preference","Dit OS, dine præferencer");
translation.set(
  "we give you control over your system. theme is just an important one of them, and you can get more if you don't like ours.",
  "Vi giver dig kontrol over dit system. Temaer er bare en vigtig en af dem, og du kan få flere hvis du ikke kan lide vores."
);
translation.set("day & night","Dag & Nat");
translation.set(
  "let different themes tell you what time it is. hey, you can even make it reversed. can you do it on windows or macos?",
  "Lad forskellige temaer fortælle dig hvad tiden er. Hey, du kan endda gøre det omvendt. Kan du gøre det på Windows eller MacOS?"
);
translation.set("under development","Under udvikling");
translation.set("this project wouldn't be possible without the community's contributions. join us and help!","Dette projekt ville ikke være muligt uden vores fællesskabsbidrag. Tilslut os og hjælp til!");
translation.set("open demo","Åben demo");

// download.tsx
translation.set("this download is not available yet.", "");
translation.set("give your pc an upgrade.","Giv din PC en opgradering");
// "try in your browser" is in index.tsx section
// "open demo" is in features-beta.tsx section
translation.set("for most people","For de fleste");
translation.set("for pi, pine, and mac","For Pi, Pine og Mac");
translation.set("download","Hent");
translation.set("web preview","Web forhåndsvisning");
translation.set(
  "you're about to visit the web demo version of avdanos, which is only a proof of concept. trying the live system is strongly recommended to getting the full experience from the operating system.",
  "Du er ved at besøge webdemo-versionen af AvdanOS, hvilket kun er bevis-af-koncept. Afprøv live-systemet, er på det kraftigste anbefalet for den fulde oplevelse af operativsystemet."
);
translation.set("*live system is currently not available because the system is still under development","*Live-systemet er i øjeblikket ikke tilgængeligt grundet systemet stadig er under udvikling.");
translation.set("yes, take me there","Ja, tag mig der til");
translation.set("cancel","Afbryd");
translation.set("before you download","Før du henter");
translation.set("please read this before you continue","Venligst læs dette inden du forsætter");
translation.set("below is the shasum of the download. you can use it to check download's integrity:","Her under er shasum af nedhentningen. du kan bruge den til at tjekke nedhentningens integritet:");
translation.set("yes, i understand","Ja, jeg forstår");
translation.set("use torrent download","Brug torrent-hentning");
translation.set("continue","Forsæt");
// in testing
translation.set(
  "having trouble? click [%s] here [%/s] to get help!",
  "Har du problemer? Klik [%s] her [%/s] for hjælp!"
);

// support.tsx
translation.set("avdanos support","AvdanOS hjælp");
translation.set("contact us on social media","Kontakt os på sociale medier");
translation.set("visit","Besøg");

// support-beta.tsx
translation.set("avdanos support articles","AvdanOS hjælpe-artikler");
translation.set("search support articles","Søg i hjælpe-artikler");
translation.set("ask our community","Spørg vores fællesskab");

// betapopup.tsx
translation.set("hey look! a new testing version of this page is available!","Hey se! en ny test-version af denne side er tilgængelig");
translation.set("close","Luk");
translation.set("check it out","Prøv den");

// docs.tsx
translation.set("read the features in detail.","Læs mere om funktionerne");
translation.set("i'm a user","Jeg er bruger");
translation.set("open manual","Åben manual");
translation.set("manual is not available yet","Denne manual er ikke tilgængelig endnu");
translation.set("i'm a developer","Jeg er udvikler");
translation.set("open documentation","Åben dokumentation");
translation.set("doc is not available yet","Docs er ikke tilgængelig endnu");

// demo.tsx
// "Try in your browser." is in index.tsx
translation.set("full screen","Fuld skærm");

// 404.tsx
translation.set("page not found","Side ikke fundet");
translation.set("this page does not exist.","Denne side findes ikke");
translation.set("join in and help us out developing an open-source operating system.",""); // don't translate this yet (technical issue)

// widthrequirement.tsx
translation.set("width incompatibility","Bredde-inkompatibilitet");
translation.set("increase your window width","Forøg din vinduesbredde");
translation.set(
  "your window is too small to display the content of this page, and we detected that you got more screen estate. please increase your window width or maximise your browser window.",
  "Dit vindue er for lille til visning af indholdet på denne side, og vi har opdaget at du har mere skærmplads. Venligst øg din vinduesbredde eller udvid til fuld skærm."
);
translation.set("rotate your device","Rotér din enhed");
translation.set("your screen is too small to display this page. please rotate to landscape view or use desktop.","Din skærm er for lille til at vise denne side. Venligst rotér til landskabs-visning eller brug en computer.");
translation.set("this page is incompatible","denne side er inkompatibel");
translation.set(
  "your screen width is too small to display the content of this page. you might need to increase your system's resolution use desktop to view this page.",
  "Din skærmbredde er for lille til at vise indholdet på denne side. Du skal muligvis øge din systemopløsning. Brug en computer til at vise denne side."
);
translation.set(
  "your screen width is too small to display the content of this page. please increase your system's resolution.",
  "Din skærmbredde er for lille til at vise indholdet på denne side. Venligst øg din skærmopløsning."
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
