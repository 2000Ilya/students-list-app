import { isMobile } from 'react-device-detect';
import { LogoIcon } from '@static/icons/logo-icon'

import "./index.css"
import { Link } from '../link'

export const Header = () => {
  return (
    <header className={`header ${(isMobile && 'header__mobile_view') || ''}`}>
      <div className='header-content'>
        <LogoIcon fill={'#49C2E8'} size={42} />
        <span className='header-title'>
          STUDENTS
          <span className='header__user-name'>
            &nbsp;by&nbsp;
            <Link size='20px' url='https://github.com/2000Ilya'>
              2000Ilya
            </Link>
          </span>
        </span>
      </div>
    </header>
  )
}
