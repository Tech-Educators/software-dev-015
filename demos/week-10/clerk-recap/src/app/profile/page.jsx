import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function ProfilePage() {
  const user = await currentUser();
  console.log(user.emailAddresses[0].emailAddress);

  return (
    <div>
      <h2>Profile</h2>
      <h2>
        Hello {user.firstName} {user.lastName}
      </h2>
      <Image src={user.imageUrl} alt="Your face" width={300} height={300} />
      <p>
        Feel free to not get in touch at{" "}
        <a href={`mailto:${user.emailAddresses[0].emailAddress}`}>
          {user.emailAddresses[0].emailAddress}
        </a>
      </p>
    </div>
  );
}
