import Image from "next/image";
import { Inter } from "next/font/google";
import HomeTable from "@/components/test";
import { Suspense } from "react";
import { signIn, useSession } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();

  console.log({ session });

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      HELLO WORLD
      <button onClick={() => signIn("github")}>SIGN IN</button>
      <Suspense fallback={<p>LOADING.........</p>}>
        <HomeTable />
      </Suspense>
    </main>
  );
}
