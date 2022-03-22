function solve(input) {
    let regex =
        /(?<!\S)[a-zA-Z]+([\.\-\_]*[A-Za-z]+)*@[a-zA-Z]+([\.\-]*[A-Za-z]+)*(\.[A-Za-z]+)/g;
    let result = input.match(regex);
    for (const line of result) {
        console.log(line);

    }
}
solve("Please contact us at: support@github.com.")
solve("Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.")
solve("Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.")
