let translation = new Map();
import TranslationRebuilder from "../TranslationRebuilder";

// Global
// footer.tsx
translation.set("overview","σφαιρική εικόνα");
translation.set("home","αρχική");
translation.set("features","χαρακτηριστικά");
translation.set("downloads","");
translation.set("external links","links τρίτων");
translation.set("twitter","");
translation.set("github","");
translation.set("youtube","");
translation.set("discord","");
translation.set("reddit","");
translation.set("legal","νόμιμη");
translation.set("license","άδεια");
translation.set("eula","");
translation.set("history of incidents","ιστορικό περιστατικών");
translation.set("privacy and security","μυστικότητα και ασφάλεια");
translation.set("inspired by","εμπνευσμένο από");
translation.set("avdanos contributors","τον avdan");
// alert.tsx
translation.set("is still in development.","υπό ανάπτυξη.");
translation.set("join our discord","μπες στο discord μας");
// menu.tsx / submenu.tsx
// "home" is in footer.tsx
// "features" is in footer.tsx
// "downloads" is in footer.tsx
translation.set("support","υποστήριξη");
translation.set("documentation","τεκμηρίωση");
translation.set("docs","έγγραφα");
translation.set("demo","δοκιμαστικό");

// index.tsx
translation.set("your pc but even better.","το pc σου, αλλά ακόμα καλύτερο.");
translation.set("try in your browser","δοκίμασέ το στο browser σου");
translation.set("download now","κατέβασέ το τώρα");
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
translation.set("avdan's concept, we're making it real","τo concept του avdan, το κάνουμε αληθινό");
translation.set("assets are loading, please wait","Τα στοιχεία φορτώνονται, περιμένετε");
translation.set("scroll down to see what we've got here","μετακινηθείτε προς τα κάτω για να δείτε τι έχουμε εδώ");
translation.set("this concept video is made by avdan","αυτό το concept βίντεο είναι φτιαγμένο από τον avdan");
translation.set("watch on youtube","δες το στο youtube");
translation.set("familiar dock, ultimate form","γνώριμο dock, απόλυτη μορφή");
translation.set("everyone knows dock/task bar. we got a brand new dock, with more features than ever before.","όλοι γνωρίζουν το dock/task bar. αποκτήσαμε έναν ολοκαίνουργιο dock, με περισσότερες δυνατότητες από ποτέ.");
translation.set("brand new launch menu","καινούριο launch menu");
translation.set("with everything in one place, do anything anywhere at anytime.","με τα πάντα σε ένα μέρος, κάντε οτιδήποτε οπουδήποτε και ανά πάσα στιγμή");
translation.set("easily apply layout","εφαρμόστε εύκολα τη διάταξη");
translation.set(
  "with a list of presets determined from you apps, easily get to work with the perfect window layout. not enough? change it in the settings.",
  "με μια λίστα προεπιλογών που καθορίζονται από τις εφαρμογές σας, ξεκινήστε εύκολα τη δουλειά με την τέλεια διάταξη παραθύρου. όχι αρκετά? αλλάξτε το στις ρυθμίσεις."
);
translation.set("overpowered dock","σουπερ dock");
translation.set("your dock can do more than ever. it's your ultimate manager to get you organised.","το dock σας μπορεί να κάνει περισσότερα από ποτέ. είναι ο απόλυτος διαχειριστής σας για να σας οργανώσει.");
translation.set("new way to manage files","νέος τρόπος διαχείρισης αρχείων");
translation.set("this file manager keeps you organised and productive. find your files the instant you need it.","αυτός ο διαχειριστής αρχείων σας κρατά οργανωμένους και παραγωγικούς. βρείτε τα αρχεία σας τη στιγμή που τα χρειάζεστε.");
translation.set("drag & drop made easy","το drag & drop είναι εύκολο");
translation.set(
  "drag and drop is the easiest way to transfer anything on your computer. we make it intuitive and easy to use.",
  "drag and drop είναι το πιο εύκολο εργαλείο για μεταφορά αρχείων. το κάναμε εύκολο στη χρήση."
);
translation.set("more than multitask","περισσότερο από multitask");
translation.set(
  "want to do many tasks at a time? we know you and we got you. it's now not only multitasking, it's organised multitasking.",
  "θες να κάνεις πολλές δουλειές την ίδια στιγμή? we know you and we got you. δεν είναι μόνο multitasking, είναι οργανομένο multitasking."
);
translation.set("tabos!","ταμπού!");
translation.set(
  "browsers have proven how powerful tabs are, so why not use them to make your os even more powerful?",
  "Τα προγράμματα περιήγησης έχουν αποδείξει πόσο ισχυρές είναι οι καρτέλες, οπότε γιατί να μην τις χρησιμοποιήσετε για να κάνετε το λειτουργικό σας σύστημα ακόμα πιο ισχυρό;"
);
translation.set("new context menu","νέο context menu");
translation.set(
  "context menu didn't change for multiple decades now. we are tired of a long list of items, and hey why not make it a circle? don't like it? you can switch it back in settings!",
  "το context menu δεν έχει αλλάξει εδώ και πολλές δεκαετίες. έχουμε βαρεθεί τις μεγάλες λίστες πραγμάτων, και ξέρεις κάτι, γιατί δεν το φτιάχνουμε σαν κύκλο; δε σ'αρέσει; μπορείς να το αλλάξεις στις ρυθμίσεις!"
);
translation.set("your os, your preference","το δικό σου os, οι δικές σας προτιμήσεις");
translation.set(
  "we give you control over your system. theme is just an important one of them, and you can get more if you don't like ours.",
  "σου δίνουμε έλεγχο του συστήματός σας. Το θέμα είναι απλώς ένα σημαντικό από αυτά, και μπορείτε να αποκτήσετε περισσότερα αν δεν σας αρέσει το δικό μας."
);
translation.set("day & night","μέρα & νύχτα");
translation.set(
  "let different themes tell you what time it is. hey, you can even make it reversed. can you do it on windows or macos?",
  "Αφήστε διαφορετικά θέματα να σας πουν τι ώρα είναι. μπορείς ακόμη και να το κάνεις ανάποδα. μπορείς να το κάνεις σε windows ή macos;"
);
translation.set("under development","υπό ανάπτυξη");
translation.set("this project wouldn't be possible without the community's contributions. join us and help!","Αυτό το έργο δεν θα ήταν δυνατό χωρίς τη συνεισφορά της κοινότητας. έλα μαζί μας και βοήθα.");
translation.set("open demo","άνοιξε το δοκιμαστικό");

