let translation = new Map();
import TranslationRebuilder from "../TranslationRebuilder";

// Global
// footer.tsx
translation.set("overview","개요");
translation.set("home","집");
translation.set("features","features");
translation.set("downloads","다운로드");
translation.set("external links","외부 링크");
translation.set("twitter","");
translation.set("github","");
translation.set("youtube","");
translation.set("discord","");
translation.set("reddit","");
translation.set("legal","합법적인");
translation.set("license","특허");
translation.set("eula","율라");
translation.set("history of incidents","사건의 역사");
translation.set("privacy and security","개인 정보 보호 및 보안");
translation.set("inspired by","에서 영감을 받다");
translation.set("avdanos contributors","AvdanOS 기여자");
// alert.tsx
translation.set("is still in development.","아직 개발 중입니다");
translation.set("join our discord","우리의 가입 discord");
// menu.tsx / submenu.tsx
// "home" is in footer.tsx
// "features" is in footer.tsx
// "downloads" is in footer.tsx
translation.set("support","지원하다");
translation.set("documentation","선적 서류 비치");
translation.set("docs","문서");
translation.set("demo","데모");

// index.tsx
translation.set("your pc but even better.","귀하의 개인용 컴퓨터");
translation.set("try in your browser","브라우저에서 시도");
translation.set("download now","지금 다운로드");
// discover.tsx
translation.set("open source on github","github의 오픈 소스");
translation.set("browse all repos","모든 저장소 찾아보기");
// discoverCard.tsx
translation.set("avdanos","AvdanOS");
translation.set("meet avdanos, refining the way we think about operating systems.","avdanos를 만나서 운영 체제에 대해 생각하는 방식을 개선합니다.");
translation.set("official website","공식 웹 사이트");
translation.set("all the new updates and information about avdanos and support.","avdanos 및 지원에 대한 모든 새로운 업데이트 및 정보");
translation.set("desktop environment","데스크탑 환경");
translation.set("meet nadva, the official desktop environment for avdanos.","avdanos의 공식 데스크탑 환경인 nadva를 만나보세요");
translation.set("a discord bot made for the avdanos community discord server.","avdanos 커뮤니티 discord 서버용으로 만든 discord 봇");

// features-beta.tsx / features.tsx
translation.set("avdan's concept, we're making it real","avdan의 개념, 우리는 그것을 현실로 만들고 있습니다");
translation.set("assets are loading, please wait","자산을 로드하는 중입니다. 잠시만 기다려 주십시오.");
translation.set("scroll down to see what we've got here","아래로 스크롤하여 여기에 있는 내용을 확인하세요.");
translation.set("this concept video is made by avdan","이 컨셉 영상은 avdan이 제작했습니다.");
translation.set("watch on youtube","youtube에서 시청");
translation.set("familiar dock, ultimate form","친숙한 독, 궁극의 형태");
translation.set("everyone know dock/task bar. we got a brand new dock, with more features than ever before.","모두가 도크/작업 표시줄을 알고 있습니다. 그 어느 때보다 더 많은 기능을 갖춘 새로운 도크가 생겼습니다.");
translation.set("brand new launch menu","새로운 출시 메뉴");
translation.set("with everything in one place, do anything anywhere at anytime.","모든 것을 한 곳에서, 언제 어디서나 무엇이든 할 수 있습니다.");
translation.set("easily apply layout","쉽게 레이아웃 적용");
translation.set(
  "with a list of presets determined from you apps, easily get to work with the perfect window layout. not enough? change it in the settings.",
  "앱에서 결정된 사전 설정 목록을 사용하여 완벽한 창 레이아웃으로 쉽게 작업할 수 있습니다. 부족한? 설정에서 바꾸세요"
);
translation.set("overpowered dock","압도된 도크");
translation.set("your dock can do more than ever. it's your ultimate manager to get you organised.","도크는 그 어느 때보다 많은 작업을 수행할 수 있습니다. 당신을 정리하는 것은 당신의 궁극적 인 관리자입니다");
translation.set("new way to manage files","파일을 관리하는 새로운 방법");
translation.set("this file manager keeps you organised and productive. find your files the instant you need it.","이 파일 관리자는 조직적이고 생산성을 유지합니다. 필요할 때 즉시 파일 찾기");
translation.set("drag & drop made easy","드래그 앤 드롭이 쉬워졌습니다.");
translation.set(
  "drag and drop is the easiest way to transfer anything on your computer. we make it intuitive and easy to use.",
  "드래그 앤 드롭은 컴퓨터에 있는 모든 것을 전송하는 가장 쉬운 방법입니다. 우리는 그것을 직관적이고 사용하기 쉽게 만듭니다"
);
translation.set("more than multitask","멀티태스킹 이상");
translation.set(
  "want to do many tasks at a time? we know you and we got you. it's now not only multitasking, it's organised multitasking.",
  "한 번에 많은 작업을 수행하고 싶습니까? 우리는 당신을 알고 우리는 당신을 얻었다. 이제 멀티태스킹 뿐만 아니라 조직화된 멀티태스킹"
);
translation.set("tabos!","");
translation.set(
  "browsers have proven how powerful tabs are, so why not use them to make your os even more powerful?",
  "브라우저는 탭이 얼마나 강력한지 입증했으니 OS를 더욱 강력하게 만드는 데 탭을 사용하지 않으시겠습니까?"
);
translation.set("new context menu","새로운 컨텍스트 메뉴");
translation.set(
  "context menu didn't change for multiple decades now. we are tired of a long list of items, and hey why not make it a circle? don't like it? you can switch it back in settings!",
  "컨텍스트 메뉴는 수십 년 동안 변경되지 않았습니다. 우리는 항목의 긴 목록에 지쳤고, 왜 그것을 원으로 만들지 않겠습니까? 싫어? 설정에서 다시 전환할 수 있습니다!"
);
translation.set("your os, your preference","당신의 os, 당신의 취향");
translation.set(
  "we give you control over your system. theme is just an important one of them, and you can get more if you don't like ours.",
  "시스템을 제어할 수 있습니다. 테마는 그 중 중요한 것 중 하나이며, 우리가 마음에 들지 않으면 더 얻을 수 있습니다."
);
translation.set("day & night","낮과 밤");
translation.set(
  "let different themes tell you what time it is. hey, you can even make it reversed. can you do it on windows or macos?",
  "let different themes tell you what time it is. hey, you can even make it reversed. can you do it on windows or macos?"
);
translation.set("under development","개발중인");
translation.set("this project wouldn't be possible without the community's contributions. join us and help!","이 프로젝트는 커뮤니티의 기여 없이는 불가능합니다. 우리와 함께 도와주세요!");
translation.set("open demo","데모 열기");

