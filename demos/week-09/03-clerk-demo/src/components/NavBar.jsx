import Link from "next/link";
import {  SignInButton,
    SignedIn,
    SignedOut,
    UserButton,} from "@clerk/nextjs"

    import { auth, currentUser} from '@clerk/nextjs/server'

export default async function NavBar() {

    // if you just need the users id 
    const user = await auth()

    // if you need their image, name, email whatever
    const currentUserObj = await currentUser()



    console.log(user)
    console.log(currentUserObj)

    // if (user.firstName != null) {
    //     return (
    //         <div>
    //             <Link href='/' className="m-8">Home</Link>
    //         <Link href='/users' className="m-8" >User Page</Link>

    //         </div>
    //     )
    // }

    return (
        <div className="flex flex-row m-8">
            
            <Link href='/' className="m-8">Home</Link>
            <Link href='/users' className="m-8" >User Page</Link>

            {currentUserObj && <div>
                {currentUserObj.firstName ? `Hello ${currentUserObj.firstName}` : 'hello'}
                </div>}
            <br />
            {/* if the user is signed in */}
            <SignedIn className="m-8">
                {/* <p>Hello {currentUserObj.firstName}</p> */}
                <UserButton/>
            </SignedIn>

            {/* if they're signed out show them this */}
            <SignedOut className="m-8">
                <SignInButton />
            </SignedOut>
        </div>
    )
}