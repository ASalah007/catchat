mongosh --host mongo.one.db <<EOF 

rs.isMaster().ismaster || rs.initiate({
  _id: "catchatReplicas",
  members: [
    {
      _id: 1,
      host: "mongo.one.db:27017",
    },
    {
      _id: 2,
      host: "mongo.two.db:27017",
    },
    { 
      _id: 3,
      host: "mongo.three.db:27017",
    },
  ],
})
EOF