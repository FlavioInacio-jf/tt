import { useEffect } from 'react';
import Header from '../../components/Header';
import './styles.scss';

export function Actuators () {
  useEffect(()=>{
    document.title = "Actuators - ControlTT";
  }, [])
  return (
    <div className="content">
      <Header />
      <main>
        This page is not working, yet
      </main>
    </div>
  );
}