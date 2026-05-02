import DocCard from "../atoms/DocCard";

export default function DocResults({ results }) {
  // console.log(results)
  return (
    <div className='space-y-4 mt-6'>
      {results ? (
        results.map((res, i) => <DocCard key={i} {...res} />)
      ) : (
        <p className='text-center text-red-500 mt-6'>
          Tidak ada hasil ditemukan 😢
        </p>
      )}
    </div>
  );
}
