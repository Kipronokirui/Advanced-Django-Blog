import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography, Grid, Container, Link} from '@mui/material';

const useStyles = () => ({

})
const Posts = (props) => {
  const classes = useStyles();
  const { posts } = props;
  if (!posts || posts.length === 0) return <p>Can not find any posts, sorry</p>;
  return (
    <React.Fragment>
			<Container maxWidth="md" component="main">
				<Grid container spacing={5} alignItems="flex-end">
					{posts.map((post) => {
						return (
							// Enterprise card is full width at sm breakpoint
							<Grid item key={post.id} xs={12} md={4}>
								<Link
										color="textPrimary"
										href={'post/' + post.slug}
										className={classes.link}
									>
									<Card sx={{ maxWidth: 345 }}>
										<CardMedia
											component="img"
											alt="green iguana"
											height="140"
											image="https://source.unsplash.com/random"
										/>
										<CardContent>
											<Typography gutterBottom variant="h5" component="div">
												{post.title.substr(0, 50)}...
											</Typography>
											<Typography variant="body2" color="text.secondary">
												{post.excerpt.substr(0, 60)}...
											</Typography>
										</CardContent>
									</Card>
								</Link>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</React.Fragment>
  )
}

export default Posts