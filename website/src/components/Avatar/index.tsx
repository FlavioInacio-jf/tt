import { ReactNode } from 'react';
import { BsFillAlarmFill, BsFillBugFill, BsFillGeoFill } from 'react-icons/bs';

type AvatarProps  = {
  icon? : number;
  className? : string;
}

type AvatarsType  = {
  [key : number]: ReactNode
}

export function Avatar ({icon, className} : AvatarProps) {

  const icons : AvatarsType =  {
    1 : <BsFillAlarmFill  />,
    2 : <BsFillBugFill/>,
    3 : <BsFillGeoFill/>
  }

  return (
    <span className={`${className}`}>
      {icon && icons[icon] }
    </span>
  );
}