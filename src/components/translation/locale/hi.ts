let translation = new Map();
import TranslationRebuilder from "../TranslationRebuilder";

// Global
// footer.tsx
translation.set("overview","अवलोकन");
translation.set("home","मुखय पान");
translation.set("features","विशेषताएँ");
translation.set("downloads","डाउनलोड");
translation.set("external links","बाहरी संबंध");
translation.set("twitter","twitter");
translation.set("github","github");
translation.set("youtube","youtube");
translation.set("discord","discord");
translation.set("reddit","reddit");
translation.set("legal","कानूनी");
translation.set("license","परवाना");
translation.set("eula","उत्पाद के मालिक और अंतिम उपयोगकर्ता के बीच कानूनी रूप से बाध्यकारी समझौता");
translation.set("history of incidents","आभीतक कि घाटनायॆ");
translation.set("privacy and security","गोपनीयता और सुरक्षा");
translation.set("inspired by","से प्रेरित");
translation.set("avdanos contributors","योगदानकर्ता");
// alert.tsx
translation.set("is still in development.","अभी भी विकास में है।");
translation.set("join our discord","हमारे discord में शामिल हों");
// menu.tsx / submenu.tsx
// "home" is in footer.tsx
// "features" is in footer.tsx
// "downloads" is in footer.tsx
translation.set("support","सहायॆता");
translation.set("documentation","प्रलेखन");
translation.set("docs","प्रलेखन");
translation.set("demo","प्रात्यक्षिक");

// index.tsx
translation.set("your pc but even better.","आपका पीसी लेकिन इससे भी बेहतर");
translation.set("try in your browser","अपने ब्राउज़र में प्रयास करें");
translation.set("download now","अभी डाउनलोड करें");
// discover.tsx
translation.set("open source on github","कॊड सब कॆ लिये github पर");
translation.set("browse all repos","सभी रेपो दॆखियॆ");

