let translation = new Map();
import TranslationRebuilder from "../TranslationRebuilder";

// Global
// footer.tsx
translation.set("overview","نظرة عامة");
translation.set("home","الصفحة الرئيسية");
translation.set("features","الميزات");
translation.set("downloads","التحميلات");
translation.set("external links","روابط خارجية");
translation.set("twitter","");
translation.set("github","");
translation.set("youtube","");
translation.set("discord","");
translation.set("reddit","");
translation.set("legal","قانوني");
translation.set("license","رخصة");
translation.set("eula","يولا");
translation.set("history of incidents","تاريخ الحوادث");
translation.set("privacy and security","الخصوصية والأمن");
translation.set("inspired by","مستوحاة من");
translation.set("avdanos contributors","المساهمين AvdanOS");
// alert.tsx
translation.set("is still in development.","لا يزال قيد التطوير");
translation.set("join our discord!","انضم الى الDiscord");
// menu.tsx / submenu.tsx
// "home" is in footer.tsx
// "features" is in footer.tsx
// "downloads" is in footer.tsx
translation.set("support","الدعم");
translation.set("documentation","توثيق");
translation.set("docs","المستندات");
translation.set("demo","تجريبي");

// index.tsx
translation.set("your pc but even better!","جهاز الكمبيوتر الخاص بك ولكن أفضل");
translation.set("try in your browser","حاول في متصفحك");
translation.set("download now!","التحميل الان");
// discover.tsx
translation.set("open source on github","المصدر المفتوح على github");
translation.set("browse all repos","تصفح جميع المستودعات");
// discoverCard.tsx
translation.set("avdanos","AvdanOS");
translation.set("meet avdanos, refining the way we think about operating systems.","تلبية AvdanOS ، وتحسين طريقة تفكيرنا في أنظمة التشغيل");
translation.set("official website","الموقع الرسمي");
translation.set("all the new updates and information about avdanos and support.","جميع التحديثات والمعلومات الجديدة حول AvdanOS والدعم");
translation.set("desktop environment","بيئة desktop");
translation.set("meet nadva, the official desktop environment for avdanos.","تلبية nadva ، بيئة desktop الرسمية لAvdanOS");
translation.set("a discord bot made for the avdanos community discord server.","روبوت للخلاف تم إنشاؤه لخادم الفتنة في مجتمع avdanos");

