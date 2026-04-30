import SummaryBox from "../atoms/SummaryBox";

export default function SummaryGroup() {
  return (
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
      <SummaryBox head="Avg Length" body="7.00" />
      <SummaryBox head="Docs" body="5" />
      <SummaryBox head="Method" body="BM25" />
      <SummaryBox head="Runtime" body="0.03s" />
    </div>
  );
}
