// import axios from 'axios'
import ajax from '../utils/ajax'

import axios from 'axios';
import adapter from 'axios/lib/adapters/http';

function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}

let response = null;
beforeAll(async () => {
    const API_URL = 'http://127.0.0.1:3000/static/data/app.json';
    const { data } = await axios.get(API_URL, { adapter });
    response = data;
});

describe('test broken links', () => {
    it('check all links are valid', () => {
        const allLinks = response.data.links;
        const links = [...allLinks.sns, ...allLinks.friends];
        let allLinksAreValid = true;
        for (let i = 0; i < links.length; i++) {
            const item = links[i];
            if (validURL(item.link) === false) {
                // console.log('error link:', item.link);
                allLinksAreValid = false;
                break;
            }
        }
        expect(allLinksAreValid).toBe(true);
    });

    it('check atrributes in app.json', () => {
        const data = response.data;
        expect(data.settings).not.toBe(null);
        expect(data.links.sns.length).toBeGreaterThan(2);
        expect(data.links.friends.length).toBeGreaterThan(1);
        expect(data.projects.length).toBeGreaterThan(5);
    });

})