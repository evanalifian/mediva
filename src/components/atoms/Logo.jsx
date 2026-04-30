export default function Logo() {
  return (
    <a href="/" className="flex items-center space-x-2 md:space-x-3">
      <div className="w-8 h-8 md:w-9 md:h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-md">
        <i className="fas fa-notes-medical text-sm"></i>
      </div>
      <span className="text-lg md:text-xl font-bold tracking-tight">Mediva</span>
    </a>
  );
}
