import * as React from 'react';
import { Appbar, Avatar } from 'react-native-paper';

const Header = () => {
  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Content title="VARTA - A news app" titleStyle={styles.title} />
      
      <Avatar.Image
        size={40}
        source={require('../assets/icon.png')}
        style={styles.avatar}
      />
    </Appbar.Header>
  );
};

const styles = {
  header: {
    backgroundColor: 'blue',
    elevation: 0, // Remove shadow on Android
    shadowOpacity: 0, // Remove shadow on iOS
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  searchBar: {
    flex: 1,
    marginHorizontal: 16,
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },
  searchInput: {
    fontSize: 14,
    color: 'white',
  },
  avatar: {
    marginLeft: 16,
  },
};

export default Header;
