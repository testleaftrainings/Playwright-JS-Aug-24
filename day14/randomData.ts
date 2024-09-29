import {faker} from '@faker-js/faker'
export class RandomDataGeneration{
    static getFirstname():string{
        return faker.person.firstName();
    }

    static getcompanyName():string{
        return faker.company.buzzNoun()
    }

}


//const data=new RandomDataGeneration();
//data.getFirstname