// κατέβασέ το.tsx
translation.set("this download is not available yet.", "");
translation.set("give your pc an upgrade.","δώσε στο pc ένα upgrade.");
// "δοκίμασέ το στο browser σου" is in index.tsx section
// "άνοιξε το δοκιμαστικό" is in features-beta.tsx section
translation.set("for most people","για τους περισσότερους.");
translation.set("for pi, pine, and mac","για pi, pine, και mac");
translation.set("download","κατέβασέ το");
translation.set("web preview","προεπισκόπηση στο web");
translation.set(
  "you're about to visit the web demo version of avdanos, which is only a proof of concept. trying the live system is strongly recommended to getting the full experience from the operating system.",
  "πρόκειται να επισκεφτείτε την web demo έκδοση του avdanos, η οποία είναι μόνο μια απόδειξη της ιδέας. Η δοκιμή του ζωντανού συστήματος συνιστάται ανεπιφύλακτα για να αποκτήσετε την πλήρη εμπειρία από το λειτουργικό σύστημα."
);
translation.set("*live system is currently not available because the system is still under development","*Το ζωντανό σύστημα δεν είναι προς το παρόν διαθέσιμο γιατί το σύστημα είναι ακόμα υπό ανάπτυξη.");
translation.set("yes, take me there","ναι, πήγαινέ με");
translation.set("cancel","ακύρωση");
translation.set("before you download","πριν κατεβάσεις");
translation.set("please read this before you continue","διάβασε αυτό πριν κατεβάσεις");
translation.set("below is the shasum of the download. you can use it to check download's integrity:","παρακάτω είναι το shasum της λήψης. μπορείτε να το χρησιμοποιήσετε για να ελέγξετε την ακεραιότητα της λήψης:");
translation.set("yes, i understand","ναι, καταλαβαίνω");
translation.set("use torrent download","χρησιμοποίησε torrent download");
translation.set("continue","συνέχισε");
// in testing
translation.set(
  "having trouble? click [%s] here [%/s] to get help!",
  "έχεις πρόβλημα; κάνε κλικ [%s] εδώ [%/s] για βοήθεια!"
);

