import blueWeddingCard from "../assets/images/blueWed.png";
import ganeshaWeddingCard from "../assets/images/ganesha.png";
import favourBoxWeddingCard from "../assets/images/wedfavour.png";
import themeWeddingCard from "../assets/images/themewed.png";
import vintageWeddingCard from "../assets/images/vintagewed.png";
import peacockWeddingCard from "../assets/images/elegantpeacock.png";
import uniqueWeddingCard from "../assets/images/unique.png";
import wardrobeWeddingCard from "../assets/images/wardrope.png";
import editableWeddingCard from "../assets/images/editablecard.png";
import traditionalWeddingCard from "../assets/images/traditionalwed.png";
import scrollWeddingCard from "../assets/images/royalwed.png";
import gatefoldWeddingCard from "../assets/images/gatefoldwed.png";

export const productData = [
  {
    id: 1,
    title: "The Blue Wedding Cards",
    price: 72.25,
    src: blueWeddingCard,
    sku: "SKU001",
    images: [blueWeddingCard, blueWeddingCard],
    description: "Elegant blue card with floral patterns for a royal theme.",
    additionalComments: "Comes with a matching envelope.",
    dimensions: { height: "7in", width: "5in", weight: "100g" },
    variants: [
      { id: "v1", src: ganeshaWeddingCard },
      { id: "v2", src: themeWeddingCard }
    ],
    related: [
      { id: 2, title: "Ganesha Wedding Cards", price: 25.25, src: ganeshaWeddingCard },
      { id: 3, title: "Wedding Cards Favour Box", price: 39.45, src: favourBoxWeddingCard }
    ]
  },
  {
    id: 2,
    title: "Ganesha Wedding Cards",
    price: 25.25,
    src: ganeshaWeddingCard,
    sku: "SKU002",
    images: [ganeshaWeddingCard, ganeshaWeddingCard],
    description: "Traditional design featuring Lord Ganesha blessings.",
    additionalComments: "Ideal for Hindu weddings.",
    dimensions: { height: "6.5in", width: "4.5in", weight: "90g" },
    variants: [],
    related: [{ id: 1, title: "The Blue Wedding Cards", price: 72.25, src: blueWeddingCard }]
  },
  {
    id: 3,
    title: "favour Box Wedding Box",
    price: 39.45,
    src: favourBoxWeddingCard,
    sku: "SKU003",
    images: [favourBoxWeddingCard, favourBoxWeddingCard],
    description: "Stylish favor box to accompany your wedding card set.",
    additionalComments: "Perfect for sweets or small gifts.",
    dimensions: { height: "3in", width: "3in", weight: "50g" },
    variants: [],
    related: [{ id: 1, title: "The Blue Wedding Cards", price: 72.25, src: blueWeddingCard }]
  },
  {
    id: 4,
    title: "Theme Wedding Cards",
    price: 60.00,
    src: themeWeddingCard,
    sku: "SKU004",
    images: [themeWeddingCard, themeWeddingCard],
    description: "Luxurious royal-themed card with golden embossing.",
    additionalComments: "Great for premium events.",
    dimensions: { height: "7in", width: "5in", weight: "110g" },
    variants: [],
    related: [{ id: 5, title: "Vintage Theme Card", price: 50.00, src: vintageWeddingCard }]
  },
  {
    id: 5,
    title: "vintage Wedding Card",
    price: 50.00,
    src: vintageWeddingCard,
    sku: "SKU005",
    images: [vintageWeddingCard, vintageWeddingCard],
    description: "Soft pastel tones with minimalist design.",
    additionalComments: "Perfect for modern weddings.",
    dimensions: { height: "6.5in", width: "5in", weight: "95g" },
    variants: [],
    related: [{ id: 4, title: "Theme Wedding Cards", price: 60.00, src: themeWeddingCard }]
  },
  {
    id: 6,
    title: "Peacock Wedding Card",
    price: 45.75,
    src: peacockWeddingCard,
    sku: "SKU006",
    images: [peacockWeddingCard, peacockWeddingCard],
    description: "Charming floral patterns printed on textured paper.",
    additionalComments: "Eco ink and hand-finished.",
    dimensions: { height: "6in", width: "4.5in", weight: "85g" },
    variants: [],
    related: [{ id: 1, title: "The Blue Wedding Cards", price: 72.25, src: blueWeddingCard }]
  },
  {
    id: 7,
    title: "Unique Wedding Card",
    price: 90.00,
    src: uniqueWeddingCard,
    sku: "SKU007",
    images: [uniqueWeddingCard, uniqueWeddingCard],
    description: "Regal scroll invitation with silk cover and tassel.",
    additionalComments: "Royal and antique look.",
    dimensions: { height: "10in", width: "3in", weight: "120g" },
    variants: [],
    related: [{ id: 4, title: "Theme Wedding Cards", price: 60.00, src: themeWeddingCard }]
  },
  {
    id: 8,
    title: "Wardrobe Wedding Card",
    price: 55.00,
    src: wardrobeWeddingCard,
    sku: "SKU008",
    images: [wardrobeWeddingCard, wardrobeWeddingCard],
    description: "Sleek modern look with neutral color palette.",
    additionalComments: "Best for contemporary couples.",
    dimensions: { height: "6in", width: "4.5in", weight: "88g" },
    variants: [],
    related: [{ id: 5, title: "Vintage Theme Wedding Cards", price: 50.00, src: vintageWeddingCard }]
  },
  {
    id: 9,
    title: "Editable Wedding Cards",
    price: 42.99,
    src: editableWeddingCard,
    sku: "SKU009",
    images: [editableWeddingCard, editableWeddingCard],
    description: "Classic designs with intricate border detailing.",
    additionalComments: "Timeless and elegant.",
    dimensions: { height: "7in", width: "5in", weight: "98g" },
    variants: [],
    related: [{ id: 2, title: "Ganesha Wedding Cards", price: 25.25, src: ganeshaWeddingCard }]
  },
  {
    id: 10,
    title: "Traditional Wedding Cards",
    price: 30.00,
    src: traditionalWeddingCard,
    sku: "SKU010",
    images: [traditionalWeddingCard, traditionalWeddingCard],
    description: "Made from 100% recycled paper and soy ink.",
    additionalComments: "Green & clean – save the planet!",
    dimensions: { height: "6.5in", width: "4.5in", weight: "80g" },
    variants: [],
    related: [{ id: 6, title: "Peacock Wedding Card", price: 45.75, src: peacockWeddingCard }]
  },
  {
    id: 11,
    title: "Scrollable Wedding Cards",
    price: 110.00,
    src: scrollWeddingCard,
    sku: "SKU011",
    images: [scrollWeddingCard, scrollWeddingCard],
    description: "Premium foil print with heavy GSM textured paper.",
    additionalComments: "Includes gift wrapping option.",
    dimensions: { height: "7in", width: "5in", weight: "130g" },
    variants: [],
    related: [{ id: 1, title: "The Blue Wedding Cards", price: 72.25, src: blueWeddingCard }]
  },
  {
    id: 12,
    title: "Gatefold Wedding Cards",
    price: 65.00,
    src: gatefoldWeddingCard,
    sku: "SKU012",
    images: [gatefoldWeddingCard, gatefoldWeddingCard],
    description: "Customizable theme-based wedding invitations.",
    additionalComments: "Choose your colors and fonts.",
    dimensions: { height: "7in", width: "5in", weight: "100g" },
    variants: [],
    related: [{ id: 5, title: "Vintage Theme Wedding Cards", price: 50.00, src: vintageWeddingCard }]
  }
];
