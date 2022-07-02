let translation = new Map();
import TranslationRebuilder from "../TranslationRebuilder";

// Global
// footer.tsx
translation.set("overview","oversigt");
translation.set("home","hjem");
translation.set("features","funktioner");
translation.set("downloads","");
translation.set("external links","eksterne links");
translation.set("twitter","twitter");
translation.set("github","github");
translation.set("youtube","youtube");
translation.set("discord","discord");
translation.set("reddit","reddit");
translation.set("legal","legal");
translation.set("license","licens");
translation.set("eula","eula");
translation.set("history of incidents","hændelses historie");
translation.set("privacy and security","privatliv og sikkerhed");
translation.set("inspired by","inspireret af");
translation.set("avdanos contributors","avdanos bidragydere");
// alert.tsx
translation.set("is still in development.","er stadig under udvikling");
translation.set("join our discord","tilslut vores discord");
// menu.tsx / submenu.tsx
// "home" is in footer.tsx
// "features" is in footer.tsx
// "downloads" is in footer.tsx
translation.set("support","support");
translation.set("documentation","dokumentation");
translation.set("docs","");
translation.set("demo","");

// index.tsx
translation.set("your pc but even better.","din pc men meget bedre");
translation.set("try in your browser","prøv det af i din browser");
translation.set("download now","download nu");
// discover.tsx
translation.set("open source on github","open source på github");
translation.set("browse all repos","browse alle repos");

// features-beta.tsx / features.tsx
translation.set("avdan's concept, we're making it real","avdan's koncept, vi gør det til virklighed");
translation.set("assets are loading, please wait","aktiver bliver læst, vent venligst");
translation.set("scroll down to see what we've got here","scroll ned for at se hvad vi har her ");
translation.set("this concept video is made by avdan","denne koncept video er lavet af avdan");
translation.set("watch on youtube","se den på youtube");
translation.set("familiar dock, ultimate form","velkendt dock, ultimativ form");
translation.set("everyone know dock/task bar. we got a brand new dock, with more features than ever before.","enhver kender en dock/task bar. vi har en helt ny dock, med flere funktioner end nogen sinde.");
translation.set("brand new launch menu","helt ny start menu");
translation.set("with everything in one place, do anything anywhere at anytime.","med alting på et sted, lav alting hvor som helst når som helst ");
translation.set("easily apply layout","nemt at anvende layout ");
translation.set(
  "with a list of presets determined from you apps, easily get to work with the perfect window layout. not enough? change it in the settings.",
  "med en liste af forudindstillinger bestemt af dine apps, kom nemt igang med det perfekte vindue setup. ikke nok? lav det om i indstillinger."
);
translation.set("overpowered dock","overpowered dock");
translation.set("your dock can do more than ever. it's your ultimate manager to get you organised.","din dock kan gøre mere end nogen sinde. det er din ultimative manager til at blive organiseret");
translation.set("new way to manage files","ny måde at administrere filer");
translation.set("this file manager keeps you organised and productive. find your files the instant you need it.","denne fil manager holder dig organiseret og produktiv");
translation.set("drag & drop made easy","træk & slip gjort nemt");
translation.set(
  "drag and drop is the easiest way to transfer anything on your computer. we make it intuitive and easy to use.",
  "træk & slip er den nemmest måde at flytte alting på din computer. vi laver det intuitivt og nemt at bruge."
);
translation.set("more than multitask","mere en multitasking");
translation.set(
  "want to do many tasks at a time? we know you and we got you. it's now not only multitasking, it's organised multitasking.",
  "vil du lave flere ting på éngang? vi ved du vil og vi har dig. nu er det ikke kun multitasking, det er organiseret multitasking"
);
translation.set("tabos!","tabos");
translation.set(
  "browsers have proven how powerful tabs are, so why not use them to make your os even more powerful?",
  "browsers har bevist hvor kraftfulde tabs er, så hvorfor ikke bruge dem til at gøre dit os mere kraftfuldt"
);
translation.set("new context menu","ny context menu");
translation.set(
  "context menu didn't change for multiple decades now. we are tired of a long list of items, and hey why not make it a circle? don't like it? you can switch it back in settings!",
  "context menu'en har ikke ændret sig i flere årtier nu. vi er trætte af lange lister af ting, og hey hvorfor ikke lave en cirkel? kan du ikke lide den? så skift tilbage i indstillerne!"
);
translation.set("your os, your preference","dit os, dine præferencer");
translation.set(
  "we give you control over your system. theme is just an important one of them, and you can get more if you don't like ours.",
  "vi giver dig control over dit system. temaer er bare en vigtig en af dem, og du kan få flere hvis du ikke kan lide vores."
);
translation.set("day & night","dag & nat");
translation.set(
  "let different themes tell you what time it is. hey, you can even make it reversed. can you do it on windows or macos?",
  "lad forskellige temaer fortælle dig hvad tiden er. hey, du kan enda gøre det omvendt. kan du gøre det på windows eller macos?"
);
translation.set("under development","under udvikling");
translation.set("this project wouldn't be possible without the community's contributions. join us and help!","dette prokjet ville ikke være muligt uden vores fællesskabets bidrag. tilslut os og hjælp til!");
translation.set("open demo","åben demo");

