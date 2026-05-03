export default function DocCard({ document, score, body, link }) {
  return (
    <div className='bg-white p-5 md:p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all'>
      <div className='flex justify-between items-center mb-3'>
        <span className='text-[9px] font-black text-blue-600 uppercase tracking-widest'>
          Document {document}
        </span>
        <span className='text-[10px] font-bold bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded'>
          Score: {score}
        </span>
      </div>
      <h3 className='text-base md:text-lg font-bold text-slate-800 mb-2 leading-tight'>
        {body}
      </h3>
      <p className='text-xs md:text-sm text-slate-500 leading-relaxed'>
        <a href={link} target="_blank" className="hover:text-blue-500">{link}</a>
      </p>
    </div>
  );
}
