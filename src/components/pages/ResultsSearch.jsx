import MainLayout from "../templates/MainLayout";
import SummaryGroup from "../molecules/SummaryGroup";
import SearchResults from "../organisms/SearchResults";

export default function ResultsSearch() {
  return (
    <MainLayout>
      <SummaryGroup />
      <SearchResults />
    </MainLayout>
  );
}
