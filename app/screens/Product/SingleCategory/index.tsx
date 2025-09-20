import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '@/app/components/Header'
import SubCategory from './SubCategory'

const name = "Apparel & Garments"

export default function index() {
  return (
    <View className="flex-1 bg-white">
      <Header name={name} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1"
      >
        <SubCategory/>
      </ScrollView>
    </View>
  )
}