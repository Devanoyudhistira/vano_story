
import Featurelist from "@/components/feature-list";
import Signupcard from "@/components/signupcard";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <div>
      <nav className="px-2 py-1 flex items-center gap-2">
        <h1 className="text-2xl font-bold after:inline-block after:w-2 after:h-2 after:bg-red-500 after:bottom-1 after:rounded-full after:-right-1 after:absolute relative w-max">
          {" "}
          DevaStory{" "}
        </h1>
        <Badge className="font-bold rounded-sm text-xs"> Reader </Badge>
      </nav>
      <Card className="h-screen flex flex-col py-5 gap-1 items-center px-2">
        <div className="capitalize text-3xl font-black bg-amber-50 self-start px-4 py-1 rounded-sm ">
          B
        </div>
        <div>
          <CardTitle className="text-2xl my-1 font-bold">
            {" "}
            Read a inspiring story that awaken your{" "}
            <span className="text-red-500"> creativity </span> and
            knowledge{" "}
          </CardTitle>
          <CardDescription className="text-sm font-normal  text-gray-800">
            {" "}
            read a countless story about sport,politic,movie and many other wide
            your knowledge at{" "}
            <span className="font-serif text-red-50">Devastory</span>{" "}
          </CardDescription>
        </div>
        <CardContent className="m-0  gap-2">
          <Featurelist />
          <Featurelist />
          <Featurelist />
        </CardContent>
        <Signupcard/>
      </Card>
    </div>
  );
}
