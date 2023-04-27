import { Text, View, ScrollView } from "react-native";
import { useState } from "react";
import { Card } from "react-native-elements";
import { CAMPSITES } from "../shared/campsites";
import { PROMOTIONS } from "../shared/promotions";
import { PARTNERS } from "../shared/partners";

const FeaturedItem = ({ item }) => {
  if (item) {
    return (
      <Card containerStyle={{ padding: 0 }}>
        <Card.Image source={item.image}>
          <View style={{ justifyContent: "center", flex: 1 }}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 20,
              }}
            >
              {item.name}
            </Text>
          </View>
        </Card.Image>
        <Text
          style={{
            margin: 20,
          }}
        >
          {item.description}
        </Text>
      </Card>
    );
  }
  return <View />;
};

const HomeScreen = () => {
  const [campsites, setCampsites] = useState(CAMPSITES);
  const [promotions, setPromotions] = useState(PROMOTIONS);
  const [partners, setPartners] = useState(PARTNERS);

  const featCampsite = campsites.find((item) => item.featured);
  const featPromotion = promotions.find((item) => item.featured);
  const featPartner = partners.find((item) => item.featured);

  return (
    <ScrollView>
      <FeaturedItem item={featCampsite} />
      <FeaturedItem item={featPromotion} />
      <FeaturedItem item={featPartner} />
    </ScrollView>
  );
};
// flatlist uses lazy loading, loading only the data that is on the screen or about to be on the screen to improve performance. Flatlist is a better choice for a lot of items.
//  scrollview loads all of its child components at once
export default HomeScreen;
