import { Resource } from "@/app/(other-pages)/resources/page";
import ImpactReport from "@/components/resources/ImpactReport";
import PressReleases from "../resources/PressReleases";
import Articles from "../resources/Articles";
import TVFeature from "../resources/TvFeature";
import BooksAndPdf from "../resources/BooksAndPdf";
import AllResources from "../resources/AllResources";

export type ResourceType =
  | "all"
  | "impact-report"
  | "press-release"
  | "articles"
  | "tv-feature"
  | "books-pdfs";

export const resources: Resource[] = [
  {
    id: "1",
    type: ["all"],
    title: "All Reports",
    description: "Quarterly report of our impact",
    image: "/placeholder.svg?height=300&width=300",
    component: AllResources,
  },
  {
    id: "2",
    type: ["impact-report"],
    title: "Our Impact Report",
    description: "Quarterly report of our impact",
    image: "/placeholder.svg?height=300&width=300",
    component: ImpactReport,
  },
  {
    id: "3",
    type: ["press-release"],
    title: "New Initiative Launch",
    description: "Announcing our latest community program",
    image: "/placeholder.svg?height=300&width=300",
    component: PressReleases,
  },
  {
    id: "4",
    type: ["articles"],
    title: "Building Better Communities",
    description: "How our approach creates lasting change",
    image: "/placeholder.svg?height=300&width=300",
    component: Articles,
  },
  {
    id: "5",
    type: ["tv-feature"],
    title: "PBS Special Coverage",
    description: "Our recent feature on public television",
    image: "/placeholder.svg?height=300&width=300",
    component: TVFeature,
  },
  {
    id: "6",
    type: ["books-pdfs"],
    title: "Actions, Boys & Choices",
    description: "A comprehensive manual on teaching Boys about Sexual Abuse",
    image: "/placeholder.svg?height=300&width=300",
    component: BooksAndPdf,
  },
]

export const getResourcesByType = (type: ResourceType): Resource[] => {
  return resources.filter((resource) => resource.type.includes(type))
}

export const getAllResourcesByType = (): Record<ResourceType, Resource[]> => {
  const resourcesByType: Record<ResourceType, Resource[]> = {
    all: [],
    "impact-report": [],
    "press-release": [],
    "articles": [],
    "tv-feature": [],
    "books-pdfs": [],
  }

  resources.forEach((resource) => {
    resource.type.forEach((type: ResourceType) => {
      if (type !== "all") {
        resourcesByType[type].push(resource)
      }
    })
  })

  return resourcesByType
}

