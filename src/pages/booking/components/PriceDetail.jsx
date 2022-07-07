import * as React from 'react';
import * as ThemeStyle from './css/style'
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import { Divider, Grid, Typography } from '@mui/material';

const testPrice = {
    total: 624,
    details: [
        {
            name: "Hawaiian Airlines (Adult)",
            amount: 1,
            price: "503"
        },
        {
            name: "Taxes and Fees",
            amount: "",
            price: "121"
        },
    ]

}

export default function PriceDetail(props) {
    const priceDetail = testPrice;
    /*
    const priceDetail = [...props.priceDetail];
    */
    
    const typoStyle = {
        pb: 1,
        fontSize: '20px'
    }

    return (
            <Box
                component="form"
                sx={{
                '& .MuiTextField-root': { m: 1, width: '35ch' },
                border: 1,
                flexWrap: 'wrap',
                display: 'inline-flex',
                alignContent: 'center',
                pb: 1,
                mb: 5,
                justifyContent: 'center',
                width: 700,
                ...ThemeStyle.box
                }}
                noValidate
                autoComplete="off"
            >   
                <Container>
                    <div>
                        <Box
                            sx={{          
                                py:2,   
                                px: 0,               
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                lineHeight: 0
                            }}
                        >
                            <h3>Price you pay</h3>
                            <h3>Total ${priceDetail.total}</h3>
                        </Box>
                    </div>
                    <Divider/>
                    <div>
                        <Box sx={{width: '100%', mt: 2}}>
                            <Grid container columnSpacing={20}>
                            {
                                priceDetail.details.map((e) => 
                                    <>            
                                    <Grid item xs={12} sx={{mb: 2}}>
                                        <Box
                                            sx={{
                                                display:'flex',
                                                alignItems: 'flex-start',
                                                flexDirection:'row',
                                                justifyContent: 'space-between',
                                                lineHeight: 0,
                                                pr: 0,
                                            }}>
                                            <item>
                                                <Typography sx={{...typoStyle}}>{e.name + (e.amount > 0 ? "x" +e.amount : "")}</Typography>
                                            </item>
                                                <Typography sx={{...typoStyle}}>${e.price}</Typography>
                                        </Box>
                                    </Grid>
                                    </>
                                )
                            }
                            </Grid>
                        </Box>
                    </div>
                </Container>
            </Box>
    );
}
