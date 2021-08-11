import * as React from "react"
import { Dimensions } from "react-native"
import { Image, View } from 'react-native'
import { SIZES } from "../constants"
import { COLORS } from "../constants"

function RewardScreen(props) {
    return (
        <>
            <View style={{ flex: 1, backgroundColor: COLORS.black }}>
                <Image
                    style={{
                        width: SIZES.width,
                        height: SIZES.width
                    }}
                    source={require('../assets/Rewards.gif')} />
            </View>
        </>
    )
}

export default RewardScreen
