import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Text } from "react-native";
export default function ScannerFin({ navigation }) {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanData, setScanData] = useState(null);
  const [scanTime, setScanTime] = useState(null);

  //heurefin pour interface cloture
  const [scanTimeFin, setScanTimeFin] = useState(null);
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    const currentTime = new Date();

    setScanData(data);
    setScanTime(currentTime);
    setScanTimeFin(currentTime);
    console.log(`Data: ${data}`);
    console.log(`Type: ${type}`);
    console.log(`Scan Time: ${currentTime}`);

    navigation.navigate("SolvingRapport", { scanTimeFin: currentTime });
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        style={StyleSheet.absoluteFillObject}
        onBarCodeScanned={scanData ? undefined : handleBarCodeScanned}
      />
      <View style={styles.rectangleContainer}>
        <View style={styles.rectangle} />
      </View>
    </View>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  rectangleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  rectangle: {
    height: width * 0.7,
    width: width * 0.7,
    borderWidth: 2,
    borderColor: "red",
    backgroundColor: "transparent",
  },
});
