import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const homeValues = [
    {
      title: "Clubhouse Sandwich Savor, served with crispy fries and a refreshing 12 oz iced tea.",
      description: "Upgrade your iced tea to 16 oz or any Block 69 beverage for just an additional 20! Don't forget, our Clubhouse Sandwich is also available solo without fries and drink!",
      image: "/images/home_images/clubhouse_design.png",
      link: "/menu"
    },
    {
      title: "Clubhouse Sandwich Savor, served with crispy fries and a refreshing 12 oz iced tea.",
      description: "Upgrade your iced tea to 16 oz or any Block 69 beverage for just an additional 20! Don't forget, our Clubhouse Sandwich is also available solo without fries and drink!",
      image: "/images/home_images/clubhouse_design.png",
      link: "/menu"
    },
    {
      title: "Clubhouse Sandwich Savor, served with crispy fries and a refreshing 12 oz iced tea.",
      description: "Upgrade your iced tea to 16 oz or any Block 69 beverage for just an additional 20! Don't forget, our Clubhouse Sandwich is also available solo without fries and drink!",
      image: "/images/home_images/clubhouse_design.png",
      link: "/menu"
    }
  ]
  return (
    <div className="w-full h-auto ">
      <div>
        {homeValues.map((value, index) => (
          <div key={index} className="h-[40rem] bg-black mb-3 grid grid-cols-2">
            <div className="flex flex-col justify-center items-start p-8 md:p-12 lg:p-16 lg:pl-32">
              <div className="max-w-md">
                <h2 className="text-white text-xl md:text-xl lg:text-2xl font-bold mb-4">
                  {value.title}
                </h2>
                <p className="text-white text-base leading-7 mb-6">
                  {value.description}
                </p>
              </div>
              <Link href="/menu" className="border border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-black transition-colors">
                VIEW MENU
              </Link>
            </div>

            <div className="relative h-full w-full">
              <Image 
                src={value.image} 
                alt={value.title} 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        ))}

        <div className="text-center hidden md:flex justify-center items-center">
          <div className="w-96 my-10">
            <p className="text-black mb-4 font-poppins opacity-80">
              We have a new schedule!
              Starting February 19, 2024, we will operate from 8 AM to 12 AM.
              Will accept dine-ins, take-outs, and deliveries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
