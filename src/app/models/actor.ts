import { SavingThrowType } from "./SavingThrowType";
import { Attack } from "./attack";
import { ActorType } from "./ActorType";
import { SavingThrow } from "./SavingThrow";

export interface Actor {
    id:number,
    name:string,
    type:ActorType,
    attacks:Attack[],
    saves:SavingThrow[]
    x:number,
    y:number
    
}






