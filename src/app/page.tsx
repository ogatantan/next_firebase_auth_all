import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import Login from "~/app/_components/login";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
//   const hello = await api.post.hello({ text: "from tRPC" });

//   void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
           ログイン機能
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Login />
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
