import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import RNPickerSelect from "react-native-picker-select"
import local from './local.json' //아이템 정보 불러오기


//메인 화면 시/군/구 picker component
function TownSelector({currentCity, onChange}) {

    const item = []

    local.city.forEach(function(val, i) {
        if(val === currentCity) {
            local.town[i].forEach(function(v) {
                item.push({label: v, value: v})
            })
        }
    })

    return (
        <View style={styles.eachSelector}>
            <Text style={{
                textAlign: "center", 
                fontSize: 18, 
                color: "#d2de95", 
                width: "20%"
            }}>시/군/구</Text>
            <RNPickerSelect
                onValueChange={value => onChange(value)}
                style={pickerSelectStyles}
                items={item}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    eachSelector: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginVertical: "5%",
    }
})

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        height: 50, 
        width: 200, 
        color: '#000000',
        borderColor: '#000000', 
        borderWidth: 1, 
        borderRadius: 12,
        padding: 10,
        marginLeft: 10
    },
    inputAndroid: {
        fontSize: 16,
        height: 50, 
        width: 200, 
        color: '#000000',
        borderColor: '#000000', 
        borderWidth: 1, 
        borderRadius: 12,
        padding: 10
    }
});

export default TownSelector