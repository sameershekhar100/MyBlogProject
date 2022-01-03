import React, { useContext } from "react";
import { StyleSheet } from 'react-native'
import BlogPostForm from "../Components/BlogPostForm";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
    const { addBlogPost } = useContext(Context)

    return (
        // <View>
        //     <Text style={styles.label}>Enter Title</Text>
        //     <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
        //     <Text style={styles.label}> Enter Content</Text>
        //     <TextInput style={styles.input} value={content} onChangeText={(text) => setcontent(text)} />

        //     <Button
        //         onPress={() => {
        //             addBlogPost(title, content, () => {
        //                 navigation.navigate('Index')
        //             })
        //         }
        //         }
        //         title='Create' />
        // </View>
        <BlogPostForm onSubmit={(title, content) => {

            addBlogPost(title, content, () => navigation.pop())
        }}
        // initialValue={{ title: '', content: '' }}

        />
    )
}
const styles = StyleSheet.create({})

export default CreateScreen