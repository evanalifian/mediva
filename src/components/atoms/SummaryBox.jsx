export default function SummaryBox({ head, body }) {
  return (
    <div class="bg-white p-3 rounded-xl border border-slate-100 shadow-sm text-center md:text-left">
      <p class="text-slate-400 text-[8px] font-black uppercase tracking-widest mb-0.5">
        {head}
      </p>
      <p class="text-base md:text-lg font-bold text-slate-800 tracking-tight">
        {body}
      </p>
    </div>
  );
}
