import Link from "next/link"

export default function Header (){
  return(
    <header className="p-4 max-w-sm bg-white flex-column text-l m-2">
      <p className="text-xl">Task Manager</p>
        <div className="text-blue-900">
          <Link href={"/board"}><div className="text-white border-2 border-sky-500 w-40 text-center mb-4 mt-4 rounded-full p-1 bg-violet-400">Board</div></Link>
          <Link href={"/"}><div className="text-white border-2 border-sky-500 w-40 text-center rounded-full p-1 bg-violet-400">Landing Page</div></Link>
        </div>        
    </header>
    )
}
