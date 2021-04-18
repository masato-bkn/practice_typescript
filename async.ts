let hello = (greeting: string) : Promise<string> => {
    return new Promise((resolve, reject) => {
        if (greeting == "hello") {
            resolve("hi");
        } else {
            reject("say hello!");
        }
    });
}

hello("hello").then((res) => {
    console.log(res);   
}).catch((err)=> {
    console.log(err);
})

// =======================================================

