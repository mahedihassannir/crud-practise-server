// hey bro getting started


let express = require("express")

let app = express()

let port = process.env.port || 5000



// cors config 

const cors = require('cors')

app.use(cors())

app.use(express.json());


// here is mongodb config


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mh9009060:14OdGtqJ2Hb3Fq8u@cluster0.s7onimz.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection

        const database = client.db("userDb");

        const user = database.collection("user");



        app.get('/user', async (req, res) => {
            let coursor = user.find()
            const result = await coursor.toArray()

            res.send(result)
        })




        app.post('/user', async (req, res) => {

            let user1 = (req.body)




            const result = await user.insertOne(user1);

            res.send(result)

        })


        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error

    }
}
run().catch(console.dir);




// here is mongodb config ends








app.get('/', (req, res) => {
    res.send("server is running ")
})







app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})