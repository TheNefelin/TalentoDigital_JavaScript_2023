export default class Api {
    #url;
    #urLinkCateg;
    #urLink;
    constructor() {
        this.#url = "https://bsite.net/metalflap";
        this.#urLinkCateg = `${this.#url}/links-group`
        this.#urLink = `${this.#url}/links`
    };
    getLinkCategAll() {
        return get(this.#urLinkCateg);
    };
    getLinkCategById(id) {
        return get(`${this.#urLinkCateg}/${id}`);  
    };
    getLinkAll() {
        return get(this.#urLink);
    };
    getLinkById(id) {
        return get(`${this.#urLink}/${id}`);  
    };
};

async function get(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch(e) {
        console.log(`Error Api: ${e}`);
        return [];
    };
};
