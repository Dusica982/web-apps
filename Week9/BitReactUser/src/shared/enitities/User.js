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
    return this.name[0].toUpperCase() + "" + this.name.slice(1).toLowerCase() + " "
      + this.last[0].toUpperCase() + "" + this.last.slice(1).toLowerCase();
  }
  setDate() {
    return this.date.slice(0, 10);
  }

}
export { User };
