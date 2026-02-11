export interface Product {
    id: string;
    name: string;
    slug: string;
    style: string;
    abv: number;
    ibu: number;
    description: string;
    tasting_notes: string[];
    price: number;
    image: string;
    is_featured?: boolean;
}

export const products: Product[] = [
    {
        id: "1",
        name: "Golden Froth Lager",
        slug: "golden-froth-lager",
        style: "Premium Lager",
        abv: 5.0,
        ibu: 18,
        description: "Our signature brew. Crisp, golden, and infinitely refreshing.",
        tasting_notes: ["Cereal", "Honey", "Floral"],
        price: 14.99,
        image: "/images/lager.png", // Placeholder
        is_featured: true,
    },
    {
        id: "2",
        name: "Obsidian Stout",
        slug: "obsidian-stout",
        style: "Imperial Stout",
        abv: 9.5,
        ibu: 65,
        description: "Dark as night, smooth as velvet. A bold choice for bold evenings.",
        tasting_notes: ["Coffee", "Dark Chocolate", "Roasted Malt"],
        price: 18.99,
        image: "/images/stout.png", // Placeholder
        is_featured: true,
    },
    {
        id: "3",
        name: "Amber Horizon",
        slug: "amber-horizon",
        style: "Amber Ale",
        abv: 5.8,
        ibu: 30,
        description: "Perfectly balanced with a caramel backbone and a hint of citrus.",
        tasting_notes: ["Caramel", "Toasted Bread", "Citrus"],
        price: 15.99,
        image: "/images/amber.png", // Placeholder
        is_featured: true,
    },
    {
        id: "4",
        name: "Hoppy Haze IPA",
        slug: "hoppy-haze-ipa",
        style: "New England IPA",
        abv: 6.8,
        ibu: 45,
        description: "Juicy, hazy, and bursting with tropical fruit aromas.",
        tasting_notes: ["Mango", "Pineapple", "Pine"],
        price: 16.99,
        image: "/images/ipa.png", // Placeholder
        is_featured: true,
    },
];
