import { updateprofile } from "@/actions/profile";
import Profileform from "@/components/profile-form";
import { Userprops } from "@/models/getonedata";
import getuser from "@/models/profile";
import { redirect } from "next/navigation";

export default async function Page() {
    const userdata: Userprops | boolean | null = await getuser();
    if(!userdata){
        redirect("/sign")
    }
    return  <div>
          <main className="flex flex-col gap-1">
            <header className="px-3 py-2" >
              <h1 className="text-3xl font-semibold"> Set up your profile </h1>
              <p className="text-lg font-light" >make profile so people accross the world can interested in you </p>
            </header>
            <Profileform profileaction={updateprofile} name={userdata.Name} bio={userdata.Description} image={userdata.Profile_image} usertopic={userdata.Category} />
          </main>
        </div>
}