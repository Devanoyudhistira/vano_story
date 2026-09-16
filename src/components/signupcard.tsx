import Google from "./icon/google";
import { Button } from "./ui/button";
import { Card, CardAction, CardTitle } from "./ui/card";

export default function Signupcard() {
  return (
    <Card className="px-3 flex-col items-center text-center mt-4" >
      <CardTitle className="text-xl font-semibold capitalize text-center" >Sign here with your email</CardTitle>
      <CardAction className="px-0 justify-center flex w-full" >
        <Button variant={"outline"} className={"flex-row gap-2 items-center py-2"} >
          <Google />
          <h1> Continue with Google </h1>
        </Button>
      </CardAction>
    </Card>
  );
}
