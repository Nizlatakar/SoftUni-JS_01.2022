function tri(a, b, c) {

    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    console.log(area);
}
tri(2,    3.5,    4);
tri(3     ,   5.5,        4);