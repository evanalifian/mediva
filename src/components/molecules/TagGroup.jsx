import TagLink from "../atoms/TagLink";

export default function TagGroup() {
  return (
    <div className="flex flex-wrap justify-center gap-2 mt-5">
      <TagLink link={`/result?q=demam berdarah`}>Demam berdarah</TagLink>
      <TagLink link={`/result?q=covid-19`}>Convid-19</TagLink>
      <TagLink link={`/result?q=malaria`}>Malaria</TagLink>
      <TagLink link={`/result?q=flu`}>Flu</TagLink>
    </div>
  );
}
