let translation = new Map();
import TranslationRebuilder from "../TranslationRebuilder";

// Global
// footer.tsx
translation.set("overview","Преглед");
translation.set("home","Почетак");
translation.set("features","Карактеристике");
translation.set("downloads","Преузимања");
translation.set("external links","Спољни линкови");
translation.set("twitter","Twitter");
translation.set("github","Github");
translation.set("youtube","Youtube");
translation.set("discord","Discord");
translation.set("reddit","Reddit");
translation.set("legal","Правно");
translation.set("license","Дозвола");
translation.set("eula","Уговор о лиценци");
translation.set("history of incidents","Историја инцидената");
translation.set("privacy and security","Приватост и безбедност");
translation.set("inspired by","Инспирисано од:");
translation.set("avdanos contributors","AvdanOS сарадници");
// alert.tsx
translation.set("is still in development.","је даље у развоју.");
translation.set("join our discord!","Придружите се нашем Discord-у");
// menu.tsx / submenu.tsx
// "home" is in footer.tsx
// "features" is in footer.tsx
// "downloads" is in footer.tsx
translation.set("support","Подршка");
translation.set("documentation","Документација");
translation.set("docs","Документа");
translation.set("demo","Проба");

// index.tsx
translation.set("your pc but even better!","Ваш рачунар али чак бољи!");
translation.set("try in your browser","Испробајте у вашем претраживачу");
translation.set("download now!","Преузмите сада!");
// discover.tsx
translation.set("open source on github","Отворите извор на github-у");
translation.set("browse all repos","Претражите све репозиторијуме");
// discoverCard.tsx
translation.set("avdanos","");
translation.set("meet avdanos, refining the way we think about operating systems.","");
translation.set("official website","");
translation.set("all the new updates and information about avdanos and support.","");
translation.set("desktop environment","");
translation.set("meet nadva, the official desktop environment for avdanos.","");
translation.set("a discord bot made for the avdanos community discord server.","");

// features-beta.tsx / features.tsx
translation.set("avdan's concept, we're making it real!","Авданов концепт, ми га претварамо у стварност");
translation.set("assets are loading, please wait","Садржај се учитава, молимо Вас сачекајте");
translation.set("scroll down to see what we've got here","Скролујте доле да видите шта имамо");
translation.set("this concept video is made by avdan","Овај видео концепт је креирао Авдан");
translation.set("watch on youtube","Погледајте на Youtube-у");
translation.set("familiar dock, ultimate form","Препознатљив док, ултимативна форма");
translation.set("everyone knows dock/task bar. we got a brand new dock, with more features than ever before.","Свако зна за док/радне траке. Нудимо потпуно нов док, са више могућности него икад пре.");
translation.set("brand new launch menu","Потпуно нов почетни мени");
translation.set("with everything in one place, do anything anywhere at anytime.","Са свиме на једним местом, радите било шта у било које време.");
translation.set("easily apply layout","Лако постављен изглед");
translation.set(
  "with a list of presets determined from you apps, easily get to work with the perfect window layout. not enough? change it in the settings.",
  "Са листом шаблона одрећених из ваших апликација, лако пређите на посао у савршеном окружењу. Није довољно? Промените то у подешавањима."
);
translation.set("overpowered dock","Прејак док");
translation.set("your dock can do more than ever. it's your ultimate manager to get you organised.","Ваш док може више него пре. То је Ваш ултимативни менаџер да се организујете.");
translation.set("new way to manage files","Нов начин за организацију докумената");
translation.set("this file manager keeps you organised and productive. find your files the instant you need it.","Овај менаџер дадотека ће вас одржати организованим и продуктивним. Нађите документе када су Вам потребни.");
translation.set("drag & drop made easy","Лако превуците и испустите");
translation.set(
  "drag and drop is the easiest way to transfer anything on your computer. we make it intuitive and easy to use.",
  "Превуци и испусти је најлакши начин преношења било чега на вашем рачунару. Ми га побољшавамо за једноставност коришћењења."
);
translation.set("more than multitask","Више од мултитаскинга");
translation.set(
  "want to do many tasks at a time? we know you and we got you. it's now not only multitasking, it's organised multitasking.",
  "Желите да урадите више задатака од једном? Знамо и не брините. Сада није само мултитаскинг, него организован мултитаскинг."
);
translation.set("tabos!","TabOS!");
translation.set(
  "browsers have proven how powerful tabs are, so why not use them to make your os even more powerful?",
  "Претреживачи су доказали колико су табови моћни, па зашто их не користити да се направи оперативни систем још моћнијим?"
);
translation.set("new context menu","Нови контекстни мени");
translation.set(
  "context menu didn't change for multiple decades now. we are tired of a long list of items, and hey why not make it a circle? don't like it? you can switch it back in settings!",
  "Контекстни мени се није мењао више деценија. Уморни смо од дугачке листе команди, и зашто их не направити у кружном облику? Не свића вам се? Можете вратити на старо у подешавањима!"
);
translation.set("your os, your preference","Ваш оперативни систем, ваш укус");
translation.set(
  "we give you control over your system. theme is just an important one of them, and you can get more if you don't like ours.",
  "Дајемо вам контролу над вашим системом. Теме су такође битне и можете наћи више тема, ако вам се не свиђају наше."
);
translation.set("day & night","Дан и ноћ");
translation.set(
  "let different themes tell you what time it is. hey, you can even make it reversed. can you do it on windows or macos?",
  "Нека различите теме кажу колико је сати. Хеј, можете га чак и вратити уназад. Можете ли то урадити на Windows-у или MacOS-у?"
);
translation.set("under development","Под развојем");
translation.set("this project wouldn't be possible without the community's contributions. join us and help!","Овај пројекат не би био могућ без заједнице сарадника. Придужите нам се и помозите!");
translation.set("open demo","Испробајте на вебу");

