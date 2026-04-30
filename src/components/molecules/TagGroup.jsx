import TagLink from "../atoms/TagLink";

export default function TagGroup() {
  return (
    <div class="flex flex-wrap justify-center gap-2 mt-5">
      <TagLink link="/">Demam berdarah</TagLink>
      <TagLink link="/">Convid-19</TagLink>
      <TagLink link="/">Malaria</TagLink>
      <TagLink link="/">FLu</TagLink>
    </div>
  );
}
