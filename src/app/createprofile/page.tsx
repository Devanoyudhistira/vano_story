import { Createprofile } from "@/actions/profile";
import Profileform from "@/components/profile-form";
import { Toaster } from "@/components/ui/sonner";
import getuser from "@/models/profile";
import { createClient } from "@/supabase/server";
import { redirect } from "next/navigation";

export default async function Page() {
  const userdata =await getuser()
  const supabase = await createClient()
  const {data} = await supabase.auth.getSession()
  // if(!data.session){
  //   redirect("/sign")
  // }
  // if(userdata){
  //   redirect("/profile")
  // }
  return (
    <div>
      <Toaster/>
      <main className="flex flex-col gap-1">
        <header className="px-3 py-2" >
          <h1 className="text-3xl font-semibold"> Set up your profile </h1>
          <p className="text-lg font-light" >make profile so people accross the world can interested in you </p>
        </header>
        <Profileform profileaction={Createprofile} />
      </main>
    </div>
  );
}
