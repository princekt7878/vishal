import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import MapView, { Marker } from 'react-native-maps';
import { CardData } from "../Components/Card";
import { AntDesign, Entypo, Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native-gesture-handler';
import { FONTS, COLORS, SIZES, icons } from "../constants";
import { cafeData } from "../data";

const LineDivider = () => {
  return (
    <View style={{ width: 1, paddingVertical: 5 }}>
      <View style={{ flex: 1, borderLeftColor: COLORS.lightGray2, borderLeftWidth: 1 }}></View>
    </View>
  )
}




const CafeDetails = ({ route, navigation }) => {


  const card = [{
    id: 1,
    name: "Tea",
    img: "https://source.unsplash.com/1024x768/?nature",
    rating: 4.5,
    price: 60,
  },


    // {
    //   id: 2,
    //   name: "Coffee",
    //   img: 'https://source.unsplash.com/1024x768/?water',
    //   rating: 4.1,
    //   price: 120,

    // },


    // {
    //   id: 3,
    //   name: "Cold Coffee",
    //   img: 'https://source.unsplash.com/1024x768/?girl',
    //   rating: 3.5,
    //   price: 150,

    // },
    // {
    //   id: 4,
    //   name: "Burger",
    //   img: 'https://source.unsplash.com/1024x768/?tree',
    //   rating: 3.5,
    //   price: 70,

    // },

  ]

  const [book, setBook] = React.useState(null);
  const [myCard, setMyCard] = React.useState(CardData);

  const [visible, setVisible] = useState(false);

  const [count, setCount] = useState(1);
  const [count1, setCount1] = useState(0);

  const [scrollViewWholeHeight, setScrollViewWholeHeight] = React.useState(1);
  const [scrollViewVisibleHeight, setScrollViewVisibleHeight] = React.useState(0);
  const [masterCafeDataSource, setMasterCafeDataSource] = useState(cafeData);

  const indicator = new Animated.Value(0);

  React.useEffect(() => {
    let { book } = route.params;
    setBook(book)
  }, [book])

  // const toggleBottomNavigationView = () => {
  //   //Toggling the visibility state of the bottom sheet
  //   setVisible(!visible);
  // };


  const sheetRef = React.useRef(null);


  function renderBookInfoSection() {
    return (
      <View style={{ flex: 1 }}>



        {/* Navigation header */}

        <View style={{ flexDirection: 'row', paddingHorizontal: SIZES.radius, height: 50, alignItems: 'center' }}>
          <TouchableOpacity
            style={{ marginLeft: SIZES.base }}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={icons.back_arrow_icon}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.white
              }}
            />
          </TouchableOpacity>

          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ ...FONTS.h3, color: COLORS.white }}>{book.name}</Text>
          </View>

          <TouchableOpacity
            style={{ marginRigth: SIZES.base }}
            onPress={() => console.log("Click More")}
          >
            <Image
              source={icons.more_icon}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: COLORS.white,
                alignSelf: 'flex-end'
              }}
            />
          </TouchableOpacity>
        </View>

        {/* Book Cover */}
        <View style={{ flex: 5, paddingTop: SIZES.base, alignItems: 'center' }}>
          {/* <Image
                        source={book.bookFrontCover}
                        resizeMode="cover"
                        style={{
                            flex: 1,
                            width: SIZES.width * .90,
                            height: "auto"
                        }}
                    /> */}
          <SliderBox
            //onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
            dotColor={COLORS.primary}
            inactiveDotColor={COLORS.lightGray}
            paginationBoxVerticalPadding={20}
            autoplay
            circleLoop
            resizeMethod={'resize'}
            resizeMode={'cover'}
            paginationBoxStyle={{
              position: "absolute",
              bottom: 0,
              padding: 0,
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
              paddingVertical: 10
            }}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 0,
              padding: 0,
              margin: 0,
              backgroundColor: "rgba(128, 128, 128, 0.92)"
            }}
            ImageComponentStyle={{ borderRadius: 15, width: '97%', height: '100%', marginTop: 5 }}
            imageLoadingColor="#2196F3"
            images={book.images} />
        </View>

      </View>
    )
  }

  function renderBookDescription() {

    const indicatorSize = scrollViewWholeHeight > scrollViewVisibleHeight ? scrollViewVisibleHeight * scrollViewVisibleHeight / scrollViewWholeHeight : scrollViewVisibleHeight

    const difference = scrollViewVisibleHeight > indicatorSize ? scrollViewVisibleHeight - indicatorSize : 1

    const MapDarkStyle = [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#212121"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#212121"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#181818"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1b1b1b"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#2c2c2c"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#8a8a8a"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#373737"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#3c3c3c"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#4e4e4e"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#3d3d3d"
          }
        ]
      }
    ]
    const ItemView = ({ item }) => {
      return (
        // Flat List Item
        <View style={{ marginVertical: SIZES.base }}>
          <TouchableOpacity
            style={{ flex: 1, flexDirection: 'row', marginHorizontal: SIZES.base }}
            onPress={() => navigation.navigate("CafeDetails", {
              book: item
            })}
          >
            {/* Book Cover */}
            <Image
              source={{ uri: item.img }}
              resizeMode="cover"
              style={{ width: 100, height: 150, borderRadius: 10 }}
            />

            <View style={{ flex: 1, marginLeft: SIZES.radius }}>
              {/* Book name and location */}
              <View>
                <Text style={{ paddingRight: SIZES.padding, ...FONTS.h3, color: COLORS.white }}>{item.name}</Text>
                <Text style={{ ...FONTS.h4, color: COLORS.lightGray }}>{item.location}</Text>
              </View>

              {/* Book Info */}
              <View style={{ flexDirection: 'row', marginTop: SIZES.radius }}>
                <Entypo name="star" size={24} color="gold" />
                <Entypo name="star" size={24} color="gold" />
                <Entypo name="star" size={24} color="gold" />
                <Entypo name="star" size={24} color="gold" />
                <Entypo name="star" size={24} color="white" />

              </View>
              <View style={{ flexDirection: 'row', marginTop: SIZES.base }}>
                {
                  item.facilities.includes("ac") &&
                  <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkGreen, height: 40, borderRadius: SIZES.radius }}>
                    <Image
                      source={icons.ac}
                      resizeMode="contain"
                      style={{
                        width: 25,
                        height: 25,
                        tintColor: COLORS.white
                      }}
                    />
                  </View>
                }
                {
                  item.facilities.includes("wifi") &&
                  <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkRed, height: 40, borderRadius: SIZES.radius }}>
                    <Image
                      source={icons.wifi}
                      resizeMode="contain"
                      style={{
                        width: 25,
                        height: 25,
                        tintColor: COLORS.white
                      }}
                    />
                  </View>
                }
                {
                  item.facilities.includes("parking") &&
                  <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkBlue, height: 40, borderRadius: SIZES.radius }}>
                    <Image
                      source={icons.parking}
                      resizeMode="contain"
                      style={{
                        width: 25,
                        height: 25,
                        tintColor: COLORS.white
                      }}
                    />
                  </View>
                }
                {
                  item.facilities.includes("plug") &&
                  <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkBlue, height: 40, borderRadius: SIZES.radius }}>
                    <Image
                      source={icons.outlet}
                      resizeMode="contain"
                      style={{
                        width: 25,
                        height: 25,
                        tintColor: COLORS.white
                      }}
                    />
                  </View>
                }
                {
                  item.facilities.includes("printer") &&
                  <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkBlue, height: 40, borderRadius: SIZES.radius }}>
                    <Image
                      source={icons.printer}
                      resizeMode="contain"
                      style={{
                        width: 25,
                        height: 25,
                        tintColor: COLORS.white
                      }}
                    />
                  </View>
                }
              </View>


            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ position: 'absolute', top: 5, right: 15 }}
            onPress={() => console.log("Bookmark")}
          >
            <Image
              source={icons.bookmark_icon}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.lightGray
              }}
            />
          </TouchableOpacity>
        </View>


      );
    };

    return (
      <View style={{ flex: 1, flexDirection: 'row', padding: SIZES.padding }}>

        {/* Description */}
        <ScrollView>
          <Text style={{ ...FONTS.h2, color: COLORS.white, marginBottom: SIZES.base }}>Description</Text>
          <Text style={{ ...FONTS.body2, color: COLORS.lightGray, marginBottom: SIZES.padding2 }}>{book.description}</Text>

          {/* {MapView} */}
          {/* <Text style={{ ...FONTS.h2, color: COLORS.white, marginBottom: SIZES.base }}>Location</Text>

          <View style={{
            flex: 1,
            backgroundColor: '#000',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <MapView style={{ width: "100%", height: 200, }}
              customMapStyle={MapDarkStyle}

              region={{
                latitude: book.latitude,
                longitude: book.longitude,
                latitudeDelta: book.latitudeDelta,
                longitudeDelta: book.longitudeDelta,

              }}
            >
              <Marker
                coordinate={book.coordinate}
                title={book.name}
                description={book.description}
              >

              </Marker>
            </MapView>
          </View> */}

          <Text style={{ ...FONTS.h2, color: COLORS.white, marginBottom: SIZES.base, }}>More place</Text>
          <View>
            <FlatList
              data={masterCafeDataSource}
              showsHorizontalScrollIndicator={false}
              renderItem={ItemView}
              keyExtractor={item => `${item.id}`}
              horizontal
            />
          </View>

          <Text style={{ ...FONTS.h2, color: COLORS.white, marginBottom: SIZES.base, marginTop: SIZES.padding }}>Facilities</Text>
          <View >

            <View style={{ flexDirection: 'row', marginTop: SIZES.base }}>
              {
                book.facilities.includes("ac") &&
                <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkGreen, height: 40, borderRadius: SIZES.radius }}>
                  <Image
                    source={icons.ac}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: COLORS.white
                    }}
                  />
                </View>
              }
              {
                book.facilities.includes("wifi") &&
                <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkRed, height: 40, borderRadius: SIZES.radius }}>
                  <Image
                    source={icons.wifi}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: COLORS.white
                    }}
                  />
                </View>
              }
              {
                book.facilities.includes("parking") &&
                <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkBlue, height: 40, borderRadius: SIZES.radius }}>
                  <Image
                    source={icons.parking}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: COLORS.white
                    }}
                  />
                </View>
              }
              {
                book.facilities.includes("plug") &&
                <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkBlue, height: 40, borderRadius: SIZES.radius }}>
                  <Image
                    source={icons.outlet}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: COLORS.white
                    }}
                  />
                </View>
              }
              {
                book.facilities.includes("printer") &&
                <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkBlue, height: 40, borderRadius: SIZES.radius }}>
                  <Image
                    source={icons.printer}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: COLORS.white
                    }}
                  />
                </View>
              }
            </View>

          </View>
        </ScrollView>
      </View>
    )
  }

  function renderBottomButton() {

    const renderItem = ({ item }) => {
      return (
        // {CardView}
        <View style={styles.imageView}>

          <ImageBackground
            source={{ uri: item.img }}
            style={{ width: '100%', height: 120 }}
            imageStyle={{ borderRadius: 30 }}

          >
            {/* <Image style={styles.image}
                            source={require('../../../assets/1.jpg')}
                        /> */}
            <View style={styles.ImageOverlay}></View>
          </ImageBackground>

          <FontAwesome name="rupee" size={22} color={COLORS.white} style={styles.imageHomeIcon} />
          <Text style={styles.ImageText1} >{item.price}</Text>
          <Text numberOfLines={1} style={styles.ImageText}>{item.name}</Text>
          <View style={{
            flexDirection: 'row',
            marginVertical: SIZES.base * 2,
            marginLeft: SIZES.padding * 2
          }}>

            <TouchableOpacity
              style={{
                marginLeft: SIZES.padding,
              }}
              onPress={() => setCount1(count1 - 1)}
            >
              <View style={styles.Minus}>
                <Entypo name="circle-with-minus" size={30} color="white" />

              </View>
            </TouchableOpacity>
            <Text style={styles.panelSubtitle2}>{count1}</Text>

            <TouchableOpacity
              style={{
                marginLeft: 10,
              }}
              onPress={() => setCount1(count1 + 1)}
            >
              <View style={styles.Add}>

                <Ionicons name="add-circle-sharp" size={30} color="white" />
              </View>

            </TouchableOpacity>
          </View>
        </View>
      )
    }


    const renderInner = () => (
      <View style={styles.panel}>
        <Text style={styles.panelTitle}>Confirm your order</Text>
        <View style={{
          flexDirection: 'row',
          marginVertical: SIZES.base * 2
        }}>
          <Text style={styles.panelSubtitle}>Per table price {book.money}</Text>


          <TouchableOpacity
            style={{
              marginLeft: SIZES.padding,
              marginTop: 10
            }}
            onPress={() => setCount(count - 1)}
          >
            <View style={{
              width: 30,
              backgroundColor: COLORS.black,
              borderColor: COLORS.gray1,
              marginHorizontal: SIZES.padding2 / 100,
              borderWidth: 0.5,
              borderRadius: SIZES.radius * 5,
              elevation: 20,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Entypo name="circle-with-minus" size={30} color="white" />

            </View>
          </TouchableOpacity>
          <Text style={styles.panelSubtitle1}>{count}</Text>

          <TouchableOpacity
            style={{
              marginTop: 10,
              marginLeft: 10,
            }}
            onPress={() => setCount(count + 1)}
          >
            <View style={{
              width: 30,
              borderColor: COLORS.gray1,
              borderWidth: 0.5,
              borderRadius: SIZES.radius * 5,
              elevation: 20,
              alignItems: 'center',
              justifyContent: 'center'
            }}>

              <Ionicons name="add-circle-sharp" size={30} color="white" />
            </View>

          </TouchableOpacity>
        </View>
        <Text style={styles.panelSubtitle}>Order Food</Text>

        {/* {FlatList} */}
        <FlatList
          data={card}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
          horizontal={true}
        />

        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.panelSubtitle}>Total Table :-</Text>
          <Text style={styles.panelSubtitle3}>{book.money * count}</Text>

        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.panelSubtitle}>Food Order :-</Text>
          <Text style={styles.panelSubtitle3}>{60 * count1}</Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.panelSubtitle}>Total Price  :-</Text>
          <Text style={styles.panelSubtitle3}>{book.money * count + 60 * count1}</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity
            style={styles.panelButton}
            onPress={() => navigation.navigate('Scanner')}>
            <Text style={styles.panelButtonTitle}>Scan Now</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.panelButton}
            onPress={() => sheetRef.current.snapTo(1)}>
            <Text style={styles.panelButtonTitle}>Cancle</Text>
          </TouchableOpacity>

        </View>
      </View>
    );

    const renderHeader = () => (
      <View style={styles.header}>
        <View style={styles.panelHeader}>
          <View style={styles.panelHandle} />
        </View>
      </View>
    );

    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={{
            height: 60,
            backgroundColor: COLORS.black,
            marginHorizontal: SIZES.base,
            marginVertical: SIZES.base,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: COLORS.white,
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.00,

            elevation: 24,
          }}
          // onPress={toggleBottomNavigationView}

          onPress={() => navigation.navigate('Scanner')}
        >

          <Text style={{ ...FONTS.h3, color: COLORS.white }}> Book Now</Text>
        </TouchableOpacity>
        {/* {Bottomsheet} */}
        <BottomSheet
          ref={sheetRef}
          snapPoints={[330, -20]}
          initialSnap={1}
          enabledContentGestureInteraction={true}
          renderContent={renderInner}
          renderHeader={renderHeader}
        />
      </View>
    )
  }

  if (book) {
    return (
      <View style={{ flex: 1, backgroundColor: COLORS.black }}>

        {/* Book Cover Section */}
        <View style={{ flex: 2 }}>
          {renderBookInfoSection()}
        </View>

        {/* Description */}
        <View style={{ flex: 3 }}>
          {renderBookDescription()}
        </View>

        {/* Buttons */}
        <View style={{ height: 70, marginBottom: 10 }}>
          {renderBottomButton()}
        </View>
      </View>
    )
  } else {
    return (<></>)
  }

}
const styles = StyleSheet.create({
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#FFF',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  },
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
  header: {
    backgroundColor: COLORS.primary,
    shadowColor: COLORS.gray,
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.gray1,
    marginBottom: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: COLORS.black,
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    alignSelf: "center",
    fontSize: 20,
    color: COLORS.white,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 18,
    marginTop: 15,
    color: COLORS.white,
    height: 30,
    marginBottom: 5,
  },
  panelSubtitle3: {
    fontSize: 18,
    marginTop: 15,
    color: COLORS.white,
    height: 30,
    marginHorizontal: SIZES.body1,
    marginBottom: 5,
  },

  panelSubtitle1: {
    paddingLeft: 10,
    fontSize: 20,
    marginTop: 10,
    color: COLORS.white,
    height: 30,
    marginBottom: 5,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.black,
    elevation: 10,
    backgroundColor: COLORS.gray,
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },

  ImageOverlay: {
    position: 'absolute',
    width: '100%',
    height: 120,
    backgroundColor: '#000',
    opacity: 0.1,
    borderRadius: 30,


  },

  imageLocationIcon: {
    position: 'absolute',
    left: 15,
    bottom: 8,
  },
  Minus: {
    backgroundColor: COLORS.black,
    borderColor: COLORS.gray1,
    borderWidth: 0.5,
    borderRadius: SIZES.radius * 5,
    elevation: 20,
  },
  Add: {
    width: 30,
    borderColor: COLORS.gray1,
    borderWidth: 0.5,
    borderRadius: SIZES.radius * 5,
    elevation: 20,
  },
  imageHomeIcon: {
    position: 'absolute',
    left: 10,
    bottom: 45,
  },
  ImageText: {
    position: 'absolute',
    color: COLORS.white,
    fontSize: 18,
    left: 20,
    bottom: 10,
  },
  ImageText1: {
    position: 'absolute',
    color: COLORS.white,
    fontSize: 16,
    left: 30,
    bottom: 48,
  },
  panelSubtitle2: {
    paddingLeft: 4,
    fontSize: 20,
    color: COLORS.white,
    height: 30,
    marginBottom: 5,
  },
  imageView: {
    flex: 1,
    backgroundColor: COLORS.black,
    width: '45%',
    marginHorizontal: 15,
    height: 210,
    elevation: 10,
    borderRadius: 30,
    marginTop: 20,
    bottom: 5,
  }
});
export default CafeDetails;