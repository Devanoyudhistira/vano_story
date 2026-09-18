"use server"

import { createClient } from "@/supabase/server"
import { getoneuserdata,getoneuserdatabyid,Userprops } from "./getonedata"

export default async function getuser():Promise<Userprops | false | null>{
    const supabaseauth = await createClient()
    const {data:{user}} = await supabaseauth.auth.getUser()
    if(!user?.email){
       return false
    }
    const userdata = await getoneuserdata(user?.email)
    return userdata
}
export async function getanotheruser(query:string):Promise<Userprops | false | null>{
    const supabaseauth = await createClient()
    const {data:{user}} = await supabaseauth.auth.getUser()
    if(!user?.email){
       return false
    }
    const userdata = await getoneuserdatabyid(query)
    return userdata
}

 export async function getusername(query: string): Promise<string> {
    const username: Userprops | boolean | null = await getanotheruser(query);
    if (username) return username.Name;
    return "unknown"
  }