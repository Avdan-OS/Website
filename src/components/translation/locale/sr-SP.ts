let translation = new Map();
import TranslationRebuilder from "../TranslationRebuilder";

// Global
// footer.tsx
translation.set("overview","преглед");
translation.set("home","почетак");
translation.set("features","карактеристике");
translation.set("downloads","преузимања");
translation.set("external links","спољни линкови");
translation.set("twitter","twitter");
translation.set("github","github");
translation.set("youtube","youtube");
translation.set("discord","discord");
translation.set("reddit","reddit");
translation.set("legal","правно");
translation.set("license","дозвола");
translation.set("eula","уговор о лиценци");
translation.set("history of incidents","историја инцидената");
translation.set("privacy and security","приватост и безбедност");
translation.set("inspired by","инспирисано од");
translation.set("avdanos contributors","avdanos сарадници");
// alert.tsx
translation.set("is still in development.","је даље у развоју");
translation.set("join our discord","придружите се нашем discord-у");
// menu.tsx / submenu.tsx
// "home" is in footer.tsx
// "features" is in footer.tsx
// "downloads" is in footer.tsx
translation.set("support","подршка");
translation.set("documentation","документација");
translation.set("docs","документа");
translation.set("demo","проба");

// index.tsx
translation.set("your pc but even better.","ваш рачунар али чак бољи.");
translation.set("try in your browser","пробајте у вашем претраживачу");
translation.set("download now","преузмите сада");
// discover.tsx
translation.set("open source on github","отворите извор на github-у");
translation.set("browse all repos","претражите све репозиторијуме");

// features-beta.tsx / features.tsx
translation.set("avdan's concept, we're making it real","авданов концепт, ми га претварамо у стварност");
translation.set("assets are loading, please wait","садржај се учитава молим Вас сачекајте");
translation.set("scroll down to see what we've got here","скролујте доле да видите шта имамо");
translation.set("this concept video is made by avdan","овај видео концепт је креирао авдан");
translation.set("watch on youtube","погледајте на јутјубу");
translation.set("familiar dock, ultimate form","препознатљив док, ултимативна форма");
translation.set("everyone know dock/task bar. we got a brand new dock, with more features than ever before.","свако зна за док/радне траке. ми добијамо потпуно нов док, са више могућности него икад пре.");
translation.set("brand new launch menu","потпуно нов почетни мени");
translation.set("with everything in one place, do anything anywhere at anytime.","са свиме на једним местом, радите било шта било кад.");
translation.set("easily apply layout.","лако постављен изглед");
translation.set(
  "with a list of presets determined from you apps, easily get to work with the perfect window layout. not enough? change it in the settings.",
  "са листом шаблона одрећених из ваших апликација, лако пређите на посао у савршеном окружењу. није довољно? промените то у подешавањима."
);
translation.set("overpowered dock","прејак док");
translation.set("your dock can do more than ever. it's your ultimate manager to get you organised.","ваш док може више него пре. то је ваш ултимативни менаџер да се организујете.");
translation.set("new way to manage files","нов начин за организацију докумената");
translation.set("this file manager keeps you organised and productive. find your files the instant you need it.","овај менаџер дадотека ће вас одржати организованим и продуктивним");
translation.set("drag & drop made easy","лако превуците и испустите");
translation.set(
  "drag and drop is the easiest way to transfer anything on your computer. we make it intuitive and easy to use.",
  "превуци и испусти је најлакши начин преношења било чега на вашем рачунару. ми га побољшавамо за једноставност за коришћење."
);
translation.set("more than multitask","више од мултитаскинга");
translation.set(
  "want to do many tasks at a time? we know you and we got you. it's now not only multitasking, it's organised multitasking.",
  "желите да урадите више задатака од једном? знамо и не бриите. сада није само мултитаскинг, него организован мултитаскинг."
);
translation.set("tabos!","tabos!");
translation.set(
  "browsers have proven how powerful tabs are, so why not use them to make your os even more powerful?",
  "претреживачи су доказали колико су табови моћни, па зашто их не користити да се направи оперативни систем још моћнијим?"
);
translation.set("new context menu","нови контекстни мени");
translation.set(
  "context menu didn't change for multiple decades now. we are tired of a long list of items, and hey why not make it a circle? don't like it? you can switch it back in settings!",
  "контекстни мени се није мењао више деценија. уморни смо од дугачке листе команди, и зашто их не направити у кружном облику? не свића вам се? можете вратити на старо у подешавањима!"
);
translation.set("your os, your preference","ваш оперативни систем, ваш укус");
translation.set(
  "we give you control over your system. theme is just an important one of them, and you can get more if you don't like ours.",
  "дајемо вам контролу над вашим системом. теме су такође битне и можете наћи више тема ако вам се не свиђају наше."
);
translation.set("day & night","дан и ноћ");
translation.set(
  "let different themes tell you what time it is. hey, you can even make it reversed. can you do it on windows or macos?",
  "нека различите теме кажу колико је сати. хеј, можете га чак и вратити уназад. можете ли то урадити на windows-у или macos-у?"
);
translation.set("under development","под развојем");
translation.set("this project wouldn't be possible without the community's contributions. join us and help!","овај пројекат не би био могућ без заједнице сарадника. придужите нам се и помозите!");
translation.set("open demo","испробајте на вебу");

