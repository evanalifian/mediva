import Logo from "../atoms/Logo";
import NavProfile from "../atoms/NavProfile";

export default function Navbar() {
  return (
    <div class="flex justify-between items-center mb-8 md:mb-12">
      <Logo />
      <NavProfile />
    </div>
  );
}
