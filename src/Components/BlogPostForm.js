import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, Button } from 'react-native'

const BlogPostForm = ({ onSubmit, initialValue }) => {
    const [title, setTitle] = useState(initialValue.title)
    const [content, setcontent] = useState(initialValue.content)
    return (
        <View>
            <Text style={styles.label}>Enter Title</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
            <Text style={styles.label}> Enter Content</Text>
            <TextInput style={styles.input} value={content} onChangeText={(text) => setcontent(text)} />

            <Button
                title='Save Blog'
                onPress={() => {
                    onSubmit(title, content)
                }} />
        </View>
    )
}
BlogPostForm.defaultProps = {
    initialValue: {
        title: '',
        content: ''
    }
}
const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#000",
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
})

export default BlogPostForm