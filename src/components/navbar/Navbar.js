import {Route, Routes} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        FREELANCE portfolio
      </Link>

      <Pouer>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/project" element={<div>Project</div>} />
          <Route path="/skills" element={<div>Skills</div>} />
          <Route path="/contacts" element={<div>Contacts</div>} />
        </Routes>
      </Pouer>
    </nav>
  );
};

export default Navbar;