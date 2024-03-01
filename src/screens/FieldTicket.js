import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Modal, // Importez Modal
  TextInput, // Importez TextInput pour le formulaire
  Button, // Importez Button pour le bouton dans le formulaire
} from "react-native";
import AppHeader from "../components/AppHeader";
import Icon from "react-native-vector-icons/FontAwesome";
import { ToastAndroid } from "react-native";
import { useNavigation } from "@react-navigation/native";
const FieldTicket = ({ route }) => {
  const navigation = useNavigation();
  const [FieldTickets, setFieldTickets] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [adress, setAdress] = useState("");
  const [fault_type, setFault_Type] = useState("");
  const [contact, setContact] = useState("");
  const [heureDebut, setHeureDebut] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fonction pour afficher le modal
  const toggleModal = (FieldTicketData) => {
    setAdress(FieldTicketData.localisation);
    setContact(FieldTicketData.contact);
    setFault_Type(FieldTicketData.fault_type);
    setModalVisible(!modalVisible);
  };

  const showToast = () => {
    console.log("Toast clicked");
    ToastAndroid.showWithGravityAndOffset(
      "Good Work",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
      50,
      50
    );
  };

  const handleStart = async (FieldTicketId, FieldTicketData) => {
    console.log("FieldTicketId", FieldTicketId);
    console.log("FieldTicketData", FieldTicketData);
    try {
      console.log("Updating phone ticket with ID:", FieldTicketId);
      const response = await fetch(
        `http://192.168.43.54:4000/api/field/status/${FieldTicketId}`,
        {
          method: "PUT",
        }
      );
      if (response.ok) {
        console.log("Success updating ticket");
        navigation.navigate("ScannerDebut", {
          contact: FieldTicketData.contact,
          localisation: FieldTicketData.localisation,
          fault_type: FieldTicketData.fault_type,
          numRapport: FieldTicketData.numRapport,
        });
      } else {
        const error = await response.json();
        throw new Error(`La mise à jour du ticket a échoué : ${error.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      showToast({
        type: "error",
        text1: "Erreur",
        text2: error.message,
      });
    }
  }; 

  useEffect(() => {
    fetch("http://192.168.43.54:4000/api/field/all")
      .then((response) => response.json())
      .then((data) => {
        setFieldTickets(data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données:", error);
      });
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "assigned":
        return "#FF69B4"; // Pink
      case "accepted":
        return "#1582e8"; // Bleu ciel
      case "Depart":
        return "#f2df11"; // Jaune
      case "Enroute":
        return "#F6e10e"; // Grey
      case "Arrived":
        return "grey"; // Orange
      case "Started":
        return "#FFA500"; // Orange
      case "Solving":
        return "#FFA500"; // Orange
      case "Solved":
        return "black"; // Vert
      default:
        return "#000000"; // Noir par défaut
    }
  };

  const getButtonColor = (status) => {
    switch (status) {
      case "assigned":
        return "#BDC3C7"; // Pink
      case "accepted":
        return "#BDC3C7"; // Bleu ciel
      case "Depart":
        return "#BDC3C7"; // Jaune
      case "Enroute":
        return "#BDC3C7"; // Grey
      case "Arrived":
        return "#BDC3C7"; // Orange
      case "Started":
        return "#BDC3C7"; // Orange
      case "Solving":
        return "#BDC3C7"; // Orange
      case "Solved":
        return "#BDC3C7"; // Vert
      default:
        return "#000000"; // Noir par défaut
    }
  };
  const handleAccepter = async (FieldTicketId) => {
    console.log("FieldTicketId", FieldTicketId);
    try {
      console.log("Updating phone ticket with ID:", FieldTicketId);
      const response = await fetch(
        `http://192.168.43.54:4000/api/field/status/${FieldTicketId}`,
        {
          method: "PUT", // Utilisez PUT au lieu de DELETE
        }
      );
      if (response.ok) {
        console.log("Success updating ticket");
        // Afficher le toast de succès
        showToast({
          type: "success",
          text1: "Succès",
          text2: "Vous avez accepté le ticket",
        });
        // setModalVisible(true);
      } else {
        const error = await response.json();
        throw new Error(`La mise à jour du ticket a échoué : ${error.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      // Afficher le toast d'erreur
      showToast({
        type: "error",
        text1: "Erreur",
        text2: error.message,
      });
    }
  };

  const handleDepart = async (FieldTicketId) => {
    console.log("FieldTicketId", FieldTicketId);
    try {
      console.log("Updating phone ticket with ID:", FieldTicketId);
      const response = await fetch(
        `http://192.168.43.54:4000/api/field/status/${FieldTicketId}`,
        {
          method: "PUT", // Utilisez PUT au lieu de DELETE
        }
      );
      if (response.ok) {
        console.log("Success updating ticket");
        // Afficher le toast de succès
        showToast({
          type: "success",
          text1: "Succès",
          text2: "Vous avez accepté le ticket",
        });
      } else {
        const error = await response.json();
        throw new Error(`La mise à jour du ticket a échoué : ${error.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      // Afficher le toast d'erreur
      showToast({
        type: "error",
        text1: "Erreur",
        text2: error.message,
      });
    }
  };
  const handleCloturer = async (FieldTicketId) => {
    console.log("FieldTicketId", FieldTicketId);
    try {
      console.log("Updating phone ticket with ID:", FieldTicketId);
      const response = await fetch(
        `http://192.168.43.54:4000/api/field/status/${FieldTicketId}`,
        {
          method: "PUT", // Utilisez PUT au lieu de DELETE
        }
      );
      if (response.ok) {
        console.log("Success updating ticket");
        // Afficher le toast de succès

        navigation.navigate("ScannerFin");
      } else {
        const error = await response.json();
        throw new Error(`La mise à jour du ticket a échoué : ${error.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      // Afficher le toast d'erreur
      showToast({
        type: "error",
        text1: "Erreur",
        text2: error.message,
      });
    }
  };
  useEffect(() => {
    if (route.params?.scanTime) {
      // Update heureDebut with scan time when available
      setHeureDebut(route.params.scanTime.toString());
    }
  }, [route.params?.scanTime]);

  // Function to handle opening the scanner
  const handleStartScan = () => {
    // navigation.navigate("ScannerDebut"); // Navigate to the scanner component
  };
  const handleArrived = async (FieldTicketId) => {
    console.log("FieldTicketId", FieldTicketId);
    try {
      console.log("Updating phone ticket with ID:", FieldTicketId);
      const response = await fetch(
        `http://192.168.43.54:4000/api/field/status/${FieldTicketId}`,
        {
          method: "PUT", // Utilisez PUT au lieu de DELETE
        }
      );
      if (response.ok) {
        console.log("Success updating ticket");
        // Afficher le toast de succès
        showToast({
          type: "success",
          text1: "Succès",
          text2: "Vous avez accepté le ticket",
        });
      } else {
        const error = await response.json();
        throw new Error(`La mise à jour du ticket a échoué : ${error.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      // Afficher le toast d'erreur
      showToast({
        type: "error",
        text1: "Erreur",
        text2: error.message,
      });
    }
  };
  const componentDidMount = () => {
    this.makeRemoteRequest();
  };
  useEffect(() => {
    makeRemoteRequest();
  }, []);

  const makeRemoteRequest = () => {
    const url = `http://192.168.43.54:4000/api/field/all?status=new`;
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setFieldTickets(res.results || []);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching data:", error);
      });
  };
  const handleRefresh = () => {
    setRefreshing(true);
    makeRemoteRequest();
    setRefreshing(false);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View>
        <Text
          style={[styles.ticketText, { color: getStatusColor(item.status) }]}
        >
          {item.status}
        </Text>
        <Text>{item.localisation}</Text>
        <Text>{item.contact}</Text>
        <Text>{item.fault_type}</Text>
        <Text>{item.created_at}</Text>
      </View>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: getButtonColor(item.status) },
        ]}
        onPress={() => {
          switch (item.status) {
            case "assigned":
              handleAccepter(item._id);
              break;
            case "accepted":
              handleDepart(item._id);
              break;
            case "Enroute":
              handleArrived(item._id);
              break;
            case "Arrived":
              handleStart(item._id, item);
              break;
            case "Solving":
              handleCloturer(item._id);
              break;
            default:
              break;
          }
        }}
      >
        <Text style={styles.buttonText}>
          {item.status === "assigned"
            ? "Accept"
            : item.status === "accepted"
            ? "Depart"
            : item.status === "Depart"
            ? "Arrived"
            : item.status === "Enroute"
            ? "Arrived"
            : item.status === "Arrived"
            ? "Start"
            : item.status === "Solving"
            ? "Solved"
            : ""}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <AppHeader />
      <FlatList
        data={FieldTickets}
        renderItem={renderItem}
        keyExtractor={(item) => item._id.toString()}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          toggleModal();
        }}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Fiche inervention</Text>
          <View style={styles.formRow}>
            <Text style={styles.label}>contact</Text>
            <TextInput
              style={styles.input}
              //   value={formInput}
              placeholder="contact"
              editable={false}
            />
          </View>
          <View style={styles.formRow}>
            <Text style={styles.label}>Adresse</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setAdress(text)}
              value={adress}
              placeholder="adress"
              editable={false}
            />
          </View>
          <View style={styles.formRow}>
            <Text style={styles.label}>Fault Type</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setFault_Type(text)}
              value={fault_type}
              placeholder="contact"
              editable={false}
            />
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={handleStartScan} // Call handleStartScan when the button is pressed
          >
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "orange", // Couleur de fond du bouton
    padding: 10,
    borderRadius: 10, // Bord arrondi
    alignItems: "center",
    width: 80,
    fontFamily: "Poppins-Regular",
  },
  buttonText: {
    color: "white", // Couleur du texte
    fontWeight: "bold", // Texte en gras
    fontFamily: "Poppins-Regular",
    fontSize: 15,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
    //  fontWeight: "bold",
    fontWeight: "400",
    color: "orange",
    fontFamily: "Poppins-Regular",
  },
  formRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  label: {
    width: 100, // Ajustez la largeur du label selon vos besoins
    marginRight: 10,
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },
  input: {
    flex: 1, // Le champ de saisie prendra le reste de l'espace disponible
    height: 40,
    borderColor: "#C0C1C1",
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
  },
  ticketText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default FieldTicket;
