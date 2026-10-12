import "@/app/tiptap.css";

export default function News({ html }: { html: string }) {
  return (
    <div className="blog-content" >
      <div
        className="px-4 mt-3 "
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
