import SearchForm from "../molecules/SearchForm";
import TagGroup from "../molecules/TagGroup";

export default function Hero() {
  return (
    <div class="max-w-2xl mx-auto text-center">
      <h1 class="text-2xl md:text-4xl font-extrabold mb-5 tracking-tight text-slate-900 px-4">
        Lihat Informasi <span class="gradient-text">Kesehatan</span>
      </h1>
      <SearchForm />
      <TagGroup />
    </div>
  );
}
