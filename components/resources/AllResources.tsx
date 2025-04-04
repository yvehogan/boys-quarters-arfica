import { getAllResourcesByType, ResourceType } from "../data/resourcesData";
import Articles from "./Articles";
import BooksAndPdf from "./BooksAndPdf";
import ImpactReport from "./ImpactReport";
import PressReleases from "./PressReleases";
import TVFeature from "./TvFeature";

export default function AllResources() {
  const resourcesByType = getAllResourcesByType();

  const tabLabels: Record<ResourceType, string> = {
    "all": "All",
    "impact-report": "Impact Report",
    "tv-feature": "TV Feature",
    "press-release": "Press Release",
    "articles": "Articles",
    "books-pdfs": "Books & PDFs",
  };

  return (
    <div className="space-y-12">
        <Articles />
        <PressReleases />
        <ImpactReport />
        <BooksAndPdf />
        <TVFeature />
    </div>
  );
}