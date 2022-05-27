require('./db/connection');
const yargs = require("yargs")
const mongoose = require("mongoose");
const { addMovie, listMovies, deleteMovie, updateMovie } = require('./movie/functions');

const app = async (yargsObj) => {

if (yargsObj.add) {
    await addMovie({ title: yargsObj.title, actor: yargsObj.actor })
} else if (yargsObj.list) {
    await listMovies()
} else if (yargsObj.update) {
    await updateMovie({title: yargsObj.title, actor: yargsObj.newActor}, {new: true});
} else if (yargsObj.delete) {
    await deleteMovie({title: yargsObj.title})
} else {
    console.log("Incorrect command")
}


await mongoose.disconnect();
}

app(yargs.argv);