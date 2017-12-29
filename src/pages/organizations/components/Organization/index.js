/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Image, Text } from 'react-native';

import styles from './styles';

export default class Organization extends Component {
  static propTypes = {
    organization: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    }).isRequired,
  };

  render() {
    const { organization } = this.props;

    return (
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={{ uri: organization.avatar_url }}
        />
        <Text>{organization.login}</Text>
      </View>
    );
  }
}
