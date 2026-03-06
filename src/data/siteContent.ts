export const heroVideo = {
  src: "/videos/burger-intro.mp4",
};

export const brand = {
  symbol: "B",
  name: "Braise & Or",
  shortName: "Braise",
  tagline: "Le smash parfait, à la française.",
  footerTagline:
    "Maison de burgers premium: pain brioché doré, viandes françaises maturées et sauces signatures préparées chaque matin.",
};

export const decorativeImages = {
  titleDotIngredients:
    "https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&w=500&q=80",
  titleDotTestimonials:
    "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=500&q=80",
  philosophyFloat:
    "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80",
};

export const navLinks = [
  { href: "#philosophy", label: "Notre vision" },
  { href: "#menu", label: "Burgers" },
  { href: "#creations", label: "Créations" },
  { href: "#experience", label: "Qualité" },
  { href: "#avis", label: "Avis" },
  { href: "#chef", label: "Maison" },
];

export const philosophy = {
  sideMark: "BR",
  label: "Notre philosophie",
  heading: "L'esprit bistrot\nrencontre le\n<em>smash gourmet</em>",
  paragraphOne:
    "Chez Braise & Or, chaque burger est pensé comme une assiette de chef: textures nettes, cuisson minute, et équilibre précis entre gras, croustillant et fraîcheur.",
  paragraphTwo:
    "Nos ingrédients viennent majoritairement de producteurs français: boeuf maturé, pommes de terre variétés rustiques, pains briochés artisanaux et sauces maison sans compromis.",
  signature: "— Camille Ardent",
  image:
    "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?auto=format&fit=crop&w=1400&q=80",
  imageAlt: "Chef preparant un burger premium en cuisine",
};

export const experience = {
  label: "La méthode Braise & Or",
  title: "Un burger d'exception, du pain aux frites",
  items: [
    {
      icon: "01",
      title: "Ingrédients tracés",
      text: "Boeuf français maturé 21 jours, légumes du marché et fromages sélectionnés pour une tenue parfaite à chaud.",
    },
    {
      icon: "02",
      title: "Cuisson à la minute",
      text: "Smash saisi à la seconde, croûte caramélisée, coeur juteux, puis montage immédiat pour garder toute l'intensité.",
    },
    {
      icon: "03",
      title: "Avis clients 4,9/5",
      text: "Plus de 1 200 avis vérifiés saluent l'équilibre des sauces, la qualité des pains et nos frites maison double cuisson.",
    },
  ],
};

export const ingredients = {
  label: "Ingrédients & qualité",
  title: "Le coeur de nos recettes",
  titleHtml: `Le coeur <span class="title-inline-dot" aria-hidden="true"><img src="${decorativeImages.titleDotIngredients}" alt="" loading="lazy" /></span> de nos recettes`,
  items: [
    {
      icon: "PA",
      title: "Pain brioché doré",
      text: "Façonné chaque matin, toasté au beurre noisette pour une croûte fine et un moelleux constant.",
    },
    {
      icon: "VI",
      title: "Viande française maturée",
      text: "Hachage minute, ratio gras/maigre calibré, puis saisie smash sur plaque très chaude.",
    },
    {
      icon: "SA",
      title: "Sauces signatures",
      text: "Sauce Braise, mayo truffée et barbecue bourbon préparées maison en petites quantités.",
    },
    {
      icon: "FR",
      title: "Frites double cuisson",
      text: "Pommes de terre sélectionnées, blanchies puis saisies à la commande pour un croustillant net.",
    },
  ],
};

