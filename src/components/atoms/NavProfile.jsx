export default function NavProfile() {
  return (
    <div className="flex items-center space-x-3 text-right">
      <div className="hidden sm:block">
        <p className="text-[8px] uppercase tracking-widest text-slate-400 font-black mb-0.5">
          Temu Kembali Informasi
        </p>
        <p className="text-xs font-bold text-slate-700">Kelompok Anonymous</p>
      </div>
      <img
        src="https://ui-avatars.com/api/?name=33&background=2563eb&color=fff"
        className="w-8 h-8 rounded-full border border-white shadow-sm"
      />
    </div>
  );
}
