import {Container, Typography} from "@mui/material";

import {TopBar} from "../Components/TopBar";
import {Table} from "../Components/Table"

export const HomePage = () => {
    return (
        <>
            <TopBar/>
            <Container maxWidth="xl">
                <Typography variant="h3">Home Page</Typography>
                <Table/>
            </Container>
        </>
    )
}