class User {
    constructor(id) {
        this.id = id;
    }

}

function showUser(id) {
    if (id < 0) {
        throw new Error
        
    } else {
        return new User(id)
    }
}



function showUsers(ids) {
    
    arrUsers = []
    for (id of ids) {
        try{
        arrUsers.push(showUser(id))
        } catch{
            console.log("Error: ID must not be negative")

        }
    }
    return arrUsers
}

console.log (showUsers ([7, -12, 44, 22]));
