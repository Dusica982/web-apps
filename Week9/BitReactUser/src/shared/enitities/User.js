class User {
  constructor(name, last, email, img, date) {
    this.name = name;
    this.last = last;
    this.email = email;
    this.img = img;
    this.date = date;
  }
  hideEmail() {
    return this.email.slice(0, 3);
  }
  setFullName() {
    return this.name + " " + this.last;
  }
  setDate() {
    return (
      new Date(this.date).getMonth() + 1 + "-" + new Date(this.date).getDate() + "-" + new Date(this.date).getFullYear()
    );
  }
}

export { User };
