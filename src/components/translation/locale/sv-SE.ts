let translation = new Map();
import TranslationRebuilder from "../TranslationRebuilder";

// Global
// footer.tsx
translation.set("overview","Översikt");
translation.set("home","Hem");
translation.set("features","Funktioner");
translation.set("downloads","Nedladdningar");
translation.set("external links","Externa länkar");
translation.set("twitter","");
translation.set("github","");
translation.set("youtube","");
translation.set("discord","");
translation.set("reddit","");
translation.set("legal","Juridiskt");
translation.set("license","Licens");
translation.set("eula","EULA");
translation.set("history of incidents","Incident historia");
translation.set("privacy and security","Integritet och säkerhet");
translation.set("inspired by","Inspererat av");
translation.set("avdanos contributors","AvdanOS Bidragare");
// alert.tsx
translation.set("is still in development.","är fortfarande i utveckling.");
translation.set("join our discord!","Joina våran discord server!");
// menu.tsx / submenu.tsx
// "home" is in footer.tsx
// "features" is in footer.tsx
// "downloads" is in footer.tsx
translation.set("support","Hjälp");
translation.set("documentation","Dokumentation");
translation.set("docs","Docs");
translation.set("demo","Demo");

// index.tsx
translation.set("your pc but even better!","Din dator, bara bättre!");
translation.set("try in your browser","Prova i din webbläsare");
translation.set("download now!","Ladda ner nu!");
// discover.tsx
translation.set("open source on github","Öppen källkod på GitHub");
translation.set("browse all repos","Bläddra bland alla kod arkiv");
// discoverCard.tsx
translation.set("avdanos","AvdanOS");
translation.set("meet avdanos, refining the way we think about operating systems.","Möt AvdanOS, vi utvidgar gränserna om vad operativsystem kan göra.");
translation.set("official website","Officiell Hemsida");
translation.set("all the new updates and information about avdanos and support.","Alla nya uppdateringar & information om AvdanOS och hjälp.");
translation.set("desktop environment","Skrivbordsmiljö");
translation.set("meet nadva, the official desktop environment for avdanos.","Möt nadva, den officiella skrivbordsmiljön för AvdanOS.");
translation.set("a discord bot made for the avdanos community discord server.","En discord bot gjord för AvdanOS discord servern.");

// features-beta.tsx / features.tsx
translation.set("avdan's concept, we're making it real!","Avdans koncept, vi gör det riktigt");
translation.set("assets are loading, please wait","Tillbehör laddas, var vänlig vänta");
translation.set("scroll down to see what we've got here","Skrolla ner för att se vad vi har här");
translation.set("this concept video is made by avdan","Denna koncept video är gjord av Avdan");
translation.set("watch on youtube","Kolla på Youtube");
translation.set("familiar dock, ultimate form","Bekant aktivitetsfält, ultimat form");
translation.set("everyone knows dock/task bar. we got a brand new dock, with more features than ever before.","Alla vet om aktivitetsfältet. Vi gör det bättre med fler funktioner än du någonsin kunnat drömma om.");
translation.set("brand new launch menu","Ett helt nytt startfält");
translation.set("with everything in one place, do anything anywhere at anytime.","Med allt på samma ställe kan du göra allt när du vill och vart du vill.");
translation.set("easily apply layout","Tillämpa layouter enkelt");
translation.set(
  "with a list of presets determined from you apps, easily get to work with the perfect window layout. not enough? change it in the settings.",
  "Med en lista av förinställningar beroende på dina appar kan du snabbt gör vad du vill med den perfekta fönster layouten. Inte tillräckligt? Ändra dem i inställningarna."
);
translation.set("overpowered dock","Ett övervädigande aktivitetsfält");
translation.set("your dock can do more than ever. it's your ultimate manager to get you organised.","Ditt aktivitetsfält kan göra mer än någonsin. Det är ditt ultimata verktyg för att hjälpa dig vara organiserad.");
translation.set("new way to manage files","Ett nytt sätt att organisera dina filer");
translation.set("this file manager keeps you organised and productive. find your files the instant you need it.","Med en filehanterare som håller dig organiserad och produktiv. Hitta dina filer på direkten just när du behöver dem.");
translation.set("drag & drop made easy","Drag & Drop gör det enkelt");
translation.set(
  "drag and drop is the easiest way to transfer anything on your computer. we make it intuitive and easy to use.",
  "Drag and Drop är det enklaste sättet att flytta vad du vill över hela din dator. Vi gör det lättare, helt enkelt."
);
translation.set("more than multitask","Mer än multitask");
translation.set(
  "want to do many tasks at a time? we know you and we got you. it's now not only multitasking, it's organised multitasking.",
  "Vill du göra fler saker samtidigt? Vi fattar. Nu är det inte bara multitasking, utan organiserad multitasking."
);
translation.set("tabos!","TabOS!");
translation.set(
  "browsers have proven how powerful tabs are, so why not use them to make your os even more powerful?",
  "Webbläsare har visat oss hur mäktiga flikar är, så varför inte använda dem till att göra operativsystemet mer mäktigt?"
);
translation.set("new context menu","Ny kontext meny");
translation.set(
  "context menu didn't change for multiple decades now. we are tired of a long list of items, and hey why not make it a circle? don't like it? you can switch it back in settings!",
  "Kontext meyn har inte ändrats på många årtionden nu. Vi är trötta på en lång lista av saker, och varför inte gjöra det till en cirkel? Gillar du inte det? Då kan du byta tillbaka i inställningar!"
);
translation.set("your os, your preference","Din dator, dina perferenser");
translation.set(
  "we give you control over your system. theme is just an important one of them, and you can get more if you don't like ours.",
  "Vi ger dig kontrollen över sitt system. Teman är bara en liten del av vad du kan använda och gillar du inte dem kan du alltid hitta nya."
);
translation.set("day & night","Dag & Natt");
translation.set(
  "let different themes tell you what time it is. hey, you can even make it reversed. can you do it on windows or macos?",
  "Låt olika teman säga dig vad klockan är. Du kan till och med göra det tvärtom. Kan du göra det på Windows eller macOS?"
);
translation.set("under development","Under utveckling");
translation.set("this project wouldn't be possible without the community's contributions. join us and help!","Detta projekt hade inte vart möjligt utan hjälp från alla i denna grupp. Följ med oss på resan och hjälp till!");
translation.set("open demo","");