// download.tsx
translation.set("give your pc an upgrade.","дајте вашем рачунару надоградњу.");
// "try in your browser" is in index.tsx section
// "open demo" is in features-beta.tsx section
translation.set("for most people","за многе људе");
translation.set("for pi, pine, and mac","за pi, pine и mac");
translation.set("download","преузмите");
translation.set("web preview","веб преглед");
translation.set(
  "you're about to visit the web demo version of avdanos, which is only a proof of concept. trying the live system is strongly recommended to getting the full experience from the operating system.",
  "сада ћете посетити веб пробну верзију avdanos-a, који је само доказ концепта. испробати систем уживо је велика препорука да се осети пуно искуство оперативног система."
);
translation.set("*live system is currently not available because the system is still under development","*систем уживо није тренутно доступан зато што је систем и даље под развојем");
translation.set("yes, take me there","да, одведите ме дотле");
translation.set("cancel","затвори");
translation.set("before you download","пре него што преузмете");
translation.set("please read this before you continue","молимо вас прочитајте ово пре него што наставите");
translation.set("below is the shasum of the download. you can use it to check download's integrity:","испод је shasum преузимања. можете искористити да проверите интегритет преузимања:");
translation.set("yes, i understand","да, разумем");
translation.set("use torrent download","преузмите преко torrent-а");
translation.set("continue","наставите");
// in testing
translation.set(
  "Having trouble? Click [%s] here [%/s] to get help!",
  "Имате проблема? Кликните [%s] овде [%/s] за помоћ!"
);

// support.tsx
translation.set("avdanos support","avdanos подршка");
translation.set("contact us on social media","контактирајте нас преко друштвених мрежа");
translation.set("visit","посетите");

// support-beta.tsx
translation.set("avdanos support articles","avdanos чланак за подршку");
translation.set("search support articles","претражите чланке за подршку");
translation.set("ask our community","питајте нашу заједницу");

// betapopup.tsx
translation.set("hey look! a new testing version of this page is available!","погледајте! верзија за испитивање ове странице је доступан!");
translation.set("close","затвори");
translation.set("check it out","испробајте");

// docs.tsx
translation.set("read the features in detail.","прочитајте карактеристике у детаљима.");
translation.set("i'm a user","ја сам корисник");
translation.set("open manual","отвори приручник");
translation.set("i'm a developer","ја сам програмер");
translation.set("open documentation","отвори документацију");

// demo.tsx
// "Try in your browser." is in index.tsx
translation.set("full screen","пун екран");

// 404.tsx
translation.set("page not found","страница није пронађена");
translation.set("this page does not exist.","ова страница не постоји.");
translation.set("join in and help us out developing an open-source operating system.","придружите нам се и помозите нам у развојијању оперативног система отвореног извора."); // don't translate this yet (technical issue)

// widthrequirement.tsx
translation.set("width incompatibility","ширина неподржана");
translation.set("increase your window width","повећајте ширину прозора");
translation.set(
  "your window is too small to display the content of this page, and we detected that you got more screen estate. please increase your window width or maximise your browser window.",
  "ваш прозор је премали да би се приказао садржај ове странице, и препознали смо да имате више простора на екрану. молимо вас проширите прозор или максимизирајте ваш претраживач"
);
translation.set("rotate your device","окрените ваш уређај");
translation.set("your screen is too small to display this page. please rotate to landscape view or use desktop.","ваш екран је превише мали да се прикаже страница. молимо вас окрените на водоравно или користите десктоп.");
translation.set("this page is incompatible","ова страница није компатибилна");
translation.set(
  "Your screen width is too small to display the content of this page. You might need to increase your system's resolution use desktop to view this page.",
  "Ваша ширина екрана је премала да би се садржај странице приказао. Можда ћете морати да повећате системску резолуцију десктоп рачунара да бисте видели страницу."
);
translation.set(
  "Your screen width is too small to display the content of this page. Please increase your system's resolution.",
  "Ваша ширина екрана је премала да би се садржај странице приказао. Молимо вас повећајте резолуцију вашег система."
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
