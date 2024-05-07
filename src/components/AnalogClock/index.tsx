import DaylightIcon from "./DaylightIcon.tsx";
import useClock from "./useClock.ts";

const AnalogClock = () => {
    const [timing, isDaytime] = useClock()
    const clockNumbers = Array.from({ length: 12 }, (_, i) => i + 1)
    return (
        <div className="flex w-full cursor-pointer flex-wrap items-center justify-center gap-x-40 gap-y-0 mt-5">
            <div className="group relative flex cursor-pointer items-center justify-center text-sm">
        <DaylightIcon isDaytime={isDaytime} />

        <div
          className={`w-96 h-96 bg-pink-400 text-slate-300 shadow-xl shadow-slate-400 relative flex items-center justify-center rounded-full`}
        >
          {clockNumbers.map((num) => (
            <label
              key={num}
              className={`absolute inset-2 text-2xl text-center`}
              style={{ transform: `rotate(calc(${num}*(360deg/12)))` }}
            >
              <span
                className={`inline-block`}
                style={{ transform: `rotate(calc(${num}*(-360deg/12)))` }}
              >
                {num}
              </span>
            </label>
          ))}

          <section className="box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25); absolute z-50 flex h-4 w-4 justify-center">
            {/* Clock center */}
            <span
              className={`h-4 w-4 -bottom-[3px] bg-slate-200 before:bg-slate-800 absolute z-50 flex rounded-full before:absolute before:left-0.5 before:top-0.5 before:h-3 before:w-3 before:justify-center before:rounded-full`}
            ></span>
            {/* Second hand */}
            <span
              className={`h-[11em] w-[0.09em] bg-slate-300 absolute bottom-1.5 z-30 w-1 origin-bottom rounded-md`}
              style={timing.updateSeconds}
            ></span>
            {/* Minute hand */}
            <span
              className={`h-[11em] w-1 bg-slate-300 absolute bottom-1.5 z-20 origin-bottom rounded-md`}
              style={timing.updateMinutes}
            ></span>
            {/* Hour hand */}
            <span
              className={`h-[6.5em] w-1.5 bg-slate-300 absolute bottom-1.5 z-10 origin-bottom divide-zinc-100 rounded-md`}
              style={timing.updateHours}
            ></span>
          </section>
        </div>
      </div>
        </div>
    );
};
export default AnalogClock