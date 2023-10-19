import React from 'react';

function Footer() {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());

  React.useEffect(function update() {
    setInterval(function updateTime() {
      setTime(new Date().toLocaleString());
    }, 1000);
  }, []);

  return (
    <footer className="footer">
      <button className="btn" type="button">
        Order
      </button>
      <h3>time on your planet:</h3>
      <div>{time}</div>
    </footer>
  );
}

export default Footer;
