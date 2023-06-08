import axios from 'axios';
import { response } from 'express';
export interface Person {
    name: string;
    age: number;
    nickname: string;
}

axios.get<Person>('http://').then((response) => response.data);

export class BaseRepository<Model> {
    findAll(): Model[] {
        return [];
    }

    async findOne(id: number): Promise<Model> {
        return axios.get<Model>('http://').then((response) => response.data);
    }

    create(obj: Model) {}
}

export class PersonRepository extends BaseRepository<Person> {}
const pRepo = new PersonRepository();
