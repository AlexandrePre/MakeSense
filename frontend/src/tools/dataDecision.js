import logo from "../assets/img/cible.png";

const dataDecision = [
  {
    id: 1,
    title: "1.Contenu",
    txt: "Quelle est la problématique à résoudre ?",
    img: logo,
    title1: "Le Contenu",
    title2: "Titre de l'annonce",
    title3: "",
    input: [
      {
        id: 1,
        label: "Titre de la decision*",
        placeholder: "Texte",
        type: "text",
        name: "title",
        value: "",
      },
      {
        id: 2,
        label: "Contenu de la decision*",
        placeholder: "Texte",
        type: "text",
        name: "content",
        value: "",
      },
    ],

    isActive: true,
  },

  {
    id: 2,
    title: "2.Utilité",
    txt: "Quel est l'utilité de cette décision ?",
    img: logo,
    title1: "L'Utilité",
    title2: "Utilité Utilité Utilité",
    title3: "",
    input: [
      {
        id: 2,
        label: "Utilité",
        placeholder: "usefullness",
        type: "text",
        name: "usefullness",
        value: "",
      },
    ],
    isActive: false,
  },

  {
    id: 3,
    title: "3.Contexte",
    txt: "Décrivez le contexte de la décision",
    img: logo,
    title1: "Le Contexte",
    title2: "",
    title3: "",
    input: [
      {
        id: 2,
        label: "Contexte",
        placeholder: "Texte",
        type: "text",
        name: "contexte",
        value: "",
      },
    ],
    isActive: false,
  },

  {
    id: 4,
    title: "4.Bénéfice",
    txt: "Quel est le bénéfice de cette décision ?",
    img: logo,
    title1: "Le Bénéfice",
    title2: "",
    title3: "",
    input: [
      {
        id: 2,
        label: "Bénéfice",
        placeholder: "Texte",
        type: "text",
        name: "profit",
        value: "",
      },
    ],
    isActive: false,
  },

  {
    id: 5,
    title: "5.Inconvénient",
    txt: "Quelles sont les inconvénients de cette décision ?",
    img: logo,
    title1: "L'Inconvénient",
    title2: "",
    title3: "",
    input: [
      {
        id: 2,
        label: "L'inconvénient",
        placeholder: "Texte",
        type: "text",
        name: "inconvenience",
        value: "",
      },
    ],
    isActive: false,
  },
  {
    id: 6,
    title: "6.Qui participe ?",
    txt: "Sélectionne les personnes qui participent à la décision",
    title1: "L'Inconvénient",
    isActive: false,
  },
];
export default dataDecision;
