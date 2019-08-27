let base_person = {
    name: 'calixta',
    last_name: '',
    age: '',
    address: {
        street_name: 'Lui m Campos',
        number: '',
        zip_code: '1425'
    }
}

let server_person = {
    last_name: 'Ochoa',
    age: '27',
}

let new_person = {...base_person, ...server_person}

console.log(new_person)

base_person = {...base_person, ...server_person}


let {name, age} = base_person //mismo resultado console linea 20
console.log(base_person.name, base_person.age) //mismo resultado linea 19

let {name, age} = base_person //mismo resultado console linea 23
console.log(name, age) //mismo resultado linea 22


let {
    name,
    age,
    address: {
        street_name
    }
} = base_person
console.log(name, street_name)


const extractFromPerson = (person, props) => {        //const extractFromPerson = (person, props) => props.map(e => person[e])
    let response = props.map( e => person[e])
    return response
}

console.log(extractFromPerson(base_person, ['age', 'name']))



