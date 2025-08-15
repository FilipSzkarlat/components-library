
import cardIcon from './CardIcons/cardIcon.svg';

export default function Card({ children, icon=cardIcon, title='Easy Deployment' }) {
  return (
    <div className='card'>
        <img src={icon} alt="" />
        <h2>{title}</h2>
        {children}
    </div>
  );
}