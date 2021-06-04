import { resolvePlugin } from "@babel/core";

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

const dummyFetch = (path: String, callback: Function) => {
    setTimeout(() => {
        if (path.startsWith("/success")) {
            callback(null, { body: `Response body of ${path}` });
        } else {
            callback(new Error("NOT FOUND"));
        }
    }, 1000 * Math.random());
}

dummyFetch("/success/data", (error, data) => {
    if(error) {
        // do nothing
    } else {
        console.log(data);
    }
});

const dummyFetch2 = (path: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        if (path.startsWith("/success")) {
            resolve({ body: `Response body of ${path}` })
        } else {
            reject(new Error("NOT FOUND"))
        }
    });
}

dummyFetch2("/success/data").then(
    (response: any) => {
        console.log(response)
    },
    (error: any) => {
        console.log(error)
    },
);


const promises = [
    Promise.resolve(1),
    Promise.resolve(2),
]

Promise.all(promises).then(
    (promises) => {
         promises.forEach = async (num) => { await console.log(num);}
    }
);