// features-beta.tsx / features.tsx
translation.set("avdan's concept, we're making it real","अवदान की अवधारणा, हम इसे वास्तविक बना रहे हैं");
translation.set("assets are loading, please wait","कृपया प्रतीक्षा करें");
translation.set("scroll down to see what we've got here","");
translation.set("this concept video is made by avdan","हमनॆ आपकॆ लियॆ क्या बनाया है यह देखने के लिए नीचे स्क्रॉल करें");
translation.set("watch on youtube","यूट्यूब पर देखें");
translation.set("familiar dock, ultimate form","वाहि टास्क बार,पर आकर्षक रूप");
translation.set("everyone know dock/task bar. we got a brand new dock, with more features than ever before.","टास्क बार तॊ सब जान तॆ है, लॆकिन हामनॆ लाया है ऐक नया टास्क बार जॊ पॆहॆलॆ सॆभि ओरभी सुविदाजनक");
translation.set("brand new launch menu","एकदम नया लॉन्च मेनू");
translation.set("with everything in one place, do anything anywhere at anytime.","एक ही स्थान पर सब कुछ, कहीं भी ओर कभी भी कुछ भी करें।");
translation.set("easily apply layout.","आसानी से लेआउट लागू करें।");
translation.set(
  "with a list of presets determined from you apps, easily get to work with the perfect window layout. not enough? change it in the settings.",
  "आपके ऐप्स से निर्धारित प्रीसेट की सूची के साथ, आसानी से सही विंडो लेआउट के साथ काम करने के लिए मिलता है। पर्याप्त नहीं? इसे सेटिंग्स में बदलें।"
);
translation.set("overpowered dock","जबर्दस्त टास्क बार");
translation.set("your dock can do more than ever. it's your ultimate manager to get you organised.","आपकी टास्क बार पहले से कहीं अधिक कर सकता है। आपको व्यवस्थित करने के लिए यह आपका अंतिम प्रबंधक।");
translation.set("new way to manage files","फ़ाइलों को प्रबंधित करने का नया तरीका");
translation.set("this file manager keeps you organised and productive. find your files the instant you need it.","यह फ़ाइल प्रबंधक आपको व्यवस्थित और उत्पादक रखता है। अपनी फ़ाइलों को तुरंत ढूंढें जिनकी आपको आवश्यकता है।");
translation.set("drag & drop made easy","चिचॊकॊ हिलाना बनाया आसान");
translation.set(
  "drag and drop is the easiest way to transfer anything on your computer. we make it intuitive and easy to use.",
  "चिचॊकॊ ड्रैग ओर ड्रॉप आपके कंप्यूटर पर कुछ भी स्थानांतरित करने का सबसे आसान तरीका है। हम इसे सहज और उपयोग में आसान बनाते हैं।"
);
translation.set("more than multitask","बहु-कार्य सॆ बहि जयदा");
translation.set(
  "want to do many tasks at a time? we know you and we got you. it's now not only multitasking, it's organised multitasking.",
  "एक साथ कई काम करना चाहते हैं? हम आपको जानते हैं और हम आपको मिल गए हैं। अब यह केवल बहु-कार्य नहीं है, यह संगठित बहु-कार्य है।"
);
translation.set("tabos!","निषेध!");
translation.set(
  "browsers have proven how powerful tabs are, so why not use them to make your os even more powerful?",
  "ब्राउज़रों ने साबित कर दिया है कि टैब कितने शक्तिशाली हैं, तो क्यों न उनका उपयोग अपने ओएस मॆ किया जायॆ और अधिक शक्तिशाली बनाने जाए?"
);
translation.set("new context menu","नया संदर्भ मेनू");
translation.set(
  "context menu didn't change for multiple decades now. we are tired of a long list of items, and hey why not make it a circle? don't like it? you can switch it back in settings!",
  "संदर्भ मेनू अब कई दशकों से नहीं बदला है। हम वस्तुओं की एक लंबी सूची से थक गए हैं, और क्यों न इसे एक चक्र बनाया जाए? यह पसंद नहीं है? आप इसे सेटिंग में वापस स्विच कर सकते हैं!"
);
translation.set("your os, your preference","आपका ओएस, आपकी पसंद");
translation.set(
  "we give you control over your system. theme is just an important one of them, and you can get more if you don't like ours.",
  "हम आपको आपके सिस्टम पर नियंत्रण देते हैं। थीम उनमें से सिर्फ एक है, और यदि आप कॊ हमारी थीम पसंद नहीं करते हैं तो आप और अधिक थीमस प्राप्त कर सकते हैं।"
);
translation.set("day & night","दिन और रात");
translation.set(
  "let different themes tell you what time it is. hey, you can even make it reversed. can you do it on windows or macos?",
  "विभिन्न थीम को बताएं कि यह क्या समय है। अरे, आप इसे उल्टा भी कर सकते हैं। क्या आप इसे विंडोज़ या मैकोज़ पर कर सकते हैं?"
);
translation.set("under development","यह आभि विकास मॆ है");
translation.set("this project wouldn't be possible without the community's contributions. join us and help!","यह परियोजना समुदाय के योगदान के बिना संभव नहीं होगा। हमसे जुड़ें और मदद करें!");
translation.set("open demo","प्रात्यक्षिक");

// download.tsx
translation.set("give your pc an upgrade.","अपने पीसी को भॆट दें।");
// "try in your browser" is in index.tsx section
// "open demo" is in features-beta.tsx section
translation.set("for most people","ज्यादातर लोगों के लिए");
translation.set("for pi, pine, and mac","pi, pine, और mac कॆ लियॆ");
translation.set("download","डाउनलोड");
translation.set("web preview","पूर्व दर्शन");
translation.set(
  "you're about to visit the web demo version of avdanos, which is only a proof of concept. trying the live system is strongly recommended to getting the full experience from the operating system.",
  "आप avdanos के पूर्व दर्शन कॆ लियॆ जाने वाले हैं, जो केवल अवधारणा का प्रमाण है। ऑपरेटिंग सिस्टम से पूरा अनुभव प्राप्त करने के लिए लाइव सिस्टम को आज़माने की अनुशंसा की जाती है।"
);
translation.set("*live system is currently not available because the system is still under development","*लाइव सिस्टम वर्तमान में उपलब्ध नहीं है क्योंकि सिस्टम अभी भी विकास के अधीन है");
translation.set("yes, take me there","हाँ, मुझे वहाँ ले चलो");
translation.set("cancel","रद्द करॆ");
translation.set("before you download","डाउनलोड करने से पहले");
translation.set("please read this before you continue","जारी रखने से पहले कृपया इसे पढ़ें");
translation.set("below is the shasum of the download. you can use it to check download's integrity:","नीचे डाउनलोड का \"shasum\" है। आप इसका उपयोग डाउनलोड की अखंडता की जांच के लिए कर सकते हैं:");
translation.set("yes, i understand","हाँ मैं समझता हूँ");
translation.set("use torrent download","टोरेंट का उपयोग करें");
translation.set("continue","जारी रखॆ");
// in testing
translation.set(
  "having trouble? click [%s] here [%/s] to get help!",
  "परेशानी हो रही है? सहायता प्राप्त करने के लिए [%s] यहाँ [%/s] क्लिक करें!"
);

