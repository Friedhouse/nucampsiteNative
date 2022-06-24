import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default function Loading() {
  return (
    <View>
        <ActivityIndicator size='large' color='#5637DD' />
        <Text style={styles.loadingText}>
            
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    loadingView: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    loadingText: {
        color: '#5637DD',
        fontSize: 14,
        fontWeight: 'bold',
    }
})