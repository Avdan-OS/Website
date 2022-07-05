let translation = new Map();
import TranslationRebuilder from "../TranslationRebuilder";

// Global
// footer.tsx
translation.set("overview","概要");
translation.set("home","家");
translation.set("features","特徴");
translation.set("downloads","ダウンロード");
translation.set("external links","外部リンク");
translation.set("twitter","");
translation.set("github","");
translation.set("youtube","");
translation.set("discord","");
translation.set("reddit","");
translation.set("legal","法的");
translation.set("license","ライセンス");
translation.set("eula","ユーラ");
translation.set("history of incidents","事件の歴史");
translation.set("privacy and security","プライバシーとセキュリティ");
translation.set("inspired by","に触発された");
translation.set("avdanos contributors","avdanos 寄稿者");
// alert.tsx
translation.set("is still in development.","まだ開発中です");
translation.set("join our discord","私たちに参加する discord");
// menu.tsx / submenu.tsx
// "home" is in footer.tsx
// "features" is in footer.tsx
// "downloads" is in footer.tsx
translation.set("support","サポート");
translation.set("documentation","ドキュメンテーション");
translation.set("docs","ドキュメント");
translation.set("demo","デモ");

// index.tsx
translation.set("your pc but even better.","あなたのパソコンですが、さらに良いです");
translation.set("try in your browser","ブラウザで試してください");
translation.set("download now","ダウンロード中");
// discover.tsx
translation.set("open source on github","オープンソース github");
translation.set("browse all repos","すべてのリポジトリを閲覧する");
// discoverCard.tsx
translation.set("avdanos","AvdanOS");
translation.set("meet avdanos, refining the way we think about operating systems.","avdanosに会い、オペレーティングシステムについての考え方を洗練させます");
translation.set("official website","公式ウェブサイト");
translation.set("all the new updates and information about avdanos and support.","avdanosとサポートに関するすべての新しいアップデートと情報");
translation.set("desktop environment","デスクトップ環境");
translation.set("meet nadva, the official desktop environment for avdanos.","avdanosの公式デスクトップ環境であるnadvaに会う");
translation.set("a discord bot made for the avdanos community discord server.","avdanosコミュニティの不和サーバー用に作られた不和ボット");

// features-beta.tsx / features.tsx
translation.set("avdan's concept, we're making it real","avdanのコンセプト、私たちはそれを現実のものにしています");
translation.set("assets are loading, please wait","アセットが読み込まれています。しばらくお待ちください");
translation.set("scroll down to see what we've got here","下にスクロールして、ここにあるものを確認します");
translation.set("this concept video is made by avdan","このコンセプトビデオはavdanによって作られています");
translation.set("watch on youtube","YouTubeで見る");
translation.set("familiar dock, ultimate form","おなじみのドック、究極のフォルム");
translation.set("everyone know dock/task bar. we got a brand new dock, with more features than ever before.","誰もがドック/タスクバーを知っています。これまで以上に多くの機能を備えた新しいドックを手に入れました");
translation.set("brand new launch menu","真新しいローンチメニュー");
translation.set("with everything in one place, do anything anywhere at anytime.","すべてを1か所にまとめて、いつでもどこでも何でもできます");
translation.set("easily apply layout","簡単にレイアウトを適用");
translation.set(
  "with a list of presets determined from you apps, easily get to work with the perfect window layout. not enough? change it in the settings.",
  "アプリから決定されたプリセットのリストを使用して、完璧なウィンドウレイアウトで簡単に作業を開始できます。十分でない？設定で変更してください"
);
translation.set("overpowered dock","圧倒的なドック");
translation.set("your dock can do more than ever. it's your ultimate manager to get you organised.","あなたのドックはこれまで以上にできる。あなたを整理するのはあなたの究極のマネージャーです");
translation.set("new way to manage files","ファイルを管理する新しい方法");
translation.set("this file manager keeps you organised and productive. find your files the instant you need it.","このファイルマネージャは、整理された生産性を維持します。必要なときにすぐにファイルを見つける");
translation.set("drag & drop made easy","ドラッグアンドドロップが簡単に");
translation.set(
  "drag and drop is the easiest way to transfer anything on your computer. we make it intuitive and easy to use.",
  "ドラッグアンドドロップは、コンピュータ上のあらゆるものを転送する最も簡単な方法です。直感的で使いやすいものにします"
);
translation.set("more than multitask","マルチタスク以上");
translation.set(
  "want to do many tasks at a time? we know you and we got you. it's now not only multitasking, it's organised multitasking.",
  "一度に多くのタスクを実行したいですか？私たちはあなたを知っていて、あなたを手に入れました。今ではマルチタスクだけでなく、組織化されたマルチタスクです"
);
translation.set("tabos!","");
translation.set(
  "browsers have proven how powerful tabs are, so why not use them to make your os even more powerful?",
  "ブラウザはタブがどれほど強力であるかを証明しているので、OSをさらに強力にするためにそれらを使用してみませんか？"
);
translation.set("new context menu","新しいコンテキストメニュー");
translation.set(
  "context menu didn't change for multiple decades now. we are tired of a long list of items, and hey why not make it a circle? don't like it? you can switch it back in settings!",
  "コンテキストメニューは何十年も変わっていません。たくさんのアイテムにうんざりしているので、サークルにしてみませんか？気に入らない？設定に戻すことができます！"
);
translation.set("your os, your preference","あなたのOS、あなたの好み");
translation.set(
  "we give you control over your system. theme is just an important one of them, and you can get more if you don't like ours.",
  "システムを制御できます。テーマはそれらの重要なものの1つであり、私たちのテーマが気に入らない場合はさらに多くを得ることができます"
);
translation.set("day & night","昼と夜");
translation.set(
  "let different themes tell you what time it is. hey, you can even make it reversed. can you do it on windows or macos?",
  "さまざまなテーマで今何時か教えてください。ねえ、あなたもそれを逆にすることができます。 WindowsやMacOSで実行できますか？"
);
translation.set("under development","開発中で");
translation.set("this project wouldn't be possible without the community's contributions. join us and help!","このプロジェクトは、コミュニティの貢献なしには実現できません。私たちに参加して助けてください！");
translation.set("open demo","デモを開く");

