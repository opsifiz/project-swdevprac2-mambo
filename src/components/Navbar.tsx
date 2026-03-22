import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = async () => {
    const session = await getServerSession(authOptions);
    const user = session?.user;
    return (
        <nav className="flex h-16 items-center justify-end w-full">
            <Link href={'/'}><Button variant={'outline'}>Home</Button></Link>
            <Link href={'/reservations'}><Button variant={'outline'}>Reserve</Button></Link>
            {user?
                <Link href={'/api/auth/signout'}><Button variant={'outline'}>Sign Out</Button></Link>
                :
                <Link href={'/api/auth/signin'}><Button variant={'outline'}>Sign In</Button></Link>
            }
        </nav>
    )
}

export default Navbar;