// Données des flashcards organisées par catégories
const flashcardCategories = {
    "🎯 Présentation & Motivation": [
    {
        question: "🎯 Présentation personnelle",
        answer: "Bonjour, je m'appelle <strong>Ilyès</strong>, je suis <strong>ingénieur en informatique</strong> diplômé de l'<strong>ESIEE Paris</strong>.\n\n" +
                "J'ai effectué mes trois années d'apprentissage chez <strong>BNP Paribas</strong>, où j'ai travaillé sur des projets variés allant du <strong>développement web</strong> à l'<strong>automatisation</strong> et à la <strong>gestion de projet</strong>. Cette expérience m'a permis de développer de solides <strong>compétences techniques</strong>, mais aussi de découvrir l'<strong>aspect fonctionnel</strong>, en participant à la compréhension et la formalisation des besoins des utilisateurs, ainsi qu'à la <strong>coordination avec différentes équipes</strong>.\n\n" +
                
                "J'ai ensuite mené une <strong>mission freelance de trois mois chez ID²</strong>, où j'ai optimisé les performances d'un site web. Cette expérience m'a appris à travailler de façon <strong>autonome et orientée résultats</strong>.\n\n" +
                
                "En parallèle de mes études, j'ai mené un <strong>projet entrepreneurial</strong> en créant une plateforme e-commerce, ce qui m'a apporté une solide expérience dans la <strong>gestion intégrale d'un projet</strong> et l'<strong>expérience client</strong>.\n\n" +
                
                "En troisième année, j'ai également effectué un semestre en <strong>Malaisie à Heriot-Watt University</strong> où j'ai étudié le <strong>leadership</strong> et la <strong>conduite du changement</strong>.\n\n" +
                
                "Enfin, j'ai récemment passé <strong>5 mois au Laos</strong> comme professeur d'anglais bénévole dans des villages ruraux. C'était une aventure humaine très forte qui m'a beaucoup appris sur l'<strong>écoute</strong>, la <strong>patience</strong> et l'<strong>adaptabilité</strong>.\n\n" +
                
                "Aujourd'hui, je souhaite mettre à profit mon <strong>bagage technique</strong> et mes <strong>expériences</strong> dans un rôle mêlant <strong>innovation</strong> et <strong>accompagnement client</strong>, ce qui correspond parfaitement à <strong>MC2I</strong>."
    },
    {
        question: "🇲🇾 Études Malaisie - Leadership",
        answer: "On y a étudié plusieurs modules comme l'<strong>analyse stratégique</strong>, la <strong>conduite du changement</strong>, " +
                "la <strong>gestion d'équipe</strong>, et la <strong>gestion de projet</strong> dans un contexte international.\n\n" +
                
                "Par exemple, j'ai appris à utiliser des outils comme l'<strong>analyse SWOT</strong>, le <strong>modèle PESTEL</strong> " +
                "ou les <strong>matrices de priorisation</strong> pour cadrer un projet. On a aussi beaucoup travaillé sur des " +
                "<strong>études de cas concrètes</strong>, en <strong>groupe multiculturel</strong>, ce qui m'a appris à collaborer " +
                "avec des profils très différents, dans un environnement <strong>100% en anglais</strong>.\n\n" +
                
                "Cette approche plus <strong>business</strong> m'a vraiment aidé à prendre du recul. Quand je suis revenu en France, " +
                "je l'ai appliquée sur le projet fullstack que j'ai piloté : j'ai structuré le travail avec une vraie <strong>roadmap</strong>, " +
                "identifié les <strong>risques</strong> à l'avance, et j'ai été plus à l'aise dans la <strong>communication</strong> " +
                "avec les utilisateurs pour bien comprendre leurs besoins et adapter l'outil.\n\n" +
                
                "On a également appris que le <strong>leadership</strong> ne se résume pas à manager une équipe, mais plutôt à savoir " +
                "<strong>influencer</strong>, <strong>motiver</strong> et faire avancer un projet, même sans autorité directe.\n\n" +
                
                "On a vu plusieurs <strong>styles de leadership</strong> et on a beaucoup travaillé sur la <strong>communication</strong>, " +
                "l'<strong>écoute</strong>, et la <strong>gestion des dynamiques de groupe</strong>.\n\n" +
                
                "Ça m'a beaucoup aidé à <strong>structurer mes projets</strong> ensuite, à mieux <strong>collaborer</strong> " +
                "avec les équipes techniques et à m'impliquer davantage dans la <strong>coordination</strong> et la <strong>prise d'initiatives</strong>."
    },
    {
        question: "🎯 Pourquoi le consulting ?",
        answer: "👉 Le consulting, c'est la possibilité d'<strong>apprendre en permanence</strong>, de <strong>changer de secteur</strong>, de <strong>relever des défis différents</strong> tout en gardant un fil conducteur : <strong>accompagner les clients dans leurs transformations</strong>. Ce qui m'attire, c'est cette <strong>variété de missions</strong> et le fait d'avoir un <strong>réel impact</strong>."
    },
    {
        question: "🎯 Pourquoi le rôle de consultant AMOA chez MC2I ?",
        answer: "👉 Parce que le rôle de <strong>consultant AMOA</strong> me permet d'être au <strong>cœur de la relation client</strong>, de <strong>comprendre les besoins</strong>, de <strong>cadrer les projets</strong> et d'<strong>accompagner le changement</strong>. C'est exactement ce que j'aime : <strong>mêler écoute, analyse et pilotage de projets</strong>. Avec <strong>MC2I</strong>, j'aurai la chance de travailler sur des <strong>projets variés et stratégiques</strong>, dans des <strong>secteurs qui ont un vrai impact</strong>.\n\n" +
                "Exactement ce que j'ai expérimenté lors de la création de ma <strong>plateforme e-commerce</strong>.\n\n" +
                "J'ai géré le projet de bout en bout : de la <strong>conception du site</strong> à l'<strong>acquisition client</strong>, la <strong>publicité</strong> et la <strong>relation client</strong>. Cette expérience m'a permis de comprendre l'importance d'<strong>analyser les besoins</strong>, de <strong>proposer des solutions adaptées</strong> et de <strong>suivre leur mise en œuvre</strong>.\n\n" +
                "Aujourd'hui, je souhaite mettre à profit mon <strong>bagage technique</strong> et mes <strong>expériences</strong> dans un rôle où je pourrai accompagner les clients dans la <strong>définition de leurs besoins</strong> et la <strong>réussite de leurs projets</strong>. C'est exactement ce que propose MC2I."
    },
    {
        question: "🔍 Différence AMOA et AMOE ?",
        answer: "👉 <strong>AMOA (Assistance à Maîtrise d'Ouvrage)</strong> :\n\n" +
                "• <strong>Rôle</strong> : Représente les utilisateurs finaux et les métiers\n" +
                "• <strong>Missions</strong> : Définir les besoins, valider les solutions, accompagner le changement\n" +
                "• <strong>Focus</strong> : Aspect fonctionnel et organisationnel\n" +
                "• <strong>Position</strong> : Côté client, interface entre métier et technique\n\n" +
                "👉 <strong>AMOE (Assistance à Maîtrise d'Œuvre)</strong> :\n\n" +
                "• <strong>Rôle</strong> : Représente l'équipe technique de réalisation\n" +
                "• <strong>Missions</strong> : Concevoir, développer, tester les solutions techniques\n" +
                "• <strong>Focus</strong> : Aspect technique et méthodologique\n" +
                "• <strong>Position</strong> : Côté prestataire, responsable de la réalisation\n\n" +
                "En résumé : <strong>AMOA = besoins métier</strong> vs <strong>AMOE = solutions techniques</strong>"
    },
    {
        question: "🎯 Compréhension du poste chez MC2I",
        answer: "Le rôle proposé chez <strong>MC2I</strong> nécessite une <strong>combinaison de compétences analytiques et techniques</strong> pour aider les clients à naviguer leur <strong>transformation digitale</strong>. En tant que <strong>consultant</strong>, je serais amené à <strong>analyser et concevoir des solutions</strong> qui répondent aux <strong>défis uniques de chaque client</strong>, tout en travaillant en <strong>étroite collaboration avec des équipes multidisciplinaires</strong>.\n\n" +
                "Ce poste utilise pleinement mes <strong>compétences en gestion de projet</strong> et en <strong>analyse de systèmes</strong>, tout en me permettant de <strong>développer des solutions innovantes</strong> qui répondent aux <strong>exigences complexes des projets chez MC2I</strong>."
    },
    {
        question: "🎯 Qu'est-ce que je peux apporter au poste ?",
        answer: "Je peux apporter à ce poste ma <strong>double compétence technique et fonctionnelle</strong>, ma <strong>capacité à piloter des projets</strong> et à <strong>coordonner des équipes</strong>, ainsi qu'une <strong>vraie sensibilité aux besoins des utilisateurs</strong>. Mes <strong>expériences variées</strong> m'ont aussi appris à <strong>m'adapter rapidement à différents secteurs</strong> et à <strong>proposer des solutions efficaces et innovantes</strong>."
    }
],
    "🏢 MC2I": [
    {
        question: "🏢 C'est quoi MC2I ?",
        answer: "👉 <strong>MC2I</strong> est un <strong>cabinet de conseil indépendant</strong>, spécialisé dans la <strong>transformation digitale</strong> et le <strong>management</strong>, fondé en <strong>1989</strong>. Il accompagne aussi bien des <strong>grandes entreprises</strong> que des <strong>administrations publiques</strong>, dans des secteurs variés comme la <strong>banque</strong>, la <strong>santé</strong>, le <strong>transport</strong>, l'<strong>énergie</strong> et les <strong>RH</strong>. Leur slogan est <strong>\"Human first, digital explorer\"</strong>, ce qui reflète leur double orientation : <strong>mettre l'humain au centre</strong> tout en <strong>explorant l'innovation technologique</strong>."
    },
    {
        question: "🏢 Pourquoi MC2I plutôt qu'un autre cabinet ?",
        answer: "Ce qui m'attire chez <strong>MC2I</strong>, c'est vraiment sa <strong>culture et son approche humaine</strong>. Le cabinet est reconnu pour son <strong>excellence</strong> : <strong>3ᵉ au palmarès Great Place to Work 2025</strong> et <strong>1ᵉʳ au palmarès Happy Trainees 2025</strong> (pour te rappeler, ça montre que c'est un <strong>super endroit où travailler et se former</strong>).\n\n" +
                "Le <strong>management est très proche des équipes</strong>, avec environ <strong>1 manager pour 5 consultants</strong>, et chaque consultant est <strong>accompagné pour construire sa carrière</strong>, profiter des <strong>formations</strong> et participer aux <strong>centres d'expertise</strong>.\n\n" +
                "En plus, <strong>MC2I encourage le bénévolat</strong> auprès d'associations pendant les <strong>intercontrats</strong>, ce qui reflète ses <strong>valeurs humaines</strong> et l'importance donnée à l'<strong>impact positif</strong>.\n\n" +
                "C'est ce <strong>mélange d'excellence professionnelle et de valeurs humaines</strong> qui me correspond parfaitement."
    },
    {
        question: "🎯 Enjeux MC2I",
        answer: "Les enjeux pour <strong>MC2I</strong> sont d'<strong>accompagner les clients dans leur transformation digitale</strong> tout en s'assurant que les <strong>solutions mises en place répondent aux besoins réels des utilisateurs</strong>. Cela inclut la <strong>gestion de projet</strong>, la <strong>coordination entre équipes fonctionnelles et techniques</strong>, et l'<strong>accompagnement du changement</strong> pour que les utilisateurs adoptent efficacement les nouveaux outils.\n\n" +
                "Chez <strong>MC2I</strong>, on travaille avec différents types de clients selon les secteurs : <strong>institutions publiques</strong>, <strong>banques</strong>, <strong>assurances</strong>, <strong>santé</strong>, <strong>énergie</strong>, <strong>transport</strong>… Et en interne, le <strong>consultant AMOA</strong> collabore étroitement avec les <strong>équipes AMOE</strong>, les <strong>chefs de projet</strong>, les <strong>responsables métier</strong> et les <strong>utilisateurs finaux</strong> pour garantir le succès des projets."
    }
],
    "🏥 Secteurs d'Intérêt": [
    {
        question: "🏥 Pourquoi le domaine de la santé ?",
        answer: "Mon expérience au <strong>Laos</strong>, où j'ai travaillé comme professeur bénévole dans des villages ruraux, m'a appris que le fait d'<strong>aider les gens</strong> fait véritablement partie de moi. Cela m'a sensibilisé à la <strong>dimension humaine</strong> et à l'importance d'<strong>améliorer les services</strong> pour les communautés."
    },
    {
        question: "🚗 Pourquoi le domaine du transport ?",
        answer: "Le secteur <strong>Transport</strong> m'intéresse chez MC2I car il représente un <strong>enjeu stratégique</strong> pour la mobilité et l'organisation des flux, avec un <strong>impact direct sur le quotidien</strong> des citoyens et des entreprises. Participer à des projets qui <strong>optimisent ces systèmes</strong> et <strong>améliorent l'efficacité des services</strong> correspond parfaitement à mon intérêt pour les <strong>transformations numériques à fort impact</strong>."
    },
    {
        question: "🏦 Pourquoi le domaine de la banque ?",
        answer: "Ayant effectué <strong>trois années d'apprentissage chez BNP Paribas</strong>, j'ai déjà une <strong>expérience concrète dans le secteur bancaire</strong>. J'ai travaillé sur le <strong>développement d'outils internes</strong> et l'<strong>automatisation de processus</strong>, ce qui m'a permis de comprendre les besoins des institutions financières et l'importance de la <strong>sécurité</strong>, de l'<strong>efficacité</strong> et de la <strong>conformité</strong>."
    }
],
    "💪 Compétences & Qualités": [
    {
        question: "💪 Forces / Faiblesses",
        answer: "Je dirais que mes trois principaux points forts sont :\n\n1. <strong>Autonomie</strong> – Je suis capable de mener un projet de bout en bout, comme je l'ai fait chez BNP Paribas pour l'outil interne fullstack. Je prends des <strong>initiatives</strong> et je m'organise pour avancer sans qu'on ait à me surveiller constamment.\n\n2. <strong>Adaptabilité</strong> – J'ai travaillé dans des environnements très différents : en banque, en Asie, dans une start-up personnelle, puis au Laos en tant que bénévole. Je m'adapte vite à de nouvelles <strong>cultures</strong>, <strong>méthodes de travail</strong> et <strong>interlocuteurs</strong>.\n\n3. <strong>Capacité à vulgariser et communiquer</strong> – J'arrive à faire le lien entre des aspects très techniques et des interlocuteurs non-techniques, ce qui est utile pour gérer un projet et <strong>rassurer les parties prenantes</strong>.\n\nUn axe d'amélioration pour moi, ce serait que parfois je me plonge très vite dans l'<strong>aspect technique</strong> d'un problème, parce que c'est ce que je maîtrise le mieux. Mais j'ai appris, notamment grâce à mon semestre à Heriot-Watt, à toujours commencer par bien poser le <strong>cadre</strong>, comprendre les <strong>objectifs business</strong> et les <strong>attentes des parties prenantes</strong>.\n\nJe fais de plus en plus l'effort de prendre ce <strong>recul</strong>, surtout en gestion de projet."
    },
    {
        question: "🎖️ Pourquoi vous choisir",
        answer: "Vous devriez me choisir parce que je combine à la fois un <strong>solide bagage technique</strong> et une <strong>expérience concrète en gestion de projet</strong>. Chez <strong>BNP Paribas</strong>, j'ai développé des applications web fullstack, mis en place des solutions <strong>DevOps</strong> et piloté des projets de bout en bout, ce qui est directement applicable aux <strong>missions de conseil et développement</strong> chez MC2I.\n\n" +
                "Je possède également des qualités essentielles pour ce rôle : <strong>rigueur</strong>, <strong>autonomie</strong>, <strong>capacité d'adaptation</strong> et <strong>sens de l'analyse</strong>. Mes expériences internationales en <strong>Malaisie</strong> et au <strong>Laos</strong> m'ont appris à m'intégrer rapidement dans de nouveaux environnements et à travailler avec des équipes <strong>multiculturelles</strong>.\n\n" +
                "Enfin, je suis particulièrement motivé par ce poste parce qu'il me permet de combiner mes <strong>compétences techniques</strong> et mon intérêt pour l'<strong>accompagnement client</strong>, tout en évoluant dans un environnement stimulant comme celui de <strong>MC2I</strong>."
    },
    {
        question: "🏆 Plus grande réussite",
        answer: "Ma plus grande fierté, c'est la <strong>livraison autonome</strong> d'un outil fullstack <strong>Angular/Spring Boot</strong> chez BNP Paribas : de la <strong>conception de l'API REST</strong> au développement du frontend, jusqu'à la rédaction de la <strong>roadmap</strong>, les <strong>tests</strong> et le <strong>déploiement en production</strong> dans les délais impartis."
    }
    ],
    "👨‍💼 Gestion de Projet": [
    {
        question: "📊 Connaissez-vous Power BI ?",
        answer: "Oui, j'ai déjà utilisé <strong>Power BI</strong> pour créer quelques dashboards simples à partir de différentes sources de données. J'ai pu connecter des fichiers <strong>Excel</strong> et des bases <strong>SQL</strong>, créer des <strong>visualisations interactives</strong> et suivre des <strong>indicateurs clés</strong>. Je suis à l'aise avec l'outil et motivé pour approfondir rapidement mes compétences afin de réaliser des dashboards plus complexes et adaptés aux besoins de l'équipe."
    },
    {
        question: "📊 Pouvez-vous créer un dashboard pour suivre des indicateurs ?",
        answer: "Absolument. J'ai déjà créé des dashboards pour suivre l'<strong>avancement de projets</strong> et des <strong>métriques techniques</strong>. Je sais structurer les données, choisir les bonnes <strong>visualisations</strong> et mettre à jour les rapports pour qu'ils soient facilement exploitables par les équipes. Je peux adapter ces compétences pour répondre aux besoins spécifiques de la <strong>compliance</strong>."
    },
    {
        question: "🔒 Comment garantir la qualité et la fiabilité des données ?",
        answer: "Pour garantir la qualité et la fiabilité des données, je procède toujours en plusieurs étapes.\n\n" +
                "D'abord, je m'assure que les données collectées proviennent de <strong>sources fiables</strong> et que leur format est <strong>cohérent</strong>. Ensuite, je les nettoie et les prépare : je supprime les <strong>doublons</strong>, corrige les <strong>erreurs</strong> et complète les informations <strong>manquantes</strong>.\n\n" +
                "Ensuite, je mets en place des <strong>contrôles réguliers</strong> pour détecter les anomalies, par exemple des indicateurs de suivi ou des <strong>alertes automatiques</strong>. Dans mes projets chez BNP Paribas, j'ai souvent vérifié que les données extraites de bases <strong>SQL</strong> et utilisées pour des dashboards étaient <strong>complètes et correctes</strong> avant diffusion aux équipes.\n\n" +
                "Enfin, je <strong>documente</strong> toutes les étapes et les transformations effectuées, pour assurer la <strong>traçabilité</strong> et permettre aux autres membres de l'équipe de vérifier ou reproduire les analyses.\n\n" +
                "Cette approche garantit que les <strong>décisions</strong> prises sur la base de ces données sont <strong>fiables et sécurisées</strong>."
    },
    {
        question: "⚠️ Comment identifieriez-vous des risques techniques dans un projet ?",
        answer: "Pour identifier des risques techniques dans un projet, je commencerais par analyser l'<strong>architecture existante</strong> et les <strong>contraintes techniques</strong> du client.\n\n" +
                "Ensuite, je passerais en revue les composants techniques pour détecter les points de vulnérabilité potentiels : <strong>performance</strong>, <strong>sécurité</strong>, <strong>scalabilité</strong>, <strong>maintenabilité</strong>, <strong>intégration</strong>, etc.\n\n" +
                "Je mettrais en place des <strong>tests de charge</strong> et des <strong>audits de sécurité</strong> pour évaluer les risques. Par exemple, dans mes projets précédents, j'ai analysé les <strong>goulots d'étranglement</strong> des applications et proposé des optimisations pour améliorer les performances.\n\n" +
                "Enfin, j'assurerais une <strong>communication régulière</strong> avec l'équipe technique du client pour signaler les risques détectés et proposer des <strong>solutions préventives</strong>, afin de garantir la réussite du projet."
    },
    {
        question: "📋 Connaissez-vous les concepts de base de l'architecture IT ?",
        answer: "Oui, je connais les concepts de base de l'<strong>architecture IT</strong>.\n\n" +
                "L'architecture IT consiste à concevoir et organiser les <strong>systèmes d'information</strong> d'une entreprise pour qu'ils soient <strong>performants</strong>, <strong>évolutifs</strong> et <strong>maintenables</strong>. Cela inclut notamment la <strong>modélisation des données</strong>, l'<strong>architecture applicative</strong>, la <strong>sécurité des systèmes</strong>, la <strong>gestion des performances</strong> et l'<strong>intégration des services</strong>.\n\n" +
                "Dans un contexte de conseil, cela signifie analyser l'existant, identifier les <strong>points d'amélioration</strong> et proposer des <strong>solutions techniques</strong> adaptées aux besoins métier du client.\n\n" +
                "L'objectif final est d'<strong>optimiser les performances</strong>, <strong>réduire les coûts</strong> et <strong>améliorer l'expérience utilisateur</strong>, tout en garantissant une <strong>évolutivité</strong> et une <strong>maintenabilité</strong> optimales des systèmes."
    },
    {
        question: "🔐 Comment géreriez-vous des données sensibles ou personnelles ?",
        answer: "Pour gérer des données sensibles ou personnelles dans un projet, je procède toujours de manière méthodique pour garantir la <strong>sécurité</strong> et la <strong>conformité</strong>.\n\n" +
                "Tout d'abord, je m'assure que seules les <strong>personnes autorisées</strong> ont accès aux données, en mettant en place des <strong>contrôles d'accès</strong> et des permissions adaptées.\n\n" +
                "Ensuite, je veille à la <strong>protection et l'anonymisation</strong> des données lorsque cela est nécessaire, par exemple en masquant ou en pseudonymisant les informations personnelles.\n\n" +
                "Je mets également en place des processus de <strong>traçabilité</strong>, pour pouvoir suivre qui accède aux données et quelles <strong>modifications</strong> sont effectuées.\n\n" +
                "Enfin, je m'assure que les pratiques respectent les <strong>réglementations en vigueur</strong>, comme le RGPD, et je <strong>documente</strong> toutes les étapes pour garantir la conformité et faciliter les audits.\n\n" +
                "Dans mes projets précédents, j'ai appliqué ces principes pour les données clients internes et externes, assurant ainsi la <strong>fiabilité et la sécurité</strong> des informations utilisées pour les analyses et dashboards."
    },
    {
        question: "📈 Comment rester à jour sur les évolutions réglementaires ?",
        answer: "Pour rester à jour sur les évolutions réglementaires et les risques, je combine plusieurs approches.\n\n" +
                "Tout d'abord, je fais régulièrement de la <strong>veille réglementaire</strong>, en consultant les publications officielles, les newsletters spécialisées et les mises à jour des organismes de régulation.\n\n" +
                "Ensuite, je participe aux <strong>sessions de formation interne</strong> et aux échanges avec les équipes compliance pour comprendre comment ces changements impactent nos projets et nos pratiques.\n\n" +
                "Je mets également en place des <strong>alertes et suivis automatisés</strong> dans les outils que j'utilise pour les projets, afin d'être informé rapidement de toute évolution pouvant affecter les données ou les processus.\n\n" +
                "Enfin, je <strong>documente et partage</strong> ces informations avec l'équipe pour garantir que tous les membres restent alignés et que les projets respectent en permanence les <strong>normes et réglementations</strong> en vigueur."
    },
    {
        question: "🔄 Différence AMOA et AMOE",
        answer: "<strong>AMOA (Assistance à Maîtrise d'Ouvrage)</strong> :\n\n" +
                "Le consultant AMOA travaille du <strong>côté du client</strong>, pas du côté technique.\n\n" +
                "Il <strong>recueille les besoins</strong>, <strong>analyse les processus existants</strong> et <strong>définit ce que le projet doit accomplir</strong>.\n\n" +
                "Il pilote le projet fonctionnellement : <strong>rédaction de cahiers des charges</strong>, <strong>suivi du planning</strong>, <strong>coordination avec les équipes</strong>, <strong>conduite du changement</strong> (formation, communication).\n\n" +
                "Exemple : si une banque veut un nouvel outil pour gérer les comptes clients, l'AMOA décrit ce que doit faire l'outil, s'assure que ça correspond aux besoins des utilisateurs et guide le projet côté client.\n\n" +
                "<strong>AMOE (Assistance à Maîtrise d'Œuvre)</strong> :\n\n" +
                "Le consultant AMOE travaille <strong>côté technique</strong>, du côté de la <strong>mise en œuvre</strong>.\n\n" +
                "Il <strong>transforme les besoins</strong> définis par l'AMOA en <strong>solutions concrètes</strong> : <strong>architecture technique</strong>, <strong>développement</strong>, <strong>intégration</strong>, <strong>tests</strong>.\n\n" +
                "Il s'assure que la solution <strong>fonctionne correctement</strong> et qu'elle correspond aux spécifications.\n\n" +
                "Exemple : avec le même outil bancaire, l'AMOE développe le logiciel, configure les bases de données et s'assure que tout fonctionne selon le cahier des charges fourni par l'AMOA."
    }
    ],
    "🔧 Expériences Techniques": [
    {
        question: "🔧 Résolution problème technique",
        answer: "Lors de mon expérience chez <strong>BNP Paribas</strong>, j'ai travaillé sur une application de gestion de l'<strong>obsolescence des serveurs</strong>. Un jour, nous avons constaté une <strong>défaillance critique</strong> : l'application ne remontait plus correctement les données d'inventaire.\n\nJ'ai d'abord analysé les <strong>logs</strong> pour isoler l'origine du problème. Après investigation, il s'est avéré que l'<strong>API externe</strong> que nous consommions avait changé de format de réponse.\n\nJ'ai alors mis à jour notre code pour parser le nouveau <strong>format JSON</strong>, et ajouté des <strong>vérifications automatiques</strong> dans notre pipeline <strong>CI/CD</strong> pour anticiper ce type de changement.\n\nGrâce à cette intervention rapide, le service a pu être <strong>rétabli dans la journée</strong>, et des actions préventives ont été mises en place pour éviter que cela ne se reproduise."
    },
    {
        question: "⏱️ Gestion pression & délais",
        answer: "J'ai appris à gérer la pression en gardant une <strong>vision claire des priorités</strong>. Lors d'un projet avec des deadlines très serrées chez BNP, j'ai organisé le travail en <strong>sprints courts</strong> avec des objectifs hebdomadaires.\n\nJ'ai utilisé <strong>Jira</strong> pour suivre l'avancement, et je faisais des <strong>points réguliers</strong> avec l'équipe pour identifier les blocages le plus tôt possible.\n\nEn contexte international, la clé est aussi de bien gérer les <strong>fuseaux horaires</strong> et d'anticiper les décalages dans la communication. J'accorde une grande importance à la <strong>transparence</strong> vis-à-vis des parties prenantes, surtout en cas de retard potentiel."
    }
    ],
    "👥 Relations & Management": [
    {
        question: "🌍 Relations clients internationaux",
        answer: "Mon échange universitaire en <strong>Malaisie</strong> et mon bénévolat au <strong>Laos</strong> m'ont beaucoup appris sur l'importance de l'<strong>écoute active</strong> et de l'<strong>adaptation culturelle</strong>.\n\nDans un cadre professionnel, j'essaie toujours de <strong>clarifier les attentes</strong> dès le départ, en reformulant les demandes si besoin, et en utilisant un <strong>vocabulaire simple et universel</strong>, surtout en anglais.\n\nJe prends aussi le temps de comprendre le <strong>style de communication</strong> du client (plutôt direct ou indirect), et je m'assure que tous les échanges soient <strong>documentés</strong> pour éviter les malentendus.\n\nMon objectif est toujours de créer une <strong>relation de confiance</strong>, basée sur le respect et la clarté."
    },
    {
        question: "👥 Équipe pluridisciplinaire",
        answer: "Pendant ma dernière année d'alternance, j'ai été <strong>chef de projet</strong> pour une application web chez BNP. Le projet impliquait plusieurs profils : <strong>développeurs backend</strong>, <strong>frontend</strong>, <strong>administrateurs système</strong> et <strong>référents sécurité</strong>.\n\nJ'ai d'abord réuni les <strong>besoins métiers</strong>, puis je les ai découpés en <strong>tâches techniques</strong> selon les expertises nécessaires. J'ai organisé les échanges via des <strong>réunions courtes et régulières</strong>, et utilisé <strong>Jira</strong> pour assurer la visibilité sur l'avancement.\n\nEn tant que développeur moi-même, j'avais une bonne compréhension des <strong>contraintes de chaque rôle</strong>, ce qui m'a permis de coordonner efficacement sans imposer de solutions non réalistes.\n\nRésultat : le projet a été <strong>livré dans les temps</strong>, avec une bonne cohésion d'équipe."
    },
    {
        question: "⚖️ Gestion conflits équipe",
        answer: "Lorsqu'un désaccord survient, je commence toujours par <strong>écouter les deux parties</strong> sans jugement. Très souvent, les conflits viennent de <strong>malentendus</strong> ou de contraintes non exprimées.\n\nUne fois les causes identifiées, j'essaie de <strong>recentrer la discussion</strong> sur l'objectif commun : livrer un projet de qualité.\n\nPar exemple, dans un projet, un développeur et un testeur n'étaient pas d'accord sur le périmètre des <strong>tests automatisés</strong>. J'ai organisé une <strong>réunion courte</strong> pour clarifier les responsabilités de chacun et définir ensemble un compromis.\n\nAu final, le simple fait d'avoir pris le temps de parler a permis de <strong>désamorcer la tension</strong> rapidement."
    }
    ]
};

