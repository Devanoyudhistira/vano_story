import Profileform from "@/components/profile-form";

export default function Page() {
  return (
    <div>
      <main className="flex flex-col gap-1">
        <header className="px-3 py-2" >
          <h1 className="text-3xl font-semibold"> Set up your profile </h1>
          <p className="text-lg font-light" >make profile so people accross the world can interested in you </p>
        </header>
        <Profileform />
      </main>
    </div>
  );
}
