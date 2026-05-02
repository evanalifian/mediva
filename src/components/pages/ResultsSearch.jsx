import MainLayout from "../templates/MainLayout";
import SummaryGroup from "../molecules/SummaryGroup";
import DocResults from "../molecules/DocResults";
import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";

export default function ResultsSearch() {
  const [searchQuery] = useSearchParams();
  const [results, setResults] = useState({ results: [] });
  const query = searchQuery.get("q");

  useEffect(() => {
    let ignore = false;

    async function handleQuery() {
      const res = await fetchQuery(query);

      if (!ignore) {
        setResults(res);
      }
    }

    handleQuery();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <MainLayout>
      <SummaryGroup />
      <DocResults results={results.results} />
    </MainLayout>
  );
}

function fetchQuery(query) {
  return fetch(`http://127.0.0.1:8080/api/search?q=${query}`, {
    method: "GET",
  }).then((res) => res.json());
}
