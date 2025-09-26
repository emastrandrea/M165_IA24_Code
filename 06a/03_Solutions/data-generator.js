/*
* How to generate Testdata
*/
use mflix_labs

//db.movies.drop()
db.movies.find()
db.movies.find().count()

let staffel=1;
let part=1;
let lblStaffel="Staffel 1"
let lblTitle=""
for(let i=0;i<100;i++){
    if (i%10==0) {
        lblStaffel=`Staffel ${staffel}`;
        staffel++;
        part=1;
     }
    db.movies.insertOne({title: `${lblStaffel}: Only Lovers Left Alive - Part_${part}`})
    part++;
}

/*
Remark
let keywords = ["1", "3", "5"]
regex = keywords.join("|");
console.log(regex)
*/

db.movies.find({
    $nor: [
        {title: {$regex: /Staffel [1-8)]/}},
        {title: {$regex: /Part_[1-6]/}}
    ]
})

//Execution Statistik
db.movies.find(
        {title: {$regex: /Staffel [3|6]/}},
).explain('executionStats');