// features-beta.tsx / features.tsx
translation.set("avdan's concept, we're making it real","فكرة Avdan ، نحن نجعلها حقيقة");
translation.set("assets are loading, please wait","يتم تحميل الأصول ، يرجى الانتظار");
translation.set("scroll down to see what we've got here","قم بالتمرير لأسفل لرؤية ما لدينا هنا");
translation.set("this concept video is made by avdan","فيديو الفكرة هذا من صنع Avdan");
translation.set("watch on youtube","شاهد على يوتيوب");
translation.set("familiar dock, ultimate form","شريط ماهام مألوف ، شكل نهائي");
translation.set("everyone knows dock/task bar. we got a brand new dock, with more features than ever before.","الكل يعرف شريط المهام. لدينا شريط ماهام جديد مع ميزات أكثر من أي وقت مضى");
translation.set("brand new launch menu","قائمة إطلاق جديدة تمامًا");
translation.set("with everything in one place, do anything anywhere at anytime.","مع كل شيء في مكان واحد ، افعل أي شيء في أي مكان وفي أي وقت");
translation.set("easily apply layout","تطبيق التخطيط بسهولة");
translation.set(
  "with a list of presets determined from you apps, easily get to work with the perfect window layout. not enough? change it in the settings.",
  "من خلال قائمة الإعدادات المسبقة التي تحددها تطبيقاتك ، يمكنك العمل بسهولة مع تخطيط النافذة المثالي. ليس كافي؟ قم بتغييره في الإعدادات"
);
translation.set("overpowered dock","قفص الاتهام تغلبت عليه");
translation.set("your dock can do more than ever. it's your ultimate manager to get you organised.","رصيفك يمكن أن يفعل أكثر من أي وقت مضى. إنه مديرك النهائي الذي يجعلك منظمًا");
translation.set("new way to manage files","طريقة جديدة لإدارة الملفات");
translation.set("this file manager keeps you organised and productive. find your files the instant you need it.","مدير الملفات هذا يبقيك منظمًا ومنتجًا. ابحث عن ملفاتك في اللحظة التي تحتاجها فيها");
translation.set("drag & drop made easy","أصبح السحب والإفلات سهلاً");
translation.set(
  "drag and drop is the easiest way to transfer anything on your computer. we make it intuitive and easy to use.",
  "يعد السحب والإفلات أسهل طريقة لنقل أي شيء على جهاز الكمبيوتر الخاص بك. نجعله بديهيًا وسهل الاستخدام"
);
translation.set("more than multitask","أكثر من تعدد المهام");
translation.set(
  "want to do many tasks at a time? we know you and we got you. it's now not only multitasking, it's organised multitasking.",
  "تريد القيام بالعديد من المهام في وقت واحد؟ نحن نعرفك وحصلنا عليك. إنها الآن ليست فقط تعدد المهام ، إنها تعدد المهام المنظم"
);
translation.set("tabos!","");
translation.set(
  "browsers have proven how powerful tabs are, so why not use them to make your os even more powerful?",
  "أثبتت المتصفحات مدى قوة علامات التبويب ، فلماذا لا تستخدمها لجعل نظام التشغيل لديك أكثر قوة؟"
);
translation.set("new context menu","new context menu");
translation.set(
  "context menu didn't change for multiple decades now. we are tired of a long list of items, and hey why not make it a circle? don't like it? you can switch it back in settings!",
  "قائمة السياق لم تتغير لعدة عقود الآن. لقد سئمنا من قائمة طويلة من العناصر ، فلماذا لا نجعلها دائرة؟ لا تحبها؟ يمكنك التبديل مرة أخرى في الإعدادات!"
);
translation.set("your os, your preference","نظام التشغيل الخاص بك ، ما تفضله");
translation.set(
  "we give you control over your system. theme is just an important one of them, and you can get more if you don't like ours.",
  "نمنحك التحكم في نظامك. الموضوع هو مجرد واحد منهم مهم ، ويمكنك الحصول على المزيد إذا لم يعجبك موضوعنا"
);
translation.set("day & night","ليلا نهارا");
translation.set(
  "let different themes tell you what time it is. hey, you can even make it reversed. can you do it on windows or macos?",
  "دع مظاهر مختلفة تخبرك بالوقت. مهلا ، يمكنك حتى عكسها. هل يمكنك القيام بذلك على windows أو macos؟"
);
translation.set("under development","تحت التطوير");
translation.set("this project wouldn't be possible without the community's contributions. join us and help!","لن يكون هذا المشروع ممكنًا بدون مساهمات المجتمع. انضم إلينا وساعد!");
translation.set("open demo","فتح التجريبي");

