
import NavItem from "./NavItem";

const NavItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "About",
      path: "/about",
    },
  ];

 

const LinkNav = () => {
    return (
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {NavItems.map((item) => {
            return <NavItem item={item} />;
          })}
        </ul>
      </div>
    );
  };

  export default LinkNav;