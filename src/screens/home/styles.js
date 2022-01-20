import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import appMetrics from '../../utils/appMetrics';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.darker,
  },

  home_container: {
    marginVertical: 20,
    backgroundColor: Colors.darker,
  },

  title: {
    fontSize: 25,
    textAlign: 'center',
    fontStyle: 'italic',
  },

  container_flat_list: {
    marginTop: 15,
    paddingBottom: 40,
    paddingHorizontal: 15 % appMetrics.DEVICE_WIDTH,
  },

  card_movie: {
    backgroundColor: '#f2f2f2',
    borderRadius: 7,
    height: 150,
    marginBottom: 15,
  },

  container_card: {
    flexDirection: 'row',
    paddingLeft: 7,
    paddingTop: 7,
  },

  first_container: {
    width: appMetrics.DEVICE_WIDTH * 0.6,
    marginBottom: 5,
  },

  title_movie: {
    color: '#111',
    fontSize: 17,
    fontWeight: 'bold',
  },

  release_date: {
    color: '#111',
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'italic',
  },

  overview: {
    color: '#111',
    fontSize: 12,
    fontWeight: '500',
    fontStyle: 'italic',
    marginTop: 5,
    maxWidth: appMetrics.DEVICE_WIDTH * 0.55,
  },

  image_movie: {
    width: 100,
    height: 100,
    borderRadius: 7,
  },

  overlay_modal: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },

  video_box: {
    backgroundColor: 'rgba(0,0,0,1)',
    height: appMetrics.DEVICE_HEIGHT * 0.85,
    padding: 20,
    paddingBottom: 30,
  },

  close_modal: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  movie_modal_container: {
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image_movie_modal: {
    width: 300,
    height: 300,
    borderRadius: 7,
  },

  title_movie_modal: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    maxWidth: appMetrics.DEVICE_WIDTH * 0.6,
  },

  release_date_modal: {
    marginBottom: 20,
  },

  overview_modal: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '500',
    marginTop: 10,
    maxWidth: appMetrics.DEVICE_WIDTH * 0.75,
  },
});