// download.tsx
translation.set("give your pc an upgrade.","개인용 컴퓨터를 업그레이드하십시오");
// "try in your browser" is in index.tsx section
// "open demo" is in features-beta.tsx section
translation.set("for most people","대부분의 사람들에게");
translation.set("for pi, pine, and mac","pi, pine 및 mac를 위해");
translation.set("download","다운로드");
translation.set("web preview","웹 미리보기");
translation.set(
  "you're about to visit the web demo version of avdanos, which is only a proof of concept. trying the live system is strongly recommended to getting the full experience from the operating system.",
  "개념 증명에 불과한 웹 데모 버전인 avdanos를 방문하려고 합니다. 운영 체제에서 전체 경험을 얻으려면 라이브 시스템을 사용하는 것이 좋습니다."
);
translation.set("*live system is currently not available because the system is still under development","*시스템이 아직 개발 중이기 때문에 현재 라이브 시스템을 사용할 수 없습니다.");
translation.set("yes, take me there","그래, 날 거기로 데려가줘");
translation.set("cancel","취소");
translation.set("before you download","다운로드하기 전에");
translation.set("please read this before you continue","계속하기 전에 이것을 읽으십시오");
translation.set("below is the shasum of the download. you can use it to check download's integrity:","아래는 다운로드의 shasum입니다. 다운로드의 무결성을 확인하는 데 사용할 수 있습니다.");
translation.set("yes, i understand","네 이해했습니다");
translation.set("use torrent download","토렌트 다운로드 사용");
translation.set("continue","계속하다");
// in testing
translation.set(
  "having trouble? click [%s] here [%/s] to get help!",
  "문제가있다? 딸깍 하는 소리 [%s] 여기 [%/s] 도움을 받으려면!"
);

// support.tsx
translation.set("avdanos support","avdanos 지원하다");
translation.set("contact us on social media","소셜 미디어에 문의");
translation.set("visit","방문");

// support-beta.tsx
translation.set("avdanos support articles","avdanos 지원 기사");
translation.set("search support articles","지원 기사 검색");
translation.set("ask our community","우리 커뮤니티에 물어보세요");

// betapopup.tsx
translation.set("hey look! a new testing version of this page is available!","야 봐봐! 이 페이지의 새로운 테스트 버전을 사용할 수 있습니다!");
translation.set("close","닫다");
translation.set("check it out","확인 해봐");

// docs.tsx
translation.set("read the features in detail.","기능을 자세히 읽으십시오");
translation.set("i'm a user","나는 사용자다");
translation.set("open manual","오픈 매뉴얼");
translation.set("manual is not available yet","설명서는 아직 사용할 수 없습니다");
translation.set("i'm a developer","나는 개발자다");
translation.set("open documentation","문서 열기");
translation.set("manual is not available yet","설명서는 아직 사용할 수 없습니다");

// demo.tsx
// "Try in your browser." is in index.tsx
translation.set("full screen","전체 화면");

// 404.tsx
translation.set("page not found","페이지를 찾을 수 없습니다");
translation.set("this page does not exist.","이 페이지는 존재하지 않습니다");
translation.set("join in and help us out developing an open-source operating system.",""); // don't translate this yet (technical issue)

// widthrequirement.tsx
translation.set("width incompatibility","폭 비호환성");
translation.set("increase your window width","창 너비를 늘리십시오");
translation.set(
  "your window is too small to display the content of this page, and we detected that you got more screen estate. please increase your window width or maximise your browser window.",
  "창이 너무 작아 이 페이지의 콘텐츠를 표시할 수 없으며 더 많은 화면 공간이 있는 것으로 나타났습니다. 창 너비를 늘리거나 브라우저 창을 최대화하세요."
);
translation.set("rotate your device","장치를 회전");
translation.set("your screen is too small to display this page. please rotate to landscape view or use desktop.","화면이 너무 작아 이 페이지를 표시할 수 없습니다. 가로 보기로 회전하거나 데스크톱을 사용하세요.");
translation.set("this page is incompatible","이 페이지는 호환되지 않습니다");
translation.set(
  "your screen width is too small to display the content of this page. you might need to increase your system's resolution use desktop to view this page.",
  "화면 너비가 너무 작아 이 페이지의 내용을 표시할 수 없습니다. 이 페이지를 보려면 데스크탑을 사용하여 시스템의 해상도를 높여야 할 수도 있습니다."
);
translation.set(
  "your screen width is too small to display the content of this page. please increase your system's resolution.",
  "화면 너비가 너무 작아 이 페이지의 내용을 표시할 수 없습니다. 시스템의 해상도를 높여주세요"
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