// support.tsx
translation.set("avdanos support","avdanos का सहायक गन");
translation.set("contact us on social media","सोशल मीडिया पर हमसे संपर्क करें");
translation.set("visit","दॆखॆ");

// support-beta.tsx
translation.set("avdanos support articles","समर्थन लेख");
translation.set("search support articles","समर्थन लेख खॊजॆ");
translation.set("ask our community","हमारे समुदाय से पूछें");

// betapopup.tsx
translation.set("hey look! a new testing version of this page is available!","अरे देखो! इस का एक नया परीक्षण संस्करण उपलब्ध है!");
translation.set("close","बंद करें");
translation.set("check it out","इसॆ दॆखॆ");

// docs.tsx
translation.set("read the features in detail.","सुविधाओं को विस्तार से पढ़नॆ कॆलियॆ।");
translation.set("i'm a user","मैं एक उपयोगकर्ता हूँ");
translation.set("open manual","नियमावली खॊलियॆ");
translation.set("i'm a developer","मैं एक विकासक हूँ");
translation.set("open documentation","प्रलेखन प्रलेखन");

// demo.tsx
// "Try in your browser." is in index.tsx
translation.set("full screen","पूर्ण स्क्रीन");

// 404.tsx
translation.set("page not found","पृष्ठ नहीं मिला");
translation.set("this page does not exist.","यह पृष्ठ मौजूद नहीं है।");
translation.set("join in and help us out developing an open-source operating system.","इसमें शामिल हों और एक ऑपरेटिंग सिस्टम विकसित करने में हमारी मदद करें।"); // don't translate this yet (technical issue)

// widthrequirement.tsx
translation.set("width incompatibility","चौड़ाई असंगति");
translation.set("increase your window width","अपनी स्क्रीन की चौड़ाई बढ़ाएँ");
translation.set(
  "your window is too small to display the content of this page, and we detected that you got more screen estate. please increase your window width or maximise your browser window.",
  "इस पृष्ठ की सामग्री को प्रदर्शित करने के लिए आपकी स्क्रीन बहुत छोटी है, और हमने पाया है कि आपको अधिक स्क्रीन मिला है। कृपया अपनी विंडो की चौड़ाई बढ़ाएं या अपनी ब्राउज़र विंडो को अधिकतम करें।"
);
translation.set("rotate your device","अपने डिवाइस को घुमाएं");
translation.set("your screen is too small to display this page. please rotate to landscape view or use desktop.","इस पृष्ठ को प्रदर्शित करने के लिए आपकी स्क्रीन बहुत छोटी है। कृपया लैंडस्केप व्यू में घुमाएं या डेस्कटॉप का उपयोग करें।");
translation.set("this page is incompatible","यह पृष्ठ असंगत है");
translation.set(
  "your screen width is too small to display the content of this page. you might need to increase your system's resolution use desktop to view this page.",
  "इस पृष्ठ की सामग्री को प्रदर्शित करने के लिए आपकी स्क्रीन की चौड़ाई बहुत छोटी है। इस पृष्ठ को देखने के लिए आपको अपने सिस्टम के रिज़ॉल्यूशन को डेस्कटॉप का उपयोग करने की आवश्यकता हो सकती है।"
);
translation.set(
  "your screen width is too small to display the content of this page. please increase your system's resolution.",
  "इस पृष्ठ की सामग्री को प्रदर्शित करने के लिए आपकी स्क्रीन की चौड़ाई बहुत छोटी है। कृपया अपने सिस्टम का रिज़ॉल्यूशन बढ़ाएँ।"
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
