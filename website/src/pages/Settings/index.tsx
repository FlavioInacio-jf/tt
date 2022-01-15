import { useEffect } from 'react';
import Header from '../../components/Header';
import './styles.scss';

export function Settings() {
  useEffect(()=>{
    document.title = "Settings - ControlTT";
  }, [])
  return (
    <div className="content">
      <Header />
      <main>
        <p>This page is not working, yet</p>
      </main>
    </div>
  );
}