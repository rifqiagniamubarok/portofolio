export default function Home() {
  return (
    <html className="">
      <div className="min-h-screen min-w-screen dark:bg-slate-950 dark:text-white bg-white text-slate-950">
        <p className="text-3xl font-semibold">Hello</p>
        <div className="m-5">
          <p className="text-[48px] font-semibold">Call me Rifqi</p>
          <p className="text-[48px] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-hexfrom to-hexto">
            I am a Software Engineer
          </p>
          <button className="bg-gradient-to-r from-hexfrom to-hexto rounded-md px-10 py-3 text-white text-xs hover:opacity-90 w-[246px]">
            touch me
          </button>
        </div>
      </div>
    </html>
  );
}
