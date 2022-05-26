require('./db/connection');
const yargs = require("yargs")
const mongoose = require("mongoose");
const { addMovie, listMovies, deleteMovie } = require('./movie/functions');

const app = async (yargsObj) => 

{
if (yargsObj.add) {
    await addMovie({ title: yargsObj.title, actor: yargsObj.actor })
} else if (yargsObj.list) {
    await listMovies()
} else if (yargsObj.update) {

} else if (yargsObj.delete) {
    await deleteMovie({title: yargsObj.title})
} else {
    console.log("Incorrect command")

}


await mongoose.disconnect();
}

app(yargs.argv)