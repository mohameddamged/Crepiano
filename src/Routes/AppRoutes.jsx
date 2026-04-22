import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Pages
import Browse from '../pages/Browse';
import Order from '../pages/Order';
import Menu from '../pages/Menu';
import Confirm from '../pages/Confirm';

function QueryPersistence() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const jid = params.get('jid');

    if (jid) {
      sessionStorage.setItem('customerJid', jid);
      console.log('JID persisted:', jid);
    }
  }, [location.search]);

  return null;
}

export default function AppRoutes() {
  return (
    <>
      <QueryPersistence />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Browse />} />  
          <Route path="/menu" element={<Menu />} />  
          <Route path="/order" element={<Order />} />
          <Route path="/confirm" element={<Confirm />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
