"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import toast from "react-hot-toast/headless";

import useAuthModal from "@/Hooks/useAuthModal";
import { useUser } from "@/Hooks/useUser";
import Button from "./Button";
import { supabase } from "@supabase/auth-ui-shared";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const authModal = useAuthModal();
  const router = useRouter();

  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();

    // TODO: Reset any playing songs
    router.refresh();

    // TODO: toast the message (toast not working)
    if (error) {
      toast.error(error.message);
    } else toast("Success!");
  };

  return (
    <div
      className={twMerge(
        `
        h-fit
        bg-gradient-to-b
        from-[#006C67]
        p-6
    `,
        className
      )}
    >
      <div
        className="
      w-full
      mb-4
      flex
      items-center
      justify-between
      "
      >
        <div
          className="
        hidden
        md:flex
        gap-x-2
        items-center
        "
        >
          <button
            onClick={() => router.back()}
            className="
          rounded-full
          bg-black
          flex
          items-center
          justify-center
          hover:opacity-75
          transition"
          >
            <RxCaretLeft size={35} />
          </button>
          <button
            onClick={() => router.forward()}
            className="
          rounded-full
          bg-black
          flex
          items-center
          justify-center
          hover:opacity-75
          transition"
          >
            <RxCaretRight size={35} />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button
            className="
          rounded-full
          p-2
          bg-white
          flex
          items-center
          justify-center
          hoverLopacity-75
          transition"
          >
            <HiHome className="text-black" size={30} />
          </button>
          <button
            className="
          rounded-full
          p-2
          bg-white
          flex
          items-center
          justify-center
          hoverLopacity-75
          transition"
          >
            <BiSearch className="text-black" size={30} />
          </button>
        </div>
        <div
          className="
          clex
          justify-between
          items-center
          gap-x-4"
        >
          {/* Buttons for user authentication */}
          {user ? (
            <div className="flex gap-x-4 items-center">
              <Button
                onClick={handleLogout}
                className="bg-[#cec9bb00] text-white ps-4 py-2"
              >
                Logout
              </Button>
              <Button
                onClick={() => router.push("/account")}
                className="bg-white"
              >
                <FaUserAlt />
              </Button>
            </div>
          ) : (
            <>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className="
                  bg-transparent
                  text-neutral-300
                  font-medium"
                >
                  Sign up
                </Button>
              </div>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className="
                  bg-white
                  px-6
                  py-2   
                "
                >
                  Login
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
