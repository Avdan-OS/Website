let translation = new Map();
import TranslationRebuilder from "../TranslationRebuilder";

// Global
// footer.tsx
translation.set("overview","Aperçu");
translation.set("home","Accueil");
translation.set("features","Fonctionnalités");
translation.set("downloads","Téléchargements");
translation.set("external links","Liens externes");
translation.set("twitter","");
translation.set("github","");
translation.set("youtube","");
translation.set("discord","");
translation.set("reddit","");
translation.set("legal","Légal");
translation.set("license","");
translation.set("eula","");
translation.set("history of incidents","Historique des incidents");
translation.set("privacy and security","Sécurité et confidentialité");
translation.set("inspired by","Inspiré par");
translation.set("avdanos contributors","Contributeurs de AvdanOS");
// alert.tsx
translation.set("is still in development.","est toujours en développement");
translation.set("join our discord","rejoignez notre discord");
// menu.tsx / submenu.tsx
// "home" is in footer.tsx
// "features" is in footer.tsx
// "downloads" is in footer.tsx
translation.set("support","");
translation.set("documentation","");
translation.set("docs","");
translation.set("demo","démo");

// index.tsx
translation.set("your pc but even better.","Votre pc mais en mieux");
translation.set("try in your browser","Essayez dans votre navigateur");
translation.set("download now","téléchargez maintenant");
// discover.tsx
translation.set("open source on github","Code source ouvert sur github");
translation.set("browse all repos","parcourir tous les dépots");

// features-beta.tsx / features.tsx
translation.set("avdan's concept, we're making it real","Le concept d'Avdan, nous le réalisons");
translation.set("assets are loading, please wait","Ressources en chargement, veuillez patienter");
translation.set("scroll down to see what we've got here","Descendez pour voir ce que nous avons ici");
translation.set("this concept video is made by avdan","Cette vidéo de concept est faite par avdan");
translation.set("watch on youtube","regarder sur youtube");
translation.set("familiar dock, ultimate form","Dock familier, forme ultime");
translation.set("everyone know dock/task bar. we got a brand new dock, with more features than ever before.","tout le monde connais le dock/la barre des tâches. nous en avons un tout nouveau, avec encore plus de fonctionnalités que jamais auparavant");
translation.set("brand new launch menu","Tout nouveau menu de démarrage");
translation.set("with everything in one place, do anything anywhere at anytime.","Avec tout dans un seul endroit, faites ce que vous voulez, n'importe où à n'importe quel moment");
translation.set("easily apply layout.","Appliquez facilement une disposition");
translation.set(
  "with a list of presets determined from you apps, easily get to work with the perfect window layout. not enough? change it in the settings.",
  "Avec une liste de prédispositions définies depuis vos applications, travaillez facilement avec l'organisation parfaite de vos fenêtres. pas assez de dispositions ? changez les dans les paramètres"
);
translation.set("overpowered dock","Un dock puissant");
translation.set("your dock can do more than ever. it's your ultimate manager to get you organised.","Votre nouveau dock peut faire encore plus qu'avant. c'est votre gestionnaire ultime pour que vous soyez organisé");
translation.set("new way to manage files","Nouvelle manière de gérer ses fichiers");
translation.set("this file manager keeps you organised and productive. find your files the instant you need it.","Ce gestionnaire de fichier vous maintiens organisé et productif. trouvez vos fichiers dans l'instant où vous en avez besoin");
translation.set("drag & drop made easy","Glisser & déposer rendu facile");
translation.set(
  "drag and drop is the easiest way to transfer anything on your computer. we make it intuitive and easy to use.",
  "Glisser et déposer est la manière la plus facile de transférer quelque chose sur votre ordinateur. nous l'avons rendu intuitif et facile à utiliser"
);
translation.set("more than multitask","Plus que du multitâche");
translation.set(
  "want to do many tasks at a time? we know you and we got you. it's now not only multitasking, it's organised multitasking.",
  "Vous souhaitez faire plusieures tâches à la fois ? nous vous connaissons et nous y avons pensé. maintenant ce n'est plus que du multitâche, c'est du multitâche organisé"
);
translation.set("tabos!","Onglets !");
translation.set(
  "browsers have proven how powerful tabs are, so why not use them to make your os even more powerful?",
  "Les navigateurs ont prouvés la puissance des onglets, alors pourquoi ne pas les utiliser pour renforcer votre os ?"
);
translation.set("new context menu","Nouveau menu clic-droit");
translation.set(
  "context menu didn't change for multiple decades now. we are tired of a long list of items, and hey why not make it a circle? don't like it? you can switch it back in settings!",
  "Le menu du clic-droit n'a pas changé depuis des décénnies. nous sommes fatigués d'une longue liste de menus, et donc pourquoi pas en faire un rond ? vous ne l'aimez pas ? vous pouvez le remettre comme avant dans les paramètres !"
);
translation.set("your os, your preference","Votre os, vos préférence");
translation.set(
  "we give you control over your system. theme is just an important one of them, and you can get more if you don't like ours.",
  "Nous vous donnons le contrôle sur votre système. les thèmes en sont une partie importante de celui ci, et vous pouvez en obtenir plus si vous n'appréciez pas le nôtre."
);
translation.set("day & night","Jour & nuit");
translation.set(
  "let different themes tell you what time it is. hey, you can even make it reversed. can you do it on windows or macos?",
  "Laissez différents thèmes vous dire quelle heure est-il. hey, vous pouvez même l'inverser. pouvez vous le faire sur windows ou macos ?"
);
translation.set("under development","En cours de développement");
translation.set("this project wouldn't be possible without the community's contributions. join us and help!","Ce projet ne pourrait pas être possible sans les contributions de la communauté. rejoignez nous et aidez!");
translation.set("open demo","ouvrir la démo");

