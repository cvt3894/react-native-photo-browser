
import {Dimensions, Platform} from 'react-native'

const { width, height } = Dimensions.get('window')

export default {
  TOOLBAR_HEIGHT: (Platform.OS === 'ios') ? 64 : 54,
};
