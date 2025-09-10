import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Timer = () => {
  return (
    <SafeAreaView className="flex-1 bg-dark-100">
      <View>
        <Text>Timer</Text>
      </View>
    </SafeAreaView>
  )
}

export default Timer