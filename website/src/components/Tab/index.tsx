
import styles from './Tab.module.scss';

export function Tab() {
  return (
    <>
      <nav className='nav-tabs'>
        <button className='active' type='button' id='nav-all-tab'>All</button>
        <button type='button' id='nav-active-tab'>Active</button>
        <button type='button' id='nav-inactive-tab'>Inactive</button>
        <button type='button' id='nav-removed-tab'>Removed</button>
      </nav>


      <div className='tab-content'>
        <div className='tab-pane show active' id='nav-active'></div>
        <div className='tab-pane' id='nav-active'></div>
        <div className='tab-pane' id='nav-active'></div>

      </div>
    </>

  );
}