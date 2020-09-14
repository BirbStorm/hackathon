import nextConnect from 'next-connect';
import middleware from '../../middleware/database';
import {ObjectID} from 'mongodb'
const handler = nextConnect();

handler.use(middleware);

//Create a data model with default variables
handler.get(async (req, res) => {
    const { date } = req.query;
    console.log(date)
    const dataModel = {
        "_id": new ObjectID(), 
        "date": date, 
        "calories": { 
            "label": "Calories", 
            "today": 0, 
            "target": 1800, 
            "variant": 200 
        }, 
        "sleep": { 
            "label": "Sleep", 
            "today": 0, 
            "target": 8, 
            "variant": 2 
        }, 
        "exercise": { 
            "label" : "Exercise", 
            "today": 0, 
            "target": 30, 
            "variant": 5 
        }, 
        "weight": { 
            "label" : "Weight", 
            "today": 0, 
            "target": 150, 
            "variant": 10 
        }
    }
    let doc = {}
    // If date in query exists then pull the information from that date 
    // otherwise find a date to start at
    if(date){
        doc = await req.db.collection('health').findOne({date: new Date(date)})
    }
    else {
        doc = await req.db.collection('health').findOne()
    }
    if(doc == null){
        doc = dataModel
    }
    console.log(doc);
    res.json(doc);
});

handler.post(async (req, res) => {
    let data = req.body
    data = JSON.parse(data);
    data.date = new Date(data.date);
    let doc = await req.db.collection('health').updateOne({date: new Date(data.date)}, {$set:data}, {upsert: true})

    res.json({message: 'ok'});
})

export default handler;