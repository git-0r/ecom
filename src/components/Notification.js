import { useNotification } from "../contexts/notificationContext";

const Notification = () => {

    const { notification } = useNotification();

    return (
        <>
            {
                notification &&
                <div className="snackbar show-snackbar flex-align-center">
                    <p className="snackbar-content">{notification} !</p>
                </div>
            }
        </>
    )
}

export default Notification;