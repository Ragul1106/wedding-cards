import blueWeddingCard from "../assets/images/bluewed.png";
import ganeshaWeddingCard from "../assets/images/ganesha.png";
import themeWeddingCard from "../assets/images/themewed.png";
import peacockWeddingCard from "../assets/images/elegantpeacock.png";
import editableWeddingCard from "../assets/images/editablecard.png";
import traditionalWeddingCard from "../assets/images/traditionalwed.png";
import scrollWeddingCard from "../assets/images/royalwed.png";
import gatefoldWeddingCard from "../assets/images/gatefoldwed.png";
import lavenderVariant from "../assets/images/gatefoldwed.png";


export const cards = [
  {
      id: 1,
      title: "The Blue Wedding Cards",
      price: 72.25,
      sku: "KSN0054",
      src: blueWeddingCard,
      gallery: [blueWeddingCard, gatefoldWeddingCard, ganeshaWeddingCard, lavenderVariant],
      description:
        "The blue wedding card has embossed floral design with customized initial acrylic nameplate.\nThis invitation card has holding insert and an envelope",
      comments: "Discounts are applied based on quantity at checkout",
      height: "27.5",
      width: "21",
      weight: "110",
      variants: [
        {
          id: 101,
          title: "Lavender Variant",
          src: lavenderVariant,
        },
      ],
    },
   {
      id: 2,
      title: "Ganesha Wedding Cards",
      price: 25.25,
      sku: "KSN0055",
      src: ganeshaWeddingCard,
      gallery: [ganeshaWeddingCard, ganeshaWeddingCard, ganeshaWeddingCard, ganeshaWeddingCard],
      
      description: "Elegant card with Ganesha motif and traditional layout.",
      comments: "Available in 3 colors.",
      height: "24",
      width: "18",
      weight: "90",
       variants: [
        {
          id: 101,
          title: "Lavender Variant",
          src: lavenderVariant,
        },
      ],
    },
 {
     id: 6,
     title: "Elegant Peacock Wedding Cards",
     price: 15.0,
     sku: "KSN0059",
     src: peacockWeddingCard,
     gallery: [peacockWeddingCard],
     description: "Peacock feather elements with a royal feel.",
     comments: "Foil stamping available.",
     height: "24",
     width: "18",
     weight: "95",
     variants: [
        {
          id: 101,
          title: "Lavender Variant",
          src: lavenderVariant,
        },
      ],
   },
  {
      id: 4,
      title: "Theme Wedding Cards",
      price: 30.0,
      sku: "KSN0057",
      src: themeWeddingCard,
      gallery: [themeWeddingCard,themeWeddingCard,themeWeddingCard,themeWeddingCard],
      description: "Theme-based design matching your event color palette.",
      comments: "Match with invitation set.",
      height: "26",
      width: "20",
      weight: "105",
       variants: [
        {
          id: 101,
          title: "Lavender Variant",
          src: lavenderVariant,
        },
      ],
    },
  {
    id: 9,
    title: "Editable Wedding Cards",
    price: 35.55,
    sku: "KSN0058",
    src: editableWeddingCard,
    gallery: [editableWeddingCard],
    description:
      "Traditional editable wedding card with temple border design and Om symbol.",
    comments: "Editable in Word and PDF formats",
    height: "28",
    width: "20",
    weight: "85",
    variants: [
        {
          id: 101,
          title: "Lavender Variant",
          src: lavenderVariant,
        },
      ],
  },
  {
    id: 10,
    title: "Traditional Wedding Cards",
    price: 25.0,
    sku: "KSN0059",
    src: traditionalWeddingCard,
    gallery: [traditionalWeddingCard],
    description:
      "Scallop-edged golden red cards with classic Indian floral motifs and multiple inserts.",
    comments: "Popular in South Indian weddings",
    height: "26",
    width: "19",
    weight: "95",
    variants: [
        {
          id: 101,
          title: "Lavender Variant",
          src: lavenderVariant,
        },
      ],
  },
  {
    id: 11,
    title: "Royal Scroll Wedding Cards",
    price: 75.0,
    sku: "KSN0060",
    src: scrollWeddingCard,
    gallery: [scrollWeddingCard],
    description:
      "Luxurious velvet scroll-style card with golden handles and printed scroll inserts.",
    comments: "Includes scroll, box, and outer envelope",
    height: "30",
    width: "10",
    weight: "180",
    variants: [
        {
          id: 101,
          title: "Lavender Variant",
          src: lavenderVariant,
        },
      ],
  },
  {
    id: 12,
    title: "Gate Fold Wedding Cards",
    price: 43.2,
    sku: "KSN0061",
    src: gatefoldWeddingCard,
    gallery: [gatefoldWeddingCard],
    description:
      "Elegant gatefold style card with laser-cut monogram and satin holder for inserts.",
    comments: "Available in multiple foil colors",
    height: "25",
    width: "22",
    weight: "120",
    variants: [
        {
          id: 101,
          title: "Lavender Variant",
          src: lavenderVariant,
        },
      ],
  },
];
