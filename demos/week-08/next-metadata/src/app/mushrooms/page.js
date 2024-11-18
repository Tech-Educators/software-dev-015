import Link from "next/link";
import { mushrooms } from "@/stores/mushrooms";

export const metadata = {
    title: "ALL MUSHROOMS",
    description: "Learn more about different mushrooms",
    openGraph: {
      title: 'All mushrooms | Sams Mushroom Tracker',
      image: ['']
    }
  };

export default function MushroomPage() {
    return (
        <div>
            {mushrooms.map((mushroom,index) => (
                <div key={index}>
                    <Link href={`mushrooms/${mushroom.slug}`}>
                        {/* <img src={mushroom.image}/> */}
                        <h3>{mushroom.slug}</h3>
                    </Link>
                </div>
            ))}
        </div>
    )
}