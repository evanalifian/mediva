export default function SearchForm() {
  return (
    <form
      action="/result"
      method="GET"
      class="glass p-1.5 rounded-xl md:rounded-2xl shadow-lg shadow-blue-100/40 border border-white flex flex-col md:flex-row items-stretch gap-1.5"
    >
      <div class="flex-1 flex items-center px-3 py-1.5 md:py-0">
        <i class="fas fa-search text-slate-400 text-sm mr-2.5"></i>
        <input
          type="text"
          name="query"
          class="w-full bg-transparent outline-none border-none focus:ring-0 text-xs md:text-sm text-slate-700 font-medium placeholder:text-slate-400"
          placeholder="Cari gejala, vaksin..."
        />
      </div>
      <button class="bg-slate-900 text-white px-5 py-2 md:py-2.5 rounded-lg md:rounded-xl text-xs md:text-sm font-bold hover:bg-blue-600 active:scale-95 transition-all shadow-md">
        Analyze
      </button>
    </form>
  );
}