// download.tsx
translation.set("give your pc an upgrade.","إعطاء ترقية لجهاز الكمبيوتر الخاص بك");
// "try in your browser" is in index.tsx section
// "open demo" is in features-beta.tsx section
translation.set("for most people","لأغلب الناس");
translation.set("for pi, pine, and mac","لباي وباين وماك");
translation.set("download","تحميل");
translation.set("web preview","معاينة الويب");
translation.set(
  "you're about to visit the web demo version of avdanos, which is only a proof of concept. trying the live system is strongly recommended to getting the full experience from the operating system.",
  "أنت على وشك زيارة نسخة الويب التجريبية من  ، والتي هي فقط دليل على الفكرة. يوصى بشدة بتجربة النظام المباشر للحصول على التجربة الكاملة من نظام التشغيل"
);
translation.set("*live system is currently not available because the system is still under development","النظام المباشر غير متوفر حاليًا لأن النظام لا يزال قيد التطوير");
translation.set("yes, take me there","نعم ، خذني هناك");
translation.set("cancel","إلغاء");
translation.set("before you download","قبل التنزيل");
translation.set("please read this before you continue","يرجى قراءة هذا قبل المتابعة");
translation.set("below is the shasum of the download. you can use it to check download's integrity:","أدناه هو شكل التنزيل. يمكنك استخدامه للتحقق من سلامة التنزيل:");
translation.set("yes, i understand","نعم أفهم");
translation.set("use torrent download","استخدم تنزيل التورنت");
translation.set("continue","استمر");
// in testing
translation.set(
  "having trouble? click [%s] here [%/s] to get help!",
  "تواجه مشاكل؟ اضغط [%s] هنا [%/s] للدعم" 
);

// support.tsx
translation.set("avdanos support","دعم AvdanOS");
translation.set("contact us on social media","اتصل معنا على وسائل التواصل الاجتماعي");
translation.set("visit","زيارة");

// support-beta.tsx
translation.set("avdanos support articles","مقالات دعم AvdanOS");
translation.set("search support articles","البحث على مقالات دعم");
translation.set("ask our community","إسأل مجتمعنا");

// betapopup.tsx
translation.set("hey look! a new testing version of this page is available!","انظر! نسخة تجريبية جديدة من هذه الصفحة متاحة!");
translation.set("close","أغلق");
translation.set("check it out","تحقق من ذلك");

// docs.tsx
translation.set("read the features in detail.","اقرأ الميزات بالتفصيل");
translation.set("i'm a user","أنا مستخدم");
translation.set("open manual","افتح الدليل");
translation.set("manual is not available yet","الدليل غير موجود بعد");
translation.set("i'm a developer","أنا عامل");
translation.set("open documentation","افتح الوثائق");
translation.set("manual is not available yet","الدليل غير موجود بعد");

// demo.tsx
// "Try in your browser." is in index.tsx
translation.set("full screen","شاشة كاملة");

// 404.tsx
translation.set("page not found","الصفحة غير موجودة");
translation.set("this page does not exist.","هذه الصفحة غير موجودة");
translation.set("join in and help us out developing an open-source operating system.",""); // don't translate this yet (technical issue)

// widthrequirement.tsx
translation.set("width incompatibility","عرض عدم توافق");
translation.set("increase your window width","زيادة عرض النافذة الخاصة بك");
translation.set(
  "your window is too small to display the content of this page, and we detected that you got more screen estate. please increase your window width or maximise your browser window.",
  "نافذتك صغيرة جدًا لعرض محتوى هذه الصفحة ، واكتشفنا أنك حصلت على المزيد من مساحة الشاشة. الرجاء زيادة عرض نافذتك أو تكبير نافذة المتصفح"
);
translation.set("rotate your device","قم بتدوير جهازك");
translation.set("your screen is too small to display this page. please rotate to landscape view or use desktop.","شاشتك صغيرة جدًا لعرض هذه الصفحة. الرجاء تدوير إلى عرض أفقي أو استخدام سطح المكتب");
translation.set("this page is incompatible","هذه الصفحة غير متوافقة");
translation.set(
  "your screen width is too small to display the content of this page. you might need to increase your system's resolution use desktop to view this page.",
  "عرض شاشتك صغير جدًا لعرض محتوى هذه الصفحة. قد تحتاج إلى زيادة دقة نظامك باستخدام سطح المكتب لعرض هذه الصفحة"
);
translation.set(
  "your screen width is too small to display the content of this page. please increase your system's resolution.",
  "عرض شاشتك صغير جدًا لعرض محتوى هذه الصفحة. الرجاء زيادة دقة النظام الخاص بك"
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