// support.tsx
translation.set("avdanos support","υποστήριξη του avdanos");
translation.set("contact us on social media","ειδοποιήστε μας social media");
translation.set("visit","");

// support-beta.tsx
translation.set("avdanos support articles","άρθρα υποστήριξης του avdanos");
translation.set("search support articles","ψάξε άρθρα υποστήριξης");
translation.set("ask our community","ρώτα την κοινότητά μας");

// betapopup.tsx
translation.set("hey look! a new testing version of this page is available!","ε κοίτα! μια νέα δοκιμαστική έκδοση αυτής της σελίδας είναι διαθέσιμη!");
translation.set("close","κλείσε");
translation.set("check it out","δοκίμασέ το");

// docs.tsx
translation.set("read the features in detail.","διάβασε τα χρακτηριστικά με λεπτομέριες");
translation.set("i'm a user","είμαι ένας χρήστης");
translation.set("open manual","άνοιξε το εγχειρίδιο");
translation.set("manual is not available yet","");
translation.set("i'm a developer","είμαι προγραμματιστής");
translation.set("open documentation","άνοιξε την τεκμηρίωση");
translation.set("doc is not available yet","");

// demo.tsx
// "δοκίμασέ το στο browser σου." is in index.tsx
translation.set("full screen","");

// 404.tsx
translation.set("page not found","η σελίδα δε βρέθηκε");
translation.set("this page does not exist.","αυτή η σελίδα δεν υπάρχει.");
translation.set("join in and help us out developing an open-source operating system.","μπείτε και βοηθήστε μας να αναπτύξουμε ένα λειτουργικό σύστημα ανοιχτού κώδικα."); // don't translate this yet (technical issue)

// widthrequirement.tsx
translation.set("width incompatibility","ασυμβατότητα πλάτους");
translation.set("increase your window width","αύξησε το πλάτος του παραθύρου σας");
translation.set(
  "your window is too small to display the content of this page, and we detected that you got more screen estate. please increase your window width or maximise your browser window.",
  "Το παράθυρό σου είναι πολύ μικρό για να εμφανιστεί το περιεχόμενο αυτής της σελίδας και εντοπίσαμε ότι έχεις μεγαλύτερη κατάσταση οθόνης. αύξησε το πλάτος του παραθύρου σας ή μεγιστοποιήστε το παράθυρο του προγράμματος περιήγησής σας."
);
translation.set("rotate your device","γύρνα τη συσκευή σου.");
translation.set("your screen is too small to display this page. please rotate to landscape view or use desktop.","Η οθόνη σας είναι πολύ μικρή για να εμφανίζεται αυτή η σελίδα. περιστρέψτε σε οριζόντια προβολή ή χρησιμοποιήστε την επιφάνεια εργασίας.");
translation.set("this page is incompatible","αυτή η σελίδα δεν είναι συμβατή");
translation.set(
  "your screen width is too small to display the content of this page. you might need to increase your system's resolution use desktop to view this page.",
  "Το πλάτος της οθόνης σας είναι πολύ μικρό για να εμφανιστεί το περιεχόμενο αυτής της σελίδας. ίσως χρειαστεί να αυξήσετε την ανάλυση του συστήματός σας, χρησιμοποιήστε την επιφάνεια εργασίας για να δείτε αυτήν τη σελίδα."
);
translation.set(
  "your screen width is too small to display the content of this page. please increase your system's resolution."
  ,""
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
