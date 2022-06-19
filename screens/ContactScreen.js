import { ScrollView, Text } from 'react-native'
import { Card } from 'react-native-elements'
import React from 'react'

export default function ContactScreen() {
  return (
    <ScrollView>
        <Card wrapperStyle={{margin: 20}}>
            <Card.Title>Contact Information</Card.Title>
            <Card.Divider />
            <Text>1 Nucamp Way</Text>
            <Text>Seattle,WA 98001</Text>
            <Text Style={{marginBottom: 10}}>U.S.A</Text>
            <Text>Phone: 1-206-555-1234</Text>
            <Text>Email: campsites@numcamp.co</Text>
        </Card>
        
    </ScrollView>
  )
}