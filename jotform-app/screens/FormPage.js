import React from "react";
import { View } from "react-native";

import FormCard from "./FormCard";

const FormPage = (props) => {

    return (
        <View>
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <FormCard />
                <FormCard />
            </View>
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <FormCard />
                <FormCard />
            </View>
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <FormCard />
                <FormCard />
            </View>
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <FormCard />
                <FormCard />
            </View>
        </View>

    );
}

export default FormCard;