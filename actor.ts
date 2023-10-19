export interface Actor {
    id:number,
    name:string,
    type:ActorType,
    attacks:Attack[],
    saves:SavingThrow[]
    x:number,
    y:number
    
}

export interface Attack {
    id:number,
    name:string,
    save:SavingThrowType
}

export interface SavingThrow{
    id:number,
    name:string,
    value:number
    type:SavingThrowType
}

export enum SavingThrowType {
    blunt,
    edge,
    point,
    fire,
    cold,
    acid,
    holy,
    unholy
}

export enum ActorType {
    Hero,
    Dragon
}
