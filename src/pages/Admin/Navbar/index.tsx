import { NavLink } from 'react-router-dom';
import { hasAnyRoles } from 'util/auth';

import { BsCarFrontFill } from 'react-icons/bs';
import { BiCategoryAlt } from 'react-icons/bi';

import './styles.css';

const Navbar = () => {
  return (
    <nav className="admin-nav-container">
      <ul className="admin-nav-items-container">
        <li>
          <NavLink to="/admin/products" className="admin-nav-item">
            <BsCarFrontFill />
            <p>Automóveis</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/categories" className="admin-nav-item ms-3">
            <BiCategoryAlt />
            <p>Categorias</p>
          </NavLink>
        </li>
        {hasAnyRoles(['ROLE_ADMIN']) && (
          <li>
            <NavLink to="/admin/users" className="admin-nav-item">
              <p>Usuários</p>
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
