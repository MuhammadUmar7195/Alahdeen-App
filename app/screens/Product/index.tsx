import { View, ScrollView } from 'react-native'
import React from 'react'
import Header from '@/app/components/Header'
import Product from './Product'

const name = ""

export default function index() {
    return (
        <View className="flex-1 bg-white">
            <Header name={name} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                className="flex-1"
            >
                <Product />
            </ScrollView>
        </View>
    )
}