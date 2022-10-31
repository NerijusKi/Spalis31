/*function sum(a,b,fn){
    fn()
    return a+b;

}

console.log(sum(5,12, function(){console.log("labas")}))

 */

/*const sum = function(a,b){
    return a + b;
}
console.log(sum(5,12))
 */

/*const sum = (a,b)-> {return a + b;} //arrow funkcija

console.log(sum(5,12))

 */

/*(function ()  //IIFE
{
    const sum = (a,b)=> {return a + b;}

    console.log(sum(5,12))

    let name = "Jonas";
    function showName(){
        let name = "Tadas";
        return name;
}

console.log(name)
})()

 */


/*const users = [
    'Marius',
    'Ieva',
    'Darius',
    'Migle'
];

const printUsers = (data)=>{
for (let vardai of users) {
        if (vardai.length > 5) {
        console.log(vardai)
        }
    }
}

printUsers(users)

 */

/*let students = [
    {
        name: "Jonas",
        lastName: "Jonaitis",
        email:"jonas@jonaitis.lt",
        score: 125.8
    },
    {
        name: "Vardenis",
        lastName: "Pavardenis",
        email:"vardenis@pavardenis.lt",
        score: 25.8
    },
    {
        name: "Petras",
        lastName: "Petraitis",
        email:"petras@petraitis.lt",
        score: 35.33
    }
]

for(let student in students){
    students = students.filter(student=>student.score>30)
}
console.log(students)




students.sort((a, b) => {
    if a.score < b.score{
        return -1
    }
    if a.score < b.score{
        return 1
    }
    return 0
}
console.log(students)





function sum(...numbers){
    const initialValue = 0;
    const sumWithInitial = numbers.reduce(
        (previousValue, currentValue) => previousValue + currentValue, initialValue
    );
    return sumWithInitial;
}

console.log(sum(23,25,14,15,28))


const tottalPoints = students.reduce(
    ( (previousValue, currentValue) => previousValue + currentValue.score, 0
);

console.log(tottalPoints)


 */



let catalog  = {
    grozine:[
        {
            isbn: "DK8239",
            leidimoMetai: "1989",
            pavadinimas: "Trys muškietininkai",
            puslapiuSkaicius: 455
        },
        {
            isbn: "DK8238",
            leidimoMetai: "1988",
            pavadinimas: "Skrydis",
            puslapiuSkaicius: 322
        },
        {
            isbn: "DK8239D",
            leidimoMetai: "1992",
            pavadinimas: "Pasaulio pakrašty",
            puslapiuSkaicius: 198
        },
        {
            isbn: "DK8250",
            leidimoMetai: "2022",
            pavadinimas: "Keksas",
            puslapiuSkaicius: 215
        },
        {
            isbn: "DK823987",
            leidimoMetai: "2018",
            pavadinimas: "Reksas",
            puslapiuSkaicius: 512
        },
    ],
    edukacine:[
        {
            isbn: "GR8239",
            leidimoMetai: "2022",
            pavadinimas: "Gyvūnai",
            puslapiuSkaicius: 177
        },
        {
            isbn: "AR82399",
            leidimoMetai: "2021",
            pavadinimas: "Augalai",
            puslapiuSkaicius: 188
        },
        {
            isbn: "ARX8239",
            leidimoMetai: "1990",
            pavadinimas: "Literatūra",
            puslapiuSkaicius: 78
        },
        {
            isbn: "GGAR8239",
            leidimoMetai: "2004",
            pavadinimas: "Istorija",
            puslapiuSkaicius: 290
        },

    ],
    mokslineFantastika: [
        {
            isbn: "AR8239",
            leidimoMetai: "2004",
            pavadinimas: "Ateiviai",
            puslapiuSkaicius: 180
        },
        {
            isbn: "AR8239",
            leidimoMetai: "1985",
            pavadinimas: "Vabalas",
            puslapiuSkaicius: 170
        },
        {
            isbn: "AR82398",
            leidimoMetai: "2002",
            pavadinimas: "Gelmės",
            puslapiuSkaicius: 245
        },

    ]
}
for (let kategorija in catalog){
    console.log(kategorija+": "+ kategorija)
    for (let knyga of catalog[kategorija]){
        for (let property in knyga){
            console.log(property,": ",knyga[property])
        }
        console.log("---------------------")
    }
console.log("****************")
}


//console.log(catalog.grozine)
//console.log(catalog.mokslineFantastika)
//console.log(catalog.edukacine)
//console.log(catalog)
