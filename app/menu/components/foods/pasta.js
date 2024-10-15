import Image from "next/image";
import PaginatedMenu from "../PaginatedMenu"

export default function Pasta() {
    const pastaItems = [
        { name: "Chicken Pesto", image: "/images/blk-menu/foods/CHICKEN PESTO.png" },
        { name: "Gournment Tuyo", image: "/images/blk-menu/foods/GOURMENT TUYO.png" },
        { name: "Aglio Olio", image: "/images/blk-menu/foods/AGLIO OLIO.png" },
        { name: "Garlic Bread", image: "/images/blk-menu/foods/GARLIC BREAD.png" },
    ];

    return (
        <div>
            <h1 className="text-xl font-semibold border-b border-black p-2 pl-0 border-opacity-50">Pasta</h1>        
            <PaginatedMenu items={pastaItems} />
        </div>
    )
}
