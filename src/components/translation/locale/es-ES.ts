let translation = new Map();
import TranslationRebuilder from "../TranslationRebuilder";

// Global
// footer.tsx
translation.set("overview","Navegación");
translation.set("home","Inicio");
translation.set("features","Características");
translation.set("downloads","Descargas");
translation.set("external links","Enlaces externos");
translation.set("twitter","Twitter");
translation.set("github","GitHub");
translation.set("youtube","YouTube");
translation.set("discord","Discord");
translation.set("reddit","Reddit");
translation.set("legal","");
translation.set("license","Licencia");
translation.set("eula","EULA");
translation.set("history of incidents","Historial de problemas");
translation.set("privacy and security","Privacidad y seguridad");
translation.set("inspired by","Inspirado por");
translation.set("avdanos contributors","Contribuidores de AvdanOS");
// alert.tsx
translation.set("is still in development.","aún está en desarrollo.");
translation.set("join our discord","Únete a nuestro Discord");
// menu.tsx / submenu.tsx
// "home" is in footer.tsx
// "features" is in footer.tsx
// "downloads" is in footer.tsx
translation.set("support","Soporte");
translation.set("documentation","Documentación");
translation.set("docs","Docs");
translation.set("demo","Demo");

// index.tsx
translation.set("your pc but even better.","Tu PC, pero mejor.");
translation.set("try in your browser","Pruébalo en tu navegador");
translation.set("download now","Descarga ahora");
// discover.tsx
translation.set("open source on github","De código abierto en GitHub");
translation.set("browse all repos","Ve nuestros repositorios");

// features-beta.tsx / features.tsx
translation.set("avdan's concept, we're making it real","Concepto de Avdan, lo estamos haciendo real");
translation.set("assets are loading, please wait","Los recursos están cargando, por favor espera.");
translation.set("scroll down to see what we've got here","Desplaza para ver lo que tenemos");
translation.set("this concept video is made by avdan","Este concepto fue hecho por Avdan");
translation.set("watch on youtube","Míralo en YouTube");
translation.set("familiar dock, ultimate form","Dock familiar, máxima forma");
translation.set("everyone know dock/task bar. we got a brand new dock, with more features than ever before.","Todos conocen el dock o la barra de tareas. Te traemos un nuevo dock, con más características que lo que hay actualmente.");
translation.set("brand new launch menu","Nuevo menú Inicio");
translation.set("with everything in one place, do anything anywhere at anytime.","Con todo en un lugar, haz lo que quieras en todo lugar, en cualquier momento.");
translation.set("easily apply layout","Nuevo diseño aplicable");
translation.set(
  "with a list of presets determined from you apps, easily get to work with the perfect window layout. not enough? change it in the settings.",
  "Con una lista de opciones preestablecidas, comienza a trabajar con este diseño perfecto de ventanas. ¿No es suficiente? Cámbialo en Ajustes."
);
translation.set("overpowered dock","Dock superpoderoso");
translation.set("your dock can do more than ever. it's your ultimate manager to get you organised.","Tu dock puede hacer más que antes. Es tu gestor principal para mantenerte organizado.");
translation.set("new way to manage files","Nueva forma de administrar archivos.");
translation.set("this file manager keeps you organised and productive. find your files the instant you need it.","Este administrador de archivos te mantiene organizado y productivo. Encuentra tus archivos en el momento en que los necesitas.");
translation.set("drag & drop made easy","Arrastrar y soltar facilitado.");
translation.set(
  "drag and drop is the easiest way to transfer anything on your computer. we make it intuitive and easy to use.",
  "Arrastrar y soltar es la manera más fácil de transferir cualquier cosa en tu computadora. Lo estamos haciendo más intuiivo y fácil de usar."
);
translation.set("more than multitask","Más que multitarea");
translation.set(
  "want to do many tasks at a time? we know you and we got you. it's now not only multitasking, it's organised multitasking.",
  "¿Quieres hacer muchas tareas a la vez? Te tenemos cubierto. Ahora no es solo multitarea, es multitarea organizada."
);
translation.set("tabos!","¡PestañaOS!");
translation.set(
  "browsers have proven how powerful tabs are, so why not use them to make your os even more powerful?",
  "Los navegadores han probado lo poderosos que son las pestañas, ¿Así que por qué no usarlos para hacer el sistema más poderoso?"
);
translation.set("new context menu","Nuevo menú contextual");
translation.set(
  "context menu didn't change for multiple decades now. we are tired of a long list of items, and hey why not make it a circle? don't like it? you can switch it back in settings!",
  "Los menús contextuales no cambiaron por décadas. Ya estamos cansados de listas largas. Entonces, ¿Por qué no hacerlo un círculo? ¿No te gusta? Puedes revertirlo en Ajustes."
);
translation.set("your os, your preference","Tu sistema, tu preferencia.");
translation.set(
  "we give you control over your system. theme is just an important one of them, and you can get more if you don't like ours.",
  "Te damos control sobre tu sistema. Los temas son una parte mportante de eso. y siempre puedes conseguir más si no te gustan los predeterminados."
);
translation.set("day & night","Día y noche");
translation.set(
  "let different themes tell you what time it is. hey, you can even make it reversed. can you do it on windows or macos?",
  "Deja que los temas te digan qué hora es. ¡Incluso puedes configurarlo al revés! ¿Puedes hacerlo en Windows o MacOS?"
);
translation.set("under development","En desarrollo");
translation.set("this project wouldn't be possible without the community's contributions. join us and help!","Este proyecto no sería posible sin las contribuciones de la comunidad. ¡Ayúdanos!");
translation.set("open demo","Abrir demo");

