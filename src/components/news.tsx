import "@/app/tiptap.css";

export default function News({html}:{html:string}){
    return <div className="px-4 mt-3" dangerouslySetInnerHTML={{ __html: html }} />
}