import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

const DaylightIcon = ({ isDaytime = true}) => {

  return (
    <section className="h-8 w-8 right-5 -top-2 group-hover:-top-6 absolute rotate-12 transition-all delay-200">
      {isDaytime ? <SunIcon className="text-yellow-500" /> : <MoonIcon />}
    </section>
  )
}

export default DaylightIcon
