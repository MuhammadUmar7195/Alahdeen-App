import Header from '@/app/components/Header'
import { ScrollView, View } from 'react-native'
import ProductCategory from './ProductCategory'

const name = "Product Categories"

export default function index() {
    return (
        <View className="flex-1 bg-white">
            <Header name={name} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                className="flex-1"
            >
                <ProductCategory />
            </ScrollView>
        </View>
    )
}