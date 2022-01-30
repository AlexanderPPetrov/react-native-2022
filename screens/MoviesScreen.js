import { ScrollView, StyleSheet, RefreshControl } from 'react-native';
import DefaultLayout from "../layouts/Default";
import MovieList from "../components/MovieList";
import { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { getMovies, setMovies } from "../redux/actions";

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function MoviesScreen() {

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
      setRefreshing(true);
      dispatch(setMovies([]));
      wait(1000).then(() => {
        dispatch(getMovies());
        setRefreshing(false)
      });
    }, []);
  

    const dispatch = useDispatch();
    useEffect(() => {
        console.log('dispatch')
        dispatch(getMovies());
    }, [])

  return (
    <DefaultLayout>
        <ScrollView 
        style={styles.container}  
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
            <MovieList/>
        </ScrollView>
    </DefaultLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
