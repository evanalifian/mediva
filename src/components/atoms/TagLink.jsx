export default function TagLink({ children, link }) {
  return (
    <span className="px-3 py-1 bg-white rounded-full text-[9px] md:text-[10px] font-bold text-slate-400 border border-slate-100 shadow-sm cursor-pointer hover:text-blue-600 transition-colors">
      <a href={link}># {children}</a>
    </span>
  );
}
