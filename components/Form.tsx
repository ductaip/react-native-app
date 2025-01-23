import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, Image, TextInputProps, StyleProp, ViewStyle } from "react-native"
import { icons } from "../constants"

interface FormFieldProps extends TextInputProps {
  title: string
  value: string
  placeholder: string
  handleChangeText: (text: string) => void
  otherStyles?: string | StyleProp<ViewStyle> 
}

const Form: React.FC<FormFieldProps> = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base ml-1 text-gray-100 font-pmedium">{title}</Text>

      <View className="w-full h-16 mt-2 px-4 bg-black-100 rounded-2xl border-2 focus:border-secondary flex flex-row items-center">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
} 

export default Form
