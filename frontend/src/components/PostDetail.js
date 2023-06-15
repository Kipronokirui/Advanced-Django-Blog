import React, { useState, useEffect } from 'react'
import axiosInstance from './Axios'
import { useParams } from 'react-router-dom'
import { CssBaseline, Typography, Container } from '@mui/material';

const useStyles = () => ({
})

const PostDetail = () => {
    const { slug } = useParams();
	const classes = useStyles();

	const [data, setData] = useState({ posts: [] });

	useEffect(() => {
		axiosInstance.get(slug).then((res) => {
			setData({ posts: res.data });
			console.log(res.data);
		});
	}, [setData]);
  return (
    <Container component="main" maxWidth="md">
			<CssBaseline />
			<div className={classes.paper}></div>
			<div className={classes.heroContent}>
				<Container maxWidth="sm">
					<Typography
						component="h1"
						variant="h2"
						align="center"
						color="textPrimary"
						gutterBottom
					>
						{data.posts.title}
					</Typography>
					<Typography
						variant="h5"
						align="center"
						color="textSecondary"
						paragraph
					>
						{data.posts.excerpt}
					</Typography>
				</Container>
			</div>
		</Container>
  )
}

export default PostDetail