// Données des mises en situation
const situations = [
    {
        question: "😨 Violation de données critique détectée",
        answer: "Dès que je reçois l'<strong>alerte</strong>, j'évalue d'abord l'<strong>étendue et l'impact</strong> de la violation. J'active immédiatement le <strong>plan de réponse aux incidents</strong> et je notifie l'<strong>équipe compliance</strong> et le <strong>délégué à la protection des données</strong>.\n\nJe isole ensuite les systèmes affectés et je conduis une <strong>analyse forensique</strong> pour identifier la source de la violation. Je documente toutes les actions entreprises et j'implémente des <strong>mesures de sécurité immédiates</strong> pour prévenir toute exposition supplémentaire des données.\n\nEn parallèle, je prépare la <strong>notification réglementaire</strong> si nécessaire et je communique de manière transparente avec les parties prenantes sur le <strong>statut de l'incident</strong> et le <strong>délai de récupération</strong>."
    },
    {
        question: "🏃‍♂️ Nouvelle exigence client en cours de projet",
        answer: "J'accueille la nouvelle exigence en conduisant une <strong>évaluation d'impact technique</strong> pour comprendre comment elle affecte notre projet en cours. Je rassemble l'<strong>équipe technique</strong> et les <strong>architectes</strong> pour évaluer l'<strong>effort de développement</strong> et l'<strong>impact sur le planning</strong>.\n\nJe présente ensuite au client les <strong>options techniques mises à jour</strong> et le planning de projet révisé. Je m'assure que toutes les nouvelles exigences sont correctement <strong>documentées et validées</strong> avant de procéder.\n\nDès approbation, je mets à jour immédiatement le <strong>périmètre du projet</strong> et j'engage l'équipe pour implémenter les <strong>nouvelles fonctionnalités</strong>."
    },
    {
        question: "🐛 Problèmes de performance de l'application en production",
        answer: "J'organise une <strong>enquête immédiate</strong> pour identifier la cause racine des problèmes de performance. J'analyse l'<strong>architecture de l'application</strong> et les <strong>métriques de performance</strong> pour localiser où le problème s'est produit.\n\nJe mets ensuite en place des <strong>correctifs immédiats</strong> pour restaurer les performances et j'installe un <strong>monitoring supplémentaire</strong> pour prévenir la récurrence. Je documente tous les changements et je mets à jour les <strong>procédures de monitoring</strong>.\n\nEnfin, je conduis une <strong>revue post-incident</strong> pour améliorer nos contrôles de performance et prévenir des problèmes similaires à l'avenir."
    },
    {
        question: "🔄 Migration de données vers un nouveau système",
        answer: "Je commence par examiner l'<strong>architecture du système source</strong> et les <strong>exigences du système cible</strong>. J'évalue si nous avons les <strong>outils de migration</strong> et les <strong>procédures de validation</strong> adéquates en place.\n\nSi des lacunes techniques sont identifiées, je travaille avec l'<strong>équipe technique</strong> pour implémenter les <strong>scripts de migration</strong> ou <strong>outils de transformation</strong> nécessaires. Je m'assure que toutes les migrations sont correctement <strong>testées et validées</strong>.\n\nEn parallèle, je mets à jour nos <strong>procédures de migration</strong> et je fournis une formation aux équipes sur les <strong>bonnes pratiques de migration de données</strong>."
    },
    {
        question: "🌌 Échéance de livraison approche - Pression temporelle",
        answer: "J'ai un <strong>système de suivi de projet</strong> qui suit les échéances à venir. Quand une échéance approche, j'évalue immédiatement notre <strong>statut d'avancement</strong> et j'identifie tout <strong>retard ou risque</strong>.\n\nJe priorise ensuite les actions basées sur l'<strong>impact client</strong> et la <strong>complexité technique</strong>. Je travaille étroitement avec l'<strong>équipe technique</strong> pour m'assurer que toutes les fonctionnalités sont livrées à temps.\n\nJe maintiens une <strong>communication régulière</strong> avec le client sur nos progrès et tout défi potentiel, m'assurant que nous respectons toutes les <strong>échéances de livraison</strong>."
    },
    {
        question: "💰 Contraintes budgétaires projet - Priorisation des fonctionnalités",
        answer: "J'organise une réunion avec le <strong>client</strong> et l'<strong>équipe technique</strong> pour évaluer l'état actuel du projet et identifier les <strong>fonctionnalités prioritaires</strong>. Je priorise les développements basés sur l'<strong>impact métier</strong> et la <strong>complexité technique</strong>.\n\nJe propose ensuite une <strong>approche de développement par phases</strong> qui traite d'abord les fonctionnalités les plus critiques tout en restant dans les contraintes budgétaires. Je m'assure que toutes les <strong>fonctionnalités essentielles</strong> sont implémentées.\n\nEnfin, je documente notre <strong>stratégie de développement</strong> et je révise régulièrement nos progrès pour m'assurer que nous livrons la <strong>valeur attendue</strong> malgré les limitations budgétaires."
    }
];

