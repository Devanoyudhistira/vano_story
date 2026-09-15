import moment from "moment";

type props={
    name:string;
    date:string;
}

export default function Newsauthorbar({name,date}:props){
    return <div className="flex items-center gap-2 px-2" >
        <div className="w-9 h-9 rounded-full border-red-400 border" ></div>
        <div className="flex flex-col" >
            <h1 className="text-xs font-medium " > {name} </h1>
            <h5 className="text-xs font-light" > {moment(date).format("dd MMM d YYYY") } </h5>
        </div>
    </div>
}