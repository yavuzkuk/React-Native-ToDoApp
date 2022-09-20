import React, { useState } from "react";
import { View,Text, Button, TextInput } from "react-native";
import styles from "./footerComp_style"

const footerComp = (props) => {

    return (
        <View style={styles.container}>
            <TextInput value={props.text} style={styles.textinput} placeholder="Ara.." onChangeText={props.settext}></TextInput>
            <Button style={styles.buttonStyle} color={"orange"} title="Gönder..." onPress={props.press}></Button>
        </View>
    )
}

export default footerComp;