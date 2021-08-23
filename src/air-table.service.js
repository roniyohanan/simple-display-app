import Airtable from "airtable";

const base = new Airtable({ apiKey: 'keyEkLwITcVJcpwwR' }).base('appUrw9u2cqmH3Utr');

const getAllData = (setData) =>{
    const data = base('data').select({view: 'Grid view'}).eachPage((records, nextPage)=>{
        setData(records);
        nextPage();
    });
    return data;
}

export default getAllData;