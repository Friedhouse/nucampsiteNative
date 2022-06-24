import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { React } from 'react';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
 import Loading from '../components/LoadingComponent';

export default function AboutScreen() {
     const partners = useSelector((state) => state.partners);

    if (partners.isLoading) {
        return(
            <ScrollView>
                <Mission />
                <Card>
                    <Card.Title>CommunityPartners</Card.Title>
                    <Card.Divider />
                    <Loading />
                </Card>
            </ScrollView>
        )
    }
    if (partners.errMess) {
        return (
            <ScrollView>
                <Mission />
                <Card>
                    <Card.Title>Community Partners</Card.Title>
                    <Card.Divider />
                    <Text>{partners.errMess}</Text>
                </Card>
            </ScrollView>
        )
    }
}

const Mission = () => {
    return (
        <Card>
            <Card.Title>Our Mission</Card.Title>
            <Card.Divider />
            <Text style={{margin: 10}}>We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.</Text>
        </Card>
    )
}