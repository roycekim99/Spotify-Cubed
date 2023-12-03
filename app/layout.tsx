import type { Metadata } from "next";
import "./globals.css";
import { Libre_Franklin as Genos } from "next/font/google";

import Sidebar from "@/components/Sidebar";
import Player from "@/components/Player";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import getSongsByUserID from "@/actions/getSongsByUserID";
import getActiveProductsWithPrices from "@/actions/getActiveProductsWithPrices";

const font = Genos({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spotify Cubed",
  description: "Listen to create!",
};

// to not cache this layout component
export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSongs = await getSongsByUserID();
  const products = await getActiveProductsWithPrices();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider products={products} />
            <Sidebar songs={userSongs}>{children}</Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
