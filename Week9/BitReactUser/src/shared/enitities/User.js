class User {
    constructor(name, email, img, date) {
        this.name = name;
        this.email = email;
        this.img = img;
        this.date = date;
    }
    hideEmail() {
        return this.email.slice(0, 3)
    }
}
export { User }