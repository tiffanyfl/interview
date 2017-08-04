import json from './data-json'


/*
* Considering the following JSON : Creating a set of class which make working this the provided JSON Stream easy
* TIP : You should build multiple classes with static methods.
* TIP 2 : You will need Babel to transpile your ES 6 code.
*           - Everything has been pre-made right for your needs.
*                   - Just run npm install (or yarn install)
*                   - And then npm start (or yarn start)
*/

class Mission {
    constructor(){
        this.id;
        this.map;
        this.manutention;
        this.homme2main;
        this.origin_address;
        this.price;
        
    }
    static initJSON(json){
        
        var tempMission = new Mission();
        
        tempMission.origin_address = json.places.origin.formatted_address;
        tempMission.price = json.transaction.customer.price;
        tempMission.map = json.map;
        tempMission.manutention = json.informations.manutention;
        
        return tempMission;
    }
    
    getPrice(){
        return (this.price/100).toFixed(2);
        
    }
}


var mission = Mission.initJSON(json.data);

console.log(mission.origin_address);
console.log(mission.getPrice());

/*
* Bonus Question : Once done, create a React component which will display this mission data
* You can find inspiration on example.png
*/