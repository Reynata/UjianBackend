const { db } = require('./../connections')

module.exports = {
    postMovie: (req,res)=>{
        let sql=`INSERT INTO movies SET ?`
        db.query(sql, req.body, (err, result) => {
            if(err) return res.status(500).send(err)
            console.log(result)
            sql = `SELECT * FROM movies`
            db.query(sql, (err, result)=>{
                if(err) return res.status(500).send(err)
                console.log(result)
                return res.status(200).send(result)
            })
        })
    },
    getMovies:(req,res)=>{
        console.log(req.query)
        const sql=`SELECT * FROM movies`
        db.query(sql, (err, result)=>{
            if(err) return res.status(500).send(err)
            return res.status(200).send(result)
        })
    }

}