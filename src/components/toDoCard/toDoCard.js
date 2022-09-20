import React from "react";
import { View,Text } from "react-native";
import styles from "./toDoCardStyle"

const toDoCard = props => {
    return(<View style={styles.container}>
            <Text style={styles.container_text}>{props.value.title}</Text>
        </View>
    )
}


export default toDoCard;