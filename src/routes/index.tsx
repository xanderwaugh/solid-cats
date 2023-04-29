import { Suspense, type Component } from "solid-js";
import { refetchRouteData, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";

const Loading: Component = () => (
  <div class="flex h-full flex-col items-center justify-center">
    <h1 class="text-center text-2xl">Loading...</h1>
  </div>
);

const Home: Component = () => {
  const cat = useRouteData<typeof routeData>();

  return (
    <main class="grid min-h-screen w-full grid-cols-1 place-items-center gap-12 bg-gradient-to-b from-xanny-bg to-[#1b418d] py-12">
      <div class="relative flex w-full max-w-5xl items-center justify-center px-4">
        <Suspense fallback={<Loading />}>
          <img
            src={cat()?.url}
            alt="cat"
            loading="eager"
            // width={cat()?.width} height={cat()?.height}
            sizes="64rem"
            draggable={false}
            // style={{ "image-rendering": "pixelated" }}
            class="max-h-[78vh] w-full max-w-3xl rounded-md object-cover object-center shadow-2xl transition-all duration-300 ease-in-out hover:scale-105"
          />
        </Suspense>
      </div>

      <button
        onClick={() => void refetchRouteData()}
        class="z-0 rounded-md bg-[#77bda0] px-4 py-2 text-white transition-all duration-300 ease-in-out disabled:opacity-50 hover:scale-105 active:scale-95"
      >
        New Cat
      </button>
    </main>
  );
};

export default Home;

export function routeData() {
  return createServerData$(async () => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search", {
      headers: { "x-api-key": process.env.CAT_API_KEY ?? "" },
    });
    const data = (await res.json()) as CatAPIResponse[];
    const cat = data[0] ?? undefined;
    return cat;
  });
}
