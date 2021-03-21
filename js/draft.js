const arr = ["test", 12, undefined, null, -5, "javascript", "1", false, true, 0 , "!"]
const arrStr = []

for(let i=0;i<arr.length;i++){
    if(typeof arr[i] === 'string'){
        arrStr.push(arr[i])
    }
    
} console.log(arrStr)


const secondArr = [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7]
const maxNum = Math.max.apply(null, secondArr)
console.log(maxNum)

const people = [
    {
        name: "Yura",
        age: 55,
        hobby: ["football", "ski", "hiking"],
        type: "Admin"
    }, 
    {
        name: "Yulian",
        age: 28,
        hobby: ["films", "games", "hiking"],
        type: "user"
    },
    {
        name: "Taras",
        age: 38,
        hobby: ["hunting", "TV", "javascript"],
        type: "user"
    }
] 

const usersArr =[]
function allUsers(){
    for(key in people){
        if(people[key].type === "user"){
            usersArr.push(people[key].name)
        }
    }console.log(`users are: ${usersArr.join(', ')}`)
} 
allUsers()

const hobbyHiking = []
function usersHiking(){
    for(let i =0 ;i<people.length;i++){
        for(let j = 0; j<people[i].hobby.length;j++){
            if(people[i].hobby[j]==="hiking"){
                console.log(people[i].name)
            }
        }
    }
}
usersHiking()

const userJob =["true", "false","true"]
function addJob(){
    for(key in people){
        people[key].job = userJob[key]
    }
    console.log(people)
}
addJob()


let str = 'я так хочу'
console.log(str.indexOf('так'))
