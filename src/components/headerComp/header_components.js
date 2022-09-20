import React from "react";
import { View , Text } from "react-native";
import styles from "./header_component_style";

const header = props => {

    return(
        <View style={styles.container}>
            <View style={styles.toDoApp}>
                <Text style={styles.toDoAppText}>ToDoApp</Text>
            </View>
            <View style={styles.numberContainer}>
                <Text style={styles.numberText}>{props.number}</Text>
            </View>
        </View>
    )

}

export default header;