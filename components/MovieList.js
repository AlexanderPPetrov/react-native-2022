import {View} from "react-native";
import Movie from "./Movie";
import { useSelector } from "react-redux";
export default function MovieList() {


    const movies = useSelector(state => state.movies);

    function renderMovies() {
        return movies.map((movie, index) => {
            return <Movie key={index} movie={movie}></Movie>
        })
    }

    return (
        <View>
            {renderMovies()}
        </View>
    )
}