import Image from "next/image";
import PaginatedMenu from "../PaginatedMenu"

export default function Silog() {
    const silogItems = [
        { name: "Chicken Silog", image: "/images/blk-menu/foods/CHICKSILOG.png" },
        { name: "Tapsilog", image: "/images/blk-menu/foods/TAPSILOG.png" },
        { name: "Luncheon Silog", image: "/images/blk-menu/foods/LUNCHEONSILOG.png" },
        { name: "Bacsilog", image: "/images/blk-menu/foods/BACSILOG.png" },
        { name: "Carrot Rice", image: "/images/blk-menu/foods/CARROT RICE.png" },
        { name: "Plain Rice", image: "/images/blk-menu/foods/PLAIN RICE.png" },
    ];

    return (
        <div>
            <h1 className="text-xl font-semibold border-b border-black p-2 pl-0 border-opacity-50">Silog</h1>        
            <PaginatedMenu items={silogItems} />
        </div>
    )
}
