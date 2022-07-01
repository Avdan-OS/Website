let translation = new Map();
import TranslationRebuilder from "../TranslationRebuilder";

// Global
// footer.tsx
translation.set("overview","ikhtisar");
translation.set("home","beranda");
translation.set("features","fitur");
translation.set("downloads","unduh");
translation.set("external links","tautan eksternal");
translation.set("twitter","twitter");
translation.set("github","github");
translation.set("youtube","youtube");
translation.set("discord","discord");
translation.set("reddit","reddit");
translation.set("legal","hukum");
translation.set("license","lisensi");
translation.set("eula","eula");
translation.set("history of incidents","sejarah kejadian");
translation.set("privacy and security","privasi dan keamanan");
translation.set("inspired by","terinspirasi dari");
translation.set("avdanos contributors","kontributor avdanos");
// alert.tsx
translation.set("is still in development.","masih dalam pengembangan");
translation.set("join our discord","bergabunglah dengan discord kami");
// menu.tsx / submenu.tsx
// "home" is in footer.tsx
// "features" is in footer.tsx
// "downloads" is in footer.tsx
translation.set("support","dukungan");
translation.set("documentation","dokumentasi");
translation.set("docs","dok");
translation.set("demo","demo");

// index.tsx
translation.set("your pc but even better.","pc anda, tetapi lebih baik");
translation.set("try in your browser","cobalah dibrowser anda");
translation.set("download now","download sekarang");
// discover.tsx
translation.set("open source on github","sumber terbuka digithub");
translation.set("browse all repos","telusuri semua repo");

// features-beta.tsx / features.tsx
translation.set("avdan's concept, we're making it real","konsep avdan, kami membuatnya nyata");
translation.set("assets are loading, please wait","aset sedang dimuat, harap tunggu");
translation.set("scroll down to see what we've got here","gulir ke bawah untuk melihat apa yang kami dapatkan di sini");
translation.set("this concept video is made by avdan","video konsep ini dibuat oleh avdan");
translation.set("watch on youtube","tonton di youtube");
translation.set("familiar dock, ultimate form","dermaga akrab, bentuk pamungkas");
translation.set("everyone know dock/task bar. we got a brand new dock, with more features than ever before.","semua orang tahu dok/bilah tugas. kami mendapatkan dok baru, dengan lebih banyak fitur daripada sebelumnya");
translation.set("brand new launch menu","menu peluncuran baru");
translation.set("with everything in one place, do anything anywhere at anytime.","dengan segala sesuatu di satu tempat, lakukan apa saja di mana saja kapan saja.");
translation.set("easily apply layout.","dengan mudah menerapkan tata letak.");
translation.set(
  "with a list of presets determined from you apps, easily get to work with the perfect window layout. not enough? change it in the settings.",
  "dengan daftar prasetel yang ditentukan dari aplikasi anda, mulai bekerja dengan mudah dengan tata letak jendela yang sempurna. tidak cukup? ubah di pengaturan."
);
translation.set("overpowered dock","dok yang dikuasai");
translation.set("your dock can do more than ever. it's your ultimate manager to get you organised.","dermaga anda dapat melakukan lebih dari sebelumnya. itu adalah manajer utama anda untuk membuat anda teratur.");
translation.set("new way to manage files","cara baru untuk mengelola file");
translation.set("this file manager keeps you organised and productive. find your files the instant you need it.","pengelola file ini membuat anda tetap teratur dan produktif. temukan file anda saat anda membutuhkannya.");
translation.set("drag & drop made easy","drag & drop menjadi mudah");
translation.set(
  "drag and drop is the easiest way to transfer anything on your computer. we make it intuitive and easy to use.",
  "drag dan drop adalah cara termudah untuk mentransfer apa pun di komputer anda. kami membuatnya intuitif dan mudah digunakan."
);
translation.set("more than multitask","lebih dari multitasking");
translation.set(
  "want to do many tasks at a time? we know you and we got you. it's now not only multitasking, it's organised multitasking.",
  "ingin melakukan banyak tugas sekaligus? kami tahu anda dan kami mendapatkan anda. sekarang tidak hanya multitasking, itu multitasking terorganisir."
);
translation.set("tabos!","tabos!");
translation.set(
  "browsers have proven how powerful tabs are, so why not use them to make your os even more powerful?",
  "browser telah membuktikan betapa kuatnya tab, jadi mengapa tidak menggunakannya untuk membuat os anda lebih bertenaga?"
);
translation.set("new context menu","menu konteks baru");
translation.set(
  "context menu didn't change for multiple decades now. we are tired of a long list of items, and hey why not make it a circle? don't like it? you can switch it back in settings!",
  "menu konteks tidak berubah selama beberapa dekade sekarang. kami bosan dengan daftar item yang panjang, dan hei mengapa tidak membuatnya menjadi lingkaran? tidak menyukainya? anda dapat mengubahnya kembali di pengaturan!"
);
translation.set("your os, your preference","os anda, preferensi anda");
translation.set(
  "we give you control over your system. theme is just an important one of them, and you can get more if you don't like ours.",
  "kami memberi anda kendali atas sistem anda. tema hanyalah salah satu yang penting, dan anda bisa mendapatkan lebih banyak jika anda tidak menyukai tema kami."
);
translation.set("day & night","pagi & malam");
translation.set(
  "let different themes tell you what time it is. hey, you can even make it reversed. can you do it on windows or macos?",
  "biarkan tema yang berbeda memberi tahu anda jam berapa sekarang. hei, anda bahkan dapat membuatnya sebaliknya. bisa melakukannya di windows atau macos?"
);
translation.set("under development","dalam pengembangan");
translation.set("this project wouldn't be possible without the community's contributions. join us and help!","proyek ini tidak akan mungkin terjadi tanpa kontribusi masyarakat. bergabunglah dengan kami dan bantu!");
translation.set("open demo","buka demo");

