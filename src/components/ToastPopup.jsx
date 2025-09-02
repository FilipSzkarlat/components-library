import success from './ToastPopupIcons/success.svg';
import error from './ToastPopupIcons/error.svg';
import warning from './ToastPopupIcons/warning.svg';
import information from './ToastPopupIcons/information.svg';

export default function ToastPopup({type="success"}) {
    let title='Success';
    let message = 'Your work has been saved.';
    let icon = <img src={success} alt="" />;

    if (type === 'error') {
        title = 'Error';
        message = 'Please re-save your work again.';
        icon = <img src={error} alt />;
    } else if (type === 'warning') {
        title = 'Warning';
        message = 'A network error was detected.';
        icon = <img src={warning} alt="" />;
    } else if (type === 'information') {
        title = 'Information';
        message = 'Please read updated information.';
        icon = <img src={information} alt="" />;
    }

    setTimeout(() => {
        const toasts = document.querySelectorAll('.toast-popup-container');
        setTimeout(() => {
            toasts.forEach(toast => {
                toast.style.display = 'none';
            });
        }, 500);
    }, 4000);
    
    return (
            <div className={`toast-popup ${type}`}>
                {icon}
                <div>
                    <h4 className='title'>{title}</h4>
                    <p>{message}</p>
                </div>
            </div>
    )
}
