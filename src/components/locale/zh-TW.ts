import TranslationRebuilder from "./TranslationRebuilder";

let translation = new Map();

// Global
// footer.tsx
translation.set('overview', '概述');
translation.set('home', '主頁');
translation.set('features', '特徵');
translation.set('downloads', '下載');
translation.set('external links', '外部連結');
translation.set('twitter', '推特');
translation.set('github', 'GitHub');
translation.set('youtube', 'YouTube');
translation.set('discord', 'Discord');
translation.set('reddit', 'Reddit');
translation.set('legal', '法定');
translation.set('license', '版權許可');
translation.set('eula', '最終用戶許可協議');
translation.set('history of incidents', '意外日誌');
translation.set('privacy and security', '隱私和安全');
translation.set('inspired by', '啟發來自');
translation.set('avdanos contributors', 'AvdanOS 貢獻者');
// alert.tsx
translation.set("is still in development.", "仍在開發中。")
translation.set("join our discord", "加入我們的 Discord")
// menu.tsx / submenu.tsx
// "home" is in footer.tsx
// "features" is in footer.tsx
// "downloads" is in footer.tsx
translation.set("support", "支援")
translation.set("documentation", "指南")
translation.set("docs", "指南")
translation.set("demo", "演示")

// index.tsx
translation.set('your pc but even better.', '你的個人電腦，但是更好。');
translation.set('try in your browser', '在瀏覽器內試試');
translation.set('download now', '立即下載');
// discover.tsx
translation.set('open source on github', '在Github上開源');
translation.set('browse all repos', '瀏覽所有存儲庫');

// features-beta.tsx / features.tsx
translation.set("avdan's concept, we're making it real", 'Avdan 的概念，我們正在將它實現');
translation.set('assets are loading, please wait', '資源載入中，請稍候');
translation.set("scroll down to see what we've got here", '向下滑動，看看我們在這裡有什麼好玩的');
translation.set('this concept video is made by avdan', '這個概念影片由 Avdan 製作');
translation.set('watch on youtube', '在YouTube上觀看');
translation.set('familiar dock, ultimate form', '');
translation.set('everyone know dock/task bar. we got a brand new dock, with more features than ever before.', '');
translation.set('brand new launch menu', '');
translation.set('with everything in one place, do anything anywhere at anytime.', '');
translation.set('easily apply layout.', '');
translation.set('with a list of presets determined from you apps, easily get to work with the perfect window layout. not enough? change it in the settings.','');
translation.set('overpowered dock', '');
translation.set("your dock can do more than ever. it's your ultimate manager to get you organised.", '');
translation.set('new way to manage files', '');
translation.set('this file manager keeps you organised and productive. find your files the instant you need it.', '');
translation.set('drag & drop made easy', '');
translation.set('drag and drop is the easiest way to transfer anything on your computer. we make it intuitive and easy to use.','');
translation.set('more than multitask', '');
translation.set("want to do many tasks at a time? we know you and we got you. it's now not only multitasking, it's organised multitasking.",'');
translation.set('tabos!', '');
translation.set('browsers have proven how powerful tabs are, so why not use them to make your os even more powerful?','');
translation.set('new context menu', '');
translation.set("context menu didn't change for multiple decades now. we are tired of a long list of items, and hey why not make it a circle? don't like it? you can switch it back in settings!",'');
translation.set('your os, your preference', '');
translation.set("we give you control over your system. theme is just an important one of them, and you can get more if you don't like ours.",'');
translation.set('day & night', '');
translation.set('let different themes tell you what time it is. hey, you can even make it reversed. can you do it on windows or macos?', '');
translation.set('under development', '正在開發中');
translation.set("this project wouldn't be possible without the community's contributions. join us and help!", '');
translation.set('open demo', '打開演示');