// download.tsx
translation.set("give your pc an upgrade.","あなたのパソコンをアップグレードしてください");
// "try in your browser" is in index.tsx section
// "open demo" is in features-beta.tsx section
translation.set("for most people","多くの人々にとって");
translation.set("for pi, pine, and mac","為に pi, pine, と mac");
translation.set("download","ダウンロード");
translation.set("web preview","web preview");
translation.set(
  "you're about to visit the web demo version of avdanos, which is only a proof of concept. trying the live system is strongly recommended to getting the full experience from the operating system.",
  "概念実証にすぎないavdanosのWebデモバージョンにアクセスしようとしています。オペレーティングシステムを最大限に活用するには、ライブシステムを試すことを強くお勧めします"
);
translation.set("*live system is currently not available because the system is still under development","*システムはまだ開発中であるため、ライブシステムは現在利用できません");
translation.set("yes, take me there","はい、私をそこに連れて行ってください");
translation.set("cancel","キャンセル");
translation.set("before you download","ダウンロードする前に");
translation.set("please read this before you continue","続行する前にこれをお読みください");
translation.set("below is the shasum of the download. you can use it to check download's integrity:","以下はダウンロードのshasumです。これを使用して、ダウンロードの整合性を確認できます。");
translation.set("yes, i understand","はい、わかりました");
translation.set("use torrent download","トレントダウンロードを使用する");
translation.set("continue","継続する");
// in testing
translation.set(
  "having trouble? click [%s] here [%/s] to get help!",
  "問題がありますか？ クリック [%s] ここ [%/s] 助けを得るために！"
);

// support.tsx
translation.set("avdanos support","avdanos サポート");
translation.set("contact us on social media","ソーシャルメディアでお問い合わせください");
translation.set("visit","訪問");

// support-beta.tsx
translation.set("avdanos support articles","avdanos サポート記事");
translation.set("search support articles","サポート記事を検索");
translation.set("ask our community","私たちのコミュニティに聞いてください");

// betapopup.tsx
translation.set("hey look! a new testing version of this page is available!","ちょっと見て！このページの新しいテストバージョンが利用可能です！");
translation.set("close","近い");
translation.set("check it out","見てみな");

// docs.tsx
translation.set("read the features in detail.","機能を詳しく読む");
translation.set("i'm a user","私はユーザーです");
translation.set("open manual","マニュアルを開く");
translation.set("manual is not available yet","マニュアルはまだ利用できません");
translation.set("i'm a developer","私は開発者です");
translation.set("open documentation","ドキュメントを開く");
translation.set("manual is not available yet","マニュアルはまだ利用できません");

// demo.tsx
// "Try in your browser." is in index.tsx
translation.set("full screen","全画面表示");

// 404.tsx
translation.set("page not found","ページが見つかりません");
translation.set("this page does not exist.","このページは存在しません");
translation.set("join in and help us out developing an open-source operating system.",""); // don't translate this yet (technical issue)

// widthrequirement.tsx
translation.set("width incompatibility","幅の非互換性");
translation.set("increase your window width","ウィンドウ幅を大きくする");
translation.set(
  "your window is too small to display the content of this page, and we detected that you got more screen estate. please increase your window width or maximise your browser window.",
  "ウィンドウが小さすぎてこのページのコンテンツを表示できません。画面の容量が増えたことが検出されました。ウィンドウ幅を大きくするか、ブラウザウィンドウを最大化してください."
);
translation.set("rotate your device","デバイスを回転させる");
translation.set("your screen is too small to display this page. please rotate to landscape view or use desktop.","画面が小さすぎてこのページを表示できません。横向きに回転するか、デスクトップを使用してください");
translation.set("this page is incompatible","このページは互換性がありません");
translation.set(
  "your screen width is too small to display the content of this page. you might need to increase your system's resolution use desktop to view this page.",
  "画面幅が小さすぎて、このページのコンテンツを表示できません。このページを表示するには、システムの解像度を上げる必要がある場合があります。デスクトップを使用してください"
);
translation.set(
  "your screen width is too small to display the content of this page. please increase your system's resolution.",
  "画面幅が小さすぎて、このページのコンテンツを表示できません。システムの解像度を上げてください"
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
