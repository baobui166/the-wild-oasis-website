import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid"
import TextExpander from "./TextExpander"
import Image from "next/image"

function Cabin({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin

  return (
    <div className='grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24'>
      <div className='relative scale-[1.15] -translate-x-3'>
        <Image
          fill
          className='object-cover'
          src={image}
          alt={`Cabin ${name}`}
        />
      </div>

      <div>
        <h3 className='text-accent-100 font-black text-7xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%]'>
          Cabin {name}
        </h3>

        <p className='text-lg text-primary-300 mb-10'>
          <TextExpander>
            {description ||
              "Discover the ultimate luxury getaway for couples in the cozy wooden cabin 001. Nestled in a picturesque forest, this stunning cabin offers a secluded and intimate retreat. Inside, enjoy modern high-quality wood interiors, a comfortable seating area, a fireplace and a fully-equipped kitchen. The plush king-size bed, dressed in fine linens guarantees a peaceful nights sleep. Relax in the spa-like shower and unwind on the private deck with hot tub."}
          </TextExpander>
        </p>

        <ul className='flex flex-col gap-4 mb-7'>
          <li className='flex gap-3 items-center'>
            <UsersIcon className='h-5 w-5 text-primary-600' />
            <span className='text-lg'>
              For up to <span className='font-bold'>{maxCapacity}</span> guests
            </span>
          </li>
          <li className='flex gap-3 items-center'>
            <MapPinIcon className='h-5 w-5 text-primary-600' />
            <span className='text-lg'>
              Located in the heart of the{" "}
              <span className='font-bold'>Dolomites</span> (Italy)
            </span>
          </li>
          <li className='flex gap-3 items-center'>
            <EyeSlashIcon className='h-5 w-5 text-primary-600' />
            <span className='text-lg'>
              Privacy <span className='font-bold'>100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Cabin
