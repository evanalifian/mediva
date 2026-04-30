export default function SearchResults() {
  return (
    <div class="space-y-4 mt-6">
      <div class="bg-white p-5 md:p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
        <div class="flex justify-between items-center mb-3">
          <span class="text-[9px] font-black text-blue-600 uppercase tracking-widest">
            Document 1
          </span>
          <span class="text-[10px] font-bold bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded">
            Score: 100
          </span>
        </div>
        <h3 class="text-base md:text-lg font-bold text-slate-800 mb-2 leading-tight">
          Judul Dokumen
        </h3>
        <p class="text-xs md:text-sm text-slate-500 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          mollitia nesciunt incidunt animi. Vitae quod ad ducimus iusto fugit.
          Quod?
        </p>
      </div>
      <p class="text-center text-red-500 mt-6">Tidak ada hasil ditemukan 😢</p>
    </div>
  );
}
