import call from 'react-native-phone-call';

export function makeCall(phoneNumber: string) {
  const args = {
    number: phoneNumber,
    prompt: false, // false para llamar directo
  };

  call(args).catch(console.error);
}
