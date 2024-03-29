import classNames from 'classnames/bind';
import styles from './NewItem.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function NewItem({ data }) {

    return (
        <div className={cx('new')}>
                <div className={cx('new-item')}>
                    <div className={cx('left-item')}>
                        <div className={cx('img-blog-left')}>
                            <img className={cx('img-new')} src={data.imgnew} alt={data.titlenew} />
                        </div>
                    </div>
                    <div className={cx('right-item')}>
                        <div className={cx('content-blog')}>
                            <div className={cx('content-right')}>
                                <h3>
                                    <a href=" " title={data.titlenew}>
                                        {data.titlenew}
                                    </a>
                                </h3>
                            </div>
                            <div className={cx('summary-item-blog')}>
                                <p>{data.contentnew}</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

NewItem.prototype = {
    data: PropTypes.object.isRequired,
};

export default NewItem;
