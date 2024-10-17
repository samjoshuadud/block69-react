import Image from "next/image";
import PaginatedMenu from "../PaginatedMenu"

export default function Pasta() {
    const pastaItems = [
        { name: "Chicken Pesto", image: "/images/blk-menu/foods/CHICKEN PESTO.png",
          description: "Tender chicken pieces in a creamy pesto sauce, served over al dente pasta.",
          price: ["Solo: ₱159", "Savor: ₱249"] },
        { name: "Gourmet Tuyo", image: "/images/blk-menu/foods/GOURMENT TUYO.png",
          description: "A Filipino-inspired pasta dish featuring dried fish flakes in olive oil and garlic.",
          price: ["Solo: ₱139", "Savor: ₱229"] },
        { name: "Aglio Olio", image: "/images/blk-menu/foods/AGLIO OLIO.png",
          description: "Classic Italian pasta with garlic, olive oil, and red pepper flakes.",
          price: ["Solo: ₱129", "Savor: ₱219"] },
        { name: "Garlic Bread", image: "/images/blk-menu/foods/GARLIC BREAD.png",
          description: "Crispy baguette slices toasted with garlic butter and herbs.",
          price: ["Solo: ₱79", "Savor: ₱129"] },
    ];

    return (
        <div>
            <h1 className="text-xl font-semibold border-b border-black p-2 pl-0 border-opacity-50">Pasta</h1>        
            <PaginatedMenu items={pastaItems} />
        </div>
    )
}
