import MainLayout from "../templates/MainLayout";
import SummaryGroup from "../molecules/SummaryGroup";
import DocResults from "../molecules/DocResults";
import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";

export default function ResultsSearch() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState({ results: [] });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let ignore = false;

    async function handleQuery() {
      if (!query) return;

      setIsLoading(true);
      try {
        const res = await fetchQuery(query);
        if (!ignore) {
          setResults(res);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        if (!ignore) setIsLoading(false);
      }
    }

    handleQuery();

    return () => {
      ignore = true;
    };
  }, [query]);

  return (
    <MainLayout>
      <SummaryGroup />
      {isLoading ? (
        <p className='text-center mt-10'>Searching for "{query}"...</p>
      ) : (
        <DocResults results={results.results} />
      )}
    </MainLayout>
  );
}

function fetchQuery(query) {
  return fetch(
    `http://127.0.0.1:8080/api/search?q=${encodeURIComponent(query)}`,
    {
      method: "GET",
    },
  ).then((res) => {
    if (!res.ok) throw new Error("Network response was not ok");
    return res.json();
  });
}
