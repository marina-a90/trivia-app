import { httpService } from "./HttpService";
import ChuckClient from 'chucknorris-io';

class ChuckService {
    constructor() {
        this.client = new ChuckClient();
    }

    getRandomJoke(){
        return this.client.getRandomJoke();
    }
}

export const chuckService = new ChuckService();