/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

const instructions = 'index.bundle 引入了 index2.bundle 证明可以按需加载一个 bundle 文件作为组件使用';

export default class TextModule extends Component {
    render() {
      let buz1GlobalParam = global.index1Param;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>{'index2.bundle'}</Text>
                <Text style={styles.instructions}> {instructions} </Text>
                <Button title={'按钮'}></Button>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
