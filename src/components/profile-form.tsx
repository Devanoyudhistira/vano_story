"use client";

import { CreateProfileState } from "@/actions/profile";
import Profilecreation from "./profile-creation";
import Textinput from "./text-input";
import Topicoption from "./topic-option";
import { Button } from "./ui/button";
import { useActionState, useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { Spinner } from "./ui/spinner";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type ProfileAction = (
  topic: string[],
  prev: CreateProfileState,
  formData: FormData,
) => Promise<CreateProfileState>;

type profileprops = {
  name?: string;
  bio?: string;
  image?: string;
  usertopic?: string[];
  profileaction: ProfileAction;
};

export default function Profileform({
  name,
  bio,
  image,
  usertopic,
  profileaction,
}: profileprops) {
  const path = usePathname();
  const updatepath = path.split("/").includes("update");
  const [topic, settopic] = useState<Array<string>>(usertopic ?? []);
  const [username, setusername] = useState<string>(name ?? "");
  const [userbio, setuserbio] = useState<string>(bio ?? "");
  const [profileimage] = useState<string>(image ?? "");
  const [file, setfile] = useState<File | null>(null);
  console.log(file);
  const [state, action, pending] = useActionState<CreateProfileState, FormData>(
    profileaction.bind(null, topic),
    null,
  );
  function addtopic(newtopic: string): void {
    if (!topic.includes(newtopic) && topic.length !== 3) {
      settopic((prev) => [...prev, newtopic]);
    }
  }
  function changename(text: string): void {
    setusername(text);
  }
  function changebio(text: string): void {
    setuserbio(text);
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
      <div className="flex flex-col lg:flex-row lg:gap-4 lg:px-4">
        <Profilecreation
          file={file}
          setfile={setfile}
          oriimage={profileimage}
        />
        <div className="flex flex-col gap-2">
          <Textinput
            changename={changename}
            changebio={changebio}
            oribio={userbio}
            oriname={username}
          />
          <Topicoption
            removetopic={removetopic}
            topicarray={topic}
            addtopic={addtopic}
          />
          <Button
            type="submit"
            variant={"default"}
            className={cn(
              `capitalize  text-xl`,
              (file?.size ?? 0) > 6000000 && "bg-red-500!",
            )}
            size={"lg"}
            disabled={
              pending ||
              topic.length <= 0  ||
              (!updatepath && (!file || file.size > 6000000))
            }
          >
            {" "}
            {pending ? "loading" : "create profile"}
            {pending && <Spinner />}{" "}
          </Button>
        </div>
      </div>
    </form>
  );
}
