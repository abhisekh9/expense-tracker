"use client"
import { Button } from "@/components/ui/button";
import { useUser, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { user, isSignedIn } = useUser();

  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <div className="flex flex-row items-center">
        {/* LOGO */}
        <Image 
            src={'/chart-donut.svg'}
            alt="logo"
            width={40}
            height={25}
        />
        <span
            className="text-blue-800 font-bold text-xl "
        >
            FinanSmart
         </span>
      </div>
      {
        isSignedIn 
        ? ( <UserButton />) 
        : (
            <div className="flex gap-3 items-center">
                <Link href="/sign-in">
                    <Button 
                        variant="outline"
                        className="rounded-full"
                    >   
                        Dashboard
                    </Button>
                </Link>
                <Link href="/sign-up">
                    <Button
                        className='rounded-full bg-blue-800'>Get started</Button>
                </Link>
            </div>
        )}
    </div>
  );
}

export default Header;
