# easy-lottie-react-native
*Lottie for React Native without hassle*

A component for [airbnb/lottie-react-native](https://github.com/airbnb/lottie-react-native) that handles animation, looping,
layout, and platform quirks for you. It fixes:
* the default duration
* the default aspect ratio (and size if you don't provide a width or height)
* the default easing
* iOS positioning
* Android playback for some animations

## Props
You can pass [additional props](https://github.com/airbnb/lottie-react-native/blob/master/docs/api.md) 
expected by `lottie-react-native`, like `imageAssetsFolder`. 

| Prop | Description | Default |
|---|---|---|
|**`source`**| **Mandatory** - The source of animation. This must be a JS object of an animation, obtained (for example) with something like `require('../path/to/animation.json')`. This is needed in order to fix things. | *None* |
|**`style`**| Style attributes for the view, as expected in a standard [`View`](https://facebook.github.io/react-native/docs/layout-props.html). | The `aspectRatio` exported by Bodymovin will be set. Also the `width` if you haven't provided a `width` or `height` |
|**`loop`**| A boolean flag indicating whether or not the animation should loop. | `false` |
|**`duration`**| Custom duration (in milliseconds). | The `duration` exported by Bodymovin |
|**`easing`**| Custom `Easing` or function | Linear easing (`t => t`) |
|**`delay`**| Delay before the animation or between loops if looping (milliseconds) | `0` |
|**`animation`**| A function that takes an `Animated.Value` and returns a custom `CompositeAnimation` | *None* |

## Installation

You'll need to already have installed:
* `react`
* `react-native`
* `lottie-react-native`

Now `yarn add easy-lottie-react-native`.

## Usage

### Minimal
```jsx
import LottieAnimation from 'easy-lottie-react-native';

...

<LottieAnimation source={require('../path/to/your/animation.json')} />
```

### Custom size
```jsx
import { StyleSheet } from 'react-native';
import LottieAnimation from 'easy-lottie-react-native';

const styles = StyleSheet.create({
  animation: {
    width: 100,
  },
});

...

<LottieAnimation source={require('../path/to/your/animation.json')} style={styles.animation} />
```

### Looping with custom easing
Note that customizing easing will make the animation differ from what the designer intended.
```jsx
import { Easing } from 'react-native';
import LottieAnimation from 'easy-lottie-react-native';

const easing = Easing.inOut(Easing.quad);

...

<LottieAnimation source={require('../path/to/your/animation.json')} loop easing={easing} />
```

### Custom animation
```jsx
import { Animated } from 'react-native';
import LottieAnimation from 'easy-lottie-react-native';

const getAnimation = (value: Animated.Value) => 
  Animated.spring(value, {
    toValue: 1,
    useNativeDriver: true,
  });

...

<LottieAnimation source={require('../path/to/your/animation.json')} animation={getAnimation} />
```
