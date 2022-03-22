function solve(data) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            return `${this.name}, age ${this.age} says Meow\n`;
        }
    }
    let r = '';
    data.map(e => {
        let [name, age] = e.split(' ');
        let cat = new Cat(name, age);
        r += cat.meow();
        return e;
    });

    return r;
}