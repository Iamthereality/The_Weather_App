export default class {
    static _getData = async (method) => {
        const _cors = 'https://cors-anywhere.herokuapp.com/';
        const _apiBase = 'https://api.openweathermap.org/data/2.5';
        const _apiKey = '57a918c59e839f082820b96da6f340bb';
        const serverResponse = await fetch(
            `${ _cors }${ _apiBase }${ method }&lang=ru&appid=${ _apiKey }`,
            {
                headers: { 'X-Requested-With': 'application/json' }
            }
        );
        if (!serverResponse.ok) {
            throw new Error(`Could not fetch data, received ${ serverResponse.status }`);
        }
        return await serverResponse.json();
    };

    static byLocation = async (lat, lon) => {
        return await this._getData(`/weather?lat=${lat}&lon=${lon}`);
    };

    static byCityName = async (cityName) => {
        return await this._getData(`/weather?q=${ cityName }`);
    };
}