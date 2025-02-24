import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, Image, TextInputProps, StyleProp, ViewStyle } from "react-native"
import { icons } from "../constants"

interface FormFieldProps extends TextInputProps {
  title?: string
  value?: string
  placeholder?: string
  handleChangeText?: (text: string) => void
  otherStyles?: string | StyleProp<ViewStyle> 
}

const SearchInput: React.FC<FormFieldProps> = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
     
      <View className="w-full h-16 space-x-4 mt-2 px-4 bg-black-100 rounded-2xl border-2 focus:border-secondary flex flex-row items-center">
        <TextInput
          className="text-base mt-0.5 text-white flex-1 font-pop-r"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

         <TouchableOpacity>
            <Image 
                source={icons.search}
                className="w-5 h-5"
                resizeMode="contain"
            />
         </TouchableOpacity>


      </View>
  )
} 

export default SearchInput