// Traductions anglaises organisées par catégories
const flashcardCategoriesEN = {
    "🎯 Présentation & Motivation": [
    {
        question: "🎯 Présentation personnelle",
        answer: "Hello, my name is <strong>Ilyès</strong>, I'm a <strong>computer science engineer</strong> graduated from <strong>ESIEE Paris</strong>.\n\n" +
                "I completed my three-year apprenticeship at <strong>BNP Paribas</strong>, where I worked on various projects ranging from <strong>web development</strong> to <strong>automation</strong> and <strong>project management</strong>. This experience allowed me to develop solid <strong>technical skills</strong>, but also to discover the <strong>functional aspect</strong>, by participating in understanding and formalizing user needs, as well as <strong>coordinating with different teams</strong>.\n\n" +
                
                "I then led a <strong>three-month freelance mission at ID²</strong>, where I optimized the performance of a website. This experience taught me to work in an <strong>autonomous and results-oriented</strong> way.\n\n" +
                
                "In parallel, I led an <strong>entrepreneurial project</strong> by creating an e-commerce platform, which gave me solid experience in <strong>integral project management</strong> and <strong>customer experience</strong>.\n\n" +
                
                "In my third year, I also spent a semester in <strong>Malaysia at Heriot-Watt University</strong> where I studied <strong>leadership</strong> and <strong>change management</strong>.\n\n" +
                
                "Finally, I recently spent <strong>5 months in Laos</strong> as a volunteer English teacher in rural villages. It was a very meaningful human experience that taught me a lot about <strong>listening</strong>, <strong>patience</strong> and <strong>adaptability</strong>.\n\n" +
                
                "Today, I want to leverage my <strong>technical background</strong> and my <strong>experiences</strong> in a role combining <strong>innovation</strong> and <strong>client support</strong>, which perfectly matches <strong>MC2I</strong>."
    },
    {
        question: "🇲🇾 Études Malaisie - Leadership",
        answer: "We studied several modules like <strong>strategic analysis</strong>, <strong>change management</strong>, " +
                "<strong>team management</strong>, and <strong>project management</strong> in an international context.\n\n" +
                
                "For example, I learned to use tools like <strong>SWOT analysis</strong>, the <strong>PESTEL model</strong> " +
                "or <strong>prioritization matrices</strong> to structure a project. We also worked a lot on " +
                "<strong>real case studies</strong>, in <strong>multicultural groups</strong>, which taught me to work " +
                "with very different people, in a <strong>100% English environment</strong>.\n\n" +
                
                "This more <strong>business-oriented</strong> approach really helped me step back. When I returned to France, " +
                "I applied it to the fullstack project I led: I structured the work with a proper <strong>roadmap</strong>, " +
                "identified <strong>risks</strong> early, and was more comfortable in <strong>communication</strong> " +
                "with users to understand their needs and adapt the tool.\n\n" +
                
                "We also learned that <strong>leadership</strong> is not just about managing a team, but rather knowing how to " +
                "<strong>influence</strong>, <strong>motivate</strong> and move a project forward, even without direct authority.\n\n" +
                
                "We saw several <strong>leadership styles</strong> and worked a lot on <strong>communication</strong>, " +
                "<strong>listening</strong>, and <strong>group dynamics management</strong>.\n\n" +
                
                "This helped me a lot to <strong>structure my projects</strong> afterwards, to better <strong>collaborate</strong> " +
                "with technical teams and to get more involved in <strong>coordination</strong> and <strong>taking initiative</strong>."
    },
    {
        question: "🎯 Why consulting?",
        answer: "👉 Consulting offers the possibility to <strong>learn continuously</strong>, to <strong>change sectors</strong>, to <strong>tackle different challenges</strong> while maintaining a common thread: <strong>supporting clients in their transformations</strong>. What attracts me is this <strong>variety of missions</strong> and the fact of having a <strong>real impact</strong>."
    },
    {
        question: "🎯 Why the AMOA consultant role at MC2I?",
        answer: "👉 Because the <strong>AMOA consultant</strong> role allows me to be at the <strong>heart of client relations</strong>, to <strong>understand needs</strong>, to <strong>frame projects</strong> and to <strong>support change</strong>. This is exactly what I like: <strong>combining listening, analysis and project management</strong>. With <strong>MC2I</strong>, I will have the chance to work on <strong>varied and strategic projects</strong>, in <strong>sectors that have real impact</strong>.\n\n" +
                "Exactly what I experienced when creating my <strong>e-commerce platform</strong>.\n\n" +
                "I managed the project from start to finish: from <strong>site design</strong> to <strong>customer acquisition</strong>, <strong>advertising</strong> and <strong>customer relations</strong>. This experience taught me the importance of <strong>analyzing needs</strong>, <strong>proposing adapted solutions</strong> and <strong>following their implementation</strong>.\n\n" +
                "Today, I want to leverage my <strong>technical background</strong> and <strong>experiences</strong> in a role where I can support clients in <strong>defining their needs</strong> and <strong>ensuring the success of their projects</strong>. This is exactly what MC2I offers."
    },
    {
        question: "🔍 Difference between AMOA and AMOE?",
        answer: "👉 <strong>AMOA (Assistance à Maîtrise d'Ouvrage)</strong> :\n\n" +
                "• <strong>Role</strong> : Represents end users and business functions\n" +
                "• <strong>Missions</strong> : Define needs, validate solutions, support change\n" +
                "• <strong>Focus</strong> : Functional and organizational aspect\n" +
                "• <strong>Position</strong> : Client side, interface between business and technical\n\n" +
                "👉 <strong>AMOE (Assistance à Maîtrise d'Œuvre)</strong> :\n\n" +
                "• <strong>Role</strong> : Represents the technical implementation team\n" +
                "• <strong>Missions</strong> : Design, develop, test technical solutions\n" +
                "• <strong>Focus</strong> : Technical and methodological aspect\n" +
                "• <strong>Position</strong> : Service provider side, responsible for implementation\n\n" +
                "In summary: <strong>AMOA = business needs</strong> vs <strong>AMOE = technical solutions</strong>"
    },
    {
        question: "🎯 Understanding the role at MC2I",
        answer: "The role proposed at <strong>MC2I</strong> requires a <strong>combination of analytical and technical skills</strong> to help clients navigate their <strong>digital transformation</strong>. As a <strong>consultant</strong>, I would be called upon to <strong>analyze and design solutions</strong> that address the <strong>unique challenges of each client</strong>, while working in <strong>close collaboration with multidisciplinary teams</strong>.\n\n" +
                "This position fully utilizes my <strong>project management skills</strong> and <strong>systems analysis</strong>, while allowing me to <strong>develop innovative solutions</strong> that meet the <strong>complex requirements of projects at MC2I</strong>."
    },
    {
        question: "🎯 What can I bring to the position?",
        answer: "I can bring to this position my <strong>dual technical and functional expertise</strong>, my <strong>ability to manage projects</strong> and <strong>coordinate teams</strong>, as well as a <strong>genuine sensitivity to user needs</strong>. My <strong>varied experiences</strong> have also taught me to <strong>adapt quickly to different sectors</strong> and to <strong>propose effective and innovative solutions</strong>."
    }
],
    "🏢 MC2I": [
    {
        question: "🏢 What is MC2I?",
        answer: "👉 <strong>MC2I</strong> is an <strong>independent consulting firm</strong>, specialized in <strong>digital transformation</strong> and <strong>management</strong>, founded in <strong>1989</strong>. It supports both <strong>large companies</strong> and <strong>public administrations</strong>, in various sectors such as <strong>banking</strong>, <strong>healthcare</strong>, <strong>transport</strong>, <strong>energy</strong> and <strong>HR</strong>. Their slogan is <strong>\"Human first, digital explorer\"</strong>, which reflects their dual orientation: <strong>putting people at the center</strong> while <strong>exploring technological innovation</strong>."
    },
    {
        question: "🏢 Why MC2I rather than another firm?",
        answer: "What attracts me to <strong>MC2I</strong> is really its <strong>culture and human approach</strong>. The firm is recognized for its <strong>excellence</strong>: <strong>3rd in the Great Place to Work 2025 ranking</strong> and <strong>1st in the Happy Trainees 2025 ranking</strong> (to remind you, this shows it's a <strong>great place to work and train</strong>).\n\n" +
                "The <strong>management is very close to teams</strong>, with about <strong>1 manager for 5 consultants</strong>, and each consultant is <strong>supported to build their career</strong>, benefit from <strong>training</strong> and participate in <strong>expertise centers</strong>.\n\n" +
                "In addition, <strong>MC2I encourages volunteering</strong> with associations during <strong>inter-contracts</strong>, which reflects its <strong>human values</strong> and the importance given to <strong>positive impact</strong>.\n\n" +
                "It's this <strong>blend of professional excellence and human values</strong> that perfectly matches me."
    },
    {
        question: "🎯 MC2I Challenges",
        answer: "The challenges for <strong>MC2I</strong> are to <strong>support clients in their digital transformation</strong> while ensuring that <strong>implemented solutions meet the real needs of users</strong>. This includes <strong>project management</strong>, <strong>coordination between functional and technical teams</strong>, and <strong>change management</strong> so that users effectively adopt new tools.\n\n" +
                "At <strong>MC2I</strong>, we work with different types of clients across sectors: <strong>public institutions</strong>, <strong>banks</strong>, <strong>insurance companies</strong>, <strong>healthcare</strong>, <strong>energy</strong>, <strong>transport</strong>… And internally, the <strong>AMOA consultant</strong> works closely with <strong>AMOE teams</strong>, <strong>project managers</strong>, <strong>business stakeholders</strong> and <strong>end users</strong> to ensure project success."
    }
],
    "🏥 Secteurs d'Intérêt": [
    {
        question: "🏥 Pourquoi le domaine de la santé ?",
        answer: "My experience in <strong>Laos</strong>, where I worked as a volunteer teacher in rural villages, taught me that <strong>helping people</strong> is truly part of me. This sensitized me to the <strong>human dimension</strong> and the importance of <strong>improving services</strong> for communities."
    },
    {
        question: "🚗 Pourquoi le domaine du transport ?",
        answer: "The <strong>Transport</strong> sector interests me at MC2I because it represents a <strong>strategic challenge</strong> for mobility and flow organization, with a <strong>direct impact on daily life</strong> of citizens and businesses. Participating in projects that <strong>optimize these systems</strong> and <strong>improve service efficiency</strong> perfectly matches my interest in <strong>high-impact digital transformations</strong>."
    },
    {
        question: "🏦 Pourquoi le domaine de la banque ?",
        answer: "Having completed <strong>three years of apprenticeship at BNP Paribas</strong>, I already have <strong>concrete experience in the banking sector</strong>. I worked on <strong>internal tool development</strong> and <strong>process automation</strong>, which allowed me to understand the needs of financial institutions and the importance of <strong>security</strong>, <strong>efficiency</strong> and <strong>compliance</strong>."
    }
],
    "💪 Compétences & Qualités": [
    {
        question: "💪 Forces / Faiblesses",
        answer: "I would say my three main strengths are:\n\n" +
                
                "1. <strong>Independence</strong> – I can lead a project from start to finish, as I did at BNP Paribas " +
                "for the internal fullstack tool. I take <strong>initiative</strong> and organize myself to move forward " +
                "without needing constant supervision.\n\n" +
                
                "2. <strong>Adaptability</strong> – I've worked in very different environments: in banking, in Asia, " +
                "in a personal startup, then in Laos as a volunteer. I quickly adapt to new <strong>cultures</strong>, " +
                "<strong>working methods</strong> and <strong>people</strong>.\n\n" +
                
                "3. <strong>Communication skills</strong> – I can bridge technical aspects with non-technical people, " +
                "which is useful for managing a project and <strong>reassuring stakeholders</strong>.\n\n" +
                
                "An area for improvement would be that sometimes I jump too quickly into the <strong>technical side</strong> " +
                "of a problem, because that's what I know best. But I've learned, especially thanks to my semester " +
                "at Heriot-Watt, to always start by setting the <strong>framework</strong>, understanding " +
                "<strong>business objectives</strong> and <strong>stakeholder expectations</strong>.\n\n" +
                
                "I'm increasingly making the effort to take this <strong>step back</strong>, especially in project management.\n\n" +
                
                "2. <strong>Learning and expertise</strong>\n" +
                "Data & Digital Compliance is a rapidly evolving field at the intersection of <strong>technology</strong> and <strong>regulation</strong>. I see this VIE as an opportunity to acquire highly sought-after expertise on topics like <strong>AI</strong>, <strong>cloud computing</strong>, or <strong>data protection</strong>, while working alongside international experts and managers.\n\n" +
                
                "3. <strong>International experience and Hong Kong</strong>\n" +
                "I already have experience in Asia, in <strong>Malaysia</strong> and <strong>Laos</strong>, which taught me a lot about <strong>cultural and professional adaptation</strong>. Joining a financial and technological hub like <strong>Hong Kong</strong> would be a logical continuation, and an excellent way to develop a <strong>global vision of compliance</strong> in a banking context.\n\n" +
                
                "In summary, this position represents for me the ideal combination of my <strong>technical skills</strong>, my <strong>growing interest in compliance</strong>, and my <strong>international openness</strong>."
    },
    {
        question: "🏢 MC2I - Présentation",
        answer: "<strong>MC2I</strong> is an IT consulting and services company, specialized in <strong>digital transformation</strong> and <strong>IT systems consulting</strong>.\n\n" +
                "The company stands out for its expertise in several areas:\n\n" +
                "<strong>Digital transformation consulting</strong> and <strong>IT architecture</strong>,\n\n" +
                "<strong>Application development</strong> and <strong>business solutions</strong>,\n\n" +
                "and <strong>infrastructure services</strong> and <strong>IT security</strong>.\n\n" +
                "MC2I positions itself as a trusted partner for companies wishing to <strong>modernize their information systems</strong> and <strong>optimize their processes</strong>.\n\n" +
                "The company places great importance on <strong>technological innovation</strong> and <strong>service quality</strong>, offering tailor-made solutions adapted to the specific needs of each client.\n\n" +
                "It's a company that combines <strong>technical expertise</strong> and <strong>consulting approach</strong>, making it an attractive player in the French IT ecosystem."
    },
    {
        question: "📋 En quoi consiste ce poste",
        answer: "This position involves ensuring compliance with <strong>regulations</strong> and <strong>internal policies</strong> of the bank, particularly in terms of <strong>compliance</strong>, <strong>anti-money laundering</strong> and <strong>counter-terrorism financing</strong>.\n\n" +
                "It involves participating in the <strong>analysis and monitoring of operations</strong>, contributing to the implementation of <strong>controls</strong>, and reporting any <strong>risks or anomalies</strong> detected.\n\n" +
                "It also includes an advisory and awareness-raising role with operational teams, to ensure that <strong>procedures</strong> are well understood and respected.\n\n" +
                "In summary, this position aims to <strong>protect the bank</strong> against non-compliance risks, to <strong>strengthen the trust</strong> of clients and regulatory authorities, and to contribute to the <strong>solidity of the financial system</strong>."
    }
    ],
    "💪 Compétences & Qualités": [
    {
        question: "💪 Forces / Faiblesses",
        answer: "I would say my three main strengths are:\n\n" +
                
                "1. <strong>Independence</strong> – I can lead a project from start to finish, as I did at BNP Paribas " +
                "for the internal fullstack tool. I take <strong>initiative</strong> and organize myself to move forward " +
                "without needing constant supervision.\n\n" +
                
                "2. <strong>Adaptability</strong> – I've worked in very different environments: in banking, in Asia, " +
                "in a personal startup, then in Laos as a volunteer. I quickly adapt to new <strong>cultures</strong>, " +
                "<strong>working methods</strong> and <strong>people</strong>.\n\n" +
                
                "3. <strong>Communication skills</strong> – I can bridge technical aspects with non-technical people, " +
                "which is useful for managing a project and <strong>reassuring stakeholders</strong>.\n\n" +
                
                "An area for improvement would be that sometimes I jump too quickly into the <strong>technical side</strong> " +
                "of a problem, because that's what I know best. But I've learned, especially thanks to my semester " +
                "at Heriot-Watt, to always start by setting the <strong>framework</strong>, understanding " +
                "<strong>business objectives</strong> and <strong>stakeholder expectations</strong>.\n\n" +
                
                "I'm increasingly making the effort to take this <strong>step back</strong>, especially in project management."
    },
    {
        question: "🎖️ Pourquoi vous choisir",
        answer: "You should choose me because I combine both a <strong>solid technical background</strong> and <strong>concrete experience in banking</strong>. At <strong>BNP Paribas</strong>, I developed fullstack web applications, implemented <strong>DevOps</strong> solutions and worked on projects involving <strong>data management and analysis</strong>, which is directly applicable to this <strong>Data & Digital Compliance</strong> position.\n\n" +
                "I also possess essential qualities for this role: <strong>rigor</strong>, <strong>independence</strong>, <strong>adaptability</strong> and <strong>analytical thinking</strong>. My international experiences in <strong>Malaysia</strong> and <strong>Laos</strong> taught me to integrate quickly into new environments and work with <strong>multicultural teams</strong>.\n\n" +
                "Finally, I'm particularly motivated by this position because it allows me to combine my <strong>technical skills</strong> and my interest in <strong>compliance and regulation</strong>, while evolving in an exciting international context like <strong>Société Générale in Hong Kong</strong>."
    },
    {
        question: "🏆 Plus grande réussite",
        answer: "My greatest pride is the <strong>autonomous delivery</strong> of a fullstack <strong>Angular/Spring Boot</strong> tool at BNP Paribas: from <strong>REST API design</strong> to frontend development, to <strong>roadmap</strong> writing, <strong>testing</strong> and <strong>production deployment</strong> within the allocated timeframe."
    }
    ],
    "👨‍💼 Gestion de Projet": [
    {
        question: "📊 Connaissez-vous Power BI ?",
        answer: "Yes, I have already used <strong>Power BI</strong> to create some simple dashboards from different data sources. I was able to connect <strong>Excel</strong> files and <strong>SQL</strong> databases, create <strong>interactive visualizations</strong> and track <strong>key indicators</strong>. I'm comfortable with the tool and motivated to quickly deepen my skills to create more complex dashboards adapted to the team's needs."
    },
    {
        question: "📊 Pouvez-vous créer un dashboard pour suivre des indicateurs ?",
        answer: "Absolutely. I have already created dashboards to track <strong>project progress</strong> and <strong>technical metrics</strong>. I know how to structure data, choose the right <strong>visualizations</strong> and update reports so they are easily usable by teams. I can adapt these skills to meet the specific needs of <strong>compliance</strong>."
    },
    {
        question: "🔒 Comment garantir la qualité et la fiabilité des données ?",
        answer: "To ensure data quality and reliability, I always proceed in several steps.\n\n" +
                "First, I make sure that the collected data comes from <strong>reliable sources</strong> and that their format is <strong>consistent</strong>. Then, I clean and prepare them: I remove <strong>duplicates</strong>, correct <strong>errors</strong> and complete <strong>missing information</strong>.\n\n" +
                "Then, I implement <strong>regular controls</strong> to detect anomalies, for example monitoring indicators or <strong>automatic alerts</strong>. In my previous projects at BNP Paribas, I often verified that data extracted from <strong>SQL</strong> databases and used for dashboards were <strong>complete and correct</strong> before distribution to teams.\n\n" +
                "Finally, I <strong>document</strong> all steps and transformations performed, to ensure <strong>traceability</strong> and allow other team members to verify or reproduce analyses.\n\n" +
                "This approach ensures that <strong>decisions</strong> made based on this data are <strong>reliable and secure</strong>."
    },
    {
        question: "⚠️ Comment identifieriez-vous des risques de non-conformité ?",
        answer: "To identify non-compliance risks in a project or data, I would start by analyzing the <strong>regulatory requirements</strong> and <strong>internal policies</strong> applicable to the project.\n\n" +
                "Then, I would review the data and processes to detect potential gaps: <strong>missing</strong>, <strong>inconsistent</strong> or unprotected sensitive data, lack of <strong>traceability</strong>, uncontrolled access, etc.\n\n" +
                "I would implement <strong>monitoring indicators</strong> and <strong>automatic controls</strong> to continuously monitor compliance. For example, in my previous projects, I verified the <strong>data integrity</strong> used for dashboards and set up alerts to report any anomalies.\n\n" +
                "Finally, I would ensure <strong>regular communication</strong> with stakeholders to report detected risks and propose <strong>corrective measures</strong>, to ensure that the project respects compliance rules and standards."
    },
    {
        question: "📋 Connaissez-vous les concepts de base de la compliance digitale ?",
        answer: "Yes, I know the basic concepts of <strong>digital compliance</strong>.\n\n" +
                "Digital compliance involves ensuring that <strong>digital services</strong> and data used by a company comply with <strong>regulations</strong> and <strong>internal policies</strong>. This includes in particular <strong>personal data protection</strong> (like GDPR), <strong>information system security</strong>, <strong>operation traceability</strong>, <strong>access management</strong> and <strong>conflict of interest prevention</strong>.\n\n" +
                "In a banking context, this means verifying that <strong>applications</strong>, <strong>databases</strong> and <strong>digital services</strong> comply with legal standards and internal standards, and that any non-compliance risk is <strong>identified and treated quickly</strong>.\n\n" +
                "The final objective is to <strong>reduce risks</strong>, <strong>protect clients</strong> and the company, while enabling <strong>safe and effective</strong> adoption of digital technologies."
    },
    {
        question: "🔐 Comment géreriez-vous des données sensibles ou personnelles ?",
        answer: "To manage sensitive or personal data in a project, I always proceed methodically to ensure <strong>security</strong> and <strong>compliance</strong>.\n\n" +
                "First, I ensure that only <strong>authorized persons</strong> have access to data, by implementing <strong>access controls</strong> and appropriate permissions.\n\n" +
                "Then, I ensure <strong>protection and anonymization</strong> of data when necessary, for example by masking or pseudonymizing personal information.\n\n" +
                "I also implement <strong>traceability</strong> processes, to be able to track who accesses data and what <strong>modifications</strong> are made.\n\n" +
                "Finally, I ensure that practices respect <strong>current regulations</strong>, like GDPR, and I <strong>document</strong> all steps to ensure compliance and facilitate audits.\n\n" +
                "In my previous projects, I applied these principles for internal and external client data, thus ensuring the <strong>reliability and security</strong> of information used for analyses and dashboards."
    },
    {
        question: "📈 Comment rester à jour sur les évolutions réglementaires ?",
        answer: "To stay updated on regulatory developments and risks, I combine several approaches.\n\n" +
                "First, I regularly conduct <strong>regulatory monitoring</strong>, consulting official publications, specialized newsletters and updates from regulatory bodies.\n\n" +
                "Then, I participate in <strong>internal training sessions</strong> and exchanges with compliance teams to understand how these changes impact our projects and practices.\n\n" +
                "I also implement <strong>automated alerts and monitoring</strong> in the tools I use for projects, to be quickly informed of any developments that could affect data or processes.\n\n" +
                "Finally, I <strong>document and share</strong> this information with the team to ensure all members remain aligned and projects continuously respect <strong>current standards and regulations</strong>."
    }
    ],
    "🔧 Expériences Techniques": [
    {
        question: "🔧 Résolution de problèmes techniques",
        answer: "During my experience at <strong>BNP Paribas</strong>, I worked on a <strong>server obsolescence management</strong> application. One day, we noticed a <strong>critical failure</strong>: the application was no longer correctly retrieving inventory data.\n\nI first analyzed the <strong>logs</strong> to isolate the origin of the problem. After investigation, it turned out that the <strong>external API</strong> we were consuming had changed its response format.\n\nI then updated our code to parse the new <strong>JSON format</strong>, and added <strong>automatic checks</strong> in our <strong>CI/CD</strong> pipeline to anticipate this type of change.\n\nThanks to this quick intervention, the service was able to be <strong>restored within the day</strong>, and preventive actions were put in place to prevent this from happening again."
    },
    {
        question: "⏱️ Pression & Délais",
        answer: "I learned to manage pressure by keeping a <strong>clear vision of priorities</strong>. During a project with very tight deadlines at BNP, I organized work in <strong>short sprints</strong> with weekly objectives.\n\nI used <strong>Jira</strong> to track progress, and I held <strong>regular check-ins</strong> with the team to identify blockers as early as possible.\n\nIn an international context, the key is also to manage <strong>time zones</strong> well and anticipate delays in communication. I place great importance on <strong>transparency</strong> with stakeholders, especially in case of potential delays."
    }
    ],
    "👥 Relations & Management": [
    {
        question: "🌍 Relations clients internationaux",
        answer: "My university exchange in <strong>Malaysia</strong> and my volunteering in <strong>Laos</strong> taught me a lot about the importance of <strong>active listening</strong> and <strong>cultural adaptation</strong>.\n\nIn a professional setting, I always try to <strong>clarify expectations</strong> from the start, reformulating requests if needed, and using <strong>simple and universal vocabulary</strong>, especially in English.\n\nI also take the time to understand the client's <strong>communication style</strong> (rather direct or indirect), and I make sure that all exchanges are <strong>documented</strong> to avoid misunderstandings.\n\nMy goal is always to create a <strong>relationship of trust</strong>, based on respect and clarity."
    },
    {
        question: "👥 Équipe pluridisciplinaire",
        answer: "During my last year of apprenticeship, I was <strong>project manager</strong> for a web application at BNP. The project involved several profiles: <strong>backend developers</strong>, <strong>frontend</strong>, <strong>system administrators</strong> and <strong>security referents</strong>.\n\nI first gathered the <strong>business needs</strong>, then I broke them down into <strong>technical tasks</strong> according to the required expertise. I organized exchanges via <strong>short and regular meetings</strong>, and used <strong>Jira</strong> to ensure visibility on progress.\n\nAs a developer myself, I had a good understanding of the <strong>constraints of each role</strong>, which allowed me to coordinate effectively without imposing unrealistic solutions.\n\nResult: the project was <strong>delivered on time</strong>, with good team cohesion."
    },
    {
        question: "⚖️ Gestion des conflits d'équipe",
        answer: "When a disagreement arises, I always start by <strong>listening to both parties</strong> without judgment. Very often, conflicts come from <strong>misunderstandings</strong> or unexpressed constraints.\n\nOnce the causes are identified, I try to <strong>refocus the discussion</strong> on the common objective: delivering a quality project.\n\nFor example, in a project, a developer and a tester disagreed on the scope of <strong>automated testing</strong>. I organized a <strong>short meeting</strong> to clarify each person's responsibilities and define a compromise together.\n\nIn the end, simply taking the time to talk allowed us to <strong>defuse the tension</strong> quickly."
    }
    ]
};

