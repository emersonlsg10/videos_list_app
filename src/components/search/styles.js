import {StyleSheet} from 'react-native';
import appMetrics from '../../utils/appMetrics';

export const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingHorizontal: 15 % appMetrics.DEVICE_WIDTH,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  button: {
    borderRadius: 100,
  },

  font_style: {
    marginLeft: 5,
    padding: 0,
    color: '#7E6F8D',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 12,
  },

  input: {
    padding: 0,
    backgroundColor: '#EDEDED',
    borderRadius: 14,
    flex: 1,
    flexDirection: 'row',
    height: 49,
    width: appMetrics.DEVICE_WIDTH / 1.06,
    elevation: 0,
    fontSize: 12,
    lineHeight: 12,
    color: '#7E6F8D',
    fontFamily: 'Poppins',
  },
  icon_content: {
    backgroundColor: '#6F41DA',
    width: 44,
    height: 41,
    borderRadius: 14,
    marginLeft: 5,
    position: 'absolute',
    zIndex: 9,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cancelButton: {
    marginHorizontal: 10,
  },

  cancelText: {
    color: '#6F41DA',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 40,
  },
});
