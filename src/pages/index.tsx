import Image from "next/image";
import { Inter } from "next/font/google";
import HomeTable from "@/components/test";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      HELLO WORLD
      <Suspense fallback={<p>LOADING.........</p>}>
        <HomeTable />
      </Suspense>
    </main>
  );
}
