import LinkNav from "./LinkNav";
import Button from "./Button";
import Logo from "./Logo";

export const Header = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Logo />
          <LinkNav />
          <Button />
          </div>
        </nav>
      </div>
    );
  };

  export default Header