// download.tsx
translation.set("this download is not available yet.", "Denna nerladdning är inte tillgänglig än.");
translation.set("give your pc an upgrade.","Ge din dator en upgradering.");
// "try in your browser" is in index.tsx section
// "open demo" is in features-beta.tsx section
translation.set("for most people","För dem flesta");
translation.set("for pi, pine, and mac","För pi, pine och mac");
translation.set("download","Ladda ner");
translation.set("web preview","Web demo");
translation.set(
  "you're about to visit the web demo version of avdanos, which is only a proof of concept. trying the live system is strongly recommended to getting the full experience from the operating system.",
  "Du är påväg att pröva web demot av AvdanOS, vilket bara visar hur det kan se ut. Det är därför starkt rekommenderat att pröva AvdanOS på en riktig dator för att få en full upplevelse."
);
translation.set("*live system is currently not available because the system is still under development","*AvdanOS är i nuvarandet inte tillgänglig eftersom att det forfarande görs");
translation.set("yes, take me there","Ja, ta mig dit");
translation.set("cancel","Avbryt");
translation.set("before you download","Innan du fortsätter med nerladdningen");
translation.set("please read this before you continue","Läs följande innan du fortsätter");
translation.set("below is the shasum of the download. you can use it to check download's integrity:","Nedanför är shasumman av nedladdningen. Du kan använda den för att kolla nerladdingens integritet:");
translation.set("yes, i understand","Ja, jag förstår");
translation.set("use torrent download","Använd torrent nerladdning");
translation.set("continue","Fortsätt");
// in testing
translation.set(
  "having trouble? click [%s] here [%/s] to get help!",
  "Några problem? Tryck [%s] här [%/s] för att få hjälp!"
);

// support.tsx
translation.set("avdanos support","AvdanOS Support");
translation.set("contact us on social media","Kontakta oss på sociala medier");
translation.set("visit","Besök");

// support-beta.tsx
translation.set("avdanos support articles","AvdanOS Support Artiklar");
translation.set("search support articles","Sök bland support artiklarna");
translation.set("ask our community","Fråga vårt team");

// betapopup.tsx
translation.set("hey look! a new testing version of this page is available!","Hej kolla! Det finns en ny test version av denna sida!");
translation.set("close","Stäng");
translation.set("check it out","Kolla in den");

// docs.tsx
translation.set("read the features in detail.","Läs om funktionerna i detalj.");
translation.set("i'm a user","Jag är en användare");
translation.set("open manual","Öppna manual");
translation.set("manual is not available yet","Manualen är inte tillgänglig just nu");
translation.set("i'm a developer","Jag är en utvecklare");
translation.set("open documentation","Öppna dokumenation");
translation.set("doc is not available yet","Dokumentationen är inte tillgänglig just nu");

// demo.tsx
// "Try in your browser." is in index.tsx
translation.set("full screen","Helskärm");

// 404.tsx
translation.set("page not found","Sidan hittades inte");
translation.set("this page does not exist.","Denna sida finns inte");
translation.set("join in and help us out developing an open-source operating system.",""); // don't translate this yet (technical issue)

// widthrequirement.tsx
translation.set("width incompatibility","Inkompatibel skärm bred");
translation.set("increase your window width","Öka storleken på ditt fönster");
translation.set(
  "your window is too small to display the content of this page, and we detected that you got more screen estate. please increase your window width or maximise your browser window.",
  "Ditt fönster är för litet för att visa innehållet på denna sida, men vi har hittat att du har mer skärm utrymme. Var snäll och öka bredden på ditt fönster eller maximera detta fönster."
);
translation.set("rotate your device","Rotera din enhet");
translation.set("your screen is too small to display this page. please rotate to landscape view or use desktop.","Din skärm är för liten för att visa denna sida. Var snäll och rotera enheten till landskap eller använd en dator.");
translation.set("this page is incompatible","");
translation.set(
  "your screen width is too small to display the content of this page. you might need to increase your system's resolution use desktop to view this page.",
  "Bredden på din skärm är för liten för att visa innehållet på denna sida. Du kan behöva öka ditt systems resulution eller använda en dator för att visa denna sida."
);
translation.set(
  "your screen width is too small to display the content of this page. please increase your system's resolution.",
  "Bredden på din skärm är för liten för att visa innehållet på denna sida. Du behöver öka ditt systems resulution."
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
