/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const factoryArr = [];
const shootersArr = [];
const neutralsArr = [];
const enemiesArr = []; // 0 production neurtls and enemies
const troopsArr = [];
const bombsArr = [];
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
    let shotsToFire = 5

    for (let i = 0; i < entityCount; i++) {
        var inputs = readline().split(' ');
        const entityId = parseInt(inputs[0]);
        const entityType = inputs[1];
        const arg1 = parseInt(inputs[2]);
        const arg2 = parseInt(inputs[3]);
        const arg3 = parseInt(inputs[4]);
        const arg4 = parseInt(inputs[5]);
        const arg5 = parseInt(inputs[6]);

        //
        if (entityType == 'FACTORY' && factoryArr.length > 0){
            factoryArr[i] = [entityType, arg1, arg2, arg3, arg4, arg5, entityId]
            if(arg1 == mine && (arg2 > 2 && arg3 > 0 || arg2 > 1 && arg3 == 0)){
                shootersArr[i] = [entityType, arg1, arg2, arg3, arg4, arg5, entityId]
            }
            else if (arg1 == neutral){
                neutralsArr[i] = [entityType, arg1, arg2, arg3, arg4, arg5, entityId]
            }
            else if (arg1 != mine){
                enemiesArr[i] = [entityType, arg1, arg2, arg3, arg4, arg5, entityId]
            }
        }
        else if (entityType == 'FACTORY' ){
            factoryArr.push([entityType, arg1, arg2, arg3, arg4, arg5, entityId])
            if(arg1 == mine){
                shootersArr.push([entityType, arg1, arg2, arg3, arg4, arg5, entityId])
            }
            else if (arg1 == neutral){
                neutralsArr.push([entityType, arg1, arg2, arg3, arg4, arg5, entityId])
            }
            for (i = 0; i < shootersArr.length; i++){
                if (shootersArr[i][1] !== 1){
                    shootersArr.splice(i, 1)
                }
                else if (neutralsArr[i][1] !== 0){
                    neutralsArr.splice(i, 1)
                }
                else if (enemiesArr[i][1] == 1){
                    enemiesArr.splice(i, 1)
                }
            }
            
        }

        

        
    }


    console.error(factoryArr)
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
                //let a = entitiesArr.indexOf()
            }
            else if (factoryArr[y][1] == neutral && factoryArr[y][2] > 0){
                for (let i = 3; i > 0; i--){
                    if (targetFactory > -1 && factoryArr[y][2] > factoryArr[targetFactory][2]){
                        targetFactory = y
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
                    }
                    else if (targetFactory = -1){
                        targetFactory = y
                    }
                }
                
            }
        }
        // factoryArr.pop();
        // troopsArr.pop();
        // bombsArr.pop();
        //factoryArr.
    }

    

    if (targetFactory == -1 || myFactory == -1 || myFactory > factoryCount){
        console.log('WAIT')    
    }
    else {
    console.log('MOVE ' + myFactory + ' ' + targetFactory + ' ' + shotsToFire);
    }
}
        