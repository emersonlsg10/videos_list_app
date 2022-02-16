import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import appMetrics from '../../utils/appMetrics';

export const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    marginHorizontal: 10,
  },

  card: {
    height: 120,
    backgroundColor: '#cecece',
    borderRadius: 15,
    marginBottom: 15,
    padding: 10,
    flexDirection: 'row',
  },

  title: {
    fontSize: 16,
    fontWeight: '700',
  },

  left: {
    flex: 1,
  },

  right: {
    width: 70,
  },

  image_movie: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    height: appMetrics.DEVICE_HEIGHT * 0.8,
    width: appMetrics.DEVICE_WIDTH * 0.9,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
