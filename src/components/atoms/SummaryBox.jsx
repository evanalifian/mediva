export default function SummaryBox({ head, body }) {
  return (
    <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm text-center md:text-left">
      <p className="text-slate-400 text-[8px] font-black uppercase tracking-widest mb-0.5">
        {head}
      </p>
      <p className="text-base md:text-lg font-bold text-slate-800 tracking-tight">
        {body}
      </p>
    </div>
  );
}
