/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

let factoryArr = [];
let shootersArr = [];
let neutralsArr = [];
let enemiesArr = []; // 0 production neurtls and enemies
let troopsArr = [];
let bombsArr = [];
////
const factoryCount = parseInt(readline()); // the number of factories
const linkCount = parseInt(readline()); // the number of links between factories
for (let i = 0; i < linkCount; i++) {
    var inputs = readline().split(' ');
    const factory1 = parseInt(inputs[0]);
    const factory2 = parseInt(inputs[1]);
    const distance = parseInt(inputs[2]);
}
 


// game loop
while (true) {
    const entityCount = parseInt(readline()); // the number of entities (e.g. factories and troops)
    let mine = 1
    let enemy = -1
    let neutral = 0
    let myFactory = -1
    let targetFactory = -1
    let shotsToFire = 4

    for (let i = 0; i < entityCount; i++) {
        var inputs = readline().split(' ');
        const entityId = parseInt(inputs[0]);
        const entityType = inputs[1];
        const arg1 = parseInt(inputs[2]);
        const arg2 = parseInt(inputs[3]);
        const arg3 = parseInt(inputs[4]);
        const arg4 = parseInt(inputs[5]);
        const arg5 = parseInt(inputs[6]);
        const in7 = 0
        const out8 = 0
        //
        if (entityType == 'FACTORY' ){
            factoryArr.push([entityType, arg1, arg2, arg3, arg4, arg5, entityId])
            if(arg1 == mine){
                shootersArr.push([entityType, arg1, arg2, arg3, arg4, arg5, entityId, in7, out8])
            }
            else if (arg1 == neutral){
                neutralsArr.push([entityType, arg1, arg2, arg3, arg4, arg5, entityId, in7, out8])
            }
        }
        else if (entityType == "TROOP"){
            troopsArr.push([entityType, arg1, arg2, arg3, arg4, arg5])
        }
        else if (entityType == "BOMB"){
            bombsArr.push([entityType, arg1, arg2, arg3, arg4, arg5])
        }
    }


    //console.error(factoryArr)
    console.error(bombsArr)
    console.error(troopsArr)
    

    for (let y = 0; y < factoryCount; y++){
        if (factoryArr[y][0] == 'FACTORY'){
            if (factoryArr[y][1] == mine && factoryArr[y][2] > factoryArr[y][3]*2){
                if (myFactory != y){
                    if (myFactory > -1 && factoryArr[y][3] > factoryArr[myFactory][3]){
                        myFactory = y
                    }
                    else if (myFactory = -1){
                        myFactory = y
                    }
                }
            }
            else if (factoryArr[y][1] == neutral && factoryArr[y][2] > 0){
                for (let i = 3; i > 0; i--){
                    if (targetFactory > -1 && factoryArr[y][2] > factoryArr[targetFactory][2]){
                        targetFactory = y
                        if (factoryArr[targetFactory][2] > shotsToFire){
                            shotsToFire = factoryArr[targetFactory][2] 
                        }
                        else if (factoryArr[targetFactory][2] < shotsToFire){
                            shotsToFire = factoryArr[targetFactory][2]
                        }
                        else {
                            shotsToFire = 4
                        }
                    }
                    else if (targetFactory = -1){
                        targetFactory = y
                    }
                }
                
            }
            else if (factoryArr[y][1] == enemy && factoryArr[y][2] > 0){
                for (let i = 3; i > 0; i--){
                    if (targetFactory > -1 && factoryArr[y][2] > factoryArr[targetFactory][2]){
                        targetFactory = y
                        if (factoryArr[targetFactory][2] > shotsToFire){
                            shotsToFire = factoryArr[targetFactory][2] 
                        }
                        else if (factoryArr[targetFactory][2] < shotsToFire){
                            shotsToFire = factoryArr[targetFactory][2] 
                        }
                        else {
                            shotsToFire = 4
                        }
                    }
                    else if (targetFactory = -1){
                        targetFactory = y
                    }
                }
                
            }
        }
    }

    factoryArr = [];
    shootersArr = [];
    neutralsArr = [];
    enemiesArr = [];
    troopsArr = [];
    bombsArr = [];

    if (targetFactory == -1 || myFactory == -1 || myFactory > factoryCount){
        console.log('WAIT')    
    }
    else {
    console.log('MOVE ' + myFactory + ' ' + targetFactory + ' ' + shotsToFire);
    }
}
        