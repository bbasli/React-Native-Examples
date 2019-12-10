import React from "react";
import { StyleSheet, View } from "react-native";

import FormCard from "./FormCard";

const Passer = (props) => {

    return (
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <FormCard
                tsubNum={props.first_tsubNum}
                csubNum={props.second_csubNum}
                title={props.first_title}
                appKey={props.appKey}
                id={props.id1}
                status={props.status1}
            />
            <FormCard
                tsubNum={props.second_tsubNum}
                csubNum={props.second_csubNum}
                title={props.second_title}
                appKey={props.appKey}
                id={props.id2}
                status={props.status2}
            />
        </View>
    )
}

export default Passer;
