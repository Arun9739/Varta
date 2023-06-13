import { View, Text, Image, ScrollView, Linking } from "react-native";
import React, { Component } from "react";
import axios from "axios";
import { Card, Title, Paragraph } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";

import Header from "../../Components/AppBar";

export default class HomeScreen extends Component {
  state = {
    articles: [],
    isLoading: true,
    errors: null,
    selectedSection: "sports",
  };

  handleSectionChange = (section) => {
    this.setState({ selectedSection: section }, () => {
      this.getArticles();
    });
  };

  getArticles = () => {
    const { selectedSection } = this.state;

    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${selectedSection}&apiKey=#################`
      )
      .then((response) => {
        this.setState({
          articles: response.data.articles,
          isLoading: false,
        });
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  };

  componentDidMount() {
    this.getArticles();
  }

  render() {
    const { isLoading, articles } = this.state;
    return (
      <View>
        <Header />

        <Picker
          selectedValue={this.state.selectedSection}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) =>
            this.handleSectionChange(itemValue)
          }
        >
          <Picker.Item label="Sports" value="sports" />
          <Picker.Item label="Business" value="business" />
          <Picker.Item label="Entertainment" value="entertainment" />
          <Picker.Item label="General" value="general" />
          <Picker.Item label="Health" value="health" />
          <Picker.Item label="Science" value="science" />
          <Picker.Item label="Technology" value="technology" />
        </Picker>

        <ScrollView>
  {!isLoading ? (
    articles.map((article) => {
      const { title, description, urlToImage, url } = article;
      return (
        <Card style={styles.card} key={title}>
          <Card.Content>
            <Title style={styles.title}>{title}</Title>
            <Paragraph style={styles.description}>{description}</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: urlToImage }} style={styles.cover} />
          <Card.Actions>
            <Text onPress={() => Linking.openURL(url)} style={styles.readMore}>
              Read More
            </Text>
          </Card.Actions>
        </Card>
      );
    })
  ) : (
    <Text>Loading...</Text>
  )}
</ScrollView>

      </View>
    );
  }
}

const styles = {
  picker: {
    height: 50,
    width: 150,
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  card: {
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 8,
  },
  cover: {
    height: 200,
    resizeMode: 'cover',
  },
  readMore: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
};
