//  Mostrar los contactos en una lista
import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native';

export default function ContactCard({ contact, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {contact.thumbnailPath ? (
        <Image source={{ uri: contact.thumbnailPath }} style={styles.image} />
      ) : (
        <View style={styles.placeholder} />
      )}
      <Text style={styles.name}>{contact.displayName}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { alignItems: 'center', margin: 10 },
  image: { width: 80, height: 80, borderRadius: 40 },
  placeholder: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#ccc' },
  name: { marginTop: 5 },
});
