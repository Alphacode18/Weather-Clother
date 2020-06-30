class User {
    constructor(name, email, country, state, city) {
        this.name = name;
        this.email = email;
        this.country = country;
        this.state = state;
        this.city = city;
    }

    save() {
        this.id = Math.round(Math.random() * 1000000)
    }
};