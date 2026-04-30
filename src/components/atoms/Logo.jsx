export default function Logo() {
  return (
    <a href="/" class="flex items-center space-x-2 md:space-x-3">
      <div class="w-8 h-8 md:w-9 md:h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-md">
        <i class="fas fa-notes-medical text-sm"></i>
      </div>
      <span class="text-lg md:text-xl font-bold tracking-tight">Mediva</span>
    </a>
  );
}
