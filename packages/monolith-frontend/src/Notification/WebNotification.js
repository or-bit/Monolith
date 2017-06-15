export default class WebNotification {
    constructor(title, body, iconUrl) {
        this.title = title;
        this.body = body;
        this.iconUrl = iconUrl;
    }

    createNotification() {
        return new Notification(
            this.title,
            { icon: this.iconUrl, body: this.body },
        );
    }

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
