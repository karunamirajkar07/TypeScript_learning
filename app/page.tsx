import Image from "next/image";
interface User {
  name: string;
  id: number;
}

export default function Home() {

  const user = (): User =>{
    return({
      name: "Karuna",
      id:1222
    })
  }

  const check = user()

  const array1 : String[] = ["LAriuan","ajdks", "asdf"]

  function new1() : string{
    return "karuna";
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      <div>{check.name}</div>
<div>{check.id}</div>
      </main>
    </div>
  );
}
