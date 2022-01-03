import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import BlogPostForm from "../Components/BlogPostForm";
import { Context } from "../context/BlogContext";
const EditScreen = ({ navigation }) => {
    const { state, editBlogPost } = useContext(Context)

    const editBlog = state.find((blogPost) => { return blogPost.id === navigation.getParam('id') })

    return (
        <BlogPostForm
            initialValue={{ title: editBlog.title, content: editBlog.content }}
            onSubmit={(title, content) => {
                editBlogPost(
                    navigation.getParam('id'), title, content,
                    () => navigation.pop())
            }}
        />
    )
}

const styles = StyleSheet.create({})
export default EditScreen