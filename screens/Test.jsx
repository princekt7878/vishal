import React from 'react';
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
// import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import { View, Text, TouchableOpacity } from 'react-native'

const Test = () => {
    return (
        <View>

            <ImageHeaderScrollView
                maxHeight={200}
                minHeight={200}
                headerImage={require("../assets/avignon.jpg")}
                renderForeground={() => (
                    <View style={{ height: 150, justifyContent: "center", alignItems: "center" }} >
                        <TouchableOpacity onPress={() => console.log("tap!!")}>
                            <Text style={{ backgroundColor: "transparent" }}>Tap Me!</Text>
                        </TouchableOpacity>
                    </View>
                )}
            >
                <View style={{ height: 1000 }}>
                    <TriggeringView onHide={() => console.log("text hidden")}>
                        <Text>Scroll Me!</Text>
                    </TriggeringView>
                </View>
            </ImageHeaderScrollView>
        </View>
    );

}

export default Test;
