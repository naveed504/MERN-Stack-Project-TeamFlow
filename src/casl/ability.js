import { createMongoAbility, subject } from "@casl/ability";

export const  ability= createMongoAbility([]);

export function updateAbility(user){
    const rules=[];

    if(user?.role?.name === 'admin'){
        //Admin can do anything
        rules.push({action:'manage', subject:'all'})
    }else{
        
        const permissions= user?.role?.permissions || [];
        permissions.forEach(({ action, subject}) =>{
            rules.push({action, subject})
        })
    }
    ability.update(rules)
}