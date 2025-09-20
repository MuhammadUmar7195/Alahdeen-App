import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function TopCompanies() {
    const companies = [
        {
            id: 1,
            name: 'Company A',
            logo: "https://picsum.photos/id/9/200/300"
        },
        {
            id: 2,
            name: 'Company B',
            logo: "https://picsum.photos/id/10/200/300"
        },
        {
            id: 3,
            name: 'Company C',
            logo: "https://picsum.photos/id/11/200/300"
        },
        {
            id: 4,
            name: 'Company D',
            logo: "https://picsum.photos/id/12/200/300"
        },
        {
            id: 5,
            name: 'Company E',
            logo: "https://picsum.photos/id/13/200/300"
        },
    ];

    return (
        <View className="mt-6 px-4">
            {/* Header */}
            <View className="flex-row items-center justify-between mb-4">
                <Text className="text-xl font-bold text-gray-800">Top Companies</Text>
                <TouchableOpacity>
                    <Text className="text-black font-semibold">See All</Text>
                </TouchableOpacity>
            </View>

            {/* Horizontal Scrollable List */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {companies.map((company) => {
                    return (
                        <View
                            key={company.id}
                            className="items-center mr-4 bg-white rounded-lg shadow-sm p-3"
                            style={{ width: 80 }}
                        >
                            <Image
                                source={{ uri: company.logo }}
                                className="w-16 h-16 rounded-full"
                                resizeMode="cover"
                            />
                            <Text className="text-sm font-semibold text-gray-800 mt-2 text-center">
                                {company.name}
                            </Text>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
}