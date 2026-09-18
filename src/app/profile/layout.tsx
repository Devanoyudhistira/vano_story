import getuser from "@/models/profile"
import { redirect } from "next/navigation"

export default async function ProfileLayout({ children }: LayoutProps<"/">) {    
    if(await getuser() === false ){        
        redirect("/sign")
    }
   return <div>
        {children}
    </div>
}
