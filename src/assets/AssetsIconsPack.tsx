import React from 'react';
import { Image, ImageProps, ImageSourcePropType, StyleSheet } from 'react-native';
import { IconPack, IconProvider } from '@ui-kitten/components';
import { SvgProps } from 'react-native-svg';
import { Icons } from './icons';

const createIcon = (source: ImageSourcePropType): IconProvider<ImageProps> => {
  return {
    toReactElement: (props) => (
      <Image style={styles.icon} {...props} source={source} resizeMode="cover" />
    ),
  };
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const AssetsIconsPack: IconPack<ImageProps | SvgProps> = {
  name: 'assets',
  icons: {
    'arrow-left': createIcon(Icons['arrow-left']),
    'arrow-right': createIcon(Icons['arrow-right']),
    cardholder: createIcon(Icons['cardholder']),
    'caret-double-left': createIcon(Icons['caret-double-left']),
    'caret-double-right': createIcon(Icons['caret-double-right']),
    'caret-down': createIcon(Icons['caret-down']),
    'caret-up': createIcon(Icons['caret-up']),
    'caret-left': createIcon(Icons['caret-left']),
    'caret-right': createIcon(Icons['caret-right']),
    eye: createIcon(Icons.eye),
    'eye-slash': createIcon(Icons['eye-slash']),
    facebook: createIcon(Icons.facebook),
    'finger-print': createIcon(Icons['finger-print']),
    instagram: createIcon(Icons.instagram),
    mail: createIcon(Icons.mail),
    smiley: createIcon(Icons.smiley),
    twitter: createIcon(Icons.twitter),
    error: createIcon(Icons.error),
    success: createIcon(Icons.success),
    'bell-ringing': createIcon(Icons['bell-ringing']),
    close: createIcon(Icons.close),
    user: createIcon(Icons.user),
    key: createIcon(Icons.key),
    fingerprint: createIcon(Icons.fingerprint),
    'newspaper-clipping': createIcon(Icons['newspaper-clipping']),
    suitcase: createIcon(Icons.suitcase),
    cat: createIcon(Icons.cat),
    brain: createIcon(Icons.brain),
    gearsix: createIcon(Icons.gearsix),
    timer: createIcon(Icons.timer),
    house: createIcon(Icons.house),
    calendar: createIcon(Icons.calendar),
    briefcase: createIcon(Icons.briefcase),
    'add-user': createIcon(Icons['add-user']),
    'radio-active': createIcon(Icons['radio-active']),
    food: createIcon(Icons.food),
    entertainment: createIcon(Icons.entertainment),
    shopping: createIcon(Icons.shopping),
    education: createIcon(Icons.education),
    dots_three_vertical: createIcon(Icons['dots_three_vertical']),
    airplay: createIcon(Icons['airplay']),
    download: createIcon(Icons['download']),
    headphone: createIcon(Icons['headphone']),
    heart: createIcon(Icons['heart']),
    minus: createIcon(Icons['minus']),
    plus: createIcon(Icons['plus']),
    receipt: createIcon(Icons['receipt']),
    search: createIcon(Icons['search']),
    camera: createIcon(Icons['camera']),
    chat: createIcon(Icons['chat']),
    podcasts: createIcon(Icons['podcasts']),
    mappin: createIcon(Icons['mappin']),
    'bell-simple': createIcon(Icons['bell-simple']),
    'calendar-blank': createIcon(Icons['calendar-blank']),
    'dots-three-vertical': createIcon(Icons['dots-three-vertical']),
    'house-simple': createIcon(Icons['house-simple']),
    'circles-four': createIcon(Icons['circles-four']),
    'brackets-square': createIcon(Icons['brackets-square']),
    'arrow-up-right': createIcon(Icons['arrow-up-right']),
    scan: createIcon(Icons['scan']),
    bell: createIcon(Icons.bell),
    bookmark: createIcon(Icons['bookmark']),
    bookmarks: createIcon(Icons['bookmarks']),
    upload: createIcon(Icons['upload']),
    'share-network': createIcon(Icons['share-network']),
    popcorn: createIcon(Icons['popcorn']),
    envelope: createIcon(Icons['envelope']),
    crown: createIcon(Icons['crown']),
    'chat-circle': createIcon(Icons['chat-circle']),
    article: createIcon(Icons['article']),
    notification: createIcon(Icons['notification']),
    check: createIcon(Icons['check']),
    'play-circle': createIcon(Icons['play-circle']),
    'chat-bubble': createIcon(Icons['chat-bubble']),
    'paper-plane': createIcon(Icons['paper-plane']),
    'plus-circle': createIcon(Icons['plus-circle']),
    'plus-circle-fill': createIcon(Icons['plus-circle-fill']),
    'dot-six': createIcon(Icons['dot-six']),
    star: createIcon(Icons['star']),
    'half-star': createIcon(Icons['half-star']),
    'outline-star': createIcon(Icons['outline-star']),
    'house-fill': createIcon(Icons['house-fill']),
    'heart-fill': createIcon(Icons['heart-fill']),
    'user-four': createIcon(Icons['user-four']),
    'user-three': createIcon(Icons['user-three']),
    lightning: createIcon(Icons['lightning']),
    'chart-bar': createIcon(Icons['chart-bar']),
    'chart-bar-1': createIcon(Icons['chart-bar-1']),
    health: createIcon(Icons.health),
    'arrow-down': createIcon(Icons['arrow-down']),
    'arrow-up': createIcon(Icons['arrow-up']),
    'dots-six-vertical': createIcon(Icons['dots-six-vertical']),
    'chat-circle-text': createIcon(Icons['chat-circle-text']),
    'arrows-out-simple': createIcon(Icons['arrows-out-simple']),
    'clipboard': createIcon(Icons['clipboard']),
    'shopping-cart': createIcon(Icons['shopping-cart']),
    'globe': createIcon(Icons['globe']),
    'funnel': createIcon(Icons['funnel']),
    'gift': createIcon(Icons['gift']),
    'message': createIcon(Icons['message']),
    'merchant': createIcon(Icons['merchant']),
    'phone-call': createIcon(Icons['phone-call']),
    'hand-pointing': createIcon(Icons['hand-pointing']),
    'chats-circle': createIcon(Icons['chats-circle']),
    'dice-four': createIcon(Icons['dice-four']),
    'map-trifold': createIcon(Icons['map-trifold']),
    copy: createIcon(Icons.copy),
    money: createIcon(Icons.money),
    moon: createIcon(Icons.moon),
    text: createIcon(Icons.text),
    'chat-circle-dots': createIcon(Icons['chat-circle-dots']),
    'archive-box': createIcon(Icons['archive-box']),
    archive: createIcon(Icons.archive),
    'currency-circle-dollar': createIcon(Icons['currency-circle-dollar']),
    cards: createIcon(Icons.cards),
    'chart-pie-slice': createIcon(Icons['chart-pie-slice']),
    'code-sand-box-logo': createIcon(Icons['code-sand-box-logo']),
    'user-circle': createIcon(Icons['user-circle']),
    'chart-line-up': createIcon(Icons['chart-line-up']),
    'check-circle': createIcon(Icons['check-circle']),
    'radio-normal': createIcon(Icons['radio-normal']),
    wallet: createIcon(Icons.wallet),
    apple: createIcon(Icons.apple),
    clock: createIcon(Icons.clock),
    barbell: createIcon(Icons.barbell),
    applelogo: createIcon(Icons.applelogo),
    eight: createIcon(Icons.eight),
    person: createIcon(Icons.person),
    pencil: createIcon(Icons.pencil),
    'calendar-check': createIcon(Icons['calendar-check']),
  },
};
export default AssetsIconsPack;
