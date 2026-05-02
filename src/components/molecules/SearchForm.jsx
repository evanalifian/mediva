import { useState } from "react";
import { useNavigate } from "react-router";

export default function SearchForm() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("typing");
  const navigate = useNavigate();

  return (
    <>
      <form
        method='GET'
        autoComplete='off'
        className='glass p-1.5 rounded-xl md:rounded-2xl shadow-lg shadow-blue-100/40 border border-white flex flex-col md:flex-row items-stretch gap-1.5'
        onSubmit={(e) => {
          e.preventDefault();
          setStatus("submitting");
          navigate(`/result?q=${query}`);
        }}>
        <div className='flex-1 flex items-center px-3 py-1.5 md:py-0'>
          <i className='fas fa-search text-slate-400 text-sm mr-2.5'></i>
          <input
            type='text'
            name='query'
            className='w-full bg-transparent outline-none border-none focus:ring-0 text-xs md:text-sm text-slate-700 font-medium placeholder:text-slate-400'
            placeholder='Cari gejala, vaksin...'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={status === "submitting"}
          />
        </div>
        <button
          className='bg-slate-900 text-white px-5 py-2 md:py-2.5 rounded-lg md:rounded-xl text-xs md:text-sm font-bold shadow-md transition-all hover:bg-blue-600 active:scale-95 disabled:bg-slate-200 disabled:text-slate-500 disabled:shadow-none disabled:cursor-not-allowed'
          disabled={query.length === 0 || status === "submitting"}>
          Analyze
        </button>
      </form>
    </>
  );
}
