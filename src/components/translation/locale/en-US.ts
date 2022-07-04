let translation = new Map();
import TranslationRebuilder from "../TranslationRebuilder";

// Global
// footer.tsx
translation.set("overview","");
translation.set("home","");
translation.set("features","");
translation.set("downloads","");
translation.set("external links","");
translation.set("twitter","");
translation.set("github","");
translation.set("youtube","");
translation.set("discord","");
translation.set("reddit","");
translation.set("legal","");
translation.set("license","");
translation.set("eula","");
translation.set("history of incidents","");
translation.set("privacy and security","");
translation.set("inspired by","");
translation.set("avdanos contributors","");
// alert.tsx
translation.set("is still in development.","");
translation.set("join our discord","");
// menu.tsx / submenu.tsx
// "home" is in footer.tsx
// "features" is in footer.tsx
// "downloads" is in footer.tsx
translation.set("support","");
translation.set("documentation","");
translation.set("docs","");
translation.set("demo","");

// index.tsx
translation.set("your pc but even better.","");
translation.set("try in your browser","");
translation.set("download now","");
// discover.tsx
translation.set("open source on github","");
translation.set("browse all repos","");
// discoverCard.tsx
translation.set("avdanos","");
translation.set("meet avdanos, refining the way we think about operating systems.","");
translation.set("official website","");
translation.set("all the new updates and information about avdanos and support.","");
translation.set("desktop environment","");
translation.set("meet nadva, the official desktop environment for avdanos.","");
translation.set("a discord bot made for the avdanos community discord server.","");

// features-beta.tsx / features.tsx
translation.set("avdan's concept, we're making it real","");
translation.set("assets are loading, please wait","");
translation.set("scroll down to see what we've got here","");
translation.set("this concept video is made by avdan","");
translation.set("watch on youtube","");
translation.set("familiar dock, ultimate form","");
translation.set("everyone know dock/task bar. we got a brand new dock, with more features than ever before.","");
translation.set("brand new launch menu","");
translation.set("with everything in one place, do anything anywhere at anytime.","");
translation.set("easily apply layout","");
translation.set(
  "with a list of presets determined from you apps, easily get to work with the perfect window layout. not enough? change it in the settings.",
  ""
);
translation.set("overpowered dock","");
translation.set("your dock can do more than ever. it's your ultimate manager to get you organised.","Your dock can do more than ever. It's your ultimate manager to get you organized.");
translation.set("new way to manage files","");
translation.set("this file manager keeps you organised and productive. find your files the instant you need it.","This file manager keeps you organized and productive. Find your files the instant you need it.");
translation.set("drag & drop made easy","");
translation.set(
  "drag and drop is the easiest way to transfer anything on your computer. we make it intuitive and easy to use.",
  ""
);
translation.set("more than multitask","");
translation.set(
  "want to do many tasks at a time? we know you and we got you. it's now not only multitasking, it's organised multitasking.",
  "Want to do many tasks at a time? We know you and we got you. It's now not only multitasking, it's organized multitasking."
);
translation.set("tabos!","");
translation.set(
  "browsers have proven how powerful tabs are, so why not use them to make your os even more powerful?",
  ""
);
translation.set("new context menu","");
translation.set(
  "context menu didn't change for multiple decades now. we are tired of a long list of items, and hey why not make it a circle? don't like it? you can switch it back in settings!",
  ""
);
translation.set("your os, your preference","");
translation.set(
  "we give you control over your system. theme is just an important one of them, and you can get more if you don't like ours.",
  ""
);
translation.set("day & night","");
translation.set(
  "let different themes tell you what time it is. hey, you can even make it reversed. can you do it on windows or macos?",
  ""
);
translation.set("under development","");
translation.set("this project wouldn't be possible without the community's contributions. join us and help!","");
translation.set("open demo","");

// download.tsx
translation.set("give your pc an upgrade.","");
// "try in your browser" is in index.tsx section
// "open demo" is in features-beta.tsx section
translation.set("for most people","");
translation.set("for pi, pine, and mac","");
translation.set("download","");
translation.set("web preview","");
translation.set(
  "you're about to visit the web demo version of avdanos, which is only a proof of concept. trying the live system is strongly recommended to getting the full experience from the operating system.",
  ""
);
translation.set("*live system is currently not available because the system is still under development","");
translation.set("yes, take me there","");
translation.set("cancel","");
translation.set("before you download","");
translation.set("please read this before you continue","");
translation.set("below is the shasum of the download. you can use it to check download's integrity:","");
translation.set("yes, i understand","");
translation.set("use torrent download","");
translation.set("continue","");
// in testing
translation.set(
  "having trouble? click [%s] here [%/s] to get help!",
  "Having trouble? Click [%s] here [%/s] to get help!"
);

// support.tsx
translation.set("avdanos support","");
translation.set("contact us on social media","");
translation.set("visit","");

// support-beta.tsx
translation.set("avdanos support articles","");
translation.set("search support articles","");
translation.set("ask our community","");

// betapopup.tsx
translation.set("hey look! a new testing version of this page is available!","");
translation.set("close","");
translation.set("check it out","");

// docs.tsx
translation.set("read the features in detail.","");
translation.set("i'm a user","");
translation.set("open manual","");
translation.set("manual is not available yet","");
translation.set("i'm a developer","");
translation.set("open documentation","");
translation.set("manual is not available yet","");

// demo.tsx
// "Try in your browser." is in index.tsx
translation.set("full screen","");

// 404.tsx
translation.set("page not found","");
translation.set("this page does not exist.","");
translation.set("join in and help us out developing an open-source operating system.",""); // don't translate this yet (technical issue)

// widthrequirement.tsx
translation.set("width incompatibility","");
translation.set("increase your window width","");
translation.set(
  "your window is too small to display the content of this page, and we detected that you got more screen estate. please increase your window width or maximise your browser window.",
  "Your window is too small to display the content of this page, and we detected that you got more screen estate. Please increase your window width or maximize your browser window."
);
translation.set("rotate your device","");
translation.set("your screen is too small to display this page. please rotate to landscape view or use desktop.","");
translation.set("this page is incompatible","");
translation.set(
  "your screen width is too small to display the content of this page. you might need to increase your system's resolution use desktop to view this page.",
  ""
);
translation.set(
  "your screen width is too small to display the content of this page. please increase your system's resolution.",
  ""
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
