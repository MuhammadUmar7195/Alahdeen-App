import { View, ScrollView } from 'react-native'
import React from 'react'
import Header from './Header'
import Banner from './Banner'
import CategorySection from './CategorySection'
import PromotionalBanner from './PromotionalBanner'
import TrendingSection from './TrendingSection'
import TopCompanies from './TopCompanies'

export default function index() {
  return (
    <View className="flex-1 bg-white">
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1"
      >
        <Banner />
        <CategorySection />
        <PromotionalBanner />
        <TrendingSection />
        <TopCompanies />
      </ScrollView>
    </View>
  )
}