const situationsEN = [
    {
        question: "😨 Violation de données critique détectée",
        answer: "As soon as I receive the <strong>alert</strong>, I first assess the <strong>scope and impact</strong> of the breach. I immediately activate the <strong>incident response plan</strong> and notify the <strong>compliance team</strong> and <strong>data protection officer</strong>.\n\nI then isolate the affected systems and conduct a <strong>forensic analysis</strong> to identify the source of the breach. I document all actions taken and implement <strong>immediate security measures</strong> to prevent further data exposure.\n\nIn parallel, I prepare the <strong>regulatory notification</strong> if required and communicate transparently with stakeholders about the <strong>incident status</strong> and <strong>recovery timeline</strong>."
    },
    {
        question: "🏃‍♂️ Nouvelle exigence client en cours de projet",
        answer: "I welcome the new requirement by conducting a <strong>technical impact assessment</strong> to understand how it affects our current project. I gather the <strong>technical team</strong> and <strong>architects</strong> to evaluate the <strong>development effort</strong> and <strong>timeline impact</strong>.\n\nI then present the client with <strong>updated technical options</strong> and revised project timeline. I ensure all new requirements are properly <strong>documented and validated</strong> before proceeding.\n\nOnce approved, I immediately update the <strong>project scope</strong> and engage the team to implement the <strong>new features</strong>."
    },
    {
        question: "🐛 Problèmes de performance de l'application en production",
        answer: "I organize an <strong>immediate investigation</strong> to identify the root cause of performance issues. I analyze the <strong>application architecture</strong> and <strong>performance metrics</strong> to pinpoint where the problem occurred.\n\nI then implement <strong>immediate fixes</strong> to restore performance and set up <strong>additional monitoring</strong> to prevent recurrence. I document all changes and update the <strong>monitoring procedures</strong>.\n\nFinally, I conduct a <strong>post-incident review</strong> to improve our performance controls and prevent similar issues in the future."
    },
    {
        question: "🔄 Migration de données vers un nouveau système",
        answer: "I start by reviewing the <strong>source system architecture</strong> and <strong>target system requirements</strong>. I assess whether we have adequate <strong>migration tools</strong> and <strong>validation procedures</strong> in place.\n\nIf technical gaps are identified, I work with the <strong>technical team</strong> to implement necessary <strong>migration scripts</strong> or <strong>transformation tools</strong>. I ensure all migrations are properly <strong>tested and validated</strong>.\n\nIn parallel, I update our <strong>migration procedures</strong> and provide training to teams on <strong>data migration best practices</strong>."
    },
    {
        question: "🌌 Échéance de livraison approche - Pression temporelle",
        answer: "I have a <strong>project tracking system</strong> that tracks upcoming deadlines. When a deadline approaches, I immediately assess our <strong>progress status</strong> and identify any <strong>delays or risks</strong>.\n\nI then prioritize actions based on <strong>client impact</strong> and <strong>technical complexity</strong>. I work closely with the <strong>technical team</strong> to ensure all features are delivered on time.\n\nI maintain <strong>regular communication</strong> with the client about our progress and any potential challenges, ensuring we meet all <strong>delivery deadlines</strong>."
    },
    {
        question: "💰 Contraintes budgétaires projet - Priorisation des fonctionnalités",
        answer: "I organize a meeting with the <strong>client</strong> and <strong>technical team</strong> to assess the current project status and identify <strong>priority features</strong>. I prioritize developments based on <strong>business impact</strong> and <strong>technical complexity</strong>.\n\nI then propose a <strong>phased development approach</strong> that addresses the most critical features first while staying within budget constraints. I ensure all <strong>essential features</strong> are implemented.\n\nFinally, I document our <strong>development strategy</strong> and regularly review our progress to ensure we deliver the <strong>expected value</strong> despite budget limitations."
    }
];