// download.tsx
translation.set("this download is not available yet.", "");
translation.set("give your pc an upgrade.","Дајте вашем рачунару надоградњу.");
// "try in your browser" is in index.tsx section
// "open demo" is in features-beta.tsx section
translation.set("for most people","За многе људе");
translation.set("for pi, pine, and mac","За Pi, Pine и Mac уређаје");
translation.set("download","Преузмите");
translation.set("web preview","Веб преглед");
translation.set(
  "you're about to visit the web demo version of avdanos, which is only a proof of concept. trying the live system is strongly recommended to getting the full experience from the operating system.",
  "Сада ћете посетити веб пробну верзију AvdanOS-a, који је само доказ концепта. Испробати систем уживо је велика препорука да се осети пуно искуство оперативног система."
);
translation.set("*live system is currently not available because the system is still under development","*Систем уживо није тренутно доступан зато што је систем и даље под развојем");
translation.set("yes, take me there","Да, одведите ме дотле");
translation.set("cancel","Затвори");
translation.set("before you download","Пре него што преузмете");
translation.set("please read this before you continue","Молимо Вас прочитајте ово пре него што наставите");
translation.set("below is the shasum of the download. you can use it to check download's integrity:","Испод је shasum преузимања. Можете искористити да проверите интегритет преузимања:");
translation.set("yes, i understand","Да, разумем");
translation.set("use torrent download","Преузмите преко Torrent-а");
translation.set("continue","Наставите");
// in testing
translation.set(
  "Having trouble? Click [%s] here [%/s] to get help!",
  "Имате проблема? Кликните [%s] овде [%/s] за помоћ!"
);

// support.tsx
translation.set("avdanos support","AvdanOS подршка");
translation.set("contact us on social media","Контактирајте нас преко друштвених мрежа");
translation.set("visit","Посетите");

// support-beta.tsx
translation.set("avdanos support articles","AvdanOS чланак за подршку");
translation.set("search support articles","Претражите чланке за подршку");
translation.set("ask our community","Питајте нашу заједницу");

// betapopup.tsx
translation.set("hey look! a new testing version of this page is available!","Погледајте! Верзија за испитивање ове странице је доступно!");
translation.set("close","Затвори");
translation.set("check it out","Испробајте");

// docs.tsx
translation.set("read the features in detail.","Прочитајте карактеристике у детаљима.");
translation.set("i'm a user","Ја сам корисник");
translation.set("open manual","Отвори приручник");
translation.set("manual is not available yet","");
translation.set("i'm a developer","Ја сам програмер");
translation.set("open documentation","Отвори документацију");
translation.set("doc is not available yet","");

// demo.tsx
// "Try in your browser." is in index.tsx
translation.set("full screen","Пун екран");

// 404.tsx
translation.set("page not found","Страница није пронађена");
translation.set("this page does not exist.","Ова страница не постоји.");
translation.set("join in and help us out developing an open-source operating system.","Придружите нам се и помозите нам у развојијању оперативног система отвореног извора."); // don't translate this yet (technical issue)

// widthrequirement.tsx
translation.set("width incompatibility","Ширина неподржана");
translation.set("increase your window width","Повећајте ширину прозора");
translation.set(
  "your window is too small to display the content of this page, and we detected that you got more screen estate. please increase your window width or maximise your browser window.",
  "Ваш прозор је премали да би се приказао садржај ове странице, и препознали смо да имате више простора на екрану. Молимо вас проширите прозор или максимизирајте ваш претраживач."
);
translation.set("rotate your device","окрените ваш уређај");
translation.set("your screen is too small to display this page. please rotate to landscape view or use desktop.","Ваш екран је превише мали да се прикаже страница. Молимо вас окрените на водоравно или користите десктоп рачунар.");
translation.set("this page is incompatible","Ова страница није компатибилна");
translation.set(
  "your screen width is too small to display the content of this page. you might need to increase your system's resolution use desktop to view this page.",
  "Ваша ширина екрана је премала да би се садржај странице приказао. Можда ћете морати да повећате системску резолуцију десктоп рачунара да бисте видели страницу."
);
translation.set(
  "your screen width is too small to display the content of this page. please increase your system's resolution.",
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
