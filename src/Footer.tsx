function Footer() {
  return (
    <footer className="footer">
      <button className="btn" type="button">
        Order
      </button>
      <h3>time on your planet:</h3>
      <div>{new Date().toLocaleDateString()}</div>
      <div>{new Date().toLocaleTimeString()}</div>
    </footer>
  );
}

export default Footer;
