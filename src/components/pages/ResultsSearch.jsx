import MainLayout from "../templates/MainLayout";
import SummaryGroup from "../molecules/SummaryGroup";
import DocResults from "../molecules/DocResults";
import { useSearchParams } from "react-router"; // Pastikan package 'react-router-dom' jika di web
import { useEffect, useState } from "react";
import LoadingSpinner from "../atoms/LoadingSpinner";

export default function ResultsSearch() {
  const [searchParams] = useSearchParams();
  // Ambil query langsung dari URL agar selalu sinkron
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState({ results: [] });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let ignore = false;

    async function handleQuery() {
      if (!query) return; // Jangan fetch jika tidak ada query

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
  }, [query]); // <--- Dependency Array: Fetch ulang setiap kali 'query' di URL berubah

  return (
    <MainLayout>
      <SummaryGroup />
      {isLoading ? (
        <LoadingSpinner />
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
