import { Resource } from "@/app/(other-pages)/resources/page"
import Image from "next/image"

export default function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48 sm:h-56 md:h-64 w-full">
        <Image src={resource.image || "/placeholder.svg"} alt={resource.title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg md:text-xl font-bold mb-2">{resource.title}</h3>
        <p className="text-sm md:text-base text-gray-600">{resource.description}</p>
      </div>
    </div>
  )
}

