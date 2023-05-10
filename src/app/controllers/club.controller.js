const db = require('../../config/db/connectDB')
const connection = db.connection


class clubController {

    // [GET] /
    async renderHome(req, res) {
        await connection.query('select * from footballclubs', (err, results) => {
            res.render('home', { clubs: results })
        })
    }

    // [POST] /createClub
    async createClub(req, res) {
        const { club } = req.body 
        await connection.query(`insert ignore footballclubs (clubs) values ('${club}')`, (err, results) => {
            if (err) {
                console.log(err.stack)
                res.status(500).json({ message: 'server error!' })
            } else {
                res.redirect('/')
            }
        })
    }

    // [DELETE] /:id/delete
    async deleteClub(req, res) {
        const id = req.params.id

        await connection.query(`delete from footballclubs where id = ${id}`, (err, results) => {
            if (err) {
                console.log(err.stack)
                res.status(500).json({ message: 'server error!' })
            } else {
                res.redirect('/')
            }
        })
    }
}

module.exports = new clubController()