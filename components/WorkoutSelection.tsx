import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

const WorkoutSelection = () => {
  return (
    <FlatList 
        data={["one","two","three"]}
        keyExtractor={(item) => item}
        contentContainerClassName="gap-y-4 px-5"
        renderItem={({ item }) => (
            <TouchableOpacity
                key={item}
                className="h-24 w-full bg-primary-100 justify-center items-center rounded-md"
            >
                <Text className="color-white-default">{item}</Text>
            </TouchableOpacity>
        )}
    />
  )
}

export default WorkoutSelection