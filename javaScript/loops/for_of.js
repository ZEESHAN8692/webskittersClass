let a = [
    {
        "id": 1,
        "name": "John",
    },
    {
        "id": 2,
        "name": "Zeeshan",
    },
    {
        "id": 3,
        "name": "Devansh Bhai",
    },
    {
        "id": 4,
        "name": "Rahull",
    },

]

for(i of a){
    // if(i.id <=3){
    //     console.log(i.name);
    // }

    if(i.name.length >4){
        console.log(i.name);
    }
    // console.log(`id = ${i.id}`)
    // console.log(`name = ${i.name}`)
}