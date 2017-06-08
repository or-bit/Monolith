export default class WebNotification {
    constructor(title, body, iconUrl) {
        this.title = title;
        this.body = body;
        this.iconUrl = iconUrl;
    }

    notify() {
        if (Notification.permission !== 'granted') {
            Notification.requestPermission();
            return {};
        }
        return new Notification(
            this.title,
            { icon: this.iconUrl, body: this.body },
        );
    }
}
