import { auth } from "@/auth";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default async function Navbar() {
  const session = await auth();
  const signOut = () => {};
  return (
    <>
      <header className="px-5 py-3 bg-white shadow-m font-work-sans">
        <nav className="flex justify-between items-center">
          <Link href="/">
            <Image src="/logo.png" alt="Logo Image" width={144} height={3} />
          </Link>
          <div className="flex items-center gap-5 text-black">
            {session && session?.user ? (
              <>
                <Link href="/startup/create">
                  <span>Create</span>
                </Link>
                <button onClick={signOut}></button>
                <Link href={`/user/${session?.id}`}>
                  <span>{session?.user?.name}</span>
                </Link>
              </>
            ) : (
              <form
                action={async () => {
                  "use server";
                  await signIn("github");
                }}
              >
                <span>Login</span>
              </form>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
