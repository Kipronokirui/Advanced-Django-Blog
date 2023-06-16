import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Box, Container } from '@mui/material';
import axiosInstance from '../Axios';

const Delete = () => {
  const history = useNavigate();
	const { id } = useParams();

	const handleSubmit = (e) => {
		e.preventDefault();
		axiosInstance
			.delete('admin/delete/' + id)
			.catch(function (error) {
				if (error.response) {
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
				}
			})
			.then(function () {
					history({
						pathname: '/admin/',
					});
					window.location.reload();
			});
	};
  return (
    <Container component="main" maxWidth="sm">
			<Box
				display="flex"
				justifyContent="center"
				m={1}
				p={1}
				bgcolor="background.paper"
			>
				<Button
					variant="contained"
					color="secondary"
					type="submit"
					onClick={handleSubmit}
				>
					Press here to confirm delete
				</Button>
			</Box>
		</Container>
  )
}

export default Delete