// Données du glossaire des termes techniques
const technicalTerms = [
    {
        name: "RGPD",
        nameEN: "GDPR",
        definition: "Règlement Général sur la Protection des Données. Cadre juridique européen qui régit la collecte et le traitement des données personnelles.",
        definitionEN: "General Data Protection Regulation. European legal framework governing the collection and processing of personal data."
    },
    {
        name: "Data Governance",
        nameEN: "Data Governance",
        definition: "Ensemble des processus, politiques et procédures qui assurent la qualité, la sécurité et la conformité des données dans une organisation.",
        definitionEN: "Set of processes, policies and procedures that ensure data quality, security and compliance within an organization."
    },
    {
        name: "Data Lineage",
        nameEN: "Data Lineage",
        definition: "Traçabilité complète des données depuis leur source jusqu'à leur utilisation finale, incluant toutes les transformations.",
        definitionEN: "Complete traceability of data from source to final use, including all transformations."
    },
    {
        name: "Data Quality",
        nameEN: "Data Quality",
        definition: "Mesure de la fiabilité, de l'exactitude et de la cohérence des données. Inclut la complétude, la validité et la cohérence temporelle.",
        definitionEN: "Measure of data reliability, accuracy and consistency. Includes completeness, validity and temporal consistency."
    },
    {
        name: "Data Masking",
        nameEN: "Data Masking",
        definition: "Technique de protection des données sensibles en remplaçant les informations originales par des données fictives mais réalistes.",
        definitionEN: "Technique for protecting sensitive data by replacing original information with fictitious but realistic data."
    },
    {
        name: "Pseudonymisation",
        nameEN: "Pseudonymisation",
        definition: "Processus qui remplace les identifiants directs par des pseudonymes, permettant de traiter les données sans identifier directement les personnes.",
        definitionEN: "Process that replaces direct identifiers with pseudonyms, allowing data to be processed without directly identifying individuals."
    },
    {
        name: "Anonymisation",
        nameEN: "Anonymisation",
        definition: "Processus irréversible qui supprime toute possibilité d'identification des personnes à partir des données.",
        definitionEN: "Irreversible process that removes any possibility of identifying individuals from data."
    },
    {
        name: "Data Retention",
        nameEN: "Data Retention",
        definition: "Politique définissant combien de temps les données doivent être conservées avant d'être supprimées ou archivées.",
        definitionEN: "Policy defining how long data should be kept before being deleted or archived."
    },
    {
        name: "Data Classification",
        nameEN: "Data Classification",
        definition: "Processus de catégorisation des données selon leur sensibilité et leur importance pour l'organisation.",
        definitionEN: "Process of categorizing data according to their sensitivity and importance to the organization."
    },
    {
        name: "Access Control",
        nameEN: "Access Control",
        definition: "Mécanismes qui limitent l'accès aux données et systèmes aux seuls utilisateurs autorisés.",
        definitionEN: "Mechanisms that limit access to data and systems to authorized users only."
    },
    {
        name: "Audit Trail",
        nameEN: "Audit Trail",
        definition: "Enregistrement chronologique des actions effectuées sur les données, permettant de tracer qui a fait quoi et quand.",
        definitionEN: "Chronological record of actions performed on data, allowing to trace who did what and when."
    },
    {
        name: "Data Breach",
        nameEN: "Data Breach",
        definition: "Incident de sécurité où des données sensibles sont consultées, volées ou utilisées par des personnes non autorisées.",
        definitionEN: "Security incident where sensitive data is accessed, stolen or used by unauthorized persons."
    },
    {
        name: "Incident Response",
        nameEN: "Incident Response",
        definition: "Processus organisé pour gérer et résoudre les incidents de sécurité, minimisant les dommages et le temps de récupération.",
        definitionEN: "Organized process for managing and resolving security incidents, minimizing damage and recovery time."
    },
    {
        name: "Risk Assessment",
        nameEN: "Risk Assessment",
        definition: "Évaluation systématique des risques potentiels pour identifier, analyser et prioriser les menaces à la sécurité des données.",
        definitionEN: "Systematic assessment of potential risks to identify, analyze and prioritize threats to data security."
    },
    {
        name: "Compliance Monitoring",
        nameEN: "Compliance Monitoring",
        definition: "Surveillance continue pour s'assurer que les processus et systèmes respectent les réglementations et politiques en vigueur.",
        definitionEN: "Continuous monitoring to ensure that processes and systems comply with current regulations and policies."
    },
    {
        name: "Data Encryption",
        nameEN: "Data Encryption",
        definition: "Processus de conversion des données en format illisible pour protéger leur confidentialité et leur intégrité.",
        definitionEN: "Process of converting data into unreadable format to protect their confidentiality and integrity."
    },
    {
        name: "API Security",
        nameEN: "API Security",
        definition: "Mesures de sécurité appliquées aux interfaces de programmation pour protéger les données échangées.",
        definitionEN: "Security measures applied to programming interfaces to protect exchanged data."
    },
    {
        name: "Cloud Compliance",
        nameEN: "Cloud Compliance",
        definition: "Ensemble des règles et procédures pour assurer la conformité des données stockées et traitées dans le cloud.",
        definitionEN: "Set of rules and procedures to ensure compliance of data stored and processed in the cloud."
    },
    {
        name: "Data Sovereignty",
        nameEN: "Data Sovereignty",
        definition: "Principe selon lequel les données sont soumises aux lois du pays où elles sont physiquement stockées.",
        definitionEN: "Principle that data is subject to the laws of the country where it is physically stored."
    },
    {
        name: "Cross-border Data Transfer",
        nameEN: "Cross-border Data Transfer",
        definition: "Transfert de données personnelles d'un pays à un autre, soumis à des réglementations spécifiques.",
        definitionEN: "Transfer of personal data from one country to another, subject to specific regulations."
    },
    {
        name: "Data Processing Agreement",
        nameEN: "Data Processing Agreement",
        definition: "Contrat entre le responsable du traitement et le sous-traitant définissant les obligations de protection des données.",
        definitionEN: "Contract between the data controller and the processor defining data protection obligations."
    },
    {
        name: "Privacy by Design",
        nameEN: "Privacy by Design",
        definition: "Approche qui intègre la protection de la vie privée dès la conception des systèmes et processus.",
        definitionEN: "Approach that integrates privacy protection from the design of systems and processes."
    },
    {
        name: "Data Minimization",
        nameEN: "Data Minimization",
        definition: "Principe selon lequel seules les données strictement nécessaires doivent être collectées et traitées.",
        definitionEN: "Principle that only strictly necessary data should be collected and processed."
    },
    {
        name: "Consent Management",
        nameEN: "Consent Management",
        definition: "Processus de gestion des consentements des utilisateurs pour le traitement de leurs données personnelles.",
        definitionEN: "Process for managing user consent for processing their personal data."
    },
    {
        name: "Data Subject Rights",
        nameEN: "Data Subject Rights",
        definition: "Droits accordés aux personnes dont les données sont traitées (accès, rectification, suppression, portabilité).",
        definitionEN: "Rights granted to individuals whose data is processed (access, rectification, deletion, portability)."
    },
    {
        name: "Data Protection Impact Assessment",
        nameEN: "Data Protection Impact Assessment",
        definition: "Évaluation des risques pour la protection des données avant le traitement de données à haut risque.",
        definitionEN: "Assessment of risks to data protection before processing high-risk data."
    },
    {
        name: "Data Loss Prevention",
        nameEN: "Data Loss Prevention",
        definition: "Technologies et processus pour prévenir la perte, le vol ou l'exposition non autorisée de données sensibles.",
        definitionEN: "Technologies and processes to prevent loss, theft or unauthorized exposure of sensitive data."
    }
];

