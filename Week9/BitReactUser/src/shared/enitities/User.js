class User {
    constructor(name, last, email, img, date) {
        this.name = name;
        this.last = last;
        this.email = email;
        this.img = img;
        this.date = date;
    }
    hideEmail() {
        return this.email.slice(0, 3)
    }
    setFullName() {
        return this.name + " " + this.last
    }
    setDate() {
        return this.date.slice(0, 10)
    }
}
export { User }