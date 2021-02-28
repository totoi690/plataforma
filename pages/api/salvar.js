import { MongoClient} from "mongodb"
import url from "url"

let cachedDb = null
let cachedClient = null


async function connectToDatabase(uri) {
    if (cachedDb && cachedClient && cachedClient.isConnected()) {
        return [cachedDb, cachedClient]
    }

    const client= await MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    const dbName = url.parse(uri).pathname.substr(1)
    const db = client.db(dbName)
    cachedClient = client
    cachedDb = db
    console.log('MDB connected');
    return [db, client]
}

export default async (request, response) => {
    const { user, dados, func } = request.body
    const db = await connectToDatabase(process.env.MONGODB_URI)
    const collection = db[0].collection('dadosUsuarios')
    switch (func) {

        case "postFirst":
            if (user) {
            await collection.insertOne({
                user: user,
                dados: dados,
                data: new Date()
            })
            console.log('MDB postFirst');
        }
            break

        case "update":
            if (user) {
            await collection.updateOne(
                {user: user
            },
            {$set: {dados: dados, data: new Date()}}
            ,{
                upsert: true
            })
            console.log('MDB update');}
            break
        case "fetch":
            if (user) {
            const fetchData = await collection.findOne(
                {user: user},
                {}, );
                console.log('MDB fetch');
            return response.status(201).json(fetchData)}
        case "close":
                    db[1].close(function () {
                    console.log('MDB disconnected');
                    });
                break
                    
    }
    return response.status(201).json({resultado: `Operação realizada com sucesso!` })
}