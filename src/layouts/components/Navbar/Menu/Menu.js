import PropTypes from 'prop-types'
import classNames from 'classnames/bind';
import styles from './MenuNav.module.scss'

const cx = classNames.bind(styles)

function Menu({children}) {
    return ( 
        <nav className={cx('nav-container')}>
            {children}
        </nav>
     );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Menu;