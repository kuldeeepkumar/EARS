import { COLORS_PAGES, FONTS, images } from "../../constants/index";
import { Image, Text, View } from "react-native";

import { Entypo } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS_PAGES.white,
      }}>
      <StatusBar backgroundColor={COLORS_PAGES.gray} />
      <View style={{ width: "100%" }}>
        <Image
          source={images.cover}
          resizeMode="cover"
          style={{
            height: 228,
            width: "100%",
          }}
        />
      </View>

      <View style={{ flex: 1, marginLeft: 20 }}>
        <Image
          source={images.profile}
          resizeMode="contain"
          style={{
            height: 155,
            width: 155,
            borderRadius: 999,

            marginTop: -90,
          }}
        />

        <Text
          style={{
            ...FONTS.h3,
            color: COLORS_PAGES.primary,
            marginVertical: 8,
            marginLeft: 25,
            fontWeight: "bold",
          }}>
          Demo User
        </Text>
        <View
          style={{
            marginTop: 20,
            paddingVertical: 20,
            backgroundColor: COLORS_PAGES.gray,
            width: 410,
            borderRadius: 10,
            borderColor: COLORS_PAGES.lightPurpule,
            borderWidth: 2,
          }}>
          <Text
            style={{
              marginLeft: 25,
              ...FONTS.semiBold,
              fontSize: 13,
              fontWeight: "bold",
            }}>
            Email ID :{" "}
            <Text
              style={{
                marginLeft: 20,
                ...FONTS.semiBold,
                fontSize: 11,
                fontWeight: "normal",
              }}>
              demouser@gmail.com
            </Text>
          </Text>
          <Text
            style={{
              marginLeft: 25,
              ...FONTS.semiBold,
              fontSize: 13,
              fontWeight: "bold",
            }}>
            Phone No. :{" "}
            <Text
              style={{
                marginLeft: 20,
                ...FONTS.semiBold,
                fontSize: 11,
                fontWeight: "normal",
              }}>
              +215648798754
            </Text>
          </Text>
          <Text
            style={{
              marginLeft: 25,
              ...FONTS.semiBold,
              fontSize: 13,
              fontWeight: "bold",
            }}>
            Status :{" "}
            <Text
              style={{
                marginLeft: 20,
                ...FONTS.semiBold,
                fontSize: 11,
                fontWeight: "normal",
              }}>
              Applied
            </Text>
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
            paddingVertical: 20,
            backgroundColor: COLORS_PAGES.gray,
            width: 410,
            borderRadius: 10,
            borderColor: COLORS_PAGES.lightPurpule,
            borderWidth: 2,
            height: 250,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <View
            style={{
              borderRadius: 999,
              borderColor: COLORS_PAGES.darkPurpule,
              borderWidth: 2,
              width: 70,
              height: 70,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Entypo name="lock" size={24} color={COLORS_PAGES.darkPurpule} />
          </View>
          <Text
            style={{
              marginTop: 7,
              ...FONTS.semiBold,
              fontSize: 11,
              fontWeight: "normal",
            }}>
            !Once Admin will Aprove the profile other features will activate
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
