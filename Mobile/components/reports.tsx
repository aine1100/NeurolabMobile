import image from "@/constants/image";
import { View,Text, TouchableOpacity,Image } from "react-native";

export default function ReportsRecent(){
    const reports=[
        {
            rimage:image.calendar,
            rtext:"You are likely to have depression......",
            rdays:"2 days ago"
        },
        {
            rimage:image.calendar,
            rtext:"You are likely to have depression......",
            rdays:"2 days ago"
        }
    ]
    return(
        <View style={{ justifyContent: "flex-start", alignItems: "flex-start", paddingLeft: 20,width:"100%",paddingRight:10 }}>
        <View style={{flexDirection:"row",alignItems:"flex-start",justifyContent:"space-between",width:"100%"}}>
        <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 10 }}>Recent Reports</Text>
        <TouchableOpacity style={{flexDirection:"row",gap:5,alignItems:"center",justifyContent:"center",marginTop:5}}>
            <Text style={{color:"#1467C3",fontSize:10,fontWeight:"500"}}>Show More</Text>

        </TouchableOpacity>
        </View>
       {
        reports.map((item,index)=>(
            <TouchableOpacity
            key={index}
                       
            style={{
                paddingHorizontal: 5,
                paddingVertical: 8,
                alignItems: "center",
                justifyContent:"space-between",
                flexDirection: "row",
                gap:10,
                borderRadius: 10,
                backgroundColor: "#fff",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 3.84,
                elevation: 5, // For Android shadow
                marginBottom: 10,
                width:"100%"
            }}
        >
             <Image
                                        source={item.rimage}
                                        resizeMode="contain"
                                        style={{ height: 30, width: 30, borderRadius: 20 }}
                                    />
                      
                                        <Text style={{ fontSize: 11, }}>{item.rtext}</Text>
                                       
                                           <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",gap:2}}>
                                           <Text style={{fontSize:9}} >{item.rdays}</Text>
                                           <TouchableOpacity>
                                            <Image source={image.more} style={{height:20,width:20}} resizeMode="contain"/>
                                           </TouchableOpacity>

                                           </View>
            
            
                                   
        </TouchableOpacity>
        ))
       }

        </View>
    )
}