// Variable pour suivre la langue actuelle
let currentLanguage = 'fr';

// Fonction pour aplatir les catégories en un seul tableau
function flattenCategories(categories) {
    const flattened = [];
    Object.keys(categories).forEach(categoryName => {
        categories[categoryName].forEach(card => {
            flattened.push({
                ...card,
                category: categoryName
            });
        });
    });
    return flattened;
}

// Créer les tableaux aplatis pour compatibilité
const flashcards = flattenCategories(flashcardCategories);
const flashcardsEN = flattenCategories(flashcardCategoriesEN);

// Éléments DOM
const questionsList = document.getElementById('questions-list');
const situationsList = document.getElementById('situations-list');
const modal = document.getElementById('modal');
const modalQuestion = document.getElementById('modal-question');
const modalAnswer = document.getElementById('modal-answer');
const closeModal = document.getElementById('close-modal');
const languageBtn = document.getElementById('language-btn');
const mainTitle = document.getElementById('main-title');
const situationsTitle = document.getElementById('situations-title');
const financeTitle = document.getElementById('finance-title');
const financeGlossary = document.getElementById('finance-glossary');

// Fonction pour créer une carte de question
function createQuestionCard(question, index) {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.innerHTML = `
        <div class="question-number">Question ${index + 1}</div>
        <h3>${question}</h3>
    `;
    
    // Ajouter l'événement de clic pour ouvrir le modal
    card.addEventListener('click', () => {
        openModal(index, 'question');
    });
    
    return card;
}

