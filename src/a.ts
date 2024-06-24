

function hello(myName:string):string {
    return "Hello "+ myName;    
}

const greet = hello("Rahul");

console.log(greet);



// 
// 

function runAfter1s(fn:() => void) {
    setTimeout(() => {
        fn()
    }, 1000);
}

runAfter1s(() => {
    console.log("Hii");
    
})