// download.tsx
translation.set("give your pc an upgrade.","Donnez une amélioration à votre pc");
// "try in your browser" is in index.tsx section
// "open demo" is in features-beta.tsx section
translation.set("for most people","Pour la plupart des personnes");
translation.set("for pi, pine, and mac","Pour pi, pine, et mac");
translation.set("download","télécharger");
translation.set("web preview","prévisualisation web");
translation.set(
  "you're about to visit the web demo version of avdanos, which is only a proof of concept. trying the live system is strongly recommended to getting the full experience from the operating system.",
  "Vous êtes sur le point de visiter la démo web de avdanos, qui n'est qu'un preuve de concept. essayer la version live du système est fortement recommendée pour obtenir une expérience complète de l'OS"
);
translation.set("*live system is currently not available because the system is still under development","la version live du système n'est actuellement pas disponible car le système est toujours en cours de développement");
translation.set("yes, take me there","oui, amenez moi là-bas");
translation.set("cancel","annuler");
translation.set("before you download","avant de télécharger");
translation.set("please read this before you continue","veuillez lire avant de continuer");
translation.set("below is the shasum of the download. you can use it to check download's integrity:","En dessous se trouve le shasum du téléchargement. vous pouvez l'utilisez pour vérifier l'intégrité de celui ci:");
translation.set("yes, i understand","Oui, j'ai compris");
translation.set("use torrent download","Utiliser le téléchargement en torrent");
translation.set("continue","continuer");
// in testing
translation.set(
  "having trouble? click [%s] here [%/s] to get help!",
  "Vous avez des difficultés ? Cliquez [%s] ici [%/s] pour obtenir de l'aide !"
);

// support.tsx
translation.set("avdanos support","Support avdanos");
translation.set("contact us on social media","Contactez nous sur nos réseaux sociaux");
translation.set("visit","visiter");

// support-beta.tsx
translation.set("avdanos support articles","Articles de support avdanos");
translation.set("search support articles","rechercher dans les articles de support");
translation.set("ask our community","Demander à notre communauté");

// betapopup.tsx
translation.set("hey look! a new testing version of this page is available!","hey regardez ! une nouvelle version de test de cette page est disponible !");
translation.set("close","fermer");
translation.set("check it out","aller voir");

// docs.tsx
translation.set("read the features in detail.","lire les fonctionnalités en détail.");
translation.set("i'm a user","je suis un utilisateur");
translation.set("open manual","ouvrir le manuel");
translation.set("i'm a developer","je suis un développeur");
translation.set("open documentation","ouvrir la documentation");

// demo.tsx
// "Try in your browser." is in index.tsx
translation.set("full screen","plein écran");

// 404.tsx
translation.set("page not found","page non trouvée");
translation.set("this page does not exist.","cette page n'existe pas");
translation.set("join in and help us out developing an open-source operating system.",""); // don't translate this yet (technical issue)

// widthrequirement.tsx
translation.set("width incompatibility","largeur incompatible");
translation.set("increase your window width","augmentez votre largeur de fenêtre");
translation.set(
  "your window is too small to display the content of this page, and we detected that you got more screen estate. please increase your window width or maximise your browser window.",
  "votre fenêtre web est trop petite pour pouvoir afficher le contenu de cette page, et nous avons détecté que vous avez plus d'espace sur votre écran. veuillez augmenter la taille de la fenêtre de votre navigateur ou la maximiser."
);
translation.set("rotate your device","tournez votre appareil");
translation.set("your screen is too small to display this page. please rotate to landscape view or use desktop.","votre largeur d'écran est trop petite pour pouvoir afficher le contenu de cette page. Veuillez tourner votre appareil en mode paysage ou utiliser un ordinateur.");
translation.set("this page is incompatible","cette page est incompatible");
translation.set(
  "your screen width is too small to display the content of this page. you might need to increase your system's resolution use desktop to view this page.",
  "Votre largeur d'écran est trop petite pour pouvoir afficher le contenu de cette page. Veuillez augmenter votre résolution système."
);
translation.set(
  "your screen width is too small to display the content of this page. please increase your system's resolution.",
  "Votre largeur d'écran est trop petite pour pouvoir afficher le contenu de cette page. Veuillez augmenter votre résolution système."
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
