const Movie = require('./model');

exports.addMovie = async (movieObj) => {
    try {
        const response = await Movie.create(movieObj);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

exports.listMovies = async () => {
    try {
    const movies = await Movie.find({});
    console.log(movies);
    } catch (error) {
        console.log(error);
    }
}

exports.updateMovie = async (movieObj) => {
    try {
        const editMovie = await Movie.findOneAndUpdate({title: movieObj.title}, {actor: movieObj.newActor}, {new: true});
        if (editMovie.modifiedcount > 0) {
            console.log("Succesfully updated the movie")
        } else {
            console.log("Something went wrong")
            console.log(editMovie)
        }
    } catch (error) {
        console.log(error)
    }
}

exports.deleteMovie = async (movieObj) => {
    try {
        const delMovie = await Movie.deleteOne(movieObj);
        console.log(delMovie);
        if (delMovie.deletedCount > 0) {
            console.log("Succesfully deleted the movie")
        } else {
            console.log("Something went wrong")
        }
    } catch (error) {
        console.log(error)
    }
}
