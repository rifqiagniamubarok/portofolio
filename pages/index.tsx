import { useRef, useState } from 'react';

export default function Home() {
  const divRef = useRef(null);
  const [lightMode, setLightMode] = useState(true);

  const handleLighMode = () => {
    if (lightMode && divRef) {
      divRef?.current?.classList.add('dark');
      setLightMode(false);
    } else {
      divRef?.current?.classList.remove('dark');
      setLightMode(true);
    }
  };
  return (
    <div className="" ref={divRef}>
      <div className="min-h-screen min-w-screen dark:bg-slate-950 dark:text-white bg-white text-slate-950">
        <p className="text-3xl font-semibold">Hello</p>
        <div className="m-5">
          <p className="text-[48px] font-semibold">Call me Rifqi</p>
          <p className="text-[48px] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-hexfrom to-hexto">
            I am a Software Engineer hahah
          </p>
          <button
            className="bg-gradient-to-r from-hexfrom to-hexto rounded-md px-10 py-3 text-white text-xs hover:opacity-90 w-[246px]"
            onClick={handleLighMode}
          >
            touch me
          </button>
        </div>
      </div>
    </div>
  );
}
