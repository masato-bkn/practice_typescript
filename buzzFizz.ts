let buzzFizz = (): void => {
    let i: number = 1;
    while (i <= 100) {
        if (i % 15 == 0) {
            console.log("BuzzFizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        };
        i++;
    }
};

buzzFizz();
