"use client";

import { CreateProfileState } from "@/actions/profile";
import Profilecreation from "./profile-creation";
import Textinput from "./text-input";
import Topicoption from "./topic-option";
import { Button } from "./ui/button";
import { useActionState, useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { Spinner } from "./ui/spinner";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { toast } from "sonner";

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

type Createresponse = {
  message: string;
  success: boolean;
};

export default function Profileform({
  name,
  bio,
  image,
  usertopic,
  profileaction,
}: profileprops) {
  const path = usePathname();
  const router = useRouter();
  const updatepath = path.split("/").includes("update");
  const [pending, setpending] = useState(false);
  const [topic, settopic] = useState<Array<string>>(usertopic ?? []);
  const [username, setusername] = useState<string>(name ?? "");
  const [userbio, setuserbio] = useState<string>(bio ?? "");
  const [profileimage] = useState<string>(image ?? "");
  const [file, setfile] = useState<File | null>(null);

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

  const formdata = new FormData();
  formdata.append("username", username);
  formdata.append("bio", userbio);
  formdata.append("topic", JSON.stringify(topic));
  if (file) {
    formdata.append("image", file);
  }

  async function createname() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/createuser`,
      {
        method: updatepath ? "PUT" : "POST",
        body: formdata,
      },
    );
    const data: Createresponse = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.message);
    }

    return { data };
  }

  const validation =
    pending ||
    userbio?.length > 200 ||
    userbio?.length < 1 ||
    username?.length > 30 ||
    username?.length < 1 ||
    topic.length <= 0 ||
    (!updatepath && (!file || file.size > 6000000));

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        toast.promise(createname(), {
          position: "top-center",
          loading: "Loading...",
          error: (err) => err.message,
          success: (success) => {
            router.push("/profile");
            return success.data.message;
          },
        });
      }}
      className="gap-4 flex flex-col items-center px-3"
    >
      <div className="flex flex-col lg:flex-row lg:gap-4 lg:px-4">
        <Profilecreation
          file={file}
          setfile={setfile}
          oriimage={profileimage}
        />
        <div className="flex flex-col gap-2">
          <Textinput
            max={200}
            maxname={30}
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
            disabled={validation}
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