// download.tsx
translation.set("give your pc an upgrade.","giv din pc en upgradering");
// "try in your browser" is in index.tsx section
// "open demo" is in features-beta.tsx section
translation.set("for most people","for de fleste folk");
translation.set("for pi, pine, and mac","for pi, pine og mac");
translation.set("download","download");
translation.set("web preview","web forhåndsvisning");
translation.set(
  "you're about to visit the web demo version of avdanos, which is only a proof of concept. trying the live system is strongly recommended to getting the full experience from the operating system.",
  "du er ved at besøge web demo versionen af avdanos, hvilket kun er bevis af koncept. afprøv live system er på det kraftigste anbefalet for at få den fulde oplevelse af oprativ systemet"
);
translation.set("*live system is currently not available because the system is still under development","live systemet er i øjeblikket ikke tilgængeligt grundet systemet stadig er under udvikling");
translation.set("yes, take me there","ja, tag mig der til");
translation.set("cancel","afbryd");
translation.set("before you download","før du henter");
translation.set("please read this before you continue","venligst læs dette inden du forsætter");
translation.set("below is the shasum of the download. you can use it to check download's integrity:","her under er shasum af downloaden. du kan bruge den til at checke downloaden's integritet");
translation.set("yes, i understand","ja, jeg forstår");
translation.set("use torrent download","brug torrent download");
translation.set("continue","forsæt");
// in testing
translation.set(
  "having trouble? click [%s] here [%/s] to get help!",
  "har du problemer? Click [%s] her [%/s] for hjælp!"
);

// support.tsx
translation.set("avdanos support","avdanos support");
translation.set("contact us on social media","kontakt os på sociale medier");
translation.set("visit","besøg");

// support-beta.tsx
translation.set("avdanos support articles","avdanos support artikler");
translation.set("search support articles","søg support artikler");
translation.set("ask our community","spørg vores fællesskab");

// betapopup.tsx
translation.set("hey look! a new testing version of this page is available!","hey see! en ny testing version af denne side er tilgængelig");
translation.set("close","luk");
translation.set("check it out","prøv den");

// docs.tsx
translation.set("read the features in detail.","læs om funktionerne i detailer");
translation.set("i'm a user","jeg er bruger");
translation.set("open manual","åben manual");
translation.set("i'm a developer","jeg er udvikler");
translation.set("open documentation","åben dokumentation");

// demo.tsx
// "Try in your browser." is in index.tsx
translation.set("full screen","fuld skærm");

// 404.tsx
translation.set("page not found","side ikke fundet");
translation.set("this page does not exist.","denne side findes ikke");
translation.set("join in and help us out developing an open-source operating system.",""); // don't translate this yet (technical issue)

// widthrequirement.tsx
translation.set("width incompatibility","bredde inkompatibilitet");
translation.set("increase your window width","øg dit vindue bredde");
translation.set(
  "your window is too small to display the content of this page, and we detected that you got more screen estate. please increase your window width or maximise your browser window.",
  "dit vindue er for lille til visning af indholdet på denne side, og vi har opdaget at du har mere skærm plads. venligst øg din vindue bredde eller udvid til fuld skærm"
);
translation.set("rotate your device","roter din enhed");
translation.set("your screen is too small to display this page. please rotate to landscape view or use desktop.","din skærm er for lille til at vise denne side. venligst roter til landscape view eller brug en computer");
translation.set("this page is incompatible","denne side er inkompatible");
translation.set(
  "your screen width is too small to display the content of this page. you might need to increase your system's resolution use desktop to view this page.",
  "din skærm bredde er for lille til at vise indholdet på denne side. du skal muligvis øge dit systems opløsning brug en computer til at vise denne side."
);
translation.set(
  "your screen width is too small to display the content of this page. please increase your system's resolution.",
  "din skærm bredde er for lille til at vise indholdet på denne side. venligst øg din skærms opløsning."
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