// download.tsx
translation.set("give your pc an upgrade.","tingkatkan pc anda.");
// "try in your browser" is in index.tsx section
// "open demo" is in features-beta.tsx section
translation.set("for most people","untuk semua orang");
translation.set("for pi, pine, and mac","untuk pi, pine, dan mac");
translation.set("download","unduh");
translation.set("web preview","pratinjau web");
translation.set(
  "you're about to visit the web demo version of avdanos, which is only a proof of concept. trying the live system is strongly recommended to getting the full experience from the operating system.",
  "anda akan mengunjungi versi demo web avdanos, yang hanya merupakan bukti konsep. mencoba sistem langsung sangat disarankan untuk mendapatkan pengalaman penuh dari sistem operasi."
);
translation.set("*live system is currently not available because the system is still under development","*sistem live saat ini tidak tersedia karena sistem masih dalam pengembangan");
translation.set("yes, take me there","ya, bawa aku ke sana");
translation.set("cancel","batal");
translation.set("before you download","sebelum anda mengunduh");
translation.set("please read this before you continue","tolong baca ini sebelum melanjutkan");
translation.set("below is the shasum of the download. you can use it to check download's integrity:","di bawah ini adalah shasum unduhan. anda dapat menggunakannya untuk memeriksa integritas unduhan:");
translation.set("yes, i understand","ya, saya mengerti");
translation.set("use torrent download","gunakan unduhan torrent");
translation.set("continue","lanjutkan");
// in testing
translation.set(
  "having trouble? click [%s] here [%/s] to get help!",
  "mempunyai masalah? klik [%s] di sini [%/s] untuk mendapatkan bantuan!"
);

// support.tsx
translation.set("avdanos support","dukungan avdanos");
translation.set("contact us on social media","hubungi kami di sosial media");
translation.set("visit","kunjungi");

// support-beta.tsx
translation.set("avdanos support articles","artikel pendukung avdanos");
translation.set("search support articles","cari artikel pendukung");
translation.set("ask our community","tanya komunitas kami");

// betapopup.tsx
translation.set("hey look! a new testing version of this page is available!","hei lihat! versi pengujian baru dari halaman ini tersedia!");
translation.set("close","tutup");
translation.set("check it out","lihat berikut ini");

// docs.tsx
translation.set("read the features in detail.","membaca fitur secara rinci.");
translation.set("i'm a user","saya adalah pengguna");
translation.set("open manual","buka manual");
translation.set("i'm a developer","saya adalah pengembang");
translation.set("open documentation","buka dokumentasi");

// demo.tsx
// "Try in your browser." is in index.tsx
translation.set("full screen","layar penuh");

// 404.tsx
translation.set("page not found","halaman tidak ditemukan");
translation.set("this page does not exist.","halaman ini tidak ada.");
translation.set("join in and help us out developing an open-source operating system.","bergabunglah dan bantu kami mengembangkan sistem operasi sumber terbuka."); // don't translate this yet (technical issue)

// widthrequirement.tsx
translation.set("width incompatibility","ketidakcocokan lebar");
translation.set("increase your window width","tingkatkan lebar jendela anda");
translation.set(
  "your window is too small to display the content of this page, and we detected that you got more screen estate. please increase your window width or maximise your browser window.",
  "jendela anda terlalu kecil untuk menampilkan konten halaman ini, dan kami mendeteksi bahwa anda memiliki lebih banyak tampilan layar. silahkan tambah lebar jendela anda atau maksimalkan jendela browser anda."
);
translation.set("rotate your device","putar perangkat anda");
translation.set("your screen is too small to display this page. please rotate to landscape view or use desktop.","layar anda terlalu kecil untuk menampilkan halaman ini. silakan putar ke tampilan lanskap atau gunakan desktop.");
translation.set("this page is incompatible","halaman ini tidak kompatibel");
translation.set(
  "your screen width is too small to display the content of this page. you might need to increase your system's resolution use desktop to view this page.",
  "lebar layar anda terlalu kecil untuk menampilkan konten halaman ini. anda mungkin perlu meningkatkan resolusi sistem anda menggunakan desktop untuk melihat halaman ini"
);
translation.set(
  "your screen width is too small to display the content of this page. please increase your system's resolution.",
  "lebar layar anda terlalu kecil untuk menampilkan konten halaman ini. anda mungkin perlu meningkatkan resolusi sistem anda menggunakan desktop untuk melihat halaman ini."
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
