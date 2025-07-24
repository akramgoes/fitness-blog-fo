import React from 'react';

function Header() {
  return (
    <header style={{
      backgroundColor: '#f000',
      color: 'white',
      fontFamily: 'sans-serif',
      padding: '30px',
      fontSize: '24px'
    }}>
      <h1>Fitness Logo - Welcome!</h1>
    </header>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <h1>Contenu ta7t l-header</h1>
    </div>
  );
}

export default Page;
