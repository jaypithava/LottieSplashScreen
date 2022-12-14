import React, {useRef, useState} from 'react';
import {ScrollView, StyleSheet, View, Animated, Dimensions} from 'react-native';
import FormHeader from '../components/FormHeader';
import FormSelectorBtn from '../components/FormSelectorBtn';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import LottieView from 'lottie-react-native';

const {width} = Dimensions.get('window');

export default function HomeScreen() {
  const animation = useRef(new Animated.Value(0)).current;
  const scrollView = useRef();

  const rightHeaderOpacity = animation.interpolate({
    inputRange: [0, width],
    outputRange: [1, 0],
  });

  const leftHeaderTranslateX = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, 40],
  });

  const leftHeaderTranslateY = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, -20],
  });

  const loginColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ['rgba(27,27,51,1)', 'rgba(27,27,51,0.4)'],
  });

  const signUpColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ['rgba(27,27,51,0.4)', 'rgba(27,27,51,1)'],
  });
  const [animationLoaded, setAnimationLoaded] = useState(false);
  const ref = useRef(null);
  const onAnimationFinish = () => {
    setAnimationLoaded(true);
  };
  // scrollView.current.scrollToEnd();
  return (
    <View style={styles.mainView}>
      <LottieView
        ref={animation => {
          ref.current = animation;
        }}
        style={styles.lottieView}
        source={require('../assets/login.json')}
        autoPlay
        loop={true}
        onAnimationFinish={onAnimationFinish}
      />
      <View style={styles.subView}>
        <FormHeader
          leftHeading="Welcome  "
          rightHeading="Back"
          subHeading="Tony Stark!!"
          rightHeaderOpacity={rightHeaderOpacity}
          leftHeaderTranslateX={leftHeaderTranslateX}
          leftHeaderTranslateY={leftHeaderTranslateY}
        />
      </View>
      <View style={styles.touchableMainView}>
        <FormSelectorBtn
          style={styles.borderLeft}
          backgroundColor={loginColorInterpolate}
          title="Login"
          onPress={() => scrollView.current.scrollTo({x: 0})}
        />
        <FormSelectorBtn
          style={styles.borderRight}
          backgroundColor={signUpColorInterpolate}
          title="Sign up"
          onPress={() => scrollView.current.scrollTo({x: width})}
        />
      </View>
      <ScrollView
        ref={scrollView}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: animation}}}],
          {useNativeDriver: false},
        )}>
        <LoginForm />
        <ScrollView>
          <SignUpForm />
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottieView: {
    width: '45%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subView: {
    height: 75,
  },
  touchableMainView: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  borderLeft: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  borderRight: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});
