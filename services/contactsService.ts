// Leer contactos de la agenda del dispositivo
import { PermissionsAndroid, Platform } from 'react-native';
import Contacts from 'react-native-contacts';

export async function getContacts() {
  if (Platform.OS === 'android') {
    const permission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS
    );

    if (permission === PermissionsAndroid.RESULTS.GRANTED) {
      const contacts = await Contacts.getAll();
      return contacts;
    } else {
      throw new Error('Permiso de contactos denegado');
    }
  }
}