export const testimonials = {
  label: "Ils en parlent",
  title: "Avis clients",
  titleHtml: `Avis <span class="title-inline-dot" aria-hidden="true"><img src="${decorativeImages.titleDotTestimonials}" alt="" loading="lazy" /></span> clients`,
  note: "Avis simulés pour démonstration (sources indiquées à titre visuel).",
  items: [
    {
      name: "Élisa T.",
      city: "Paris 9e",
      rating: 5,
      date: "Janvier 2026",
      text: "Pris au smartphone en terrasse: burger ultra net, sauce bien dosée, frites croustillantes jusqu'à la fin.",
      source: "Avis Google",
      photo:
        "https://images.pexels.com/photos/3915914/pexels-photo-3915914.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
    {
      name: "Nassim R.",
      city: "Levallois",
      rating: 5,
      date: "Février 2026",
      text: "Photo iPhone envoyée direct à mes potes: le croustillant du poulet et la sauce maison sont dingues.",
      source: "Avis Tripadvisor",
      photo:
        "https://images.pexels.com/photos/14710224/pexels-photo-14710224.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
    {
      name: "Camille P.",
      city: "Boulogne",
      rating: 4,
      date: "Décembre 2025",
      text: "Visuel super propre même en photo rapide: steak rosé comme demandé et buns moelleux sans s'effondrer.",
      source: "Avis Google",
      photo:
        "https://images.pexels.com/photos/17035144/pexels-photo-17035144.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
    {
      name: "Lina G.",
      city: "Saint-Ouen",
      rating: 5,
      date: "Mars 2026",
      text: "On voit bien sur ma photo mobile le fromage coulant et la croûte smash: adresse validée à 100%.",
      source: "Avis Google",
      photo:
        "https://images.pexels.com/photos/12325076/pexels-photo-12325076.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
    {
      name: "Matteo B.",
      city: "Asnières",
      rating: 5,
      date: "Février 2026",
      text: "Shot iPhone en lumière basse et le burger reste canon: viande fondante et pickles très frais.",
      source: "Avis Tripadvisor",
      photo:
        "https://images.pexels.com/photos/10755734/pexels-photo-10755734.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
    {
      name: "Océane V.",
      city: "Paris 11e",
      rating: 4,
      date: "Janvier 2026",
      text: "Photo prise au comptoir: gros volume, cuisson propre et sauce fumée qui fait vraiment la différence.",
      source: "Avis Google",
      photo:
        "https://images.pexels.com/photos/20525756/pexels-photo-20525756.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
    {
      name: "Hugo M.",
      city: "Neuilly-sur-Seine",
      rating: 5,
      date: "Décembre 2025",
      text: "Même en mode photo spontanée on voit le niveau premium: bacon croustillant et burger bien monté.",
      source: "Avis Tripadvisor",
      photo:
        "https://images.pexels.com/photos/15010301/pexels-photo-15010301.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
    {
      name: "Sarah D.",
      city: "Issy-les-Moulineaux",
      rating: 5,
      date: "Novembre 2025",
      text: "Le burger est photogénique mais surtout excellent: équilibre gras/acidité nickel, frites maison au top.",
      source: "Avis Google",
      photo:
        "https://images.pexels.com/photos/14710226/pexels-photo-14710226.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
    {
      name: "Yanis C.",
      city: "Paris 17e",
      rating: 4,
      date: "Février 2026",
      text: "J'ai posté ma photo direct: portions généreuses, pain bien toasté et service ultra fluide.",
      source: "Avis Tripadvisor",
      photo:
        "https://images.pexels.com/photos/12325003/pexels-photo-12325003.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
    {
      name: "Julie A.",
      city: "Clichy",
      rating: 5,
      date: "Mars 2026",
      text: "Dernier test avec photo iPhone: burger juteux, montage clean et vraie sensation de burger signature.",
      source: "Avis Google",
      photo:
        "https://images.pexels.com/photos/12325094/pexels-photo-12325094.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
  ],
};

export const creations = {
  label: "Nos créations du moment",
  title: "Séries limitées",
  note: "Sélection visuelle premium du moment, pensée pour les amateurs de burgers originaux.",
  items: [
    {
      name: "Truffe Noire 48h",
      subtitle: "Double smash, emmental affiné, jus corsé et mayo truffée noire.",
      price: "26 €",
      image:
        "https://images.unsplash.com/photo-1615297928064-24977384d0da?auto=format&fit=crop&w=1400&q=80",
      alt: "Burger premium à la truffe",
    },
    {
      name: "Pastrami Flame",
      subtitle: "Steak saisi, pastrami fumé, pickles maison et cheddar vieilli.",
      price: "24 €",
      image:
        "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=1400&q=80",
      alt: "Burger pastrami gourmet",
    },
    {
      name: "Crispy Umami",
      subtitle: "Poulet croustillant, sauce miso-miel, salade croquante et oignons frits.",
      price: "22 €",
      image:
        "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?auto=format&fit=crop&w=1400&q=80",
      alt: "Burger croustillant gourmet",
    },
  ],
};

export const chefStory = {
  label: "La maison",
  quote:
    "Un grand burger n'est pas un empilement. C'est une partition: feu, gras, acidité, croustillant, puis une finale nette en bouche.",
  name: "Camille Ardent",
  title: "Fondatrice & cheffe exécutive - 18 ans d'expérience",
  mark: "BO",
};

export const reservation = {
  mark: "GO",
  label: "Réserver votre table",
  title: "Venez vivre le service Braise & Or",
  subtitle:
    "Notre salle intimiste et notre comptoir grill affichent souvent complet. Choisissez votre date, votre format de table et nous revenons vers vous sous 2 heures.",
  cta: "Demander une réservation",
};

export const footer = {
  navigateTitle: "Navigation",
  contactTitle: "Contact",
  hoursTitle: "Horaires",
  address: "42 Rue des Martyrs\n75009 Paris, France",
  phone: "+33 1 84 23 67 90",
  email: "bonjour@braiseetor.fr",
  hoursWeek: "Lundi - Samedi\n12:00 - 14:30 / 19:00 - 23:00",
  hoursExtra: "Dimanche: brunch burger 11:30 - 15:00",
  copyright: "Copyright © 2026 Braise & Or. Tous droits réservés.",
  legal: [
    { href: "#", label: "Politique de confidentialité" },
    { href: "#", label: "Conditions générales" },
  ],
  creator: "Créé par Nova",
};

export const backgroundWatermarkText =
  "smash-burger-premium-viande-francaise-pain-brioché-sauce-maison-frites-croustillantes-signature-gourmande-braise-et-or-";
