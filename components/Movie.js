import {StyleSheet} from "react-native";
import { 
    Avatar,
    Button,
    Card,
    Title, 
    Paragraph, 
} from 'react-native-paper';
import constants from "../constants";

const Movie = ({movie}) => {

    function getPoster() {
        return `${constants.imageBaseUrl}${movie.poster_path}`;
    }
    return (
        <Card style={styles.container}>
            <Card.Cover source={{ uri: getPoster() }} />

          <Card.Title 
            title={movie.title} 
            subtitle={movie.releaseDate} 
            />
          <Card.Content>
            <Paragraph>
                {movie.overview}
            </Paragraph>
          </Card.Content>
        </Card>
    );
}

export default Movie;

const styles = StyleSheet.create({
    container: {
      marginVertical: 8,
    },
});
  