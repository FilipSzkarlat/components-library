import React from 'react';
import errorIcon from './BannerIcons/errorIcon.svg';
import successIcon from './BannerIcons/successIcon.svg';
import warningIcon from './BannerIcons/warningIcon.svg';
import neutralIcon from './BannerIcons/neutralIcon.svg';


export default function Banner({children, type='neutral'}) {
    const [state, setState] = React.useState(type);

    React.useEffect(() => {
        switch (type) {
            case 'success':
                setState({icon: successIcon, title: 'Congratulations!'});
                break;
            case 'warning':
                setState({icon: warningIcon, title: 'Attention'});
                break;
            case 'error':
                setState({icon: errorIcon, title: 'There is a problem with your application'});
                break;
            case 'neutral':
                setState({icon:  neutralIcon, title: 'Update available'});
                break;
        }
    }, [type]);
            

    return (
        <div className={`banner ${type}`}>
            <img src={state.icon} alt="Banner Icon" className="icon" />
            <div className="text">
                <span className="title">{state.title}</span>
                {children}
            </div>
        </div>
    );
}