// Fonction pour créer une carte de mise en situation
function createSituationCard(question, index) {
    const card = document.createElement('div');
    card.className = 'situation-card';
    card.innerHTML = `
        <div class="situation-number">Situation ${index + 1}</div>
        <h3>${question}</h3>
    `;
    
    // Ajouter l'événement de clic pour ouvrir le modal
    card.addEventListener('click', () => {
        openModal(index, 'situation');
    });
    
    return card;
}



// Fonction pour fermer le modal
function closeModalFunction() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Fonction pour fermer le modal en cliquant à l'extérieur
function closeModalOnOutsideClick(event) {
    if (event.target === modal) {
        closeModalFunction();
    }
}

// Fonction pour fermer le modal avec la touche Échap
function closeModalOnEscape(event) {
    if (event.key === 'Escape') {
        closeModalFunction();
    }
}

// Fonction pour changer de langue
function toggleLanguage() {
    currentLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
    updateLanguage();
}

// Fonction pour créer une carte de terme technique
function createTechnicalTerm(term) {
    const card = document.createElement('div');
    card.className = 'technical-term';
    
    const termName = currentLanguage === 'en' ? term.nameEN : term.name;
    const termDefinition = currentLanguage === 'en' ? term.definitionEN : term.definition;
    const termDefinitionOther = currentLanguage === 'en' ? term.definition : term.definitionEN;
    
    card.innerHTML = `
        <div class="technical-term-name">${termName}</div>
        <div class="technical-term-definition">${termDefinition}</div>
        <div class="technical-term-definition-en">${termDefinitionOther}</div>
    `;
    
    return card;
}

