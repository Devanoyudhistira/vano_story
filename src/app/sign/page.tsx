import Featurelist from "@/components/feature-list";
import Signupcard from "@/components/signupcard";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import getuser from "@/models/profile";
import { redirect } from "next/navigation";

export default async function Page() {
  const userdata = await getuser();
  if (userdata) {
    redirect("profile");
  }
  return (
    <div className="flex flex-col " >
      <nav className="px-2 py-1 flex items-center gap-2">
        <h1 className="text-2xl font-bold after:inline-block after:w-2 after:h-2 after:bg-red-500 after:bottom-1 after:rounded-full after:-right-1 after:absolute relative w-max">
          {" "}
          Vanostory{" "}
        </h1>
        <Badge className="font-bold rounded-sm text-xs"> Reader </Badge>
      </nav>
      <Card className="h-screen flex flex-col py-5 gap-1 px-10 items-center lg:w-full w-[80%] self-center lg:px-2">
        <div className="capitalize text-2xl flex flex-col justify-center items-center font-black bg-amber-50 text-red-500 self-start px-4 w-10 h-10 py-1 rounded-sm ">
          V.
        </div>
        <div>
          <CardTitle className="text-2xl my-1 font-bold">
            {" "}
            Read a inspiring story that awaken your{" "}
            <span className="text-red-500 dark:text-red-300"> creativity </span> and
            knowledge{" "}
          </CardTitle>
          <CardDescription className="text-sm font-normal  ">
            {" "}
            read a countless story about sport,politic,movie and many other wide
            your knowledge at{" "}
            <span className="font-serif dark:text-red-600 text-red-50">Vanostory</span>{" "}
          </CardDescription>
        </div>
        <CardContent className="m-0  gap-2">
          <Featurelist text="An ad-free space to explore news and gain new knowledge about our history" />
          <Featurelist text="Save and like stories that you want to remember" />
          <Featurelist text="Join a community of readers who enjoy discovering and discussing new stories" />
        </CardContent>
        <Signupcard />
      </Card>
    </div>
  );
}
