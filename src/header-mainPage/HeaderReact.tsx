const Header = ({ goHome }: { goHome: () => void }) => {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="main-header">
      <button className="nav-btn" onClick={goHome}>
        🏠 На главную
      </button>
      <button className="nav-btn" onClick={scrollUp}>
        🔝
      </button>
    </header>
  );
};

export default Header;