// download.tsx
translation.set("give your pc an upgrade.", "升級您的電腦")
// "try in your browser" is in index.tsx section
// "open demo" is in features-beta.tsx section
translation.set("for most people", "給大部分的人")
translation.set("for pi, pine, and mac", "給 Pi, Pine, 及蘋果電腦")
translation.set("download", "下載")
translation.set("having trouble? click here to get help!", "") // don't translate this yet (technical issue)
translation.set("web preview", "網頁預覽")
translation.set("you're about to visit the web demo version of avdanos, which is only a proof of concept. trying the live system is strongly recommended to getting the full experience from the operating system.", 
    "您即將訪問 AvdanOS 的網絡演示版，這只是概念驗證。我們強烈建議嘗試實時系統以從操作系統中獲得完整的體驗。")
translation.set("*live system is currently not available because the system is still under development", "*因為系統仍在開發中，實時系統目前不可用。")
translation.set("yes, take me there", "前往")
translation.set("cancel", "取消")
translation.set("before you download", "在您下載之前")
translation.set("please read this before you continue", "請在繼續之前閱讀此內容")
translation.set("below is the shasum of the download. you can use it to check download's integrity:", "下面是下載的shasum。 您可以使用它來檢查下載的完整性：")
translation.set("yes, i understand", "是的，我同意")
translation.set("use torrent download", "使用激流下載")
translation.set("continue", "繼續")
// in testing 
translation.set("Having trouble? Click [%s] here [%/s] to get help!", "遇到麻煩？按[%s]這裡[%/s]獲取幫助！")

// support.tsx
translation.set("avdanos support", "AvdanOS 支援")
translation.set("contact us on social media", "在社交媒體上聯繫我們")
translation.set("visit", "前往")

// support-beta.tsx
translation.set("avdanos support articles", "")
translation.set("search support articles", "")
translation.set("ask our community", "")

// betapopup.tsx
translation.set("hey look! a new testing version of this page is available!", "此頁面有新的測試版本可用！")
translation.set("close", "關閉")
translation.set("check it out", "一探究竟")

// docs.tsx
translation.set("read the features in detail.", "詳細的閱讀所有功能")
translation.set("i'm a user", "我是使用者")
translation.set("open manual", "打開使用手冊")
translation.set("i'm a developer", "我是開發人員")
translation.set("open documentation", "打開開發人員指南")

// demo.tsx
// "Try in your browser." is in index.tsx
translation.set("full screen", "全銀幕")

// 404.tsx
translation.set("page not found", "找不到這個頁面")
translation.set("this page does not exist.", "本頁面不存在")
translation.set("join in and help us out developing an open-source operating system.", "") // don't translate this yet (technical issue)

// widthrequirement.tsx
translation.set("width incompatibility", "寬度不兼容")
translation.set("increase your window width", "增加您的視窗寬度")
translation.set("your window is too small to display the content of this page, and we detected that you got more screen estate. please increase your window width or maximise your browser window.", 
    "您的視窗太小，無法正常顯示此頁面的內容，我們檢測到您有更多的屏幕空間。請增加視窗寬度或最大化您的瀏覽器視窗。")
translation.set("rotate your device", "旋轉屏幕")
translation.set("your screen is too small to display this page. please rotate to landscape view or use desktop.", "您的屏幕太小，無法正常顯示此頁面。請旋轉到橫向視圖或使用電腦。")
translation.set("this page is incompatible", "此頁面不兼容")
translation.set("Your screen width is too small to display the content of this page. You might need to increase your system's resolution use desktop to view this page.", 
    "您的屏幕寬度太小，無法正常顯示此頁面的內容。 您可能需要提高系統的解析度，或著使用桌面查看此頁面。")
translation.set("Your screen width is too small to display the content of this page. Please increase your system's resolution.", 
    "您的屏幕寬度太小，無法正常顯示此頁面的內容。 您可能需要提高系統的解析度。")

// This below is for developers, please don't touch
translation.set("download.tsx/having-trouble", TranslationRebuilder("download.tsx/having-trouble", translation.get("Having trouble? Click [%s] here [%/s] to get help!")))

export default translation;
