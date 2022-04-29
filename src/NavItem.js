
const NavItem = ({ item }) => {
    return (
      <li className="nav-item">
        <a className="nav-link" href={item.path}>{item.name}</a>
      </li>
    );
  };

  export default NavItem;