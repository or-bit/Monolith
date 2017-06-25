/**
 * @class Class that allows you to use a web notification.
 * @property title {string} The notification's title
 * @property body {string} The notification's body
 * @property iconUrl {string} The URL where to find the notification's icon
 */
export default class WebNotification {
    /**
     * Defines an instance of web notification
     * @param title {string} The notification's title
     * @param body {string} The notification's body
     * @param iconUrl {string} The URL where to find the notification's icon
     */
    constructor(title, body, iconUrl) {
        this.title = title;
        this.body = body;
        this.iconUrl = iconUrl;
    }

    /**
     * Returns the web notification to render.
     * @returns {Notification}
     */
    createNotification() {
        return new Notification(
            this.title,
            { icon: this.iconUrl, body: this.body },
        );
    }

    /**
     * Manage the notification.
     * @returns {Notification}
     */
    notify() {
        if (Notification.permission !== 'granted') {
            Notification.requestPermission()
                .then((permission) => {
                    if (permission === 'granted') {
                        return this.createNotification();
                    }
                    console.warn('Permission has not been granted.');
                    return {};
                })
                .catch(error => console.error(error));
        }
        return this.createNotification();
    }
}
