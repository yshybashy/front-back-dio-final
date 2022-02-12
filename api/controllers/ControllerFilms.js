const db = require('../config/db');

module.exports = {
    async insert(req, res){
        let datas = {
            "name": req.body.name,
            "description": req.body.description,
            "image": req.body.image
        }

        try {
            let response = await db.query('INSERT INTO films SET ?', [datas]);
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    },
    async update(req, res){
        let id = req.params.id;

        let datas = {
            "name": req.body.name,
            "description": req.body.description,
            "image": req.body.image
        }

        try {
            let response = await db.query('UPDATE films SET ? WHERE id = ?', [datas, id]);
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    },
    async findAll(req, res){
        try {
            let response = await db.query('SELECT * FROM films');
            res.json(response[0]);
        } catch (error) {
            console.log(error);
        }
    },
    async findById(req, res){
        let id = req.params.id;
        try {
            let response = await db.query(`SELECT * FROM films WHERE id = ${id}`);
            res.json(response[0]);
        } catch (error) {
            console.log(error);
        }
    },
    async delete(req, res){
        let id = req.params.id;

        try {
            let response = await db.query(`DELETE FROM films WHERE id = ${id}`);
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    }
}