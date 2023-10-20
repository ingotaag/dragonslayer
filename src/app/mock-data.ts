import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { ActorType } from './models/ActorType';
import { Actor } from './models/actor';
export class MockData implements InMemoryDbService {
  createDb(
    reqInfo?: RequestInfo | undefined
  ): {} | Observable<{}> | Promise<{}> {
    const actors: Actor[] = [
      {
        id: 1,
        name: 'Beowulf',
        type: ActorType.Hero,
        attacks: [],
        saves: [],
        x: 1,
        y: 1,
      },
      {
        id: 2,
        name: 'Conan',
        type: ActorType.Hero,
        attacks: [],
        saves: [],
        x: 1,
        y: 1,
      },
      {
        id: 3,
        name: 'Aragorn',
        type: ActorType.Hero,
        attacks: [],
        saves: [],
        x: 1,
        y: 1,
      },
      {
        id: 4,
        name: 'He-Man',
        type: ActorType.Hero,
        attacks: [],
        saves: [],
        x: 1,
        y: 1,
      },
      {
        id: 5,
        name: 'Smaug',
        type: ActorType.Dragon,
        attacks: [],
        saves: [],
        x: 1,
        y: 3,
      },
      {
        id:6 ,
        name: 'Smaug',
        type: ActorType.Dragon,
        attacks: [],
        saves: [],
        x: 1,
        y: 3,
      },
    ];

    return actors;
  }
}
