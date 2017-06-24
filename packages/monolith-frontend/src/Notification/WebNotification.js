/**
 * @class Class that allows you to use web notification.
 * @property title {string}
 * @property body {string}
 * @property iconUrl {string}
 */
export default class WebNotification {
    /**
     * Defines an instance of web notification
     * @param title {string}
     * @param body {string}
     * @param iconUrl {string}
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
