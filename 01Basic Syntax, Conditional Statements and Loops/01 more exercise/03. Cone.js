function cone(radius, height) {

    let v = (1 / 3)*Math.PI * radius * radius * height;
    let s = Math.PI * radius * [radius + Math.sqrt(radius * radius + height * height)];
    // πr(r + √(r2 + h2))

    console.log(`volume = ${v.toFixed(4)}`);

    console.log(`area = ${s.toFixed(4)}`);

}
cone(3,
    5);
cone(3.3,
    7.8);
