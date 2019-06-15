class User {
  constructor(name, last, email, img, date, gender) {
    this.name = name;
    this.last = last;
    this.email = email;
    this.img = img;
    this.date = date;
    this.gender = gender;
  }
  hideEmail() {
    return this.email.slice(0, 3) + "..." + this.email.slice(6, 26);
  }
  setFullName() {
    return this.name + " " + this.last;
  }
  setDate() {
    return this.date.slice(0, 10);
  }
}
export { User };
