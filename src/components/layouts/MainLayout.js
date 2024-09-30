import "./mainLayout.css";
import { Link, useNavigate } from "react-router-dom";

function MainLayout({ children }) {
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const navigate = useNavigate();
  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <Link to="/" className="header__nav-link">
            Главная
          </Link>
          <div className="header__nav-alphabet">
            {letters.map((item, index) => {
              return (
                <div key={index}>
                  <button
                    onClick={() => navigate(`/letter/${item}`)}
                    className="header__nav-btn"
                  >
                    {item}
                  </button>
                </div>
              );
            })}
          </div>
        </nav>
      </header>

      <main className="main">{children}</main>
    </>
  );
}

export default MainLayout;
