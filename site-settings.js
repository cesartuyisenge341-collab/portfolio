(function () {
  const translations = {
    "Home": ["Ahabanza", "Accueil"],
    "About": ["Ibyerekeye", "À propos"],
    "Capabilities": ["Ubushobozi", "Compétences"],
    "Projects": ["Imishinga", "Projets"],
    "Experience": ["Uburambe", "Expérience"],
    "Global": ["Isi yose", "International"],
    "Contact": ["Twandikire", "Contact"],
    "Main navigation": ["Ibikubiyemo", "Navigation principale"],
    "Mobile navigation": ["Ibikubiyemo bya telefone", "Navigation mobile"],
    "Toggle menu": ["Fungura cyangwa ufunge ibikubiyemo", "Ouvrir ou fermer le menu"],
    "Settings": ["Igenamiterere", "Paramètres"],
    "Language": ["Ururimi", "Langue"],
    "Dark mode": ["Uburyo bwijimye", "Mode sombre"],
    "Talk to me": ["Vugana nanjye", "Parlons"],
    "Contact me": ["Vugana nanjye", "Me contacter"],
    "View capabilities": ["Reba ubushobozi", "Voir les compétences"],
    "I build useful": ["Nubaka", "Je crée des"],
    "technology with": ["ikoranabuhanga rifite", "technologies utiles avec"],
    "clarity.": ["gusobanuka.", "clarté."],
    "purpose.": ["intego.", "objectif."],
    "impact.": ["akamaro.", "impact."],
    "precision.": ["ubusobanuro.", "précision."],
    "A Computer Science professional developing practical digital solutions while continuously learning and solving real problems.": [
      "Ndi umunyeshuri mu bumenyi bwa mudasobwa wubaka ibisubizo by’ikoranabuhanga bifatika, nkomeza kwiga no gukemura ibibazo nyakuri.",
      "Professionnel en informatique, je développe des solutions numériques pratiques tout en continuant à apprendre et à résoudre des problèmes concrets."
    ],
    "Focus Areas": ["Ibyo nibandaho", "Domaines d’intérêt"],
    "Software": ["Porogaramu", "Logiciel"],
    "IoT": ["IoT", "IoT"],
    "Web": ["Urubuga", "Web"],
    "Databases": ["Ububiko bw’amakuru", "Bases de données"],
    "Networking": ["Imiyoboro", "Réseaux"],
    "How I Work": ["Uko nkora", "Ma méthode"],
    "Learn": ["Kwiga", "Apprendre"],
    "Curiosity first": ["Banza ushishikazwe", "La curiosité d’abord"],
    "Build": ["Kubaka", "Construire"],
    "Hands-on practice": ["Kwitoza mu bikorwa", "La pratique avant tout"],
    "Solve": ["Gukemura", "Résoudre"],
    "Real problems": ["Ibibazo nyakuri", "Des problèmes concrets"],
    "Improve": ["Kunonosora", "Améliorer"],
    "Always iterating": ["Guhora nunguka ubunararibonye", "Toujours progresser"],
    "Education": ["Amashuri", "Formation"],
    "BSc Computer Science": ["Impamyabumenyi mu bumenyi bwa mudasobwa", "Licence en informatique"],
    "Focus": ["Icyo nibandaho", "Domaine"],
    "Human-centered tech": ["Ikoranabuhanga ryita ku bantu", "Technologie centrée sur l’humain"],
    "Software · IoT · Web": ["Porogaramu · IoT · Urubuga", "Logiciel · IoT · Web"],
    "Curious about technology.": ["Nkunda ikoranabuhanga.", "Curieux de technologie."],
    "Focused on making it useful.": ["Nibanda ku kurigira ingirakamaro.", "Je cherche à la rendre utile."],
    "I'm a motivated Computer Science student at the Catholic University of Rwanda, developing practical digital solutions while continuously learning and solving real problems.": [
      "Ndi umunyeshuri urangwa n’umwete mu bumenyi bwa mudasobwa muri Catholic University of Rwanda. Nteza imbere ibisubizo by’ikoranabuhanga bifatika, nkomeza kwiga no gukemura ibibazo nyakuri.",
      "Je suis un étudiant motivé en informatique à la Catholic University of Rwanda. Je développe des solutions numériques pratiques tout en continuant à apprendre et à résoudre des problèmes concrets."
    ],
    "My interests span software development, IoT, web development, databases and networking.": [
      "Nshishikazwa no guteza imbere porogaramu, IoT, imbuga za interineti, ububiko bw’amakuru n’imiyoboro.",
      "Mes centres d’intérêt comprennent le développement logiciel, l’IoT, le web, les bases de données et les réseaux."
    ],
    "I believe that good technology should be invisible — it should simply work, for the people who need it most. Every project I take on is guided by curiosity, practicality and a commitment to continuous improvement.": [
      "Nemera ko ikoranabuhanga ryiza ritagomba kugaragara cyane; rigomba gukora neza, rigafasha abarikeneye. Buri mushinga nkora uyoborwa n’amatsiko, akamaro no gukomeza kunoza ibyo nkora.",
      "Je pense qu’une bonne technologie doit se faire oublier : elle doit simplement fonctionner pour les personnes qui en ont le plus besoin. Chaque projet repose sur la curiosité, le pragmatisme et l’amélioration continue."
    ],
    "Interests": ["Ibyo nshishikazwa na byo", "Centres d’intérêt"],
    "Where my curiosity goes": ["Ibyo amatsiko yanjye yerekeza ho", "Ce qui éveille ma curiosité"],
    "Software development": ["Guteza imbere porogaramu", "Développement logiciel"],
    "Web development": ["Guteza imbere imbuga", "Développement web"],
    "My Approach": ["Uko mbigenza", "Mon approche"],
    "Learn → Build → Solve → Improve": ["Kwiga → Kubaka → Gukemura → Kunonosora", "Apprendre → Construire → Résoudre → Améliorer"],
    "Stay curious": ["Komeza kugira amatsiko", "Rester curieux"],
    "Make it real": ["Bishyire mu bikorwa", "Concrétiser"],
    "Fix real problems": ["Gukemura ibibazo nyakuri", "Résoudre des problèmes concrets"],
    "Iterate always": ["Komeza kunoza", "Toujours itérer"],
    "Human-centered, practical and continuously learning.": ["Ibyita ku bantu, bifatika kandi bikomeza kwiga.", "Centrée sur l’humain, pratique et en apprentissage continu."],
    "Where I learned": ["Aho nize", "Mon parcours de formation"],
    "Bachelor's Degree in Computer Science": ["Impamyabumenyi ihanitse mu bumenyi bwa mudasobwa", "Licence en informatique"],
    "A-Level & O-Level": ["Amashuri yisumbuye", "A-Level et O-Level"],
    "Human-centered": ["Ibyita ku bantu", "Centrée sur l’humain"],
    "Technology designed around people.": ["Ikoranabuhanga rigenewe abantu.", "Une technologie conçue pour les personnes."],
    "Practical": ["Ibifatika", "Pragmatique"],
    "Solutions that work in the real world.": ["Ibisubizo bikora mu buzima busanzwe.", "Des solutions adaptées au monde réel."],
    "Continuously learning": ["Gukomeza kwiga", "En apprentissage continu"],
    "Growing with every project.": ["Kwaguka muri buri mushinga.", "Progresser avec chaque projet."],
    "A practical technical foundation.": ["Ubumenyi ngiro mu ikoranabuhanga.", "Une base technique pratique."],
    "Seven areas I work in, from writing code to connecting physical systems.": ["Nkorera mu nzego ndwi, kuva ku kwandika porogaramu kugeza ku guhuza ibikoresho bifatika.", "J’interviens dans sept domaines, de la programmation à la connexion de systèmes physiques."],
    "Programming": ["Porogaramu", "Programmation"],
    "Programming languages & problem-solving across multiple paradigms.": ["Indimi za porogaramu no gukemura ibibazo hakoreshejwe uburyo butandukanye.", "Langages de programmation et résolution de problèmes selon plusieurs approches."],
    "Web Development": ["Guteza imbere imbuga", "Développement web"],
    "Functional, user-focused web experiences from front-end to back-end.": ["Imbuga zikora neza kandi zita ku bazikoresha, kuva ku ruhande rugaragara kugeza kuri seriveri.", "Des expériences web fonctionnelles et centrées sur l’utilisateur, du front-end au back-end."],
    "Database management & information systems design and optimisation.": ["Gucunga ububiko bw’amakuru no gutegura no kunoza sisitemu z’amakuru.", "Gestion de bases de données, conception et optimisation de systèmes d’information."],
    "Software Development": ["Guteza imbere porogaramu", "Développement logiciel"],
    "Practical, maintainable software solutions built to last.": ["Ibisubizo bya porogaramu bifatika, byoroshye kubungabunga kandi biramba.", "Des solutions logicielles pratiques, maintenables et durables."],
    "Network setup, configuration, troubleshooting & security basics.": ["Gushyiraho no gutunganya imiyoboro, gukemura ibibazo no kumenya iby’ibanze by’umutekano.", "Installation et configuration de réseaux, dépannage et bases de la sécurité."],
    "IoT & Emerging Tech": ["IoT n’ikoranabuhanga rishya", "IoT et technologies émergentes"],
    "Connected systems, embedded sensors and physical computing.": ["Sisitemu zihujwe, ibyuma byifashishwa bipima n’ikoranabuhanga rikorera ku bikoresho bifatika.", "Systèmes connectés, capteurs embarqués et informatique physique."],
    "Multimedia & Design": ["Multimediya n’igishushanyo", "Multimédia et design"],
    "Digital communication, UI design & visual creativity with Figma.": ["Itumanaho rya dijitali, igishushanyo cya UI no guhanga amashusho hakoreshejwe Figma.", "Communication numérique, conception d’interfaces et créativité visuelle avec Figma."],
    "Tech Stack": ["Ikoranabuhanga nkoresha", "Technologies utilisées"],
    "Always building. Always learning.": ["Guhora nubaka. Guhora niga.", "Toujours construire. Toujours apprendre."],
    "Interested in building useful software, web and connected-device solutions.": ["Nshishikajwe no kubaka porogaramu, imbuga n’ibisubizo by’ibikoresho bihujwe bifite akamaro.", "Je souhaite créer des logiciels, des sites web et des solutions connectées utiles."],
    "Let's talk": ["Tuganire", "Parlons-en"],
    "Selected work.": ["Imishinga natoranyije.", "Quelques réalisations."],
    "A selection of practical work in software, web development, IoT, databases and networking.": ["Imishinga ifatika mu porogaramu, imbuga, IoT, ububiko bw’amakuru n’imiyoboro.", "Une sélection de réalisations en logiciel, web, IoT, bases de données et réseaux."],
    "IoT · Hardware": ["IoT · Ibikoresho", "IoT · Matériel"],
    "Smart Sensor Network": ["Umuyoboro w’ibyuma by’ubwenge", "Réseau de capteurs intelligents"],
    "An IoT-based environmental monitoring system collecting temperature and humidity data via Arduino sensors, transmitting readings in real time for analysis.": ["Sisitemu ya IoT ikurikirana ibidukikije, ikusanya amakuru y’ubushyuhe n’ubukonje ikoresheje ibyuma bya Arduino, ikohereza ibipimo ako kanya kugira ngo bisuzumwe.", "Un système IoT de suivi environnemental qui collecte la température et l’humidité avec des capteurs Arduino et transmet les mesures en temps réel pour analyse."],
    "Web · Full-stack": ["Urubuga · Full-stack", "Web · Full-stack"],
    "Web Management System": ["Sisitemu yo gucunga imbuga", "Système de gestion web"],
    "A database-driven web application with a clean UI, full CRUD operations, role-based access control, and a responsive design built for real-world use.": ["Porogaramu y’urubuga ikoresha ububiko bw’amakuru, ifite UI yoroshye, ibikorwa byose byo kongeramo, gusoma, guhindura no gusiba amakuru, uburenganzira bushingiye ku nshingano n’imiterere ihuza n’ibikoresho bitandukanye.", "Une application web adossée à une base de données, avec une interface claire, les opérations CRUD, un contrôle d’accès par rôle et une conception adaptative pour un usage réel."],
    "DB · Backend": ["Ububiko bw’amakuru · Backend", "Base de données · Backend"],
    "Library Record System": ["Sisitemu y’inyandiko z’isomero", "Système de gestion de bibliothèque"],
    "A relational database-backed record management system for a school library, handling book cataloguing, borrowing history and student records efficiently.": ["Sisitemu y’isomero ishingiye ku bubiko bw’amakuru bufitanye isano, icunga neza urutonde rw’ibitabo, amateka yo kuguriza n’amakuru y’abanyeshuri.", "Un système de gestion pour une bibliothèque scolaire, fondé sur une base de données relationnelle et gérant efficacement le catalogue, les emprunts et les dossiers des élèves."],
    "Networking · Cisco": ["Imiyoboro · Cisco", "Réseaux · Cisco"],
    "Campus Network Design": ["Igishushanyo cy’umuyoboro wa kaminuza", "Conception d’un réseau de campus"],
    "A simulated campus network topology using Cisco Packet Tracer — VLANs, routing protocols, subnetting and basic security configuration.": ["Igishushanyo cy’umuyoboro wa kaminuza cyageragejwe muri Cisco Packet Tracer, kirimo VLAN, uburyo bwo kohereza amakuru hagati y’imiyoboro, kugabanya subnet n’ibanze mu mutekano.", "Une topologie de réseau de campus simulée avec Cisco Packet Tracer : VLAN, protocoles de routage, sous-réseaux et configuration de sécurité de base."],
    "UI/UX · Figma": ["UI/UX · Figma", "UI/UX · Figma"],
    "Portfolio UI Design": ["Igishushanyo cya UI cy’urubuga rwanjye", "Design UI du portfolio"],
    "Full Figma design system for this portfolio — components, typography, colour tokens, responsive grid and interactive prototypes across all 7 pages.": ["Sisitemu yuzuye y’igishushanyo cya Figma y’uru rubuga: ibice, inyuguti, amabara, imiterere ihuza n’ibikoresho bitandukanye n’inyandiko-ngero zikorana ku mapaji yose uko ari 7.", "Système de design Figma complet pour ce portfolio : composants, typographie, couleurs, grille adaptative et prototypes interactifs sur les sept pages."],
    "Responsibility beyond the classroom.": ["Inshingano zirenze ishuri.", "Des responsabilités au-delà des cours."],
    "Real-world responsibilities that shaped discipline, organisation and a service mindset.": ["Inshingano zo mu buzima busanzwe zanyigishije ikinyabupfura, gahunda no gufasha abandi.", "Des responsabilités concrètes qui ont développé ma discipline, mon organisation et mon sens du service."],
    "2022 · 1 YEAR": ["2022 · UMwaka 1", "2022 · 1 AN"],
    "2022 · 1 year": ["2022 · Umwaka 1", "2022 · 1 an"],
    "Librarian": ["Umukozi w’isomero", "Bibliothécaire"],
    "Supporting students and managing library resources.": ["Gufasha abanyeshuri no gucunga ibikoresho by’isomero.", "Accompagner les élèves et gérer les ressources de la bibliothèque."],
    "What I Did": ["Ibyo nakoze", "Mes missions"],
    "Organised library resources, supported students in finding materials, maintained accurate records, and developed strong skills in communication, organisation, teamwork, responsibility, time-management, and customer service.": ["Natunganije ibikoresho by’isomero, mfasha abanyeshuri kubona ibyo bashaka, mbika inyandiko zinoze kandi nunguka ubumenyi mu itumanaho, gahunda, gukorera hamwe, inshingano, gucunga igihe no gufasha abakiliya.", "J’ai organisé les ressources de la bibliothèque, aidé les élèves à trouver des documents, tenu des registres précis et renforcé mes compétences en communication, organisation, travail d’équipe, responsabilité, gestion du temps et service client."],
    "Communication": ["Itumanaho", "Communication"],
    "Organisation": ["Gahunda", "Organisation"],
    "Teamwork": ["Gukorera hamwe", "Travail d’équipe"],
    "Responsibility": ["Inshingano", "Responsabilité"],
    "Time management": ["Gucunga igihe", "Gestion du temps"],
    "Customer service": ["Gufasha abakiliya", "Service client"],
    "Professional Focus": ["Icyo nibandaho mu kazi", "Domaines professionnels"],
    "Practical digital solutions": ["Ibisubizo bya dijitali bifatika", "Solutions numériques pratiques"],
    "Connected physical systems": ["Sisitemu z’ibikoresho bihujwe", "Systèmes physiques connectés"],
    "Accessible digital experiences": ["Dijitali yoroshye kugera ho", "Expériences numériques accessibles"],
    "Journey": ["Urugendo", "Parcours"],
    "Secondary School — Petit Séminaire Saint Aloys Cyangugu": ["Amashuri yisumbuye — Petit Séminaire Saint Aloys Cyangugu", "Études secondaires — Petit Séminaire Saint Aloys Cyangugu"],
    "Completed O-Level and A-Level studies": ["Narize icyiciro cya O-Level na A-Level", "Études de niveau O-Level et A-Level terminées"],
    "Librarian — G.S.S. Bonaventure": ["Umukozi w’isomero — G.S.S. Bonaventure", "Bibliothécaire — G.S.S. Bonaventure"],
    "First professional role, developing interpersonal and organisational skills": ["Akazi kanjye ka mbere, nunguka ubumenyi bwo gukorana n’abandi no gutunganya imirimo.", "Premier poste professionnel, avec le développement de compétences relationnelles et organisationnelles."],
    "2022 – Present": ["2022 – Ubu", "2022 – Aujourd’hui"],
    "BSc Computer Science — Catholic University of Rwanda": ["Impamyabumenyi mu bumenyi bwa mudasobwa — Catholic University of Rwanda", "Licence en informatique — Catholic University of Rwanda"],
    "Building practical skills in software, IoT, web, databases and networking": ["Nunguka ubumenyi ngiro mu porogaramu, IoT, imbuga, ububiko bw’amakuru n’imiyoboro.", "Développement de compétences pratiques en logiciel, IoT, web, bases de données et réseaux."],
    "Now": ["Ubu", "Aujourd’hui"],
    "Open to Opportunities": ["Niteguye kubona amahirwe", "Ouvert aux opportunités"],
    "Internships, collaborations and real-world projects": ["Imenyerezamwuga, ubufatanye n’imishinga nyakuri", "Stages, collaborations et projets concrets"],
    "Local roots.": ["Aho mva.", "Des racines locales."],
    "Global curiosity.": ["Amatsiko ku isi.", "Une curiosité mondiale."],
    "Rwanda is my foundation; the wider world is my classroom.": ["U Rwanda ni rwo shingiro ryanjye; isi yose ni ishuri ryanjye.", "Le Rwanda est mon ancrage ; le monde est ma salle de classe."],
    "Africa": ["Afurika", "Afrique"],
    "Community, resilience, local innovation": ["Abaturage, kwihangana n’udushya tw’aho", "Communauté, résilience et innovation locale"],
    "Europe": ["Uburayi", "Europe"],
    "Research, design, digital infrastructure": ["Ubushakashatsi, igishushanyo n’ibikorwaremezo bya dijitali", "Recherche, design et infrastructure numérique"],
    "Asia": ["Aziya", "Asie"],
    "Scale, experimentation, transformation": ["Kwaguka, kugerageza no guhinduka", "Échelle, expérimentation et transformation"],
    "Americas": ["Amerika", "Amériques"],
    "Innovation, startups, open-source culture": ["Udushya, ibigo bishya n’umuco wa porogaramu ifunguye", "Innovation, startups et culture open source"],
    "Different perspectives": ["Ibitekerezo bitandukanye", "Des perspectives différentes"],
    "shared possibilities.": ["amahirwe dusangiye.", "des possibilités communes."],
    "Let's create": ["Dukore", "Créons"],
    "something": ["ikintu", "quelque chose"],
    "meaningful": ["gifite akamaro", "qui a du sens"],
    "Open to opportunities, collaborations, internships, and conversations. Whether you have a project idea or just want to connect — reach out.": [
      "Niteguye kwakira amahirwe, ubufatanye, imenyerezamwuga n’ibiganiro. Niba ufite igitekerezo cy’umushinga cyangwa ushaka kuvugana nanjye, nyandikira.",
      "Ouvert aux opportunités, collaborations, stages et échanges. Vous avez une idée de projet ou souhaitez simplement discuter ? Contactez-moi."
    ],
    "Open To": ["Niteguye", "Ouvert à"],
    "Opportunities": ["Amahirwe", "Opportunités"],
    "Collaborations": ["Ubufatanye", "Collaborations"],
    "Internships": ["Imenyerezamwuga", "Stages"],
    "Conversations": ["Ibiganiro", "Échanges"],
    "Send an email": ["Ohereza imeri", "Envoyer un e-mail"],
    "Call": ["Hamagara", "Appeler"],
    "Send a message": ["Ohereza ubutumwa", "Envoyer un message"],
    "Contact Details": ["Amakuru yo kunyandikira", "Coordonnées"],
    "Get in touch": ["Vugana nanjye", "Me contacter"],
    "Email": ["Imeri", "E-mail"],
    "Phone": ["Telefoni", "Téléphone"],
    "Profile": ["Umwirondoro", "Profil"],
    "Location": ["Aho ndi", "Localisation"],
    "Back to contact details": ["Subira ku makuru yo kunyandikira", "Retour aux coordonnées"],
    "Send me a": ["Nyandikira", "Envoyez-moi un"],
    "message": ["ubutumwa", "message"],
    "Share a few details below and I’ll get back to you as soon as I can.": ["Tanga amakuru make hepfo, nanjye nzasubiza vuba bishoboka.", "Indiquez quelques détails ci-dessous et je vous répondrai dès que possible."],
    "Your message": ["Ubutumwa bwawe", "Votre message"],
    "Name *": ["Amazina *", "Nom *"],
    "Email *": ["Imeri *", "E-mail *"],
    "Subject": ["Umutwe", "Objet"],
    "Message *": ["Ubutumwa *", "Message *"],
    "Your name": ["Amazina yawe", "Votre nom"],
    "What's it about?": ["Birebana n’iki?", "De quoi s’agit-il ?"],
    "Tell me about your project or opportunity…": ["Mbwira iby’umushinga wawe cyangwa amahirwe ufite…", "Parlez-moi de votre projet ou de l’opportunité…"],
    "Send message": ["Ohereza ubutumwa", "Envoyer le message"],
    "Please fill in your name, a valid email, and message.": ["Uzuza amazina yawe, imeri yemewe n’ubutumwa.", "Veuillez indiquer votre nom, une adresse e-mail valide et un message."],
    "Please enter a valid email address.": ["Andika aderesi ya imeri yemewe.", "Veuillez saisir une adresse e-mail valide."],
    "The contact form is not connected yet. Please email me directly.": ["Ifishi yohererezamo ubutumwa ntirahuye na sisitemu. Nyandikira kuri imeri.", "Le formulaire n’est pas encore connecté. Veuillez m’écrire directement par e-mail."],
    "Message sent! I’ll get back to you soon.": ["Ubutumwa bwoherejwe! Ndakugarukira vuba.", "Message envoyé ! Je vous répondrai bientôt."],
    "Your message could not be sent. Please try again or email me directly.": ["Ubutumwa bwawe ntibwoherejwe. Ongera ugerageze cyangwa unyandikire kuri imeri.", "Votre message n’a pas pu être envoyé. Réessayez ou écrivez-moi directement par e-mail."],
    "Sending…": ["Birimo koherezwa…", "Envoi en cours…"],
    "Back to top": ["Subira hejuru", "Retour en haut"],
    "Portrait of Cesar Tuyisenge": ["Ifoto ya Cesar Tuyisenge", "Portrait de Cesar Tuyisenge"],
    "Animated globe": ["Isi izenguruka", "Globe animé"],
    "Instagram profile": ["Umwirondoro wa Instagram", "Profil Instagram"],
    "Computer Scientist · Rwanda": ["Impuguke mu bumenyi bwa mudasobwa · Rwanda", "Informaticien · Rwanda"],
    "Practical software, web, IoT and database solutions.": ["Ibisubizo bifatika muri porogaramu, imbuga, IoT n’ububiko bw’amakuru.", "Des solutions pratiques en logiciel, web, IoT et bases de données."],
    "Expertise": ["Ubumenyi", "Expertise"],
    "IoT & Embedded Systems": ["IoT na sisitemu zishyirwa mu bikoresho", "IoT et systèmes embarqués"],
    "Databases & SQL": ["Ububiko bw’amakuru na SQL", "Bases de données et SQL"],
    "Networking & Cisco": ["Imiyoboro na Cisco", "Réseaux et Cisco"],
    "UI/UX Design": ["Igishushanyo cya UI/UX", "Design UI/UX"],
    "Navigation": ["Ibikubiyemo", "Navigation"],
    "Get In Touch": ["Twandikire", "Me contacter"],
    "Open to Internships & Collaborations": ["Niteguye imenyerezamwuga n’ubufatanye", "Ouvert aux stages et collaborations"],
    "Cesar Tuyisenge. All rights reserved.": ["Cesar Tuyisenge. Uburenganzira bwose burabitswe.", "Cesar Tuyisenge. Tous droits réservés."],
    "Based in Kigali, Rwanda": ["Mba i Kigali, mu Rwanda", "Basé à Kigali, au Rwanda"],
    "About · Cesar Tuyisenge": ["Ibyerekeye Cesar Tuyisenge", "À propos · Cesar Tuyisenge"],
    "Capabilities · Cesar Tuyisenge": ["Ubushobozi · Cesar Tuyisenge", "Compétences · Cesar Tuyisenge"],
    "Projects · Cesar Tuyisenge": ["Imishinga · Cesar Tuyisenge", "Projets · Cesar Tuyisenge"],
    "Experience · Cesar Tuyisenge": ["Uburambe · Cesar Tuyisenge", "Expérience · Cesar Tuyisenge"],
    "Global · Cesar Tuyisenge": ["Isi yose · Cesar Tuyisenge", "International · Cesar Tuyisenge"],
    "Contact · Cesar Tuyisenge": ["Twandikire · Cesar Tuyisenge", "Contact · Cesar Tuyisenge"],
    "Send a Message · Cesar Tuyisenge": ["Ohereza ubutumwa · Cesar Tuyisenge", "Envoyer un message · Cesar Tuyisenge"],
    "Cesar Tuyisenge · Computer Scientist": ["Cesar Tuyisenge · Impuguke mu bumenyi bwa mudasobwa", "Cesar Tuyisenge · Informaticien"],
    "Cesar Tuyisenge – Computer Scientist from Rwanda building practical digital solutions.": [
      "Cesar Tuyisenge ni impuguke mu bumenyi bwa mudasobwa ukomoka mu Rwanda, wubaka ibisubizo bifatika bya dijitali.",
      "Cesar Tuyisenge, informaticien rwandais, crée des solutions numériques pratiques."
    ],
    "About Cesar Tuyisenge – background, education, values and approach to technology.": [
      "Menya amateka, amashuri, indangagaciro n’uko Cesar Tuyisenge abona ikoranabuhanga.",
      "Découvrez le parcours, la formation, les valeurs et l’approche technologique de Cesar Tuyisenge."
    ],
    "Core technical capabilities in programming, web development, databases, IoT and networking.": [
      "Ubumenyi mu gutegura porogaramu, guteza imbere imbuga, ububiko bw’amakuru, IoT n’imiyoboro.",
      "Compétences techniques en programmation, développement web, bases de données, IoT et réseaux."
    ],
    "Selected software, web, IoT, database and networking projects by Cesar Tuyisenge.": [
      "Imishinga ya Cesar Tuyisenge muri porogaramu, imbuga, IoT, ububiko bw’amakuru n’imiyoboro.",
      "Projets de Cesar Tuyisenge en logiciel, web, IoT, bases de données et réseaux."
    ],
    "Work experience, professional focus and career timeline of Cesar Tuyisenge.": [
      "Uburambe mu kazi, ibyo Cesar Tuyisenge yibandaho n’urugendo rwe rw’umwuga.",
      "Expérience professionnelle, domaines d’intérêt et parcours de Cesar Tuyisenge."
    ],
    "Global perspective of Cesar Tuyisenge – local roots and worldwide curiosity.": [
      "Uko Cesar Tuyisenge abona isi, ashingiye ku Rwanda kandi ashishikajwe n’ibibera hirya no hino.",
      "Le regard de Cesar Tuyisenge sur le monde, entre ancrage local et curiosité internationale."
    ],
    "Get in touch with Cesar Tuyisenge – open to opportunities, collaborations and internships.": [
      "Vugana na Cesar Tuyisenge, witeguye amahirwe, ubufatanye n’imenyerezamwuga.",
      "Contactez Cesar Tuyisenge, ouvert aux opportunités, collaborations et stages."
    ],
    "Send a message to Cesar Tuyisenge about opportunities, collaborations, or projects.": [
      "Ohereza Cesar Tuyisenge ubutumwa ku mahirwe, ubufatanye cyangwa imishinga.",
      "Écrivez à Cesar Tuyisenge au sujet d’opportunités, de collaborations ou de projets."
    ]
  };

  const supportedLanguages = ["en", "rw", "fr"];
  const textOriginals = new WeakMap();
  const attributeOriginals = new WeakMap();
  const titleOriginal = document.title;
  const descriptionMeta = document.querySelector('meta[name="description"]');
  const descriptionOriginal = descriptionMeta ? descriptionMeta.content : "";

  function readPreference(key, fallback) {
    try {
      const value = window.localStorage.getItem(key);
      return value || fallback;
    } catch (error) {
      console.error("Unable to read a saved portfolio setting.", error);
      return fallback;
    }
  }

  function savePreference(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      console.error("Unable to save a portfolio setting.", error);
    }
  }

  function translate(source, language) {
    if (language === "en") return source;
    const entry = translations[source];
    if (!entry) return source;
    return language === "rw" ? entry[0] : entry[1];
  }

  const savedLanguage = readPreference("portfolio-language", "en");
  let currentLanguage = supportedLanguages.includes(savedLanguage) ? savedLanguage : "en";
  let currentTheme = readPreference("portfolio-theme", "light") === "dark" ? "dark" : "light";

  window.portfolioTranslate = function (source) {
    return translate(source, currentLanguage);
  };

  function translateAttributes(root) {
    const attributes = ["aria-label", "placeholder", "title", "alt"];
    root.querySelectorAll("*").forEach(function (element) {
      let originals = attributeOriginals.get(element);
      if (!originals) {
        originals = {};
        attributeOriginals.set(element, originals);
      }
      attributes.forEach(function (attribute) {
        if (!element.hasAttribute(attribute)) return;
        if (!(attribute in originals)) originals[attribute] = element.getAttribute(attribute);
        element.setAttribute(attribute, translate(originals[attribute], currentLanguage));
      });
    });
  }

  function applyLanguage(language) {
    currentLanguage = language;
    document.documentElement.lang = language;

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (!textOriginals.has(node)) textOriginals.set(node, node.nodeValue);
      const original = textOriginals.get(node);
      const source = original.trim().replace(/\s+/g, " ");
      if (!source) continue;
      const leading = original.match(/^\s*/)[0];
      const trailing = original.match(/\s*$/)[0];
      node.nodeValue = leading + translate(source, language) + trailing;
    }

    translateAttributes(document.body);
    document.title = translate(titleOriginal, language);
    if (descriptionMeta) descriptionMeta.content = translate(descriptionOriginal, language);

    const languageSelect = document.getElementById("siteLanguage");
    if (languageSelect) languageSelect.value = language;

    document.dispatchEvent(new CustomEvent("portfolio-language-change", {
      detail: { language: language }
    }));
  }

  function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.dataset.theme = theme;
    const themeToggle = document.getElementById("darkModeToggle");
    if (themeToggle) themeToggle.checked = theme === "dark";
  }

  function createSettings() {
    const navbar = document.querySelector(".navbar .container");
    if (!navbar) return;

    const toggle = document.createElement("button");
    toggle.className = "settings-toggle";
    toggle.type = "button";
    toggle.setAttribute("aria-label", "Settings");
    toggle.setAttribute("aria-controls", "siteSettings");
    toggle.setAttribute("aria-expanded", "false");
    toggle.innerHTML = '<i class="fa-solid fa-gear" aria-hidden="true"></i><span>Settings</span>';

    const panel = document.createElement("section");
    panel.className = "settings-panel";
    panel.id = "siteSettings";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-modal", "false");
    panel.setAttribute("aria-labelledby", "settingsTitle");
    panel.hidden = true;
    panel.innerHTML = [
      '<h2 class="settings-title" id="settingsTitle">Settings</h2>',
      '<label class="settings-label" for="siteLanguage">Language</label>',
      '<select class="settings-select" id="siteLanguage" aria-label="Language">',
      '<option value="en">English</option>',
      '<option value="rw">Kinyarwanda</option>',
      '<option value="fr">Français</option>',
      '</select>',
      '<label class="settings-theme" for="darkModeToggle">',
      '<span>Dark mode</span>',
      '<input type="checkbox" id="darkModeToggle" role="switch" aria-label="Dark mode">',
      '<span class="settings-switch" aria-hidden="true"><span></span></span>',
      '</label>'
    ].join("");

    const navActions = document.createElement("div");
    navActions.className = "nav-actions";
    const contactLink = navbar.querySelector(".nav-cta");
    if (contactLink) navActions.appendChild(contactLink);
    navActions.appendChild(toggle);

    const hamburger = navbar.querySelector(".hamburger");
    if (hamburger) navbar.insertBefore(navActions, hamburger);
    else navbar.appendChild(navActions);
    document.body.appendChild(panel);

    function setOpen(open) {
      panel.hidden = !open;
      toggle.setAttribute("aria-expanded", String(open));
    }

    toggle.addEventListener("click", function () {
      setOpen(panel.hidden);
    });
    document.addEventListener("click", function (event) {
      if (!panel.contains(event.target) && !toggle.contains(event.target)) setOpen(false);
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !panel.hidden) {
        setOpen(false);
        toggle.focus();
      }
    });

    panel.querySelector("#siteLanguage").addEventListener("change", function (event) {
      const language = event.target.value;
      if (!supportedLanguages.includes(language)) return;
      savePreference("portfolio-language", language);
      applyLanguage(language);
    });
    panel.querySelector("#darkModeToggle").addEventListener("change", function (event) {
      const theme = event.target.checked ? "dark" : "light";
      savePreference("portfolio-theme", theme);
      applyTheme(theme);
    });
  }

  createSettings();
  applyTheme(currentTheme);
  applyLanguage(currentLanguage);
})();
