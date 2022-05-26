require('./db/connection');
const yargs = require("yargs")
const mongoose = require("mongoose");
const { addMovie } = require('./movie/functions');

const app = async (yargsObj) => {
if (yargsObj.add) {
    await addMovie({ title: yargsObj.title, actor: yargsObj.actor })
} else if (yargsObj.list) {

} else if (yargsObj.update) {

} else if (yargsObj.delete) {

} else {
    console.log("Incorrect command")

}


await mongoose.disconnect();
}