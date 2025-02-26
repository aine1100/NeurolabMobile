import image from "@/constants/image";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { ButtonOne } from "./button";

export default function NearbyHospitals({ setModalVisible }:{setModalVisible:any}) {
    const hospitals = [
        {
            himage: image.muhima,
            hname: "King Roi Faisal",
            hstreet: "KN 13 St, Kigali",
        },
        {
            himage: image.muhima,
            hname: "King Roi Faisal",
            hstreet: "KN 13 St, Kigali",
        }
    ];

    return (
        <View style={{ justifyContent: "flex-start", alignItems: "flex-start", paddingLeft: 20, width: "100%", paddingRight: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 10 }}>Nearby Hospitals</Text>
            <View style={{ justifyContent: "flex-start", alignItems: "flex-start", width: "100%" }}>
                {hospitals.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={{
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexDirection: "row",
                            gap: 10,
                            borderRadius: 10,
                            backgroundColor: "#fff",
                            shadowColor: "#000",
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.2,
                            shadowRadius: 3.84,
                            elevation: 5,
                            marginBottom: 10,
                            width: "100%"
                        }}
                    >
                        <Image
                            source={item.himage}
                            resizeMode="contain"
                            style={{ height: 50, width: 50, borderRadius: 20 }}
                        />
                        <View style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", gap: 3 }}>
                            <Text style={{ fontSize: 15, fontWeight: "bold" }}>{item.hname}</Text>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 3 }}>
                                <Image source={image.location} style={{ height: 15, width: 15 }} resizeMode="contain"/>
                                <Text style={{ fontSize: 10 }}>{item.hstreet}</Text>
                            </View>
                        </View>
                        <ButtonOne
                            text="Visit"
                            onPress={() => setModalVisible(true)} 
                            textstyle={styles.buttontext}
                            style={styles.buttonstyle}
                            classname=""
                        />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonstyle: {
        backgroundColor: "#030340",
        padding: 4,
        borderRadius: 5,
        width: 60,
        height: 30
    },
    buttontext: {
        color: "yellow",
        fontSize: 10
    }
});
