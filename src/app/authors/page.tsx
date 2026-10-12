import Authorcomponent from "@/components/author_card";
import Navbar from "@/components/navbar";
import { getalluser } from "@/models/getalldata";

export default async function Author() {
  const datauser = await getalluser()
  return (
    <main className="overflow-hidden pb-3">
      <Navbar/>
      <header className="py-4 mt-2 px-3 flex flex-col gap-1">      
        <h1 className="text-2xl font-semibold capitalize">
          {" "}
          Author and writer discovery{" "}
        </h1>
        <p className="text-md font-semibold text-gray-400">
          Explore a community of writers and discover the people behind the stories. Browse author profiles, learn about their interests, and find new perspectives, stories, and ideas to read.

        </p>        
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-4 items-center px-2">        
        {datauser.map(e => 
        <Authorcomponent proilfeimage={e.Profile_image} username={e.Name} topic={e.Category} bio={e.Description} id={e._id.toString()} key={e._id.toString()} />
        )}       
      </div>
    </main>
  );
}
