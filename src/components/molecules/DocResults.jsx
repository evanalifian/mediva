import DocCard from "../atoms/DocCard";

export default function DocResults({ results }) {
  return (
    <div className='space-y-4 mt-6'>
      {results ? (
        results.map((res, i) => <DocCard key={res.document} {...res} />)
      ) : (
        <p className='text-center text-red-500 mt-6'>
          Tidak ada hasil ditemukan 😢
        </p>
      )}
    </div>
  );
}
