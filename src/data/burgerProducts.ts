export type BurgerProduct = {
  id: string;
  badge: string;
  name: string;
  description: string;
  price: string;
  tags: string[];
  calories: number;
  image: string;
  alt: string;
};

export const burgerProducts: BurgerProduct[] = [
  {
    id: "grand-smash",
    badge: "Signature",
    name: "Le Grand Smash",
    description:
      "Double steak maturé, cheddar affiné, oignons confits et sauce poivre fumé.",
    price: "19 €",
    tags: ["smash", "intense", "incontournable"],
    calories: 940,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1400&q=80",
    alt: "Burger double steak premium avec cheddar fondant",
  },
  {
    id: "truffe-doree",
    badge: "Édition cheffe",
    name: "Truffe Doree",
    description:
      "Boeuf grillé minute, brie crémeux, roquette et mayo truffée maison.",
    price: "23 €",
    tags: ["gourmet", "truffe", "fondant"],
    calories: 910,
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1400&q=80",
    alt: "Burger gourmet servi sur planche en bois",
  },
  {
    id: "braise-bacon",
    badge: "Maison",
    name: "Braise Bacon",
    description:
      "Smash croustillant, bacon fermier, pickles acidulés et sauce barbecue réduite.",
    price: "21 €",
    tags: ["smash", "fume", "gourmand"],
    calories: 980,
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=1400&q=80",
    alt: "Burger bacon croustillant et sauce barbecue",
  },
  {
    id: "montagne-bleue",
    badge: "Fromager",
    name: "Montagne Bleue",
    description:
      "Boeuf français, bleu d'Auvergne, compote d'oignons rouges et noix torréfiées.",
    price: "22 €",
    tags: ["fromage", "caractere", "terroir"],
    calories: 930,
    image:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=1400&q=80",
    alt: "Burger au fromage bleu avec garniture premium",
  },
  {
    id: "volcan-epice",
    badge: "Épicé",
    name: "Volcan Rouge",
    description:
      "Steak flambé, pepper jack, jalapenos frais et crema piment doux maison.",
    price: "20 €",
    tags: ["epice", "smash", "releve"],
    calories: 890,
    image:
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=1400&q=80",
    alt: "Burger epicé avec jalapenos et fromage fondu",
  },
  {
    id: "smoky-or",
    badge: "Fumé",
    name: "Smoky Or",
    description:
      "Boeuf grillé au feu vif, cheddar vieux, oignons frits et sauce charbon douce.",
    price: "20 €",
    tags: ["fume", "signature", "croquant"],
    calories: 920,
    image:
      "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=1400&q=80",
    alt: "Burger fume avec oignons croustillants",
  },
  {
    id: "veggie-jardin",
    badge: "Végé",
    name: "Jardin Croquant",
    description:
      "Galette pois chiche-lentille, comté affiné, tomate rôtie et sauce yaourt citron.",
    price: "18 €",
    tags: ["vege", "frais", "equilibre"],
    calories: 690,
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1400&q=80",
    alt: "Burger vegetarien gastronomique avec legumes frais",
  },
  {
    id: "black-pepper",
    badge: "Poivre",
    name: "Poivre Noir",
    description:
      "Boeuf maturé, tomme fumée, jus de viande poivre noir et salade croquante.",
    price: "21 €",
    tags: ["poivre", "viande", "maison"],
    calories: 900,
    image:
      "https://images.unsplash.com/photo-1610614819513-58e34989848b?auto=format&fit=crop&w=1400&q=80",
    alt: "Burger premium au poivre noir et fromage fondu",
  },
  {
    id: "double-cheddar",
    badge: "Classique",
    name: "Double Cheddar",
    description:
      "Deux smashs saisis, cheddar rouge, cornichons doux et sauce moutarde-miel.",
    price: "20 €",
    tags: ["double", "classique", "smash"],
    calories: 960,
    image:
      "https://images.unsplash.com/photo-1615297928064-24977384d0da?auto=format&fit=crop&w=1400&q=80",
    alt: "Double cheeseburger juteux avec cornichons",
  },
  {
    id: "bbq-bourbon",
    badge: "Soirée",
    name: "Bourbon BBQ",
    description:
      "Boeuf grillé, cheddar maturé, compote d'échalote et réduction barbecue bourbon.",
    price: "24 €",
    tags: ["bbq", "premium", "gourmand"],
    calories: 1020,
    image:
      "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=1400&q=80",
    alt: "Burger premium sauce bourbon barbecue",
  },
];
