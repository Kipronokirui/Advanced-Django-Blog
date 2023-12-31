import React, { useEffect, useState } from 'react'
import Posts from './components/admin/Posts'
import PostLoadingComponent from './components/PostsLoading'
import axiosInstance from './components/Axios'

const Admin = () => {
    const PostLoading = PostLoadingComponent(Posts);
	const [appState, setAppState] = useState({
		loading: true,
		posts: null,
	});

	useEffect(() => {
		axiosInstance.get().then((res) => {
			const allPosts = res.data;
			setAppState({ loading: false, posts: allPosts });
			console.log(res.data);
		});
	}, [setAppState]);
  return (
        <div className="App">
			<h1>Latest Posts</h1>
			<PostLoading isLoading={appState.loading} posts={appState.posts} />
		</div>
  )
}

export default Admin