// Fonction pour générer le glossaire des termes techniques
function generateTechnicalGlossary() {
    financeGlossary.innerHTML = '';
    
    technicalTerms.forEach(term => {
        const termCard = createTechnicalTerm(term);
        financeGlossary.appendChild(termCard);
    });
}

// Fonction pour gérer les onglets
function switchTab(tabName) {
    // Masquer tous les contenus d'onglets
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Désactiver tous les boutons d'onglets
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    
    // Activer l'onglet sélectionné
    document.getElementById(`${tabName}-tab`).classList.add('active');
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
}

// Fonction pour mettre à jour l'interface selon la langue
function updateLanguage() {
    if (currentLanguage === 'en') {
        languageBtn.innerHTML = '🇫🇷 Français';
        mainTitle.textContent = 'MC2I Interview Questions';
        situationsTitle.textContent = 'Situational Scenarios';
        financeTitle.textContent = 'Technical Terms Glossary';
        // Mettre à jour les textes des onglets
        document.querySelector('[data-tab="interview"]').textContent = '💼 Interview';
        document.querySelector('[data-tab="finance"]').textContent = '🔧 Technical Terms';
        generateCards(flashcardsEN, situationsEN);
        generateTechnicalGlossary();
    } else {
        languageBtn.innerHTML = '🇬🇧 English';
        mainTitle.textContent = 'Questions d\'Entretien MC2I';
        situationsTitle.textContent = 'Mises en Situation';
        financeTitle.textContent = 'Glossaire des Termes Techniques';
        // Mettre à jour les textes des onglets
        document.querySelector('[data-tab="interview"]').textContent = '💼 Entretien';
        document.querySelector('[data-tab="finance"]').textContent = '🔧 Termes Techniques';
        generateCards(flashcards, situations);
        generateTechnicalGlossary();
    }
}

// Fonction pour générer les cartes par catégories
function generateCards(questionsData, situationsData) {
    // Vider les conteneurs
    questionsList.innerHTML = '';
    situationsList.innerHTML = '';
    
    // Organiser les questions par catégorie
    const categoriesData = currentLanguage === 'en' ? flashcardCategoriesEN : flashcardCategories;
    
    Object.keys(categoriesData).forEach(categoryName => {
        // Créer un titre de section
        const categorySection = document.createElement('div');
        categorySection.className = 'category-section';
        categorySection.innerHTML = `
            <h2 class="category-title">${categoryName}</h2>
            <div class="category-cards"></div>
        `;
        
        const cardsContainer = categorySection.querySelector('.category-cards');
        
        // Générer les cartes de cette catégorie
        categoriesData[categoryName].forEach((flashcard, localIndex) => {
            // Trouver l'index global pour la modal
            const globalIndex = questionsData.findIndex(q => q.question === flashcard.question);
            const card = createQuestionCard(flashcard.question, globalIndex);
            cardsContainer.appendChild(card);
        });
        
        questionsList.appendChild(categorySection);
    });
    
    // Générer toutes les cartes de mises en situation (sans catégories pour l'instant)
    situationsData.forEach((situation, index) => {
        const card = createSituationCard(situation.question, index);
        situationsList.appendChild(card);
    });
}

// Fonction pour ouvrir le modal avec la réponse
function openModal(index, type) {
    let data;
    if (currentLanguage === 'en') {
        if (type === 'question') {
            data = flashcardsEN[index];
        } else {
            data = situationsEN[index];
        }
    } else {
        if (type === 'question') {
            data = flashcards[index];
        } else {
            data = situations[index];
        }
    }
    
    modalQuestion.textContent = data.question;
    modalAnswer.innerHTML = data.answer;
    modal.style.display = 'block';
    
    // Empêcher le défilement de la page
    document.body.style.overflow = 'hidden';
}

// Initialisation de l'application
function initApp() {
    // Générer le contenu initial en français
    generateCards(flashcards, situations);
    generateTechnicalGlossary();
    
    // Événements pour le modal
    closeModal.addEventListener('click', closeModalFunction);
    modal.addEventListener('click', closeModalOnOutsideClick);
    document.addEventListener('keydown', closeModalOnEscape);
    
    // Événement pour le bouton de langue
    languageBtn.addEventListener('click', toggleLanguage);
    
    // Événements pour les onglets
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const tabName = e.target.getAttribute('data-tab');
            switchTab(tabName);
        });
    });
}

// Démarrage de l'application quand le DOM est chargé
document.addEventListener('DOMContentLoaded', initApp); 