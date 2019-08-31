// Write your JS here
let hero = {
    name: 'hero',
    heroic: true,
    inventory: [],
    health: 10,
      weapon: { 
       type: 'knife',
       damage: 2
    }
};
    
    
    
    
    // set the health
    /*
    function rest(hero) {
        if (hero.health == 10) {
            return alert('object already has the value 10')
        }else {
            hero.health = 10;
            return hero
        }
    }
    */
   
    function rest(hero) {
        if (hero.health == 10) {
             alert('object already has the value 10')
             return hero.health
        }else {
            hero.health = 10;
            return hero
        }
    }


    // set the equipWeapon
    function equipWeapon(d, t)
    {
       hero.weapon.type=t;
       hero.weapon.damage=d;
    }
    
    
    function pickUpItem(hero, i)
    {
       if ( hero.inventory == [] ) { 
           return null; 
        } 
        else return hero.inventory.push[i]
    }
    
        // function resetWeapon()
        
        // {
        //   hero.weapon=hero.weapon[0];
        // }

        // function resetWeapon()
        // {
        //     hero.weapon.type="test";
        //     hero.weapon.damage=0;
        // }

        function resetHealth(event) {
            return hero.health = 10;
        }

        function resetHealth() {
            hero.health=10;
        }

        function displayStats(){
            return "hero name="+ hero.name +", hero health="+hero.health+ " ,weapon type="+hero.weapon.type+" , weapon damage=" + hero.weapon.damage ;

        }

      
        

       

        
       