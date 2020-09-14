const students = [
    {
    name : "오민형",
     gender : "m",
     age : 18,
     grade : 2,
     printHandler : () => {
        console.log(`오민형은 18 세 입니다.`);
     }
    },
    {
    name : "방효진",
    gender : "fm",
    age : 18,
    grade : 2,
    printHandler : () => {
        console.log(`빙효진은 18세 입니다.`);
     }
    },
];

console.log(students[0].name);

students[0].printHandler();
students[1].printHandler();