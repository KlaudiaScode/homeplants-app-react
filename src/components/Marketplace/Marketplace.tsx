import React from 'react';
import Nav from '../Nav';
import Footer from '../Footer';
import Advertisement from '../Advertisement';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from './components/TabPanel';
import { Box, Button, TextField, Typography } from '@mui/material';
import CategoriesBtn from './components/CategoriesBtn';
import Price from './components/Price';

interface MarketplaceProps{
    open: ()=>void
}

export default function Marketplace(){
const [value, setValue] = React.useState(0);
const [categoryButtonLabel, setCategoryButtonLabel] = React.useState('Category');

const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);}


    return (
        <div className="App">
            <Nav/>
            <Advertisement />
            <div className='shop'>
                <div className='search_ad'>
                    <input type='text' placeholder='Search...'></input>
                <div className='dropdown'>
                    <Button>{categoryButtonLabel} 🡫</Button>
                    <ul className="dropdown-content">
                        <li onClick={()=>setCategoryButtonLabel('Potted plants')}>Potted plants</li>
                        <li onClick={()=>setCategoryButtonLabel('Fertilizers')}>Fertilizers</li>
                        <li onClick={()=>setCategoryButtonLabel('Pots and covers')}>Pots and covers</li>
                        <li onClick={()=>setCategoryButtonLabel('Plant accessories')}>Plant accessories</li>
                        <li onClick={()=>setCategoryButtonLabel('Substrates and additives')}>Substrates and additives</li>
                    </ul>
                </div>
                <Button>Search</Button>
                </div>
                <div className='announcements'>
                    <Box className="tab" style={{width:'100%'}}>
                        <Tabs value={value} onChange={handleChange} aria-label="bookmarks option">
                        <Tab label="New announcements" sx={{width:'300px'}} />
                        <Tab label="Add announcement" sx={{width:'300px'}} />
                        </Tabs>
                        <TabPanel value={value} index={0}>
                            <div >
                                <Typography component="h3">Juka XXL Juka Gwatemalska</Typography>
                                <Typography>Cena: 25zł</Typography>
                                <Typography>Wiek rośliny: 1rok</Typography>
                                <Typography>
                                    Opis: Piękna, okazała juka: posiadająca trzy rozgałęzienia,
                                    niezwykle gęsta i rozłożysta. Wysokość ok 230 cm. 
                                    Doniczka wchodzi w skład oferty.
                                </Typography>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Box sx={{ m: 1, display: 'flex', flexWrap: 'wrap' }}>
                                <TextField
                                required
                                id="outlined-title"
                                label="Ad Title:"
                                defaultValue="Sell"
                                />
                                <CategoriesBtn />
                                <Price />
                               <TextField sx={{width: 500}}
                               id="outlined-multiline-static"
                               label="Description"
                               multiline
                               rows={4}
                             />
                                <Typography>Dodaj zdjęcie:</Typography>
                                    <input type='file' title='add file'></input>
                            </Box>
                        </TabPanel>
                    </Box>
                </div>
            </div>
            <Footer />
        </div>
    )
}
//utworzyć uniwersalne okno z zakładkami: Najnowsze ogłoszenia; Dodaj ogłoszenie