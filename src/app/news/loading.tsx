import SkeletonCard from "@/components/skeletonloading";

export default function Loading() {
  const arr = Array(5).fill("1");
;
  return (
    <div className="grid grid-cols-1 grid-rows-1 gap-3 mt-3 lg:mt-0 lg:grid-cols-4">
      {arr.map((e) => (
        <SkeletonCard key={e} />
      ))}
    </div>
  );
}
