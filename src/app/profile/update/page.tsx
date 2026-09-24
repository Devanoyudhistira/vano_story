import { updateprofile } from "@/actions/profile";
import Profileform from "@/components/profile-form";
import { Userprops } from "@/models/getonedata";
import getuser from "@/models/profile";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function Page() {
  const userdata: Userprops | boolean | null = await getuser();
  if (!userdata) {
    redirect("/sign");
  }
  return (
    <div>
      <main className="flex flex-col gap-1">
        <nav className="bg-slate-50 fixed top-0 left-0 z-30 shadow-2xs  w-screen h-13 px-6 py-1 flex items-center ">
          <Link href={"/profile"}>
            <ArrowLeft className="size-5" />            
          </Link>
          <h1 className="text-xl font-semibold ml-2" > Vano-story </h1>
        </nav>
        <header className="px-3 py-2 mt-12">
          <h1 className="text-3xl font-semibold"> update your profile </h1>
          <p className="text-lg font-light">
            make profile so people accross the world can interested in you{" "}
          </p>
        </header>
        <Profileform
          profileaction={updateprofile}
          name={userdata.Name}
          bio={userdata.Description}
          image={userdata.Profile_image}
          usertopic={userdata.Category}
        />
      </main>
    </div>
  );
}
