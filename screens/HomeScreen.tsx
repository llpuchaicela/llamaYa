import { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import ContactCard from '../components/ContactCard';
import { getContacts } from '../services/contactsService';
import { makeCall } from '../services/callService';

export default function HomeScreen() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await getContacts();
        setContacts(result);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <View>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.recordID}
        numColumns={2}
        renderItem={({ item }) => (
          <ContactCard
            contact={item}
            onPress={() => makeCall(item.phoneNumbers[0]?.number)}
          />
        )}
      />
    </View>
  );
}
