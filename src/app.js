import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./reducers";
import { Header } from "./components/common";
import LibraryList from "./components/LibraryList";

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <SafeAreaView style={styles.container}>
                <Header headerText="Tech Stack" />
                <LibraryList />
            </SafeAreaView>
        </Provider>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
