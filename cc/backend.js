const express=require("express"); 
const app=express(); 
const path=require("path"); 
const{MongoClient}=require("mongodb"); 
app.use(express.json());
app.use(express.urlencoded({extended:true})); 
const uri="mongodb://localhost:27017/Watch";
app.get("/",(req,res)=>{
res.sendFile(path.join(__dirname,"book.html")); });
app.post("/login",(req,res)=>{ const query1=req.body;

const main_1=async()=>{ MongoClient.connect(uri,async(err,client)=>{ if(err)throwerr; const check=awaitclient
.db("Book")
.collection("Books")
.findOne(query1); 
if(check==null){ awaitclient.db("Book").collection("Books").insertOne(query1); client.close(); res.send(`
<h1>Watchinserteddetails</h1>
<h2>Bookmodelname:${req.body.model_name}</h2>
<h2>Bookmodelid:${req.body.model_id}</h2>
<h2>BookmodelPrice:${req.body.model_price}</h2>
<h2>Bookmodelauthor:${req.body.model_auth}</h2>
`);

}else{ res.send(`
<h1>Dataisalreadypresentinthedatabase</h1>
`);

}
}); };
main_1(); });

app.post("/login/update",(req,res)=>{ const query2={ model_name:req.body.model_name, model_auth:req.body.model_auth
}; 
const update={ model_price:req.body.model_price,
};

const main2=async()=>{ MongoClient.connect(uri,async(err,client)=>{ if(err)throwerr; const check=await client.db("Book").collection("Books").findOne(query2);
if(check==null){ res.send(`<h1>Dataisnotpresentinthedatabase</h1>`);
}
else{
awaitclient.db("Book").collection("Books").updateOne(query2,{ $set:update,
});
client.close(); res.send(`
<h1>Bookdateddetails</h1>
<h2>Bookmodelname:${req.body.model_name}</h2>
<h2>Bookmodelid:${req.body.model_id}</h2>
<h2>BookmodelPrice:${req.body.model_price}</h2>
<h2>Bookmodelcompany:${req.body.model_auth}</h2> `);

}
}); };
main2(); });

app.get("/update",(req,res)=>{ res.sendFile(path.join( dirname,"update.html"));
});

app.listen(3004,()=>{ console.log("Listeningtoport3004"); });
