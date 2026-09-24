"use client";

import { Createprofile, CreateProfileState, updateprofile } from "@/actions/profile";
import Profilecreation from "./profile-creation";
import Textinput from "./text-input";
import Topicoption from "./topic-option";
import { Button } from "./ui/button";
import { useActionState, useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { Spinner } from "./ui/spinner";

type ProfileAction = (
  topic: string[],
  prev: CreateProfileState,
  formData: FormData
) => Promise<CreateProfileState>;

type profileprops = {
  name?:string,
  bio?:string,
  image?:string,
  usertopic?:string[],
  profileaction:ProfileAction
}

export default function Profileform({name,bio,image,usertopic,profileaction}:profileprops) {
  const [topic, settopic] = useState<Array<string>>(usertopic ?? []);
  const [username,setusername] = useState<string>(name ?? "" )
  const [userbio,setuserbio] = useState<string>(bio ?? "")
  const [profileimage,setprofileimage] = useState<string>(image ?? "")
  const [state, action, pending] = useActionState<CreateProfileState, FormData>(
    profileaction.bind(null, topic),
    null,
  );
  function addtopic(newtopic: string): void {
    if (!topic.includes(newtopic) && topic.length !== 3) {
      settopic((prev) => [...prev, newtopic]);
    }
  }
  function changename(text:string):void{
    setusername(text)
  }
  function changebio(text:string):void{
    setuserbio(text)
  }
  function removetopic() {
    settopic([]);
  }  
  useEffect(() => {
    if (state?.success) {
      redirect("/profile");
    }
  });
  return (
    <form action={action} className="gap-4 flex flex-col items-center px-3">
      <Profilecreation />
      <Textinput changename={changename} changebio={changebio} oribio={userbio} oriname={username} />
      <Topicoption
        removetopic={removetopic}
        topicarray={topic}
        addtopic={addtopic}
      />
      <Button
        type="submit"
        variant={"default"}
        className={`capitalize text-xl`}
        size={"lg"}
        disabled={pending}
      >
        {" "}
       { pending ? "loading" : "create profile"}
       {pending && <Spinner/>}
       {" "}
      </Button>
    </form>
  );
}
