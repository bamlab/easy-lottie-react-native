import 'react-native';
import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import LottieAnimation from './';
import renderer from 'react-test-renderer';

jest.mock('lottie-react-native', () => props => <lottie {...props} />);

const source = {
  nm: 'test',
  fr: 30,
  ip: 25,
  op: 0,
  w: 96,
  h: 48,
};

describe('<LottieAnimation />', () => {
  it('renders correctly by default', () => {
    const tree = renderer.create(<LottieAnimation source={source} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with a width', () => {
    const tree = renderer.create(<LottieAnimation source={source} style={{ width: 100 }} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with a height', () => {
    const tree = renderer.create(<LottieAnimation source={source} style={{ height: 40 }} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with a width in a StyleSheet', () => {
    const styles = StyleSheet.create({ animation: { width: 100 } });
    const tree = renderer.create(<LottieAnimation source={source} style={styles.animation} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with decimal fr/ip/op in the source on Android', () => {
    Platform.OS = 'android';
    const tree = renderer.create(
      <LottieAnimation
        source={{
          ...source,
          fr: 30.36187,
          op: 0,
          ip: 29.99997,
        }}
      />
    );
    expect(tree.toJSON()).toMatchSnapshot();
    Platform.OS = 'ios';
  });

  it('renders correctly with decimal fr/ip/op in the source on iOS', () => {
    const tree = renderer.create(
      <LottieAnimation
        source={{
          ...source,
          fr: 30.36187,
          op: 0,
          ip: 29.99997,
        }}
      />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
