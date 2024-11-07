import {Dimensions} from 'react-native';

const DESING_SCREEN = 375

export const scale = (x : number) => Dimensions.get("window").width / DESING_SCREEN * x