// download.tsx
translation.set("give your pc an upgrade.","Dale a tu PC una mejora");
// "try in your browser" is in index.tsx section
// "open demo" is in features-beta.tsx section
translation.set("for most people","Para la mayoría");
translation.set("for pi, pine, and mac","Para Pi, Pine y Mac");
translation.set("download","Descargar");
translation.set("web preview","Simulación web");
translation.set(
  "you're about to visit the web demo version of avdanos, which is only a proof of concept. trying the live system is strongly recommended to getting the full experience from the operating system.",
  "Estás a punto de visitar la versión demostrativa de AvdanOS, el cual es sólo una prueba de concepto. Es recomendado probar el <sistema en vivo> para obtener la mejor experiencia."
);
translation.set("*live system is currently not available because the system is still under development","*El <sistema en vivo> no está disponible porque aún está en desarrollo.*");
translation.set("yes, take me there","Sí, llévame ahí");
translation.set("cancel","Cancelar");
translation.set("before you download","Antes de descargar");
translation.set("please read this before you continue","por favor lee esto antes de continuar");
translation.set("below is the shasum of the download. you can use it to check download's integrity:","Abajo estáel hash de la descarga. Puedes usarlo para comprobar su integridad:");
translation.set("yes, i understand","Sí, entiendo");
translation.set("use torrent download","Usar descarga por torrent");
translation.set("continue","Continuar");
// in testing
translation.set(
  "having trouble? click [%s] here [%/s] to get help!",
  "¿Tienes problemas? ¡Haz click [%s] aquí [%/s] para obtener ayuda!"
);

// support.tsx
translation.set("avdanos support","Soporte de AvdanOS");
translation.set("contact us on social media","Contáctanos por nuestras redes sociales.");
translation.set("visit","Visitar");

// support-beta.tsx
translation.set("avdanos support articles","Artículos de ayuda de AvdanOS");
translation.set("search support articles","Busca artículos de ayuda");
translation.set("ask our community","Pregunta a nuestra comunidad");

// betapopup.tsx
translation.set("hey look! a new testing version of this page is available!","¡Oye, mira! ¡Hay una nueva versión beta de esta página disponible!");
translation.set("close","Cerrar");
translation.set("check it out","Ver");

// docs.tsx
translation.set("read the features in detail.","Lea las características en detalle.");
translation.set("i'm a user","Soy un usuario");
translation.set("open manual","Abrir manual");
translation.set("i'm a developer","Soy un desarrollador");
translation.set("open documentation","Abrir documentación");

// demo.tsx
// "Try in your browser." is in index.tsx
translation.set("full screen","Pantalla completa");

// 404.tsx
translation.set("page not found","Página no encontrada");
translation.set("this page does not exist.","Esta página no existe.");
translation.set("join in and help us out developing an open-source operating system.","¡Únete y ayúdanos a desarrolar este sistema libre!"); // don't translate this yet (technical issue)

// widthrequirement.tsx
translation.set("width incompatibility","Ancho incompatible");
translation.set("increase your window width","Incrementa el ancho de tu ventana.");
translation.set(
  "your window is too small to display the content of this page, and we detected that you got more screen estate. please increase your window width or maximise your browser window.",
  "La ventana es muy pequeña para mostrar el contenido de la página, y detectamos que tienes más pantalla. Por favor, incrementa el ancho de la ventana o maximiza el navegador."
);
translation.set("rotate your device","Rota tu dispositivo");
translation.set("your screen is too small to display this page. please rotate to landscape view or use desktop.","La pantalla es muy pequeña para mostrar esta página. Por favor, inclina el dispositivo o usa una computadora.");
translation.set("this page is incompatible","Esta página es incompatible");
translation.set(
  "your screen width is too small to display the content of this page. you might need to increase your system's resolution use desktop to view this page.",
  "El ancho de pantalla es muy pequeño para mostrar esta página. Tal vez debas aumentar la resolución del sistema o usar otra computadora."
);
translation.set(
  "your screen width is too small to display the content of this page. please increase your system's resolution.",
  "El ancho de pantalla es muy pequeño para mostrar esta página. Por favor, aumenta la resolución del sistema."
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
