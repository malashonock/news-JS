import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '8de238c8f3604648b8550c6d1d378b82', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
